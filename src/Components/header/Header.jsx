import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

function Header({ setActiveTab }) {
  return (
    <div className="header text-center">
      <ButtonGroup>
        <Button variant="primary" onClick={() => setActiveTab("new")}>New Task</Button>
        <Button variant="success" onClick={() => setActiveTab("working")}>Working Task</Button>
        <Button variant="danger" onClick={() => setActiveTab("old")}>Old Task</Button>
      </ButtonGroup>
    </div>
  );
}

export default Header;
