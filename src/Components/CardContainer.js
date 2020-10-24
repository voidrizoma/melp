import React, { useState } from "react";
import { Card, CardTitle, Span } from "../Styles/styles";
import ReactStars from "react-rating-stars-component";
import Button from "../Components/Button";

const CardList = ( props ) => {
  const [displayToggle, setDisplayToggle] = useState(false);
  return (
          <Card>            
            <CardTitle>{props.list.name}</CardTitle>
            <Span>{props.list.street}</Span>
            <Span>{props.list.address.state}</Span>
            <Span>{props.list.address.city}</Span>
            <ReactStars value={props.list.rating} size="30" />
            <Button
              text="Contact"
              clickHandler={(event) => {
                event.preventDefault();
                setDisplayToggle(!displayToggle);
              }}
            />
            {displayToggle && (
              <>
                <Span style={{ margin: "10px", fontWeight: "800" }}>
                  Contact
                </Span>
                <Span>Phone: {props.list.contact.phone}</Span>
                <Span>
                  Site:{" "}
                  <a href={props.list.contact.site}>{props.list.contact.site}</a>
                </Span>
                <Span>{props.list.address.location.lat}</Span>
                <Span>{props.list.address.location.lng}</Span>
              </>
            )}
          </Card>
  );
};

export default CardList;
