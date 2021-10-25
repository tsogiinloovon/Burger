import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummery";

import Spinner from "../../components/General/Spinner";
import { connect } from "react-redux"; //high order component dont return jsx ... , only add extra chance to that component

import * as actions from "../../redux/actions/burgerActions";

const INGRDIENTS_NAMES = {
  becon: "Гахайн мах",
  cheese: "Бяслага",
  meat: "Үхний мах",
  salad: "Салад",
};
class BurgerBuilder extends Component {
  state = {
    confirmOrder: false,
  };
  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };
  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
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

    console.log("disabledIngrdients", disabledIngrdients);
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
          disabled={!this.props.purchasing}
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
const mapStateToProps = (state) => {
  return {
    burgeriinOrts: state.ingredients,
    niitUne: state.totalPrice,
    purchasing: state.purchasing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    burgeriinOrtsNem: (ortsNer) => dispatch(actions.addIngrdients(ortsNer)),
    burgereesOrtsHas: (ortsNer) => dispatch(actions.removeIngrdients(ortsNer)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
