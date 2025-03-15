import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Help() {
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
            <div className='flex justify-center font-bold  text-sky-900 text-5xl p-8 pb-4 pt-36'>Frequently Asked Questions</div>
            <div>
                <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
                    <div className="collapse-title font-semibold text-sky-600">how long does it take to clean a water tank in a household?</div>
                    <div className="collapse-content text-sm">
                        The time it takes to clean a water tank in a household can vary depending on several factors such as the size and complexity of the tank, the level of dirtiness, and the accessibility of the tank. But Tank Scrub masters typically take 30 to 60 minutes to clean a water tank
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
                    <div className="collapse-title font-semibold text-sky-600">How much does it cost to clean a water tank in a society or building?</div>
                    <div className="collapse-content text-sm">
                        The cost of cleaning a water tank in a society or building depends on the size and number of tanks, the type of cleaning required, and the location. Typically, the cost can range from 700 to 2000 .
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
                    <div className="collapse-title font-semibold text-sky-600">Is it possible to reschedule my home water tank cleaning service?</div>
                    <div className="collapse-content text-sm">
                        Yes, you can reschedule your home water tank cleaning service in delhi by informing us at least one day in advance. We understand that schedules can change, and we are happy to accommodate your needs to ensure a convenient and efficient cleaning process.
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
                    <div className="collapse-title font-semibold text-sky-600">At what time do you come for cleaning?</div>
                    <div className="collapse-content text-sm">
                        We schedule cleaning services at a time that is convenient for you. Please let us know your preferred time, and we will do our best to accommodate it.
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
                    <div className="collapse-title font-semibold text-sky-600">How do I know if my water tank needs cleaning?</div>
                    <div className="collapse-content text-sm">
                        Signs that your water tank needs cleaning include unusual odors, discolored water, or sediment buildup. If you notice any of these signs, it’s likely that your tank needs professional cleaning.
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
                    <div className="collapse-title font-semibold text-sky-600">Can I clean my water tank myself?</div>
                    <div className="collapse-content text-sm">
                        While it’s possible to clean your water tank yourself, it’s recommended to hire a professional service like ours. Our team has the necessary expertise and equipment to ensure a thorough and safe cleaning process.
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Help
