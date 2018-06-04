import React from "react";
const rating = numb => {
  const arr = [];
  for (let i = 0; i < numb; i++) {
    arr.push(i);
  }
  return arr.map((star, i) => <i key={i} className="fa fa-star" />);
};

export default rating;
