import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
display:flex;
flex-wrap:wrap;
/* flex-direction:column; */

`




const Card = styled.div`
background-color:blue;
height:300px;
text-align:center;
width:27%;
border: 1px solid black;
border-radius:3px;
box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.56);
margin-bottom:1.5rem;
background-color: #eceff1;

`

const Img = styled.img`
width:120px;
`

let pokeAPI = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)

class Pokecard extends React.Component {
    render() {

        // this.props.type1.map(tipo => tipo.type.name)





        let imgSrc = `${pokeAPI}${padToThree(this.props.number)}.png`

        return (
            // <Container>

                <Card>
                    <h1>{this.props.name}</h1>
                    <Img src={imgSrc}></Img>
                    <p>Type: {this.props.type1}</p>
                    <p> Pokedex:{this.props.number} </p>
                </Card>
            // </Container>
        )
    }
}

export default Pokecard