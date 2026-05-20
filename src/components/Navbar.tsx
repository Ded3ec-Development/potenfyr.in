import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/siteData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-black/70 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_40px_-10px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white font-semibold tracking-tight text-lg">
          <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/[0.1] flex items-center justify-center">
            <span className="text-accent-cyan text-xs font-bold">P</span>
          </div>
          Potenfyr
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-[13px] text-brand-silver/70 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/[0.04]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#community"
            className="ml-3 px-5 py-2 text-[13px] font-medium text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] rounded-lg transition-all duration-300"
          >
            Join Us
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white/70 hover:text-white p-2 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-black/90 backdrop-blur-2xl border-b border-white/[0.06] overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm text-brand-silver/70 hover:text-white hover:bg-white/[0.04] rounded-lg transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#community"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 text-sm font-medium text-white bg-white/[0.06] hover:bg-white/[0.1] rounded-lg border border-white/[0.06] transition-all duration-300 text-center"
              >
                Join Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
