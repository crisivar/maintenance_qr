import React from 'react';
import MainLayout from '../components/MainLayout';

const HomeView = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-4">Welcome to My App</h1>
      <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
    </MainLayout>
  );
};

export default HomeView;
