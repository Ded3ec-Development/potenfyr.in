import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-scroll-parallax';
import { Cpu, Layers, Zap, Shield, Workflow, Code2 } from 'lucide-react';

const capabilities = [
  { label: 'Discord Ecosystem Tooling', icon: Workflow },
  { label: 'Minecraft Plugin & Mod Development', icon: Layers },
  { label: 'Backend Infrastructure', icon: Cpu },
  { label: 'Automation Systems', icon: Zap },
  { label: 'Developer-Focused Solutions', icon: Code2 },
  { label: 'Scalable Architecture', icon: Shield },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="relative py-40 bg-brand-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
        <Parallax speed={-4} className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent-cyan/[0.03] rounded-full blur-[200px]" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-accent-blue/[0.03] rounded-full blur-[180px]" />
        </Parallax>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <Parallax speed={3}>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-accent-cyan/80"
              >
                About the studio
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white leading-[1.05]"
              >
                Technology,{' '}
                <span className="bg-gradient-to-r from-white/90 to-brand-silver/60 bg-clip-text text-transparent">
                  engineered
                </span>
                <br />
                <span className="bg-gradient-to-r from-white/70 to-brand-silver/40 bg-clip-text text-transparent">
                  right.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 text-[15px] text-brand-silver/70 leading-[1.8] max-w-lg font-light"
              >
                Potenfyr Studios is a technology-focused development studio built by
                tech enthusiasts. We design and build modern tools, infrastructure,
                and scalable systems across the Discord and Minecraft ecosystems -
                with a focus on performance, reliability, and developer experience.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10 flex items-center gap-6"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">3+</div>
                  <div className="text-[11px] text-brand-silver/50 uppercase tracking-wider mt-1">Projects</div>
                </div>
                <div className="w-px h-10 bg-white/[0.06]" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">2</div>
                  <div className="text-[11px] text-brand-silver/50 uppercase tracking-wider mt-1">Platforms</div>
                </div>
               
              </motion.div>
            </Parallax>
          </div>

          <div className="space-y-3">
            <Parallax speed={5}>
              {capabilities.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 40 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.7,
                      delay: 0.3 + i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.035] hover:border-white/[0.08] transition-all duration-500"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-accent-cyan/20 group-hover:bg-accent-cyan/[0.06] transition-all duration-500">
                      <Icon size={16} className="text-brand-silver/50 group-hover:text-accent-cyan/80 transition-colors duration-500" />
                    </div>
                    <span className="text-sm text-brand-silver/70 group-hover:text-white/90 transition-colors duration-500 font-light">
                      {item.label}
                    </span>
                  </motion.div>
                );
              })}
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  );
}
