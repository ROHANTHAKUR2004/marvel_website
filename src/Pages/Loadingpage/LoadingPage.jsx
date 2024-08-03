import { useGSAP } from '@gsap/react';
 import gsap from 'gsap';
import './Loadingpage.css';
import { useRef } from 'react';






export default function LoadingPage() {

    const mutiref = useRef();
    const uniref = useRef();
    const tl = gsap.timeline();
    

    useGSAP(() => {
        tl.from(".image img",{
           y: -300,
           duration: 2,
           opacity: 0,
           delay: 1,
           rotate: 1200,
           repeat: -1,
        })
     })
   
     useGSAP(() => {
        tl.from(mutiref.current,{
           y: 300,
           duration: 1,
           opacity: 0,
        
        })
     })


     useGSAP(() => {
        tl.from(uniref.current,{
           x: 300,
           duration: 1,
           opacity: 0,
           

        })
     })


     useGSAP(() => {
        tl.from('.button',{
           x: -300,
           duration: 1,
           opacity: 0,
           delay: 1,

        })
     })




  return (
    
       <div className='main'>
          <div className="image">
            <img src="https://i.pinimg.com/236x/c9/13/3a/c9133ae1b62ed6bd11a15be7a489e498.jpg" alt="" />
          </div>
          <div className="text">
            <h1 ref={mutiref}>Welcome To</h1>
            <h1 ref={uniref}>MUTI-UNIVERSE</h1>
          </div>
        <div className='button'>
          <button className="btn btn-warning">Lets GO</button>
        </div>
          
         
       </div>
       
           
     
   
  )
}



