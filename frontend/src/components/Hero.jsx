import React from "react";

const processes = [
  { name: "Step 1", description: "Mechanized Dewatering" },
  { name: "Step 2", description: "Sluge Removing" },
  { name: "Step 3", description: "High Water Pressure Cleaning" },
  { name: "Step 4", description: "Vacuum Cleaning" },
  { name: "Step 5", description: "Antibacterial Spray in the Tank" },
  { name: "Step 6", description: "Ultra Violet Radiation" },
];

const features = [
  { description: "> Over head and Underground Tanks" },
  { description: "> Leak detection and minor repair recommendations" },
  { description: "> Water quality testing before and after cleaning" },
  { description: "> Prevention of biofilm formation and bacterial growth" },
  { description: "> Use of eco-friendly, non-toxic cleaning agents" },
  { description: "> Extended tank lifespan through regular maintenance" },
  { description: "> Sanitization and disinfection of tank surfaces" },
  { description: "> Just 45 Minutes to clean" },
];

function Hero() {
  return (
    <>


      <div className="relative isolate overflow-hidden shadow-2xl bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start ">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 pl-6 lg:pl-0 text-3xl lg:text-4xl font-semibold tracking-tight text-pretty text-sky-900 sm:text-5xl">
                  Your No 1 Water Tank Cleaner in Pimpri-Chinchwad
                </h1>
                <p className="mt-6 pl-6 lg:pl-0 text-sm lg:text-xl/8 text-sky-600">
                  Cleaning your water tank can be challenging, especially with
                  the scorching heat these days. Dirty water tanks can harm your
                  health, and for busy individuals, finding time for cleaning
                  can be tough. That’s why we’re here to help! We are proud to
                  be your number one partner as water tank cleaner. With MWTC,
                  you get affordable packages and quick service, ensuring you
                  have clean water without any hassle.
                </p>
                
              </div>
              
            </div>
          </div>
          <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              alt=""
              src="https://spwatertankcleaner.com/wp-content/uploads/2023/04/overhead-tank-cleaning-1.jpg"
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl pl-6 lg:pl-0 text-sky-600 text-sm lg:text-xl/8 lg:max-w-lg">
                <p>
                  We clean tanks of various sizes, from 500 liters up to 10,000
                  liters, using high-tech machines for thorough cleaning.
                  Looking for water tank cleaning services near you? Book with
                  MWTC for efficient home cleaning services. We’re here to make
                  sure you always have access to clean water.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Water tank cleaning process*/}

      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 ml-10 lg:ml-36 py-24 sm:px-6 sm:py-32 lg:max-w-7xl  lg:px-8">
          <div>
            <h2 className="lg:text-4xl text-3xl font-bold tracking-tight text-sky-900 sm:text-4xl">
              OUR WATER TANK CLEANING SERVICE PROCESS
            </h2>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {processes.map((processes) => (
                <div
                  key={processes.name}
                  className="border-2 border-sky-600 shadow-2xl bg-sky-50 p-4"
                >
                  <dd className="mt-2 text-2xl text-white inline-block p-2 bg-sky-600 rounded-e-box">
                    {processes.name}
                  </dd>
                  <dd className="mt-2 text-2xl font-bold text-black">
                    {processes.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/**credit */}

      <div className="flex md:flex-row flex-col shadow-2xl ml-6 lg:ml-0 pb-10">
        <div>
          <img
            src="https://mangalfms.com/assets/images/tank-cleaning.jpg"
            alt=""
            className="rounded-lg ml-2 lg:pt-6"
          />
        </div>
        <div className="shadow-2xl">
          <div className="md:pt-24 pt-6 flex flex-wrap flex-col">
            <div className="flex justify-center items-center text-2xl lg:text-5xl font-bold pb-6 pl-4">
              Huge Clientele Inclusive Households, Schools, Collages & Corporate
              offices
            </div>
            <div className="flex lg:flex-row flex-col">
              <div className="md:pl-40 md:pt-24 pl-20">
                <div className="text-blue-500 font-bold text-3xl">1000+</div>
                <div className="text-xl">Our Customers</div>
              </div>
              <div className="md:pl-40 md:pt-24 pl-20">
                <div className="text-blue-500 font-bold text-3xl">50</div>
                <div className="text-xl">Team size</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**Service Features */}

      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center pl-10 lg:pl-0 gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl  lg:px-8">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-sky-900 sm:text-3xl">
              OUR SERVICE FEATURES
            </h2>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="border-2 shadow-2xl bg-slate-100 border-sky-600 p-4"
                >
                  <dd className="mt-2 lg:text-2xl text-xl text-black">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="relative shadow-2xl rounded-3xl isolate overflow-hidden mt-12 ml-8 lg:pl-0 bg-sky-600 py-24 sm:py-32 mb-6">
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl mb-6"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr opacity-48"
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Why Choose Us?
              </h2>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                <a href="https://wa.me/message/VAMZBSPLLMYNK1">
                  <button className="px-6 py-2 rounded-lg bg-white hover:bg-blue-800 text-black hover:text-white">
                    Book Your Service Today! ->
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="text-white">
            <div className="p-4 lg:text-xl">
              >Experienced Team: Trained professionals with 13+ years of industry
              expertise
            </div>
            <div className="p-4 lg:text-xl">
              >Advanced Technology: High-pressure cleaning, eco-friendly
              disinfectants, and UV sterilization
            </div>
            <div className="p-4 lg:text-xl">
              >Affordable & Reliable: Transparent pricing with timely service
            </div>
            <div className="p-4 lg:text-xl">
              >Hygiene & Safety First: Ensuring clean, germ-free water for your
              family and business
            </div>
            <div className="p-6 lg:text-2xl">
              With over 13 years of experience in the plumbing industry,
              Marathwada Tank Cleaning specializes in providing safe, hygienic,
              and efficient water tank cleaning services for residential,
              commercial, and industrial clients in Pimpri-Chinchwad.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
