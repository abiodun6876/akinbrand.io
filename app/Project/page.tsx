'use client'
import React from 'react';
import { useState } from 'react';
import { FaGraduationCap, FaGlobe, FaDesktop, FaMobile, FaLock } from 'react-icons/fa';
import Image from 'next/image';
import '../globals.css'



const Project: React.FC = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
   <>
<div className="bg-white">
      {/* Header section start here */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">AKINBRAND</span>
              <Image
  src="https://akinbrand.com.ng/logo.jpg"
  alt=""
  width={100} 
  height={50} 
/>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            {/* Mobile Menu */}
            <div className="fixed inset-0 z-50"></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">AKINBRAND</span>
              <Image
               className="h-8 w-auto"
               src="https://akinbrand.com.ng/logo.jpg"
                    alt=""
                width={100} 
                height={50} 
                  />

                </a>
                <button
                  type="button"
                  onClick={toggleMobileMenu}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                  <a href="/Home" className="text-sm font-semibold leading-6 text-gray-900">
              Home
            </a>
            <a href="/Services" className="text-sm font-semibold leading-6 text-gray-900">
              Services
            </a>
            <a href="/Project" className="text-sm font-semibold leading-6 text-gray-900">
              Project
            </a>
            <a href="/About" className="text-sm font-semibold leading-6 text-gray-900">
              About
            </a>
            <a href="/Pricing" className="text-sm font-semibold leading-6 text-gray-900">
              Pricing
            </a>
            <a href="/Contact" className="text-sm font-semibold leading-6 text-gray-900">
              Contact
            </a>
                    {/* Add more menu items as needed */}
                  </div>
                  <div className="py-6">
                    <a href="/Contact"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Request a demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="/Home" className="text-sm font-semibold leading-6 text-gray-900">
              Home
            </a>
            <a href="/Services" className="text-sm font-semibold leading-6 text-gray-900">
              Services
            </a>
            <a href="/Project" className="text-sm font-semibold leading-6 text-gray-900">
              Project
            </a>
            <a href="/About" className="text-sm font-semibold leading-6 text-gray-900">
              About
            </a>
            <a href="/Pricing" className="text-sm font-semibold leading-6 text-gray-900">
            Pricing
            </a>
            <a href="/Contact" className="text-sm font-semibold leading-6 text-gray-900">
              Contact
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/Contact" className="text-sm font-semibold leading-6 text-gray-900">
              Request a demo <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>
   


<br></br>
{/*Service section start here*/}

<div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:text-center">
      <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services</h2>
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to design and deploy your ideals into degital reality</p>
      <p className="mt-6 text-lg leading-8 text-gray-600">We offer professional services as following:</p>
    </div>
    <br></br>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div className="relative pl-16 flex">
    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
      <FaGraduationCap className="h-6 w-6 text-white" />
    </div>
    <div>
      <dt className="text-base font-semibold leading-7 text-gray-900">
        Website Design
      </dt>
      <dd className="mt-2 text-base leading-7 text-gray-600">
        Get impressive website designs<br /> with our comprehensive services.
      </dd>
    </div>
  </div>
  <div className="relative pl-16 flex">
    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
      <FaGlobe className="h-6 w-6 text-white" />
    </div>
    <div>
      <dt className="text-base font-semibold leading-7 text-gray-900">
        Web hosting
      </dt>
      <dd className="mt-2 text-base leading-7 text-gray-600">
        Get sheared or cloud hosting packages<br /> with offers for you.
      </dd>
    </div>
  </div>
</div>
<br></br>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div className="relative pl-16 flex">
    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
      <FaDesktop className="h-6 w-6 text-white" />
    </div>
    <div>
      <dt className="text-base font-semibold leading-7 text-gray-900">
        Desktop Application
      </dt>
      <dd className="mt-2 text-base leading-7 text-gray-600">
        Create powerful desktop software<br /> applications with our talented teams.
      </dd>
    </div>
  </div>
  <div className="relative pl-16 flex">
    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
      <FaMobile className="h-6 w-6 text-white" />
    </div>
    <div>
      <dt className="text-base font-semibold leading-7 text-gray-900">
        Mobile Application
      </dt>
      <dd className="mt-2 text-base leading-7 text-gray-600">
        Tell us your mobile application,<br /> then watch us turning them into reality
      </dd>
    </div>
  </div>
</div>
<br></br>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div className="relative pl-16 flex">
    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
      <FaGlobe className="h-6 w-6 text-white" />
    </div>
    <div>
      <dt className="text-base font-semibold leading-7 text-gray-900">
        Domain name registration
      </dt>
      <dd className="mt-2  text-base leading-7 text-gray-600">
        We help in selection of simple and <br /> domain name that express the vision  <br />and mission of your business.
      </dd>
    </div>
  </div>
  <div className="relative pl-16 flex">
    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
      <FaLock className="h-6 w-6 text-white" />
    </div>
    <div>
      <dt className="text-base font-semibold leading-7 text-gray-900">
        SSL certificates
      </dt>
      <dd className="mt-2 text-base leading-7 text-gray-600">
        Akinbrand digital solution ensures <br /> highly professional security system to prevent<br /> your applications from cybercriminals.
      </dd>
    </div>
  </div>
</div>
</div> </div>
{/*Service section stop here*/}

{/*Pricing  section */}
<div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl sm:text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple no-tricks pricing</h2>
      <p className="mt-6 text-lg leading-8 text-gray-600">Explore and Choose the plan that best suits your needs.</p>
    </div>
    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">UI/UX Design</h3>
        <p className="mt-6 text-base leading-7 text-gray-600">Higly futuristic and professional designs</p>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What is included</h4>
          <div className="h-px flex-auto bg-gray-100"></div>
        </div>
        <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            100% Quality
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            Figma Software application
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            Delivery between 2 weeks
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" 
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 
              011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            Full Payment discount -10%
          </li>
        </ul>
      </div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">#250,000</span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">NGN</span>
            </p>
            <a href="#" className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold
             text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
             focus-visible:outline-indigo-600">Book Now</a>
            <p className="mt-6 text-xs leading-5 text-gray-600">Invoices and receipts available for easy company reimbursement</p>
          </div>
        </div>
      </div>
    </div>
  </div>



  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Website Development</h3>
        <p className="mt-6 text-base leading-7 text-gray-600">mordern and professional designs</p>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What is included</h4>
          <div className="h-px flex-auto bg-gray-100"></div>
        </div>
        <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            100% Quality
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            implementation of best web technologies and professional practices. Both frontend and Backend applications.
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            Delivery between 2 weeks
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" 
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 
              011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            Full Payment discount -10%
          </li>
        </ul>
      </div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">#150,000</span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">NGN</span>
            </p>
            <a href="#" className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white
             shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
             focus-visible:outline-indigo-600">Book Now</a>
            <p className="mt-6 text-xs leading-5 text-gray-600">Invoices and receipts available for easy company reimbursement</p>
          </div>
        </div>
      </div>
    </div>
  </div>



  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Mobile App Development</h3>
        <p className="mt-6 text-base leading-7 text-gray-600">mordern and professional designs</p>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What is included</h4>
          <div className="h-px flex-auto bg-gray-100"></div>
        </div>
        <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            100% Quality
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            implementation of best web technologies and professional practices. Both frontend and Backend applications.
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            Delivery between 2 weeks
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" 
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 
              011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            Full Payment discount -10%
          </li>
        </ul>
      </div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 
        lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">#800,000+</span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">NGN</span>
            </p>
            <a href="#" className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold 
            text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
            focus-visible:outline-indigo-600">Book Now</a>
            <p className="mt-6 text-xs leading-5 text-gray-600">Invoices and receipts available for easy company reimbursement</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Domain name regestration & Web hosting</h3>
        <p className="mt-6 text-base leading-7 text-gray-600">Secure your website with our reliable web hosting services.
         
         
        </p>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What is included</h4>
          <div className="h-px flex-auto bg-gray-100"></div>
        </div>
        <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            Enjoy 100% security with SSL certificates, fast web emails, and efficient database management systems. 
         Our user-friendly interfaces make managing your website a breeze. We offer hosting packages starting from 10GB 
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            Best service provider 
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            Delivery between 2 days
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" 
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 
              011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            support various domain extensions like .com, .com.ng, .uk, .ng, and more.
          </li>
        </ul>
      </div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 
        lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            <p className="text-base font-semibold text-gray-600">With yearly renewals </p>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">#25,000+</span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">NGN</span>
            </p>
            <a href="#" className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold 
            text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
            focus-visible:outline-indigo-600">Book Now</a>
            <p className="mt-6 text-xs leading-5 text-gray-600">Invoices and receipts available for easy company reimbursement</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  
</div>
{/*Project section start here */}

<div className="bg-white">
<div className="mx-auto max-w-2xl sm:text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Client Projects</h2>
      <p className="mt-6 text-lg leading-8 text-gray-600">Explore some of our succesfull concludeded jobs</p>
    </div>

  <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
      <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">My services<br/>Website desgin and development</h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <a href="https://www.myservice.com.ng/" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Explore</a>
          <a href="https://www.myservice.com.ng/" className="text-sm font-semibold leading-6 text-white">Visit site <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div className="relative mt-16 h-80 lg:mt-8">
      <div className="overflow-x-auto">
  <iframe
    src="https://www.myservice.com.ng/"
    className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
    title="Service Website"
    width="1824"
    height="1080"
    
    allowFullScreen
  ></iframe>
</div>
</div>
    </div>
  </div>
  </div>




  <div className="bg-white">
  <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
      <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">My services<br/>Website desgin and development</h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">Connecting professionals with clients in various fields of expertise<br/>
professional services, consulting, experts, freelancers, business services</p>
        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <a href="https://nigeram.com/" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Explore</a>
          <a href="https://nigeram.com/" className="text-sm font-semibold leading-6 text-white">Visit site <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div className="relative mt-16 h-80 lg:mt-8">
      <div className="overflow-x-auto">
  <iframe
    src="https://nigeram.com/"
    className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
    title="Service Website"
    width="1824"
    height="1080"
    
    allowFullScreen
  ></iframe>
</div>
</div>
    </div>
  </div>
  </div>






  <div className="bg-white">


  <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
      <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Online fashion<br/>Website desgin and development</h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">Wen,Men and children fashions</p>
        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <a href="https://nijafashion.netlify.app/" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Explore</a>
          <a href="https://nijafashion.netlify.app/" className="text-sm font-semibold leading-6 text-white">Visit site <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div className="relative mt-16 h-80 lg:mt-8">
      <div className="overflow-x-auto">
  <iframe
    src="https://nijafashion.netlify.app/"
    className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
    title="Service Website"
    width="1824"
    height="1080"
    
    allowFullScreen
  ></iframe>
</div>
</div>
    </div>
  </div>
  </div>



  <div className="bg-white">
  <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
      <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Unique Achievers Business <br/>Website desgin and development</h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">Unique Achievers Business is one of Africa leading travel agency. Based in Ibadan, Nigeria.
<br/>
It was founded in 2018 by a very hardworking young man Mr Ajayi <br/> Abayomi with ambitions to the growth of aviation industries.
<br/>
Today, Unique Achievers Business has worked so hard to attract the attentions of the mega<br/> agencies you know about resulting to partnership with these agencies.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <a href="https://uniqueachieversbusiness.com.ng/" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Explore</a>
          <a href="https://uniqueachieversbusiness.com.ng/" className="text-sm font-semibold leading-6 text-white">Visit site <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div className="relative mt-16 h-80 lg:mt-8">
      <div className="overflow-x-auto">
  <iframe
    src="https://uniqueachieversbusiness.com.ng/"
    className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
    title="Service Website"
    width="1824"
    height="1080"
    
    allowFullScreen
  ></iframe>
</div>
</div>
    </div>
  </div>
  </div>


  <div className="bg-white">
  <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
      <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">NIGERAM Ventures & Investments Ltd</h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">Nigeram
is a dynamic business conglomerate that draws its essence from the fusion of Nigeria and America – two diverse and influential cultures. Our aim and objectives are to establish a professional tech business 
that enhances and boosts the business economies of these countries. </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <a href="https://nigeram.com/" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Explore</a>
          <a href="https://nigeram.com/" className="text-sm font-semibold leading-6 text-white">Visit site <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div className="relative mt-16 h-80 lg:mt-8">
      <div className="overflow-x-auto">
  <iframe
    src="https://nigeram.com/"
    className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
    title="Service Website"
    width="1824"
    height="1080"
    
    allowFullScreen
  ></iframe>
</div>
</div>
    </div>
  </div>
  </div>



  <div className="bg-white">
  <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
      <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Unique Achievers Business <br/>Website desgin and development</h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">Unique Achievers Business is one of Africa leading travel agency. Based in Ibadan, Nigeria.
<br/>
It was founded in 2018 by a very hardworking young man Mr Ajayi <br/> Abayomi with ambitions to the growth of aviation industries.
<br/>
Today, Unique Achievers Business has worked so hard to attract the attentions of the mega<br/> agencies you know about resulting to partnership with these agencies.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <a href="https://uniqueachieversbusiness.com.ng/" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Explore</a>
          <a href="https://uniqueachieversbusiness.com.ng/" className="text-sm font-semibold leading-6 text-white">Visit site <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div className="relative mt-16 h-80 lg:mt-8">
      <div className="overflow-x-auto">
  <iframe
    src="https://uniqueachieversbusiness.com.ng/"
    className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
    title="Service Website"
    width="1824"
    height="1080"
    
    allowFullScreen
  ></iframe>
</div>
</div>
    </div>
  </div>
  </div>


  <div className="bg-white">
  <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
      <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Restho</h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">Find Your Best Healthy
& Tasty Food.Come to Our Restaurant, Ready Your Food.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <a href="https://restho-app.vercel.app/" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Explore</a>
          <a href="https://restho-app.vercel.app/" className="text-sm font-semibold leading-6 text-white">Visit site <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div className="relative mt-16 h-80 lg:mt-8">
      <div className="overflow-x-auto">
  <iframe
    src="https://restho-app.vercel.app/"
    className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
    title="Service Website"
    width="1824"
    height="1080"
    
    allowFullScreen
  ></iframe>
</div>
</div>
    </div>
  </div>
  </div>


  <div className="bg-white">
  <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 
    shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
      <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 
      [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 
      lg:translate-y-0" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Shopnija</h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">online shopping</p>
        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <a href="https://shopnija.com.ng/" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Explore</a>
          <a href="https://shopnija.com.ng//" className="text-sm font-semibold leading-6 text-white">Visit site <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div className="relative mt-16 h-80 lg:mt-8">
      <div className="overflow-x-auto">
  <iframe
    src="https://shopnija.com.ng/"
    className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
    title="Service Website"
    width="1824"
    height="1080"
    
    allowFullScreen
  ></iframe>
</div>
</div>







    </div>

    
  </div>
</div>

<br></br>

{/*Trusted  letter section */}

<div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">Trusted by the world most innovative teams</h2>
    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
    
  <Image className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
    alt="Transistor"
    width={158}
    height={48}
  />


  <Image className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
    src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
    alt="Reform"
    width={158}
    height={48}
  />

  <Image className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
    src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
    alt="Tuple"
    width={158}
    height={48}
  />


  <Image className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
    src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
    alt="SavvyCal"
    width={158}
    height={48}
  />


  <Image className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
    src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
    alt="Statamic"
    width={158}
    height={48}
  />

    </div>
  </div>
</div>

   
<br></br>


{/*News letter */}
<span className="absolute inset-0"></span>
<div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
      <div className="max-w-xl lg:max-w-lg">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
        <p className="mt-4 text-lg leading-8 text-gray-300">send us your messages</p>
        <div className="mt-6 flex max-w-md gap-x-4">
        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
         
            <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          
          <button type="submit" className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Subscribe</button>
        </div>
      </div>
      <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
        <div className="flex flex-col items-start">
          <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>
          </div>
          <dt className="mt-4 font-semibold text-white">Contact info:</dt>
          <dd className="mt-2 leading-7 text-gray-400">surulere, lagos, Nigeria

08168766206

info@akinbrand.com.ng</dd>
        </div>
        <div className="flex flex-col items-start">
          <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
            </svg>
          </div>
          <dt className="mt-4 font-semibold text-white">QuickLinks:</dt>
          <a href="/Home" className="text-sm font-semibold leading-6 text-white">
              Home
            </a>
            <a href="/Services" className="text-sm font-semibold leading-6 text-white">
              Services
            </a>
            <a href="/Project" className="text-sm font-semibold leading-6 text-white">
              Project
            </a>
            <a href="/About" className="text-sm font-semibold leading-6 text-white">
              About
            </a>
            <a href="/Pricing" className="text-sm font-semibold leading-6 text-white">
            Pricing
            </a>
            <a href="/Contact" className="text-sm font-semibold leading-6 text-white">
              Contact
            </a>
        </div>
      </dl>
    </div>
  </div>
  <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
    <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"></div>
  </div>
</div>
</div>
    


</>



  );
};

export default Project;
