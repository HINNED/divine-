// client/src/components/Footer.js
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <h3 className="text-xl font-bold mb-4">Divine Shoppers UG</h3>
            <p className="mb-4">Elegant fashion for ladies and kids in Uganda. Quality products with love and attention to detail.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-pink-400"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-pink-400"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-pink-400"><FaTwitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-400">Home</a></li>
              <li><a href="#" className="hover:text-pink-400">Ladies Collection</a></li>
              <li><a href="#" className="hover:text-pink-400">Kids Collection</a></li>
              <li><a href="#" className="hover:text-pink-400">New Arrivals</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-pink-400">FAQs</a></li>
              <li><a href="#" className="hover:text-pink-400">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-pink-400">Returns & Exchanges</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2" />
                <span>Shop 12, Garden City Mall, Kampala, Uganda</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-2" />
                <a href="tel:+256742934093" className="hover:text-pink-400">+256 742 934093</a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a href="mailto:ashirafkatamba768@gmail.com" className="hover:text-pink-400">ashirafkatamba768@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Divine Shoppers Uganda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;