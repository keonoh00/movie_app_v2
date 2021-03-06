import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import Movie from "../components/Movie"

const GET_MOVIES = gql`
    {
        movies {
            id
            title
            medium_cover_image
        }
    }
`;

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient(#7BC6CC, #BE93C5, #f4c4f3);
    width: 100%;
    `

const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
    width: 100%;
`

const Title = styled.h1`
    position: relative;
    top: -50px;
    margin-bottom: 20px;
    font-size: 60px;
    font-weight: 600;
    color: white;
`

const Subtitle = styled.h1`
    font-size: 28px;
    color: white;
`

const Loading = styled.span`
    color: grey;
    font-size: 30px;
    font-weight: 400;
`;

const MovieList = styled.div`
    display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;

export default () => {
    const { loading, data } = useQuery(GET_MOVIES);
    return (
        <Container>
            <Header>
                <Title>
                    Movie App
                </Title>
                <Subtitle>
                    Built with ReactJS, Apollo and GraphQL
                </Subtitle>
            </Header>
            {loading && <Loading>Loading...</Loading>}
            <MovieList>
                {data?.movies.map(m => <Movie key={m.id} id={m.id} title={m.title} image={m.medium_cover_image} />)}
            </MovieList>
        </Container>
    )
};