import React from "react";
import { Card,  CardTitle, Span } from "../Styles/styles"
import ReactStars from "react-rating-stars-component";

const card = ({ name, address, state, street, phone, site, rate}) => {

  return (
    <Card>
      <CardTitle>Name: {name}</CardTitle>
      <Span>Dirección: {address}</Span>
      <Span>Dirección: {state}</Span>
      <Span>Dirección: {street}</Span>
      <Span>Dirección: {phone}</Span>
      <Span>Gender: {site}</Span>
      <ReactStars value={rate} size="30"/>
    </Card>
  );
};

export default card;