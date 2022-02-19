import React from "react";
import "./_category.css";
import Figure from "react-bootstrap/Figure";
import { Link, useNavigate } from "react-router-dom";

const SideBarRow = ({ selected, img, title }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`sub/${title}`);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`sidebarrow ${selected ? "selected" : ""}`}
      >
        <Figure.Image
          width={15}
          height={20}
          src={img}
          className="sidebarrow__icon"
        />
        <h3 className="sidebarrow__title">{title}</h3>
      </div>
    </>
  );
};

export default SideBarRow;
