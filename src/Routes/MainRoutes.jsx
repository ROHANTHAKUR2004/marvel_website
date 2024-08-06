import { Route, Routes } from "react-router-dom";
import LoadingPage from "../Pages/Loadingpage/LoadingPage";
import Layout from "../Layout/Layout";
import Character from "../Pages/character/Character";
import CharacterDetail from "../Pages/CharacterDetail/CharacterDetail";
import CharacterComicDetail from "../Pages/CharacterDetail/CharacterComicDetail";


export default function MainRoutes() {
  return (
     
     <Routes>
         <Route path='/'  element={<LoadingPage/>}/>
         <Route path='/main' element={<Layout/>} />
         <Route path='/characters' element={<Character/>} />
         <Route path='/characters/detail/:characterId' element={<CharacterDetail/>} />
         <Route path='/characters/:characterId/comics' element={<CharacterComicDetail/>} />
     </Routes>

  )
}
