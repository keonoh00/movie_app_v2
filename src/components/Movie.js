import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1 0 21%;
  margin: 5px;
  height: 100px;
  background-image: url(${props => props.bgImage});
`

export default ({ id, title, image }) => {
    return (
        <Container bgImage={image} />
      );
};
