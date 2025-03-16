import React from "react";

function Banner() {
  return (
    <>
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
      <div className="hero  pt-24 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://cleanshala.in/wp-content/uploads/2022/08/water-tank-cleaning-service-min.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="lg:text-5xl text-4xl pl-6 lg:pl-0 text-sky-900 font-bold">
              Marathwada Water Tank Cleaning (MWTC)
            </h1>
            <p className="py-6 text-xl text-sky-600">
              Join the Blue Revolution to stop water pollution, Clean water. Healthy living.
            </p>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn text-2xl bg-sky-700 text-white ml-10 p-8 py-8 lg:ml-96 flex justify-center items-center" onClick={() => document.getElementById('my_modal_2').showModal()}>For More Enquiry</button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg"> Marathwada Water Tank Cleaning (MWTC)</h3>
                <p className="py-4">
                  <div>
                    <div className='flex flex-row  p-2'>
                      <img className='h-24 w-24 p-4' src="https://png.pngtree.com/png-vector/20220502/ourmid/pngtree-3d-location-icon-design-symbol-png-transparent-background-png-image_4562236.png" alt="" />
                      <a className='pt-4' href="https://maps.app.goo.gl/jGVAVUUYt5ejVZhs6?g_st=awb">Krishna Nagari Rd, Nakhate Vasti, Baderaj Colony, Rahatani, Pimpri-Chinchwad, Pune, Maharashtra 411017</a>
                    </div>
                    <div className='flex flex-row p-2'>
                      <img className='h-24 w-24 p-4' src="https://w7.pngwing.com/pngs/545/34/png-transparent-call-manager-logo-mobile-phones-telephone-call-whatsapp-google-contacts-contact-text-logo-grass-thumbnail.png" alt="" />
                      <div className='flex flex-col pt-4'>
                        <a className='pb-2 underline' href="tel:7020177251">+91 7020177251</a>
                        <a className='underline' href="tel:7666678527">+91 7666678527</a>
                      </div>
                    </div>

                    <div className='flex flex-row p-2'>
                      <img className='h-24 w-24 p-4' src="data:image/png;base64,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" alt="" />
                      <a className='pt-6 underline' href="mailto:mtankcleaning@gmail.com">mtankcleaning@gmail.com</a>
                    </div>
                    <div className='flex flex-row p-2'>
                      <a className="h-24 w-24 p-4" href="https://wa.me/message/VAMZBSPLLMYNK1">
                        <svg classname=" h-24 w-24 p-4 hover:scale-105 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                          <path fill="#21823e" d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z" />
                        </svg>
                       
                      </a>
                      <a className='pt-10 underline' href="https://wa.me/message/VAMZBSPLLMYNK1">+91 7666678527</a>
                    </div>
                  </div>
                </p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>





    </>
  );
}

export default Banner;
