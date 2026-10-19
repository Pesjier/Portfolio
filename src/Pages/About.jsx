import React, { useEffect, useRef, useState } from 'react'
import AboutMobile from './AboutMobile';
import AboutDesktop from './AboutDesktop';

const mobileSize = 500;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < mobileSize);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < mobileSize);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isMobile;
}

const About = () => 
{
  const isMobile = useIsMobile();

  return isMobile ? <AboutMobile/> : <AboutDesktop/>;
}

export default About
