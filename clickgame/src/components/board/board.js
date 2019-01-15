import React, {Component} from "react"
import CharDiv from "./CharDiv"
import Character from "./character";

const shuffleArray = arr=>(
    arr.map(a=>[Math.random(), a])
      .sort((a,b)=>a[0]-b[0])
      .map(a=> a[1])
)

const pokemen= [
    {
        name: "Alteria",
        img: "images/alteria.png",
        clicked: false
    },
    {
        name: "Bagon",
        img: "images/bagon.png",
        clicked: false
    },
    {
        name: "bidoof",
        img: "images/bidoof.png",
        clicked: false
    },
    {
        name: "Braxen",
        img: "images/braxen.jpg",
        clicked: false
    },
    {
        name: "Clamperl",
        img: "images/clamperl.jpg",
        clicked: false
    },
    {
        name: "Dragonite",
        img: "images/dragonite.jpg",
        clicked: false
    },
    {
        name: "Eevee",
        img: "images/eevee.jpg",
        clicked: false
    },
    {
        name: "Floette",
        img: "images/floette.png",
        clicked: false
    },
    {
        name: "Flygon",
        img: "images/flygon.jpg",
        clicked: false
    },
    {
        name: "Goodra",
        img: "images/goodra.png",
        clicked: false
    },
    {
        name: "Gourgeist",
        img: "images/gourgeist.jpg",
        clicked: false
    },
    {
        name: "Meowth",
        img: "images/meowth.png",
        clicked: false
    },
    {
        name: "MeowthHat",
        img: "images/mewothhat.png",
        clicked: false
    },
    {
        name: "Porygon2",
        img: "images/porygon2.jpg",
        clicked: false
    },
    {
        name: "Quagsire",
        img: "images/quagsire.jpg",
        clicked: false
    },
    {
        name: "Rowlett",
        img: "images/rowlett.png",
        clicked: false
    },
    {
        name: "Shaymin",
        img: "images/shaymin.png",
        clicked: false
    },
    {
        name: "Slowbro",
        img: "images/slowbro.png",
        clicked: false
    }
]

export dafault class Board extends Component {

    constructor(props){
        super(props)

        this.state={
            user: {
                score: 0
            },
            pokemon: shuffleArray(pokemen)
        }
    }

    onCharacterClick = index =>{
        //if that tile hasn't been clicked before it will re shuffle and 
        //add a point to the state of score
        if(!this.state.pokemon[index].clicked){
            this.setState({
                pokemon: shuffleArray(this.state.pokemon.map((character, current)=>{
                    return (current === index)?{...character, clicked: true}: character
                })),
                user: {
                    ...this.state.user, 
                    score: this.state.user.score + 1
                }
            })
        }
          else {
              this.setState({
                  pokemon: shuffleArray(this.state.pokemon.map(character=> {return{...character, clicked: false}})),
                  user: {
                      ...this.state.user,
                      score: 0
                  }
              })
          }
    }

    render(){
        return(
            <div className="Board">
              <ScoreDisplay score={this.state.user.score}/>
              <CharDiv
                characters= {this.state.pokemon}
                onCharacterClick={this.onCharacterClick}
                />
            </div>
        )
    }
}
