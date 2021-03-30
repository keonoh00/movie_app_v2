import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";
import styled from "styled-components";

const GET_MOVIE = gql`
  query getMovie($id: Int!){
    description(id: $id) {
      title
      rating
      genres
      download_count
      description_full
      medium_cover_image
    }
  }
`

const Container = styled.div`

`

const Content = styled.div`

`

export default () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: +id }
  });
  return (
    <Container>
      <Content>
        {loading && <span>loading...</span>}
        {<span>{data?.description?.title}</span>}
      </Content>
    </Container>
  );
};