import React from "react";
import css from "./style.module.css";
import axios from "../../axios-orders";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";

class OrderPage extends React.Component {
  state = {
    orders: [],
    loading: false,
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    axios
      .get("/orders.json")
      .then((response) => {
        this.setState({ orders: Object.entries(response.data).reverse() });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <div className={css.OrderPage}>
        {this.state.loading ? (
          <Spinner />
        ) : (
          this.state.orders.map((el) => (
            <Order key={el[0]} order={el[1]}></Order>
          ))
        )}
      </div>
    );
  }
}

export default OrderPage;
