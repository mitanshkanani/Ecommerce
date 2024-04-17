import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Policy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Privacy Notice</h2>
      <p>We know that you care how information about you is used and shared, and we appreciate your trust that we will do so carefully and sensibly. This Privacy Notice describes how ShopSmart collects and processes your personal information through our website, applications, products, and services (collectively "Our Services").</p>
      <p>By using Our Services, you agree to our use of your personal information in accordance with this Privacy Notice. We may update this Privacy Notice from time to time, and any changes will be effective upon posting. Your continued use of Our Services after the posting of any changes constitutes your acceptance of those changes.</p>
      <h3>What Personal Information About Customers Does ShopSmart Collect?</h3>
      <p>ShopSmart collects various types of personal information from users of Our Services. This may include:</p>
      <ul>
        <li>Information You Provide: We collect information that you provide to us when you use Our Services, such as when you create an account, make a purchase, or communicate with us.</li>
        <li>Automatic Information: We automatically collect certain types of information when you interact with Our Services, such as your IP address, device information, and browsing activity.</li>
        <li>Information from Third Parties: We may receive information about you from third parties, such as social media platforms or our business partners.</li>
      </ul>
      
      <h3>How Does ShopSmart Use Your Personal Information?</h3>
      <p>ShopSmart uses the personal information we collect for various purposes, including:</p>
      <ul>
        <li>Providing and improving Our Services</li>
        <li>Communicating with you</li>
        <li>Personalizing your experience</li>
        <li>Marketing and advertising</li>
        <li>Complying with legal obligations</li>
      </ul>
      
      <h3>Does ShopSmart Share Your Personal Information?</h3>
      <p>ShopSmart may share your personal information with third parties in certain circumstances, such as:</p>
      <ul>
        <li>With your consent</li>
        <li>For legal or compliance purposes</li>
        <li>With service providers and business partners</li>
      </ul>
      <Footer/>
    </motion.div>
  );
};

export default Policy;
