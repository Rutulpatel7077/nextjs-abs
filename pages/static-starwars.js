import React from "react";

const swapi = require("swapi-node");
import styled from "styled-components";

const Container = styled("div")`
  background-color: #f8f8f8;
  display: flex;
  flex-wrap: wrap;
`;

const ItemContainer = styled("div")`
  background-color: #f8f8f8;
  margin: 10px;
`;

const StaticStarWars = ({ people }) => {
  return (
    <>
      <h1>Static data using Next.js SSG and StarWars API</h1>
      <Container>
        {people &&
          people.map((item) => (
            <ItemContainer key={item.name}>
              <p>Name: {item.name}</p>
              <p>Height: {item.height}</p>
              <p>Mass: {item.mass}</p>
            </ItemContainer>
          ))}
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const data = await swapi
    .get("https://swapi.dev/api/people/?page=2")
    .then((result) => {
      console.log('Fetching data in static-starwars page')
      return result.results;
    });
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      people: data,
    },
  };
}

export default StaticStarWars;
