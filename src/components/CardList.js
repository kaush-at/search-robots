import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  // remove this after check the Errorboundary
  // if (true) {
  //   throw new Error("NOOOOOOOO");
  // }
  const robotArray = robots.map((robot, i) => {
    return (
      <Card
        key={i}
        id={robots[i].id}
        email={robots[i].email}
        name={robots[i].name}
      />
    );
  });
  return <div>{robotArray}</div>;
  //   });
  //   return { robotArray };
};

export default CardList;
