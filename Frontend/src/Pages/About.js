import React from "react";
import Layout from "./../Components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us | GearIN"}>
      <div className="container background">
        <div className="row contactus">
          <div className="col-md-12">
            <img
              src="/images/About-Us-Banner-2.jpg"
              alt="contact us"
              style={{ width: "100%" }}
            />
            <p className="text-center"><strong>“So many books, so little time.” </strong>― Frank Zappa</p>
          </div>
          <div className="col-md-12">
            <p className="text-justify mt-2">
              Books are an infinite source of knowledge. The only thing that can replace a book is another book. But how to find that title which isn’t available in the bookstore near your home? Yes, you guessed it right—online Bookstores. In one click, you can browse through thousands of titles. Find your favourite book in the format you prefer at our online bookstore – GearIN.
            </p>
            <h3>Our Aim And Services</h3>
            <p>At GearIN, we support the idea of more books with the least expenditure. Our goal is to provide readers with the books they want without them having to put themselves on a book-buying ban. Thus, we have introduced a wide range of categories to offer the best quality books at affordable rates.</p>
            <p>Our vision is to educate every Indian to the farthest extent and be a part of their excelling journey. Our experts run multiple quality checks to provide you with the best services at affordable prices. We also keep updating our catalogue from time to time, so you don’t miss the latest releases.  </p>

            <h3>Shipping Details</h3>
            <p>We provide PAN India shipping, including the following metro cities – Mumbai, Pune, Delhi, Kolkata, Chandigarh, Chennai, Lucknow etc.</p>
          </div>
          <div className="col-md-12">
            <h3>CONCLUSION</h3>
            <p className="text-justify mt-2">
              At GearIN, we strive to provide the best services to our buyers in the era of competition, overpricing and forgery. We aim to provide services through which the user can buy the best books online at the cheapest prices. Here, you can get copies of your favourite books in a pocket-friendly way.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
