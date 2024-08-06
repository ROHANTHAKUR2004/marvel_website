import { useDispatch } from "react-redux";
import { getAllCharacterscomics } from "../../Redux/Slices/CharacterSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


export default function CharacterComicDetail() {

    const dispatch = useDispatch(); 
    const {characterId } = useParams();
 
  const fetchCharacterscomics = async () => {
    const res = await dispatch(getAllCharacterscomics(characterId));
    localStorage.setItem('characterscomicsdetail', JSON.stringify(res.payload.data.data.results)); // Cache data
    return  res.payload.data.data.results;
    
  };
  
  



 useEffect(  () => {
  fetchCharacterscomics()
  const value = localStorage.getItem('characterscomicsdetail');
  console.log('local',JSON.parse(value));

 }, [])

  return (
    <div>
      jdjjgjsrd
    </div>
  )
}
