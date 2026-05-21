// api/create-order.ts
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { amount = 499 } = req.body;

    if (!amount || amount < 10) {
      return res.status(400).json({ success: false, error: 'Minimum amount is ₹10' });
    }

    const options = {
      amount: Math.round(amount * 100), // paise
      currency: "INR",
      receipt: `donate_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    return res.status(200).json({
      success: true,
      orderId: order.id,
      amount: order.amount,
    });
  } catch (error: any) {
    console.error("Razorpay Error:", error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Internal server error'
    });
  }
}