import React from "react";

// import components
import BusinessCard from "../cards/BusinessCards";
import SearchBusiness from "./SearchBusiness";
import Pagination from "./Pagination";
import FlashMessagesList from '../flash/FlashMessagesList';

const Businesses = () => {
  const DivStyle = {
    padding: "padding: 30px 0px"
  };
  return (
    <div>
      <FlashMessagesList/>
      <SearchBusiness />
      <div className="container-fluid px-5 my-5">
        <h1
          className="display-4 text-center my-5 wow fadeInDown"
          style={DivStyle}
        >
          Some Top Firms
        </h1>
        <hr className="hr-class" />
        <br />
        <div className="card-deck wow fadeIn" />
        <BusinessCard />
        <Pagination/>
      </div>
    </div>
  );
};

export default Businesses;
