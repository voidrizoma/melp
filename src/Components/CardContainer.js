import React, { useState } from "react";
import { Card, CardTitle, Span } from "../Styles/styles";
import Button from "../Components/Button";

const CardList = (props) => {
  const [displayToggle, setDisplayToggle] = useState(false);

  return (
    <Card>
      <CardTitle>{props.list.name}</CardTitle>
      <Span>{props.list.address.street}</Span>
      <Span>{props.list.address.state}</Span>
      <Span>{props.list.address.city}</Span>
      <Span>{props.list.rating} 	&#11088;</Span>
      <Button
        text="Contact"
        clickHandler={(event) => {
          event.preventDefault();
          setDisplayToggle(!displayToggle);
        }}
      />
      {displayToggle && (
        <>
          <Span style={{ margin: "10px", fontWeight: "800" }}>Contact</Span>
          <Span>Phone: {props.list.contact.phone}</Span>
          <Span>
            Site:{" "}
            <a href={props.list.contact.site}>{props.list.contact.site}</a>
          </Span>
        </>
      )}
    </Card>
  );
};

export default CardList;
