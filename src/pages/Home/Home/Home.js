import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import CustomersReviews from "../CustomersReviews/CustomersReviews";
import Lipsticks from "../Lipstick/Lipsticks";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Brand></Brand>
      <Lipsticks></Lipsticks>
      <CustomersReviews></CustomersReviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
