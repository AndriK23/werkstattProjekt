import React from 'react';
import './style.css';
import {useState} from 'react';


import plus from '../../assets/plus.png';
import minus from '../../assets/minus.png';
import servis2 from '../../assets/servis2.jpeg';
import serviceWorks from '../../serviceWorks';

const Servis = () => {


    const [isOpen,setIsOpen] = useState(false);

    const toggle = index => {
        if(isOpen === index)  {
        //if clicked already open, then close it
            return setIsOpen(null)
        }
        setIsOpen(index);
    }

    return(
    <>
        <div className="container">
          <header className="header">
          </header>

            <main className="mainPhoto">
            <img className="photo" src={servis2} alt='servis'/>
            
             </main>

          <div className="sidebarText">
             {serviceWorks.map( (seznam,index,price) => { 
                 return(
                 <>
                    <div className="flexbox"> 
                        <span> {isOpen === index ? <img className = "icon" src={minus}/> : <img className = "icon" src={plus}/> } </span>
                        <h3 key = {index} onClick={ () => toggle(index)}> {seznam.title} </h3>
                        
                    </div>
                    {isOpen === index ? 
                    ( 
                    <ul key = {seznam.title,seznam.price} className="dropdown"> 
                    {seznam.items.map( (sub) => 
                    <div className="polozka">
                    <li> {sub.title} </li> 
                    <li> {sub.price} </li>
                    </div>               )
                    } 
                    </ul>
                    ) : null }
                </>   
                    );
                    })}
          </div>

          <footer className="footer">  
          </footer>
        </div> 
    </>
    );
}

export default Servis;

/*
<div className="onas"> 
<p> 
Opravujeme všechny typy kol a elektrokol (silniční, městská, gravel i horská, malá i velká, odpružená i neodpružená, 
s pohonem i bez, stará i nová, pojízdná i nepojízdná) – i koloběžek. Každému kolu se u nás dostane bezpodmínečné lásky :)
</p>     
<p>               
Seznam a dostupnost dílů a jejich ceny můžete najít zde. 
Všechny ostatní nejsou problém objednat do 2 dnů – zastavte se, zavolejte, pište nebo si doneste vlastní díly. 
</p>
<p>
Rezervace servisu na telefonním čísle +420 737 748 071 (i whatsapp, kam můžete poslat foto či video problému) 
nebo na emailu martin@cyklowerkstatt.cz
</p>
<p>
Na základě domluvy a prohlídky kola stanovíme rozsah oprav a odhadovanou cenu. Nabízíme však i níže stanovený balíček, který je ideální před sezonou nebo když kolo dlouho nevidělo servis.
</p>
</div>
*/
