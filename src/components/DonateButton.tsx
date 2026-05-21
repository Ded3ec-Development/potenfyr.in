'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ArrowRight, X, Gift } from 'lucide-react';

interface DonateButtonProps {
  className?: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function DonateButton({ className = "" }: DonateButtonProps) {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(499);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [successData, setSuccessData] = useState<any>(null);

  const presetAmounts = [99, 249, 499, 999];

  const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (window.Razorpay) return resolve(true);

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleDonate = async () => {
    const amount = isCustom ? Number(customAmount) : selectedAmount;
    if (!amount || amount < 10) {
      alert("Minimum donation amount is ₹10");
      return;
    }

    setLoading(true);

    try {
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) throw new Error("Failed to load payment gateway");

      const res = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });

      const data = await res.json();

      if (!data.success) throw new Error(data.error || "Failed to create order");

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: "INR",
        name: "Potenfyr",
        description: "Thank you for supporting indie developers ❤️",
        order_id: data.orderId,
        handler: function (response: any) {
          setSuccessData(response);
          setShowModal(true);
        },
        prefill: { name: "", email: "", contact: "" },
        theme: { color: "#6366F1" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error: any) {
      alert(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setShowModal(true)}
        disabled={loading}
        className={`group relative inline-flex items-center gap-3 px-8 py-4 
          bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 
          text-white font-semibold text-sm rounded-full overflow-hidden
          shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40
          transition-all duration-500 ${className}`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
          -translate-x-full group-hover:-translate-x-0 transition-transform duration-700" />

        <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="relative z-10">Donate Now</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </motion.button>

      {/* Amount Selector Modal */}
      <AnimatePresence>
        {showModal && !successData && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-zinc-900 border border-white/10 rounded-3xl max-w-md w-full p-8 relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 text-white/50 hover:text-white"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-8">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
                  <Gift className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Support Potenfyr</h3>
                <p className="text-brand-silver mt-2">Every contribution helps us build better tools</p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {presetAmounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => {
                      setSelectedAmount(amt);
                      setIsCustom(false);
                    }}
                    className={`py-4 rounded-2xl font-semibold transition-all ${
                      selectedAmount === amt && !isCustom
                        ? 'bg-indigo-600 text-white scale-105'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-white/80'
                    }`}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>

              <div className="mb-8">
                <label className="text-sm text-white/60 block mb-2">Custom Amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">₹</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setIsCustom(true);
                    }}
                    placeholder="Enter amount"
                    className="w-full bg-zinc-800 border border-white/10 rounded-2xl py-4 pl-8 pr-4 text-lg focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <button
                onClick={handleDonate}
                disabled={loading || (isCustom && !customAmount)}
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl font-semibold text-lg disabled:opacity-50 hover:brightness-110 transition"
              >
                {loading ? "Processing..." : `Donate ₹${isCustom ? customAmount : selectedAmount}`}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Success Modal */}
      <AnimatePresence>
        {successData && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="text-center max-w-sm"
            >
              <div className="mx-auto w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                <Gift className="w-12 h-12 text-black" />
              </div>

              <h2 className="text-4xl font-bold text-white mb-2">Thank You!</h2>
              <p className="text-xl text-emerald-400 mb-8">Your support means the world to us ❤️</p>

              <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-6 mb-8">
                <p className="text-brand-silver">Payment ID</p>
                <p className="font-mono text-white break-all">{successData.razorpay_payment_id}</p>
              </div>

              <button
                onClick={() => {
                  setShowModal(false);
                  setSuccessData(null);
                  setCustomAmount("");
                }}
                className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition"
              >
                Back to Home
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}