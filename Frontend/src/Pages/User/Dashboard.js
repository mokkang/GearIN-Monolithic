import React from "react";
import Layout from "../../Components/Layout/Layout";
import UserMenu from "../../Components/Layout/UserMenu";
import { useAuth } from "../../Context/Auth";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard | GearIN"}>
      <div className="container-flui m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h4>Name: {auth?.user?.name}</h4>
              <h4>Phone: {auth?.user?.phone}</h4>
              <h4>Email: {auth?.user?.email}</h4>
              <h4>Address: {auth?.user?.address}</h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
