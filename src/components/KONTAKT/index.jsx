import React from 'react';
import './style.css';


import kontejner3 from '../../assets/kontejner3.jpg';
import mail from '../../assets/mail_icon.png';
import whatsapp from '../../assets/whatsapp.png';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import phone from '../../assets/phone.png';
import mapka from '../../assets/mapka.png';
import mapa from '../../assets/mapa2.png';


const Kontakt = () => {
    return(
        <>
        <div className="container">
          <header className="header">
          </header>

            <main className="mainPhoto">
            <img className="photo" src={kontejner3} alt='servis'/>
             </main>

          <div className="sidebarText">
             <div className="section1"> 
                <h2> OTEVÍRACÍ DOBA</h2>
                <ul className="openingHours"> 
                <li> Pondělí – zavřeno  </li> 
                <li> Úterý, Středa – 9.00 – 12.00, 13.00 – 17.00 </li>
                <li> Čtvrtek – 13.00 – 19.00 </li>
                <li> Pátek – 9.00 – 12.00, 13.00 – 17.00 </li>
                <li> Sobota – 10.00 – 14.00 </li>
                <li> Neděle – zavřeno  </li>  
                </ul>
             </div> 
             <div className="section2">
                <a href="mailto:martin@cyklowerkstatt.cz"> <img className='icon'src={mail}/> </a>
                <a href="tel:+420 737 748 071 "> <img className='icon'src={phone}/> </a>
                <a href="https://api.whatsapp.com/send?phone=737748071"> <img className='icon'src={whatsapp}/> </a>
                <a href="https://www.facebook.com/cyklowerkstatt"> <img className='icon'src={facebook}/> </a>
                <a href="https://www.instagram.com/cyklowerkstatt"> <img className='icon'src={instagram}/> </a>   
             </div>

            <div className="last"> 
            <a href={mapka}> MAPA K NÁM I </a>
            <a href={mapa}> MAPA K NÁM II </a>
            </div>

               <div className="vizitka">
               <li> +420 737 748 071 </li>
               <li> martin@cyklowerkstatt.cz </li>
               </div>
          </div>

          <footer className="footer">       
          </footer>
        </div> 
        </>
    )
 };

 export default Kontakt;