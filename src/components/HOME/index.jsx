import React from 'react';
import './style.css';
import {useState,useRef,useEffect} from 'react';

import logoW from '../../assets/logo.png';
import logoNew from '../../assets/logoNew.png';
import Images from '../../../pictures';

const Home = () => {

  const [index,setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 2500;

  const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }


  useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === Images.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
          resetTimeout();
      };
    }, [index]);


    return(
    <>
        <div className="container">
          <header className="header">
          </header>

            <main className="mainPhoto">
              <div className="slideshow">
                 <div className="slideshowSlider"
                   style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                    >
                    {Images.map(image => {return <img className = 'photo'  key = {image.id} src = {image.src}/>})};  (
                  </div> 
                  <div className="slide" key={index} > </div>
              </div>
            
             </main>

          <div className="sidebarText">
            <img className="logo" src={logoNew} alt='logo'/>
          </div>

          <footer className="footer">       
            <div className="slideshowDots" >
                {Images.map((_, idx) => (
                <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                    setIndex(idx);
                    }}>
                </div>
                  ))}
              </div>
          </footer>
        </div> 
    </>
    );
}

export default Home;




