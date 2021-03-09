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
    width: 100%;
`

const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(#DB7BFD, #FFFFFF);
    height: 70vh;
    width: 100%;
`

const Title = styled.h1`
    margin-bottom: 20px;
    font-size: 64px;
    font-weight: 500;
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
    display: flex;
    flex-wrap: wrap;
    position: relative;
    top: -50px;
`;

export default () => {
    const { loading, error, data } = useQuery(GET_MOVIES);
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
                {!loading && data.movies && data.movies.map(m => <Movie key={m.id} id={m.id} title={m.title} image={m.medium_cover_image} />)}
            </MovieList>
        </Container>
    )
};