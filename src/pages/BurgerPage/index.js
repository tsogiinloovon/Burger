import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummery";

import Spinner from "../../components/General/Spinner";
import { connect } from "react-redux"; //high order component dont return jsx ... , only add extra chance to that component

const INGRDIENTS_PRICE = { salad: 150, cheese: 250, becon: 800, meat: 1500 };
const INGRDIENTS_NAMES = {
  becon: "Гахайн мах",
  cheese: "Бяслага",
  meat: "Үхний мах",
  salad: "Салад",
};
class BurgerBuilder extends Component {
  state = {
    purchasing: false,
    confirmOrder: false,
  };
  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };
  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };
  ortsNemeh = (type) => {
    const NewIngredients = { ...this.props.burgeriinOrts };
    NewIngredients[type]++;
    const NewPrice = this.props.niitUne + INGRDIENTS_PRICE[type];
    this.setState({
      purchasing: NewPrice > 0,
      ingredients: NewIngredients,
      totalPrice: NewPrice,
    });
  };
  ortsHasah = (type) => {
    const NewIngredients = { ...this.props.burgeriinOrts };
    NewIngredients[type]--;
    const NewPrice = this.props.niitUne - INGRDIENTS_PRICE[type];
    this.setState({
      purchasing: NewPrice > 0,
      ingredients: NewIngredients,
      totalPrice: NewPrice,
    });
  };

  continueOrder = () => {
    const params = [];

    for (let orts in this.props.burgeriinOrts) {
      params.push(orts + "=" + this.props.burgeriinOrts[orts]);
    }
    params.push("dun=" + this.props.niitUne);

    this.props.history.push({
      pathname: "/ship",
      search: params.join("&"),
    });
    this.closeConfirmModal();
  };

  render() {
    const disabledIngrdients = { ...this.props.burgeriinOrts };

    for (let key in disabledIngrdients) {
      disabledIngrdients[key] = disabledIngrdients[key] <= 0;
    }

    return (
      <div>
        <Modal
          show={this.state.confirmOrder}
          closeConfirmModal={this.closeConfirmModal}
        >
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              price={this.props.niitUne}
              onCancel={this.closeConfirmModal}
              onContinue={this.continueOrder}
              ingredientsNames={INGRDIENTS_NAMES}
              ingredients={this.props.burgeriinOrts}
            />
          )}
        </Modal>
        <Burger orts={this.props.burgeriinOrts} />
        <BuildControls
          showConfirmModal={this.showConfirmModal}
          closeConfirmModal={this.closeConfirmModal}
          ingredientsNames={INGRDIENTS_NAMES}
          disabled={!this.state.purchasing}
          price={this.props.niitUne}
          disabledIngrdients={disabledIngrdients}
          ortsNemeh={this.props.burgeriinOrtsNem}
          ortsHasah={this.props.burgereesOrtsHas}
        />
      </div>
    );
  }
}

// configuration redux

const a = (state) => {
  return {
    burgeriinOrts: state.ingredients,
    niitUne: state.totalPrice,
  };
};

const b = (dispatch) => {
  return {
    burgeriinOrtsNem: (ortsNer) =>
      dispatch({ type: "ADD_INGREDIENT", nemehOrts: ortsNer }),
    burgereesOrtsHas: (ortsNer) =>
      dispatch({ type: "REMOVE_INGREDIENT", hasahOrts: ortsNer }),
  };
};

export default connect(a, b)(BurgerBuilder);
