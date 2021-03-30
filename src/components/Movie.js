import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"

const Container = styled.div`
  height: 400px;
  border-radius: 7px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: transparent;
`

const Movie = styled.div`
  background-image: url(${props => props.bgImage});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
`

export default ({ id, title, image }) => {
    return (
        <Container>
            <Link to={`/${id}`}>
                <Movie bgImage={image} />
            </Link>
        </Container>
      );
};
