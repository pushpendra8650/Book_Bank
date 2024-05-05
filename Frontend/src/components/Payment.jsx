import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SiPaytm } from "react-icons/si";
import { FaGooglePay } from "react-icons/fa6";
import { SiAmazonpay } from "react-icons/si";



function Payment() {
  return (
    <div className=''>
         <Navbar />
         
         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 pt-10">
      <div className="w-full md:w-1/2 lg:w-1/3 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg rounded-lg p-8 mt-20">
        <h2 className="text-2xl font-semibold mb-4 text-pink-700 text-center">Payment Details</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-900">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 bg-gray-300 text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="expiry" className="block text-sm font-medium text-gray-900">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiry"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 bg-gray-300 text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-900">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 bg-gray-300 text-black"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white font-semibold px-4 py-2 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 w-full"
          >
            Pay
          </button>
        </form>
      </div>
      <div className="w-full mt-10 md:w-1/2 lg:w-1/3">
        <h1 className="text-center font-bold mb-4">More Options</h1>
        <ul className="flex flex-col w-full md:flex-row items-center justify-center gap-8 mb-4 ">
          {/* <li className="cursor-pointer hover:scale-110 transition-all ease-in-out ">Phone Pay</li> */}
          <li className="cursor-pointer flex items-center hover:scale-110 transition-all ease-in-out "><SiPaytm className='text-5xl' /></li>
          <li className="cursor-pointer hover:scale-110 transition-all ease-in-out "><FaGooglePay className='text-5xl' /></li>
          <li className="cursor-pointer hover:scale-110 transition-all ease-in-out "><SiAmazonpay className='text-3xl'/> </li>
        </ul>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Payment
