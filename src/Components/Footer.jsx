import React, { useEffect, useState } from 'react'

import bottomlogo from "../assets/freshora_white_bg_logo-removebg.png"
import { footerLinks } from '../assets/assets'
const Footer = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
     return () => clearInterval(interval); // Cleanup on unmount
  }, []);

    
  return (
  <>
  <div className="px-6 md:px-16 lg:px-24 xl:px-32">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                <div className=''>
                    <img className="w-34 md:w-32" src={bottomlogo} alt="dummyLogoColored" />
                   
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.url} className="hover:underline transition">{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
              {currentTime.getFullYear()} |{" "}
      {currentTime.toLocaleTimeString()} © FreshByUDY All Right Reserved.
            </p>
        </div>
  
  </>
  )
}

export default Footer