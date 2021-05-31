import { Switch, Route } from "react-router-dom";
import Donation from "./Pages/DonationPage";
import TestComponent from "./TestComponent";

const Routes = () => {
  return (
    <Switch>
      <Route path={"/test"} exact component={TestComponent} />
      <Route path={"/donate"} exact component={Donation} />
    </Switch>
  );
};

export default Routes;
