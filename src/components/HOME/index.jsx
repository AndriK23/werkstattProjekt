import React from 'react';
import './style.css';
import {useState,useRef,useEffect} from 'react';

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
            
              <div className="onas"> 
              
              <p> Werkstatt – dílna (nejen) pro městskou a silniční cyklistiku</p> 
              
              <p> Werkstatt je cyklo-dílna, servis pro všechny druhy jízdních kol a elektrokol. 
              Prostor pro kurzy oprav, údržby a vylepšování jízdních kol pro začátečníky i pokročilé a pro vzdělávání 
              v oblasti cyklo-dopravy a udržitelného města. Prodejna a půjčovna silničních a městských kol, příslušenství, komponentů nebo nářadí. </p>
              
              <p> 
              Werkstatt je součástí kreativního hubu<a href='https://industra.space/o-industre' className='linkText'>Industra</a>v Nové Zbrojovce 
              a je také prostorem pro vzdělávání v oblasti cyklodopravy, cyklistiky a udržitelného města. </p>
              
              <p> 
              Spojnice mezi mobilitou a kulturou, uměním a sportem. 
              Kola pro nás znamenají svobodu, nezávislost, zábavu, rychlost. 
              Čisté město, čistou hlavu, zdravý život, životní styl. 
              Obdivujeme jejich jednoduchou, přesto dokonalou technologii, která poskytuje 
              praktické a ekologické řešení na řadu výzev současnosti. 
              Jsme místem, které v sobě snoubí hned řadu funkcí.  
              Záleží nám však také na vzdělávání v oblasti cyklistiky a aktivní mobility obecně, 
              udržitelnosti měst, plánování veřejného prostoru a podpoře lidí k ježdění na kole a šíření povědomí o tom, 
              že cyklistika není pouze víkendový sport.  </p>
              </div>
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




