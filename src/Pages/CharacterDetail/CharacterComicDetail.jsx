import { useDispatch } from "react-redux";
 import { getAllCharacterscomics } from "../../Redux/Slices/CharacterSlice";
 import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export default function CharacterComicDetail() {
    const dispatch = useDispatch();
    const { characterId } = useParams();
    const [comicdetail, setComicDetail] = useState([]);
  
    const fetchCharacterscomics = async () => {
      const res = await dispatch(getAllCharacterscomics(characterId));
      setComicDetail(res.payload.data.data.results);
    };
  
    useEffect(() => {
      fetchCharacterscomics();
    }, [characterId]);
  
    if (!comicdetail.length) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="p-6 bg-black min-h-screen">
        {comicdetail.map((comic) => (
          <div key={comic.id} className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 transition-transform transform hover:shadow-2xl">
            {comic.thumbnail && (
              <img
                className="w-32 h-auto rounded-lg mb-4 mx-auto"
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
              />
            )}
            <h1 className="text-2xl font-bold mb-4 text-center text-white">{comic.title}</h1>
            <p className="mb-4 text-gray-300"><strong className="font-semibold text-white">Description:</strong> {comic.description || "No description available."}</p>
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-white">Prices:</h2>
              <div className="flex flex-wrap">
                {comic.prices.map((price, index) => (
                  <p key={index} className="bg-gray-600 text-white px-3 py-1 rounded-full mr-2 mb-2">${price.price}</p>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-white">Creators:</h2>
              <div className="flex flex-wrap">
                {comic.creators.items.map((creator) => (
                  <p key={creator.resourceURI} className="bg-blue-600 text-white px-3 py-1 rounded-full mr-2 mb-2">{creator.name}</p>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-white">Characters:</h2>
              <div className="flex flex-wrap">
                {comic.characters.items.map((character) => (
                  <p key={character.resourceURI} className="bg-green-600 text-white px-3 py-1 rounded-full mr-2 mb-2">{character.name}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }