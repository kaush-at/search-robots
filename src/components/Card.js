import React from "react";

// import "./Card.css";
// class Card extends Component {
//   render() {
//     return <div>Hello</div>;
//   }
// }

// 2). or withing the parameteres we can do destructuring directly instead of props {name, email, id}
const Card = (props) => {
  // 1). instead of having props.id etc we can destructuring
  const { name, id, email } = props;
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
      <img src={`https://robohash.org/${id}?200x200`} alt="robo images" />
      <div>
        {/* <h2>{props.name}</h2> */}
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
