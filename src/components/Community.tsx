import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-scroll-parallax';
import { MessageCircle, Users, ExternalLink } from 'lucide-react';

export default function Community() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="community" className="relative py-40 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <Parallax speed={-4} className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-cyan-500/[0.03] rounded-full blur-[180px]" />
        </Parallax>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="text-center mb-16">
          <Parallax speed={4}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-cyan-400/70"
            >
              Community
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white"
            >
              Join the community
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-white/60 max-w-lg mx-auto font-light leading-[1.7]"
            >
              Connect with developers, get early access to projects, and help shape what we build next.
            </motion.p>
          </Parallax>
        </div>

        <Parallax speed={3}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl border border-white/[0.06] bg-[#111111] overflow-hidden"
          >
            <div className="absolute -inset-px bg-gradient-to-br from-cyan-500/[0.08] to-white/[0.03] -z-10" />

            <div className="p-2">
              <div className="rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/[0.05]">
                <div className="grid lg:grid-cols-2 gap-px bg-white/[0.03]">

                  {/* ==================== COMMUNITY SERVER ==================== */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3 px-6 py-4 border-b border-white/[0.08]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-white/30" />
                        <div className="w-3 h-3 rounded-full bg-white/30" />
                        <div className="w-3 h-3 rounded-full bg-white/30" />
                      </div>
                      <div className="flex items-center gap-2 ml-2">
                        <MessageCircle size={16} className="text-cyan-400" />
                        <span className="text-sm font-semibold text-white">Community Server</span>
                      </div>
                      <span className="text-[11px] text-white/40 ml-auto tracking-widest">MAIN HUB</span>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-6 text-center">
                        <div className="w-20 h-20 mx-auto rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                          <MessageCircle size={36} className="text-cyan-400" />
                        </div>
                        <h3 className="mt-4 text-2xl font-semibold text-white">Potenfyr Studios</h3>
                        <p className="text-white/50 text-sm mt-1">Discussions • Updates • Development</p>
                      </div>

                      {/* Widget Container - Improved Rounding */}
                      <div className="flex-1 relative rounded-2xl overflow-hidden border border-white/[0.08] bg-black/70 mb-6 shadow-inner">
                        <iframe
                          src="https://discord.com/widget?id=1258462644332138700&theme=dark"
                          width="100%"
                          height="520"
          
                          frameBorder="0"
                          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                          className="w-full"
                          style={{ borderRadius: '16px' }}
                        />
                      </div>

                      <a
                        href="https://discord.gg/zUaN2FPBec"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/30 text-white font-medium rounded-2xl transition-all duration-300 hover:shadow-lg"
                      >
                        <MessageCircle size={18} className="text-cyan-400" />
                        Join Community Server
                        <ExternalLink size={16} className="opacity-70 group-hover:opacity-100" />
                      </a>
                    </div>
                  </div>

                  {/* ==================== SUPPORT SERVER ==================== */}
                  <div className="flex flex-col lg:border-l border-white/[0.08]">
                    <div className="flex items-center gap-3 px-6 py-4 border-b border-white/[0.08]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-white/30" />
                        <div className="w-3 h-3 rounded-full bg-white/30" />
                        <div className="w-3 h-3 rounded-full bg-white/30" />
                      </div>
                      <div className="flex items-center gap-2 ml-2">
                        <Users size={16} className="text-cyan-400" />
                        <span className="text-sm font-semibold text-white">Support Server</span>
                      </div>
                      <span className="text-[11px] text-white/40 ml-auto tracking-widest">HELP DESK</span>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-6 text-center">
                        <div className="w-20 h-20 mx-auto rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                          <Users size={36} className="text-cyan-400" />
                        </div>
                        <h3 className="mt-4 text-2xl font-semibold text-white">Potenfyr Support</h3>
                        <p className="text-white/50 text-sm mt-1">Technical Help • Bug Reports • Tickets</p>
                      </div>

                      {/* Widget Container - Improved Rounding */}
                      <div className="flex-1 relative rounded-2xl overflow-hidden border border-white/[0.08] bg-black/70 mb-6 shadow-inner">
                        <iframe
                          src="https://discord.com/widget?id=1455889414407327840&theme=dark"
                          width="100%"
                          height="520"
                     
                          frameBorder="0"
                          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                          className="w-full"
                          style={{ borderRadius: '16px' }}
                        />
                      </div>

                      <a
                        href="https://discord.gg/PRJASTKqwD" // Change this if you have a different invite link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/30 text-white font-medium rounded-2xl transition-all duration-300 hover:shadow-lg"
                      >
                        <Users size={18} className="text-cyan-400" />
                        Join Support Server
                        <ExternalLink size={16} className="opacity-70 group-hover:opacity-100" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Parallax>

        <p className="text-center text-white/40 text-xs mt-8 tracking-wider">
          BOTH SERVERS ARE FREE TO JOIN • LIVE ACTIVITY SHOWN ABOVE
        </p>
      </div>
    </section>
  );
}