import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import TopCrew from '../components/TopCrew';
import Preloader from '../components/Preloader';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isFirstVisit = localStorage.getItem('isFirstVisit');

    if (!isFirstVisit) {
      localStorage.setItem('isFirstVisit', 'true');
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 4000);

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, []);
  
  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div>
      <Hero />
      <Services />
      <TopCrew />
      <Testimonials />
      <Banner />
    </div>
  );
};

export default Home;
