// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"


function CharacterList() {
    const [character, setCharacter] = useState([])

    useEffect(() => {
        axios
            .get("https://swapi.py4e.com/api/people")
            .then(res => {
                console.log(res.data.results)
                setCharacter(res.data.results)
            })
            .catch(err => {
                console.log("There was an error silly ", err)
            });
    }, []);
    return (
        <div>
            {character.map((character) => {
                return <CharacterCard character={character} key={character.id} />
            })}

        </div>
    )
}

export default CharacterList;

//Star Wars api: 
//"https://swapi.py4e.com/api/people"
//Rick and Morty api:
//"https://rickandmortyapi.com/api/character/"