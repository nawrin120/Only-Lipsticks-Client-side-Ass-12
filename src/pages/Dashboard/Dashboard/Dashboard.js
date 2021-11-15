import React from "react";
import "./Dashboard.css";

import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import AddLipstick from "../AddLipstick/AddLipstick";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageLipsticks from "../ManageLipsticks/ManageLipsticks";
import Payment from "../Payment/Payment";
import Orders from "../Orders/Orders";

import MangeOrders from "../ManageOrders/MangeOrders";

import Review from "../Review/Review";
import DashBoardHome from "../DashboardHome/DashBoardHome";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import useAuth from "../../../hooks/useAuth";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin, logOut } = useAuth();
  return (
    <div className="dash-container">
      <h1 className="dashbord">Dashboard</h1>
      <div className="row dash-body">
        <div className="col-4  dash-link-container ">
          <div className="dash-link">
            <Link to="/home">
              {" "}
              <img
                className="desh-logo"
                src="https://i.ibb.co/YWBTHwJ/makeup.png"
                alt=""
              />
            </Link>
            <div className="route-link">
              <Link to={`${url}`}>Dashboard</Link>
              {!admin ? (
                <div className="usePannel">
                  <Link to={`${url}/pay`}>Payment</Link>
                  <Link to={`${url}/Order`}>My Order</Link>
                  <Link to={`${url}/revirew`}>Review</Link>
                </div>
              ) : (
                <div className="adminPannel">
                  <Link to={`${url}/makeAdmin`}>Make Admin</Link>
                  <Link to={`${url}/addLipstick`}>Add Lipstick</Link>

                  <Link to={`${url}/manageLipsticks`}>Manage Lipsticks</Link>
                  <Link to={`${url}/manageOrders`}>Manage Orders</Link>
                </div>
              )}

              <Link to="/login">
                <button className="log-out" onClick={logOut}>
                  Log Out
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-8">
          <Switch>
            <Route exact path={path}>
              <DashBoardHome></DashBoardHome>
            </Route>

            <Route path={`${path}/pay`}>
              <Payment></Payment>
            </Route>

            <Route path={`${path}/revirew`}>
              <Review></Review>
            </Route>

            <Route path={`${path}/Order`}>
              <Orders></Orders>
            </Route>

            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/addLipstick`}>
              <AddLipstick></AddLipstick>
            </AdminRoute>

            <AdminRoute path={`${path}/manageOrders`}>
              <MangeOrders></MangeOrders>
            </AdminRoute>

            <AdminRoute path={`${path}/manageLipsticks`}>
              <ManageLipsticks></ManageLipsticks>
            </AdminRoute>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
