
import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import CalculatorSection from './components/CalculatorSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import { SECTION_IDS } from './constants';

const App: React.FC = () => {
  const sectionRefs = {
    [SECTION_IDS.HOME]: useRef<HTMLDivElement>(null),
    [SECTION_IDS.CALCULATOR]: useRef<HTMLDivElement>(null),
    [SECTION_IDS.ABOUT]: useRef<HTMLDivElement>(null),
    [SECTION_IDS.CONTACT]: useRef<HTMLDivElement>(null),
  };

  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 


  useEffect(() => {
    const container = document.getElementById('sparkle-container');
    if (!container) return;

    const createSparkle = () => {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      
      const size = Math.random() * 2.5 + 0.5; // 0.5px to 3px wide
      sparkle.style.width = `${size}px`;
      sparkle.style.height = sparkle.style.width;
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.animationDuration = `${Math.random() * 4 + 6}s`; // 6s to 10s duration
      sparkle.style.animationDelay = `${Math.random() * 5}s`; // Stagger start times
      
      const colors = ['#FFFFFF', '#E9D5FF', '#FBCFE8', '#BFDBFE', '#A5B4FC']; // White, Purple-100, Pink-100, Blue-100, Indigo-100 (light shades)
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      sparkle.style.backgroundColor = randomColor;
      sparkle.style.boxShadow = `0 0 ${Math.random()*4+1}px ${randomColor}`;


      container.appendChild(sparkle);

      sparkle.addEventListener('animationend', () => {
        sparkle.remove();
      });
    };

    const numInitialSparkles = 25; 
    for (let i = 0; i < numInitialSparkles; i++) {
      setTimeout(createSparkle, Math.random() * 2000); // Stagger initial creation
    }
    
    const intervalId = setInterval(createSparkle, 600); // Add a new sparkle every 600ms

    return () => {
        clearInterval(intervalId);
        if(container) container.innerHTML = ''; // Clear remaining sparkles on unmount
    };
  }, []);


  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative z-10"> {/* Ensure content is above sparkles */}
      <Navbar onNavigate={scrollToSection} />
      <main className="flex-grow">
        <div ref={sectionRefs[SECTION_IDS.HOME]} id={SECTION_IDS.HOME} className={`fade-in-section ${visibleSections[SECTION_IDS.HOME] ? 'fade-in-section-visible' : ''}`}>
          <HomeSection onNavigateToCalculator={() => scrollToSection(SECTION_IDS.CALCULATOR)} />
        </div>
        <div ref={sectionRefs[SECTION_IDS.CALCULATOR]} id={SECTION_IDS.CALCULATOR} className={`fade-in-section ${visibleSections[SECTION_IDS.CALCULATOR] ? 'fade-in-section-visible' : ''}`}>
          <CalculatorSection />
        </div>
        <div ref={sectionRefs[SECTION_IDS.ABOUT]} id={SECTION_IDS.ABOUT} className={`fade-in-section ${visibleSections[SECTION_IDS.ABOUT] ? 'fade-in-section-visible' : ''}`}>
          <AboutSection />
        </div>
        <div ref={sectionRefs[SECTION_IDS.CONTACT]} id={SECTION_IDS.CONTACT} className={`fade-in-section ${visibleSections[SECTION_IDS.CONTACT] ? 'fade-in-section-visible' : ''}`}>
          <ContactSection />
        </div>
      </main>
      <Footer onNavigate={scrollToSection} />
    </div>
  );
};

export default App;