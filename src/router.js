import { Switch, Route } from "react-router-dom";
import Donation from "./Pages/DonationPage";
import Homepage from "./Pages/Homepage";
import TestComponent from "./TestComponent";

const Routes = () => {
  return (
    <Switch>
      <Route path={"/test"} exact component={TestComponent} />
      <Route path={"/donate"} exact component={Donation} />
      <Route path={"/"} exact component={Homepage} />
    </Switch>
  );
};

export default Routes;
