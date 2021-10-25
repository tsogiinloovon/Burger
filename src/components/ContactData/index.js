import React from "react";
import Button from "../General/Button";
import css from "./style.module.css";
import axios from "../../axios-orders";
import Spinner from "../General/Spinner";
import { withRouter } from "react-router";
class ContactData extends React.Component {
  state = {
    name: null,
    city: null,
    street: null,
    loading: false,
  };
  changeName = (e) => {
    this.setState({ name: e.target.value });
  };
  changeStreet = (e) => {
    this.setState({ street: e.target.value });
  };
  changeCity = (e) => {
    this.setState({ city: e.target.value });
  };

  saveOrders = () => {
    const order = {
      orts: this.props.ingredients,
      dun: this.props.price,
      hayga: {
        name: this.state.name,
        city: this.state.city,
        street: this.state.street,
      },
    };
    this.setState({ loading: true });
    axios
      .post("/orders.json", order)
      .then((response) => {
        console.log("order amjilttia");
      })
      .finally(() => {
        this.setState({ loading: false });
        this.props.history.replace("/orders");
      });
  };

  render() {
    return (
      <div className={css.ContactData}>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div>
            <input
              onChange={this.changeName}
              typeo="text"
              name="name"
              placeholder="Таны нэр"
            ></input>
            <input
              onChange={this.changeStreet}
              type="text"
              name="street"
              placeholder="Таны гэрийн хаяг"
            ></input>
            <input
              onChange={this.changeCity}
              typeo="text"
              name="city"
              placeholder="Таны хот"
            ></input>
            <Button
              text="ИЛГЭЭХ"
              btnType="Success"
              daragdsan={this.saveOrders}
            ></Button>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(ContactData);
