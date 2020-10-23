import React, { useEffect, useState } from "react";
import {
  Title,
  Wrapper,
  Subtitle
} from "../Styles/styles";
import axios from "axios";
import List from "../Components/CardContainer";

const proxy = "https://cors-anywhere.herokuapp.com/";
const API = "https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json";

function Container() {
  const [data, setData] = useState([]);

  const fecthData = () => {
    axios(`${proxy}${API}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {});
  };
  console.log(data);
  useEffect(() => {
    fecthData();
  }, []);


  return !data.length ? (
    <h1>Loading</h1>
  ) : (
    <>
      <div style={{backgroundColor:"red", height:"25vh"}}>
        <Title>MELP</Title>
        <Subtitle>The best restaurants, one place!</Subtitle>
      </div>
      <Wrapper>
        <List data={data} />
      </Wrapper>
    </>
  );
}

export default Container;
