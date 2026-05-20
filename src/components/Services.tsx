import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-scroll-parallax';
import { services } from '../data/siteData';

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const Icon = service.icon;

  return (
    <Parallax speed={1.5 + index * 0.8}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.8,
          delay: index * 0.08,
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={{ y: -6, transition: { duration: 0.35, ease: 'easeOut' } }}
        className="group relative p-7 rounded-2xl border border-white/[0.05] bg-white/[0.015] hover:border-white/[0.1] transition-all duration-700"
      >
        <div className="absolute -inset-1 bg-gradient-to-br from-accent-cyan/[0.04] to-accent-blue/[0.03] rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10" />

        <div className="relative">
          <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-5 group-hover:border-accent-cyan/20 group-hover:bg-accent-cyan/[0.06] transition-all duration-500">
            <Icon
              size={18}
              className="text-brand-silver/50 group-hover:text-accent-cyan/80 transition-colors duration-500"
            />
          </div>

          <h3 className="text-[15px] font-semibold text-white/90 tracking-[-0.01em]">
            {service.title}
          </h3>

          <p className="mt-2.5 text-sm text-brand-silver/50 leading-[1.7] font-light">
            {service.description}
          </p>
        </div>
      </motion.div>
    </Parallax>
  );
}

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="relative py-40 bg-brand-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
        <Parallax speed={-5} className="absolute inset-0">
          <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-accent-cyan/[0.02] rounded-full blur-[200px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-blue/[0.02] rounded-full blur-[180px]" />
        </Parallax>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="text-center mb-20">
          <Parallax speed={4}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-accent-cyan/80"
            >
              Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white"
            >
              Capabilities & vision
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-brand-silver/60 max-w-lg mx-auto font-light leading-[1.7]"
            >
              From automation to infrastructure — everything we build is designed for scale.
            </motion.p>
          </Parallax>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
