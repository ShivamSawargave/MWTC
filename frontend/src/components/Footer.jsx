import React from 'react'

function Footer() {
  return (
    <>
   <footer className="footer footer-center lg:ml-0 text-black rounded p-10 ml-6 w-full flex flex-col md:flex-row justify-evenly items-center bg-white">
            <aside>
                   <a href="/"><div><img src="logo.jpg" alt="" className='h-24 w-36 rounded-md'/></div><hr/></a>
                   <div>Krishna Nagari Rd, Nakhate Vasti, Baderaj Colony, Rahatani, Pimpri-Chinchwad, Pune, Maharashtra 411017</div>
                   </aside>
                
                <nav className="md:ml-12 ml-4 grid-flow-col gap-4 flex flex-col">
                    <a href='/About' className="link link-hover text-xl">About us</a>
                    <a href='/Contact' className="link link-hover text-xl">Contact</a>
                    <a href='/Gallery' className="link link-hover text-xl">Gallery</a>
                    <a href='https://g.page/r/CYO_sZcezehYEBE/review' className="link link-hover text-xl">Marathwada Plumbing</a>
                </nav>
            </footer>
    </>
  )
}

export default Footer