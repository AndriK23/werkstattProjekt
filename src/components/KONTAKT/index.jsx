import React from 'react';
import './style.css';


import kontejner from '../../assets/kontejner.jpg';
import mail from '../../assets/mail_icon.png';
import whatsapp from '../../assets/whatsapp.png';
import phone from '../../assets/phone.png';
import mapka from '../../assets/mapka.png';


const Kontakt = () => {
    return(
        <>
        <div className="container">
          <header className="header">
          </header>

            <main className="mainPhoto">
            <img className="photo" src={kontejner} alt='servis'/>
             </main>

          <div className="sidebarText">
             <div className="section1"> 
                <h2> OTEVÍRACÍ DOBA</h2>
                <p> Pondělí, Středa, Pátek  – 9.00 – 12.00, 12.30 – 17.00 </p>
                <p> Úterý, Čtvrtek – 12.30 – 19.00 </p>
                <p> Sobota, Neděle – zavřeno  </p>  
             </div> 
             <div className="section2">
                <a href="mailto:martin@cyklowerkstatt.cz"> <img className='icon'src={mail}/> </a>
                <a href="tel:+420 737 748 071 "> <img className='icon'src={phone}/> </a>
                <a href="https://api.whatsapp.com/send?phone=737748071"> <img className='icon'src={whatsapp}/> </a>
                
             </div>
            <div className="last"> 
            <a href={mapka}> MAPA K NÁM </a>
            </div>
          </div>

          <footer className="footer">       
            
          </footer>
        </div> 
        </>
    )
 };

 export default Kontakt;