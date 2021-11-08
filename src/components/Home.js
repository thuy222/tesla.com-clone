import React from "react";
import styled from "styled-components";
import Section from "./Section";

const data = [
  { title: "Model S", img: "images/model-s.jpg" },
  { title: "Model Y", img: "images/model-y.jpg" },
  { title: "Model 3", img: "images/model-3.jpg" },
  { title: "Model X", img: "images/model-x.jpg" },
  { title: "Solor Panel", img: "images/solar-panel.jpg" },
  { title: "Solar Roof", img: "images/solar-roof.jpg" },
  { title: "Accessories", img: "images/accessories.jpg" },
];

function Home() {
  return (
    <Container>
      {data.map((item) => {
        const { title, img } = item;
        return <Section title={title} img={img} />;
      })}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
