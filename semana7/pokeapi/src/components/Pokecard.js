import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Card= styled.div`
background-color:blue;
height:200px;
text-align:center;

`

let pokeAPI = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
let padToThree = (number) => (number <=999  ? `00${number}`.slice(-3): number)

class Pokecard extends React.Component {
    render() {
let imgSrc=`${pokeAPI}${padToThree(this.props.number)}`

        return(


            <Card>
                <h1>{this.props.name}</h1>
                <img src ={imgSrc}></img>
                <p>Type: {this.props.type}</p>
            </Card>
        )
    }
}

export default Pokecard