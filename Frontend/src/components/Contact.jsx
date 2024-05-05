import React, { useState } from 'react';
import Navbar from "../components/Navbar";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData)
    };

    return (
      <>
      <Navbar />
        <div className="min-h-screen bg-gray-600 flex justify-center items-center">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-8 rounded-lg shadow-md w-full sm:w-96 drop-shadow-md" >
                <h2 className="text-2xl font-semibold text-pink-700 mb-6 text-center">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 ">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} autoComplete="name" required
                               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50 bg-gray-300 text-black py-1" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email Address</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" required
                               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50 bg-gray-300 text-black py-1" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-bold text-gray-700">Message</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required
                                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50 bg-gray-300 text-black py-1"></textarea>
                    </div>
                    <div>
                        <button type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
      
        </>
    );
};

export default ContactForm;
