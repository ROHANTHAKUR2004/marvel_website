

import Navbar from '../Pages/Navbar/Navbar'
import Carousal from '../Pages/Carousal/Carousal'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getAllCharacters } from '../Redux/Slices/CharacterSlice';


export default function Layout() {

  const dispatch = useDispatch(); 

  const fetchCharacters = async () => {
    const res = await dispatch(getAllCharacters());
    localStorage.setItem('characters', JSON.stringify(res.payload.data.data.results)); // Cache data
    return  res.payload.data.data.results;
    
  };
  
  const value = localStorage.getItem('characters');
  console.log(JSON.parse(value));



 useEffect(  () => {
  fetchCharacters()

 }, [])



  return (
   
    <div>

       <Navbar/>
      <Carousal/>
    </div>
  
   
      
   
  )
}
