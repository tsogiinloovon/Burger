import styles from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/SideBar";
import { Component } from "react";
import OrderPage from "../OrderPage";
import { Route, Switch } from "react-router-dom";
import { ShippingPage } from "../ShippingPage";
class App extends Component {
  state = {
    showSidebar: false,
  };
  toggleSidebar = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };
  render() {
    return (
      <div>
        <Toolbar toggleSidebar={this.toggleSidebar} />
        <SideBar
          showSidebar={this.state.showSidebar}
          toggleSidebar={this.toggleSidebar}
        />
        <main className={styles.Content}>
          <Switch>
            <Route path="/orders" component={OrderPage} />
            <Route path="/ship" component={ShippingPage} />
            <Route path="/" component={BurgerPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
