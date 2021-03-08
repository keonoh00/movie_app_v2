import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";
import styled from "styled-components";

const GET_MOVIES = gql`
    {
        movies {
            id
            medium_cover_image
        }
    }
`;

const Container = styled.div`
    color: white;
`

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
            {loading && <Loading>Loading</Loading>}
            {!loading && data.movies && data.movies.map(m => <Movie key={m.id} id={m.id} />)}
        </Container>
    )
};