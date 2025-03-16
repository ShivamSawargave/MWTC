import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About() {
    return (
        <>
            <Navbar />
            <a href="https://wa.me/message/VAMZBSPLLMYNK1">
                <svg
                    className=" h-20 w-20 md:h-32 md:32 hover:scale-105  fixed bottom-0 pr-4 right-0 z-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                    {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                    <path
                        fill="#21823e"
                        d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z"
                    />
                </svg>
            </a>
            <div className='pt-36 pb-12 font-bold flex justify-center text-sky-600 items-center bg-base-300 text-5xl'>
                About Us
            </div>


            <div className='flex flex-col lg:flex-row justify-evenly'>
                <img className='h-96 w-96 p-6' src="https://watertankcleaningbangalore.com/images/water-tank-cleaning-services-in-bangalore.png" alt="" />
                <div className='flex flex-col p-6'>
                    <div className='font-bold  text-sky-900  text-5xl pb-4'>About Us</div>
                    <div className='text-sky-600 text-xl'>
                        At first we welcome all of you for our domain. We are the best water tank cleaning service unit in Pimpri-Chinchwad.This website helps you to know about our services of water tank cleaning & all of about us. We are so happy to make chance to say about us by you choosing this site.
                        We are proud to be a customer-friendly concern since from the begining and will be forever. Our advanced cleaning procedures fully satisfies our customers.Our follow-up plans in reasonable prices, omit cutomer's worries in water tank cleaning. Our planning and prompt execution systems makes punctual, perfect quick and good opinion for us. Trust of our clients on us, helps to reach us gradually in industry.
                    </div>
                </div>
            </div>



            <div className='flex flex-col lg:flex-row justify-evenly pl-4 pt-6 pb-6'>
                <div>
                    <div className="card card-border bg-gray-100 w-96 h-48 shadow-2xl mb-4">
                        <div className="card-body">
                            <h2 className="card-title text-zinc-500 text-3xl">TRUST</h2>
                            <p>Attening punctually, Perfect cleaning, follow-up customers and 24x7 helpline are most important reasons for clients trust us.</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="card card-border bg-gray-100 w-96 h-48 shadow-2xl mb-4">
                        <div className="card-body">
                            <h2 className="card-title text-zinc-500 text-3xl">WORTH</h2>
                            <p>Our scientific patented stage by stage cleaning process using hi-tech latest equipments clean water tanks perfectly. Which is worthfull for customer's giving affordable cost for our service.</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="card card-border bg-gray-100 w-96 h-48 shadow-2xl mb-4">
                        <div className="card-body">
                            <h2 className="card-title text-zinc-500 text-3xl">SAFE</h2>
                            <p>We remove dirt, algae, bacteria and dust particles from water tank. It safe us from dicease causing by water after cleaning water tank.</p>

                        </div>
                    </div>
                </div>
            </div>



            <div className=''>
                <div className='flex lg:pl-60 font-bold  text-sky-900  text-5xl p-8 pb-4'>SERVICE INDUSTRIES</div>
                <div className='flex justify-evenly grid-cols-1 flex-col lg:flex-row mb-10'>
                    <div className=''>
                        <div className='pl-6 m-2 rounded-2xl'>Individual House</div>
                        <div className='pl-6 m-2 rounded-2xl'>Appartments</div>
                        <div className='pl-6 rounded-2xl'>Shopping Complexes</div>
                    </div>
                    <div>
                        <div className='pl-6 m-2 rounded-2xl'>Hotels & Restaurents</div>
                        <div className='pl-6 m-2 rounded-2xl'>Hospitals</div>
                    </div>
                    <div>
                        <div className='pl-6 m-2 rounded-2xl'>Educational Institutions</div>
                        <div className='pl-6 m-2 rounded-2xl'>Men & Women Hostals</div>
                    </div>
                    <div>
                        <div className='pl-6 m-2 rounded-2xl'>Industrial Townships</div>
                        <div className='pl-6 m-2 rounded-2xl'>Government Sectors</div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About
