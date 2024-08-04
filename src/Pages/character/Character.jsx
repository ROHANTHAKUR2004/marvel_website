import { useEffect } from "react";
import { useState } from "react";
import Layout from "../../Layout/Layout";
import Navbar from "../Navbar/Navbar";

export default function Character() {

  const [char, setchar] = useState([]);

  useEffect(() => {
    const characterlist =  localStorage.getItem('characters');
    setchar(JSON.parse(characterlist));
  }, [])

  
  



  return (
    <div className='flex flex-col'>
       <Navbar></Navbar>

    <div className='relative w-full h-96'>
    <img 
      className='w-full h-full object-cover opacity-30'
      src='https://wallpapers.com/images/high/marvel-4k-phone-keq3zusfp6lj4du0.webp'
      alt='Marvel Background'
    />
    <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
      <div className='bg-red-300  bg-opacity-50 p-4 rounded'>
        <h1 className='text-white text-4xl font-bold'>
          MARVEL CHARACTERS
        </h1>
        <h4 className='text-white text-lg mt-2'>
          Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!
        </h4>
      </div>
    </div>
  </div>
  <div>
  </div>
     <h3 className='text-2xl text-white mt-5 p-4'>FEATURED CHARACTERS</h3>
      
      
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'> 
     {char.map(character => (
        <div key={character.id} className='p-4 rounded shadow-lg'>
        <img 
          className='w-full h-48 object-cover rounded'
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt='Character 2'
        />
        <h2 className='text-4xl font-bold mt-2'>{character.name}</h2>
      </div>
     ))}
    
     


    </div>

   <div>
    
   </div>

  
</div>

 
  )
}
