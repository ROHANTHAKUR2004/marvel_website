import { useGSAP } from '@gsap/react';
import './Navbar.css';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
export default function Navbar() {

   const navigate = useNavigate();
    // const tl = gsap.timeline();

    // useGSAP(() =>{
    //     tl.from("img , h4", {
    //     y : -40,
    //     duration : 0.3,
    //     opacity : 0,
    //     stagger: 0.2,
    //     })
    // }) 

  return (
    <nav>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png?20161025051221" alt="" />
    <div className="part2">
        <h4>Comics</h4>
        <h4
        onClick={() =>{
          navigate('/characters')
        }}   
        >Characters</h4>
        <h4>Series</h4>
        <h4>Creators</h4>
        <h4>Events</h4>
        <h4>Stories</h4>
    </div>
 </nav>
  )
}
