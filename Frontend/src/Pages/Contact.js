import React from "react";
import Layout from "./../Components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact Us | GearIN"}>
      <div className="row contactus contact background">
        <div className="col-md-6 ">
          <img
            src="/images/contact-us.jpg"
            alt="contact-us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and information about our product or services, feel free to call us anytime.
          </p>
          <p className="text-justify mt-2">
            We are available 24x7.
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.support@gearin.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (Toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
