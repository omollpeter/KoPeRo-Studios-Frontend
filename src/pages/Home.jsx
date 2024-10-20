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
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
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
