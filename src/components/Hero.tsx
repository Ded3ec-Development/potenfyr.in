import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { ArrowRight, Users } from 'lucide-react';

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />
    </div>
  );
}

function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Parallax speed={-8}>
        <div className="w-[700px] h-[700px] bg-accent-blue/[0.07] rounded-full blur-[180px] -ml-32 -mt-32" />
      </Parallax>
      <Parallax speed={-12}>
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent-cyan/[0.05] rounded-full blur-[150px] mr-[-100px]" />
      </Parallax>
      <Parallax speed={-5}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-accent-glow/[0.04] rounded-full blur-[200px]" />
      </Parallax>
    </div>
  );
}

function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.4 + 0.1,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

function NoiseOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.012] mix-blend-overlay">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="heroNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#heroNoise)" />
      </svg>
    </div>
  );
}

function Vignette() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.85) 100%)',
      }}
    />
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black"
    >
      <Parallax speed={-20} className="absolute inset-0">
        <GridBackground />
        <GradientOrbs />
        <Particles />
        <NoiseOverlay />
        <Vignette />
      </Parallax>

      <motion.div
        style={{ y: textY, opacity: textOpacity, scale }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] text-white leading-[0.95]"
          >
            Building
            <br />
            <span className="bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
              Powerful Digital
            </span>
            <br />
            <span className="bg-gradient-to-r from-white/80 to-brand-silver bg-clip-text text-transparent">
              Systems
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-base sm:text-lg md:text-xl text-brand-silver/80 max-w-2xl mx-auto leading-[1.7] font-light"
          >
            We develop modern tools, infrastructure, bots, plugins, mods, and
            scalable systems — built by developers, for developers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 bg-white text-black text-sm font-semibold rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.2)]"
            >
              <span className="relative z-10">View Projects</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-white to-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            <a
              href="#community"
              className="group inline-flex items-center gap-2.5 px-8 py-4 border border-white/[0.12] text-white/80 text-sm font-medium rounded-full hover:border-white/25 hover:bg-white/[0.04] hover:text-white transition-all duration-500 backdrop-blur-sm"
            >
              <Users size={16} className="text-accent-cyan/60 group-hover:text-accent-cyan transition-colors duration-300" />
              Join Community
            </a>
          </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/[0.15] rounded-full flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2.5 bg-white/30 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
