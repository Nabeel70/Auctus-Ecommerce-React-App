import React from 'react';
import './styles.css';
import HomeSection from '../../Sections/HomePage/HomeSection';
import SaleBanner from '../../Sections/HomePage/SaleBanner';
import ProductsSection from '../../Sections/HomePage/ProductsSection';
import FAQSection from '../../Sections/HomePage/FAQSection';
import ReviewSection from '../../Sections/HomePage/ReviewsSection';
import LabsSection from '../../Sections/HomePage/LabsSection';
import ContactsSection from '../../Sections/HomePage/ContactsSection';

const HomePage = () => {
return (
    <>
    <HomeSection />
    <SaleBanner />
      <ProductsSection />
      <FAQSection />
      <ReviewSection />
      <LabsSection />
      <ContactsSection />
    </>
)
}

export default HomePage;