import React from 'react';
import './style.css';
import {useState} from 'react';


import plus from '../../assets/plus.png';
import minus from '../../assets/minus.png';
import servis3 from '../../assets/servis.jpeg';
import bike2 from '../../assets/bike2.jpeg';
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
            <img className="photo" src={servis3} alt='servis'/>
            
             </main>

          <div className="sidebarText">
             {serviceWorks.map( (seznam,index) => { 
                 return(
                 <>
                    <div className="flexbox"> 
                        <span> {isOpen === index ? <img className = "icon" src={minus}/> : <img className = "icon" src={plus}/> } </span>
                        <h3 key = {index} onClick={ () => toggle(index)}> {seznam.title} </h3>
                        
                    </div>
                    {isOpen === index ? ( 
                    <ul key = {seznam.title} className="dropdown"> {seznam.items.map( (sub) => <li> {sub.title} </li>  )} </ul> 
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
return(
    <>
   
    <div className="grid"> 
        <div className="grid-item-a"> 
        {serviceWorks.map( (seznam,index) => { 
            return(
                <>
                    <div className="flexbox"> 
                        <span> {isOpen === index ? <img className = "icon" src={minus}/> : <img className = "icon" src={plus}/> } </span>
                        <h3 key = {index} onClick={ () => toggle(index)}> {seznam.title} </h3>
                        
                    </div>
                    {isOpen === index ? ( 
                    <ul key = {seznam.title} className="dropdown"> {seznam.items.map( (sub) => <li> {sub.title} </li>  )} </ul> 
                    ) : null }
                </>   
            );
        })}
        </div>
        <div className="grid-item-b"> 
            <img className="grid-item-b" src={servis3} alt='servis'/>
        </div>
    </div>
    </>

)
}
*/
