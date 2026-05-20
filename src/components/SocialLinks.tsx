import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-scroll-parallax';
import { socialLinks } from '../data/siteData';

function SocialCard({
  link,
  index,
}: {
  link: (typeof socialLinks)[0];
  index: number;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const Icon = link.icon;

  return (
    <Parallax speed={1 + index * 0.6}>
      <motion.a
        ref={ref}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.7,
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={{ y: -8, transition: { duration: 0.35, ease: 'easeOut' } }}
        className="group relative flex flex-col items-center gap-4 p-7 rounded-2xl border border-white/[0.05] bg-white/[0.015] hover:border-white/[0.12] transition-all duration-700"
      >
        <div
          className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10"
          style={{ background: `${link.color}12` }}
        />

        <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-white/[0.15] group-hover:bg-white/[0.06] transition-all duration-500">
          <Icon
            size={20}
            className="text-brand-silver/50 group-hover:text-white transition-colors duration-500"
          />
        </div>

        <span className="text-sm font-medium text-brand-silver/60 group-hover:text-white/90 transition-colors duration-500">
          {link.name}
        </span>
      </motion.a>
    </Parallax>
  );
}

export default function SocialLinks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-40 bg-brand-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
        <Parallax speed={-3} className="absolute inset-0">
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent-cyan/[0.02] rounded-full blur-[180px]" />
        </Parallax>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div ref={ref} className="text-center mb-16">
          <Parallax speed={4}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-accent-cyan/80"
            >
              Connect
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white"
            >
              Find us online
            </motion.h2>
          </Parallax>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {socialLinks.map((link, i) => (
            <SocialCard key={link.name} link={link} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
