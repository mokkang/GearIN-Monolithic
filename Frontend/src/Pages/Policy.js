import React from "react";
import Layout from "./../Components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="contactus privacy">
        <div className="policy-image">
          <img
            src="/images/privacy_policy_hero.svg"
            alt="privacy policy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="policy-info">
          <h3>WHAT DO WE DO WITH YOUR INFORMATION?</h3>
          <p>When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.</p>
          <p>When you browse our store, we also automatically receive your computer's internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.</p>
          <p>Email marketing (if applicable): With your permission, we may send you emails about our store, new products and other updates.</p>

          <h3>CONSENT</h3>
          <h6>How do you get my consent?</h6>
          <p>When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.</p>
          <p>If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.</p>
          <h6>How do I withdraw my consent?</h6>
          <p>If after you opt in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at : <strong>support@gearin.com</strong></p>

          <h3>DISCLOSURE</h3>
          <p>We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service</p>

          <h3>COOKIES</h3>
          <p>We use cookies to maintain session of your user. It is not used to personally identify you on other websites.</p>

          <h3>AGE OF CONSENT</h3>
          <p>By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</p>

          <h3>CHANGES TO THIS PRIVACY POLICY</h3>
          <p>We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it. If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
