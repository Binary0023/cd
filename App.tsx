import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Transfers from './components/Transfers';
import Destinations from './components/Destinations';
import OurServices from './components/OurServices';
import StressFree from './components/StressFree';
import WhyUs from './components/WhyUs';
import ValueProps from './components/ValueProps';
import LatestNews from './components/LatestNews';
import SkiHire from './components/SkiHire';
import Newsletter from './components/Newsletter';
import BookBanner from './components/BookBanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Transfers />
        <Destinations />
        <OurServices />
        <StressFree />
        <WhyUs />
        <ValueProps />
        <LatestNews />
        <SkiHire />
        <Newsletter />
        <BookBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;