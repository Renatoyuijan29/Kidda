import React from 'react';
import KiddaNavbar from './components/KiddaNavbar';
import KiddaHeader from './components/KiddaHeader';
import KiddaBenefits from './components/KiddaBenefits';
import KiddaHowItWorks from './components/KiddaHowItWorks';
import KiddaPlans from './components/KiddaPlans';
import KiddaTestimonial from './components/KiddaTestimonial';
import KiddaTeam from './components/KiddaTeam';
import KiddaPartnerForm from './components/KiddaPartnerForm';
import KiddaFooter from './components/KiddaFooter';

const App = () => {
  return (
    <div className="font-sans text-blue-900">
      <KiddaNavbar />
      <KiddaHeader />
      <KiddaBenefits />
      <KiddaHowItWorks />
      <KiddaPlans />
      <KiddaTestimonial />
      <KiddaTeam />
      <KiddaPartnerForm />
      <KiddaFooter />
    </div>
  );
};

export default App;

// DONE