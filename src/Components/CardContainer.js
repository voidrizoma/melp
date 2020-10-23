import React from "react";
import Card from "./Card";
import { CardWrapper } from "../Styles/styles"

const CardList = ({ data }) => {
  return (
    <CardWrapper>
      {data.map((item, i) => {
        return (
          <Card
            key={i}
            name={data[i].name}
            address={data[i].address.city}
            state={data[i].address.state}
            street={data[i].address.street}
            phone={data[i].contact.phone}
            site={data[i].contact.site}
            rate={data[i].rating}
          />
        );
      })}
    </CardWrapper>
  );
};

export default CardList;