import React, {Component} from "react"

export default class Character extends Component {
    //function for if a picture is clicked on
    click = ()=>{
        this.props.onCharacterClick(this.props.index)
    }

    render(){
        return(
            <div className="pokemon">
              <img 
                src= {this.props.character.img}
                className= "pokemonPic"
                alt = "pokemon"
                onClick= {this.click}
                />
            </div>
        )
    }
}