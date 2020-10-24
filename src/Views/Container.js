import React, { useEffect, useState } from "react";
import { Title, Wrapper, Subtitle, ButtonContainer } from "../Styles/styles";
import axios from "axios";
import List from "../Components/CardContainer";
import Image from "../gourmet-food-parlour.jpg";
import Button from "../Components/Button";
/**
 *
 * URIS, proxy to CORS
 */
const proxy = "https://cors-anywhere.herokuapp.com/";
const API =
  "https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json";

const sectionStyle = {
  height: "40vh",
  backgroundImage: `url(${Image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function Container() {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState(data);
  const [orderaz, setOrderAZ] = useState(data);

  const fecthData = () => {
    axios(`${proxy}${API}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {});
  };

  const orderData = () => {
    let order = data.sort((a, b) =>
      a.rating !== b.rating ? (b.rating < a.rating ? -1 : 1) : 0
    );
    setOrder(order);
  };

  const dataAZ = () => {
    let sort = data.sort((a, b) =>
      a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0
    );
    setOrderAZ(sort);
  };

  useEffect(() => {
    fecthData();
  }, []);

  useEffect(() => {
    orderData();
  }, []);

  useEffect(() => {
    dataAZ();
  }, []);

  console.log(order);
  return !data.length ? (
    <h1>Loading</h1>
  ) : (
    <>
      <div style={sectionStyle}>
        <Title>MELP</Title>
        <Subtitle>The best restaurants, one place!</Subtitle>

        <ButtonContainer>
          <Button
            text="Order by Rating"
            clickHandler={(event) => orderData(event)}
          />
          <Button
            text="Order by Name"
            clickHandler={(event) => dataAZ(event)}
          />
        </ButtonContainer>
      </div>
      <Wrapper style={{ backgroundColor: "#fbeee0" }}>
        {data.map((list, i) => (
          <List list={list} />
        ))}
        {order && data.map((list, i) => <List list={list} />)}
      </Wrapper>
    </>
  );
}

export default Container;
