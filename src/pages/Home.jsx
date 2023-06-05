import React from 'react';
import { MainSection } from '../components/Home/MainSection';
import CategoriesSection from '../components/Home/CategoriesSection';
import { ProteinSuppliments } from '../components/Home/ProteinSuppliments';
import { HealthcareProducts } from '../components/Home/HealthcareProducts';
import { Testimonials } from '../components/Home/Testimonials';
import { Offers2 } from '../components/Home/Offers2';
import { TopCategories } from '../components/Home/TopCategories';
import { Helmet } from 'react-helmet-async';

export const Home = () => {
  return (
    <div className="">
      <MainSection />
      <CategoriesSection />
      <ProteinSuppliments />
      <Offers2 />
      <TopCategories />
      <HealthcareProducts />
      <Testimonials />
    </div>
  );
};
