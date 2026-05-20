import { ParallaxProvider } from 'react-scroll-parallax';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Community from './components/Community';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';

function App() {
  useSmoothScroll();

  return (
    <ParallaxProvider>
      <div className="bg-brand-black text-white antialiased">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Services />
          <Community />
          <SocialLinks />
        </main>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
