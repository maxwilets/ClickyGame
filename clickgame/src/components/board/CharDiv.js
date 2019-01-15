import React from "react"
import Character from "./character"

const CharDiv = props => {
    return(
        <div className="pokediv">
           {props.characters.map((character, index)=>(
               <Character character={character} index={index} onCharacterClick = {props.onCharacterClick}
               key={character.name} />
            ) )}
        </div>
    )
};
export default CharDiv;