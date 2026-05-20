import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-scroll-parallax';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/siteData';

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <Parallax speed={2 + index * 1.5}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 1,
          delay: index * 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={{ y: -12, transition: { duration: 0.4, ease: 'easeOut' } }}
        className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 sm:p-8 hover:border-white/[0.12] transition-all duration-700 overflow-hidden"
      >
        {/* Animated border glow on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-cyan/10 via-transparent to-accent-blue/10" />
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-accent-cyan/20 via-transparent to-accent-blue/20" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor', WebkitMaskComposite: 'xor', padding: '1px' }} />
        </div>

        {/* Background glow */}
        <div className="absolute -inset-2 bg-gradient-to-br from-accent-cyan/[0.06] to-accent-blue/[0.04] rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 -z-10" />

        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <span className="inline-block px-3 py-1.5 text-[10px] font-semibold tracking-[0.15em] uppercase text-accent-cyan/80 bg-accent-cyan/[0.06] rounded-md border border-accent-cyan/10">
              {project.category}
            </span>
          </div>

          <h3 className="mt-5 text-xl font-semibold text-white tracking-[-0.01em] group-hover:text-white transition-colors">
            {project.name}
          </h3>

          <p className="mt-3 text-sm text-brand-silver/60 leading-[1.7] font-light">
            {project.description}
          </p>

          <div className="mt-7 flex items-center gap-3">
            {project.link && (
              <a
                href={project.link}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-white/80 bg-white/[0.05] hover:bg-white/[0.1] rounded-lg border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500"
              >
                <ExternalLink size={12} />
                View Project
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-brand-silver/60 hover:text-white/80 bg-white/[0.03] hover:bg-white/[0.07] rounded-lg border border-white/[0.04] hover:border-white/[0.1] transition-all duration-500"
              >
                <Github size={12} />
                Source
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </Parallax>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="relative py-40 bg-brand-charcoal overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
        <Parallax speed={-6} className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-cyan/[0.02] rounded-full blur-[200px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-blue/[0.02] rounded-full blur-[180px]" />
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
              Projects
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white"
            >
              What we&apos;re building
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-brand-silver/60 max-w-lg mx-auto font-light leading-[1.7]"
            >
              Each project is built with performance, reliability, and developer experience at its core.
            </motion.p>
          </Parallax>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
