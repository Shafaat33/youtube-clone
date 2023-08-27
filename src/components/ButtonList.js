import React from "react";
import Button from "./Button";

const ButtonList = () => {

  return (
    <div className="flex">
      <Button name="All"/>
      <Button name="Games"/>
      <Button name="Songs"/>
      <Button name="Cricket"/>
      <Button name="Soccer"/>
      <Button name="News"/>
      <Button name="Cookings"/>
      <Button name="Entertainment"/>
    </div>
  )
}

export default ButtonList;