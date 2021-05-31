import { Switch, Route } from "react-router-dom";
import TestComponent from "./TestComponent"

const Routes = () => {
  return (
    <Switch>
      <Route path={"/test"} exact component={TestComponent} />
      
    </Switch>
  );
};

export default Routes
