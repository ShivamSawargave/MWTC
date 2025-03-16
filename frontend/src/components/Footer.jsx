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
                    <a href='https://www.google.com/search?q=marathwada+plumbing+services+pimpri-chinchwad+%E0%A8%A6%E0%A9%80%E0%A8%86%E0%A8%82+%E0%A8%A4%E0%A8%B8%E0%A8%B5%E0%A9%80%E0%A8%B0%E0%A8%BE%E0%A8%82&sca_esv=4ff095ec055370c4&source=hp&ei=FVLWZ_WtC-2k2roP8JSuKA&si=APYL9bscZpjn3_6X199NmFjPBARRV0xSGKg4D2BCi30CgM2FOwhjulW7SWqQ6pzK4PJQS91h4lFljslzhQXcOzLBeeDyvAHxCFZvvZRDah3pBr4hzGXzGl_Nq-L6PAH7c8QmM4WJWazVLh9kKMwOXE_aRUNiGx5mDBHw7qlRd2E5-D3frCMCvLwzWVTbY9eWnkaOW-hhuDeS9zaCYyqXiwjw_X5UozQ1xg%3D%3D&ictx=1&ved=2ahUKEwjmw8q04I2MAxXxumMGHdZRHHYQvsQGegQIIBAk#ebo=0&lpg=cid:CgIgAQ%3D%3D' className="link link-hover text-xl">Marathwada Plumbing</a>
                </nav>
            </footer>
    </>
  )
}

export default Footer