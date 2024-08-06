import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function CharacterDetail() {
  const { characterId } = useParams();
  const [chardetail, setchardetail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const characterlist = localStorage.getItem('characters');
    const characters = JSON.parse(characterlist);
    const character = characters.find(char => char.id === Number(characterId));
    setchardetail(character);
  }, [characterId]);

  console.log(chardetail);

  if (!chardetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-900 min-h-screen">
  <Navbar />
  <div className="p-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
     
      <div
        key={chardetail.id}
        className="bg-gray-800 text-white rounded-lg shadow-lg"
      >
        <div className="p-4">
          <div className="w-full h-80 flex justify-center mb-4">
            {chardetail.thumbnail && (
              <img
                className="w-full h-full object-cover rounded-lg"
                src={`${chardetail.thumbnail.path}.${chardetail.thumbnail.extension}`}
                alt={chardetail.name}
              />
            )}
          </div>
          <h2 className="text-3xl font-bold text-center mb-4">{chardetail.name}</h2>
          <h2 className="text-3xl font-bold text-center mb-4">{chardetail.description}</h2>
        </div>
      </div>

      <div className="lg:col-span-1 flex flex-col gap-6">
       
        <div className="p-4 bg-gray-800 rounded-lg text-white">
          <div className="text-2xl font-bold mb-2">COMICS</div>
          <ul 
           onClick={() => navigate(`/characters/${characterId}/comics`)}
          className="list-disc list-inside text-lg font-light text-yellow-100 space-y-2">
            {chardetail.comics && chardetail.comics.items.length > 0 ? (
              chardetail.comics.items.map((comic, index) => (
                <li key={index}>{comic.name}</li>
              ))
            ) : (
              <li>No comics available</li>
            )}
          </ul>
        </div>
   
        <div className="p-4 bg-gray-800 rounded-lg text-white">
          <div className="text-2xl font-bold mb-2">SERIES</div>
          <ul className="list-disc list-inside text-lg font-light text-yellow-100 space-y-2">
            {chardetail.series && chardetail.series.items.length > 0 ? (
              chardetail.series.items.map((series, index) => (
                <li key={index}>{series.name}</li>
              ))
            ) : (
              <li>No series available</li>
            )}
          </ul>
        </div>

      
        <div className="p-4 bg-gray-800 rounded-lg text-white">
          <div className="text-2xl font-bold mb-2">STORY</div>
          <ul className="list-disc list-inside text-lg font-light text-yellow-100 space-y-2">
            {chardetail.stories && chardetail.stories.items.length > 0 ? (
              chardetail.stories.items.map((story, index) => (
                <li key={index}>{story.name}</li>
              ))
            ) : (
              <li>No stories available</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

  )}