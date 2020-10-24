import React, { useEffect, useState } from "react";
import { Title, Wrapper, Subtitle } from "../Styles/styles";
import axios from "axios";
import List from "../Components/CardContainer";
import Image from "../gourmet-food-parlour.jpg";
/**
 * 
 * URIS, proxy to CORS
 */
const proxy = "https://cors-anywhere.herokuapp.com/";
const API =
  "https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json";

const sectionStyle = {
  height: "30vh",
  backgroundImage: `url(${Image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function Container() {
  const [data, setData] = useState([]);

  const fecthData = () => {
    axios(`${proxy}${API}`)
      .then((response) => {
        let sort = response.data.sort((a, b) =>
          a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0
        );
        setData(sort);
      })
      .catch((error) => {});
  };
  
  useEffect(() => {
    fecthData();
  }, []);

  return !data.length ? (
    <h1>Loading</h1>
  ) : (
    <>
      <div style={sectionStyle}>
        <Title>MELP</Title>
        <Subtitle>The best restaurants, one place!</Subtitle>
      </div>
      <Wrapper style={{ backgroundColor: "#fbeee0"  }}>
      {data.map((list, i) => (
          <List list={list}/>
      ))}
      </Wrapper>
    </>
  );
}

export default Container;
