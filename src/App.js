import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Explores from "./pages/Explore/Explores";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import PlaceOrder from "./pages/Login/PlaceOrder/PlaceOrder";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Register from "./pages/Login/Register/Register";
import NotMatch from "./pages/NotMatch/NotMatch";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/explore">
              <Explores></Explores>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/placeorder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotMatch></NotMatch>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
