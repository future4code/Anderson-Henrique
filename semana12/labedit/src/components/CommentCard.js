import React from 'react'
import styled from 'styled-components'
import { DownArrow, UpArrow } from './Arrows'

const CommentCard = props => {


    return (
        <Container>
            <TitleAndVotes>
                <P>Autor: </P>
                <Span>
                    <UpArrow />
                    <DownArrow />
                </Span>
            </TitleAndVotes>
            <Text>

            </Text>
        </Container>
    )
}

export default CommentCard

const Container = styled.div`

`

const TitleAndVotes = styled.div`

`
const Text = styled.div`
`
const P = styled.p`

`

const Span = styled.Span`

`

