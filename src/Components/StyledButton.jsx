import React from "react";
import { Button } from "react-bootstrap";
export default function StyledButton(props) {
  return (
    <>
      <Button onClick={props.onClickFunction}>{props.title}</Button>
    </>
  );
}
