import React from 'react';
import './App.css';
import Meals from './sections/meals/meals.js';
import Orders from './sections/orders/orders.js';
import { fetchMeals } from './services/fetchMeals.js';
import { getOrders } from './services/getOrders.js';
import { postOrder } from './services/postOrder.js';
class App extends React.Component {
  state = {
    meals: [], orders: [], mealSelect: ''
  }

  getMeals = async () => {
    const res = await fetchMeals();
    this.setState({ meals: res.data });
  }

  getOrders = async () => {
    const res = await getOrders();
    console.log(res.data);
    this.setState({ orders: res.data });
  }

  postOrder = async (data) => {
    await postOrder(data);
    this.getOrders();
  }

  componentDidMount() {
    this.getMeals();
    this.getOrders();
  }

  ableButton = (e) => {
    const meals = Array.from(document.querySelectorAll('#selected'));
    if (this.state.mealSelect !== '') {
      meals.map((x) => {
        x.id = '';
      });
    }
    this.setState({ mealSelect: String(e.target.attributes.meal_id.textContent) });
    e.target.id = 'selected';
    const button = document.getElementById('submit');
    button.removeAttribute('disabled');

  }

  checkOrder = (event) => {
    event.preventDefault();
    const button = document.getElementById('submit');
    const selectedMeal = document.getElementById('selected');
    selectedMeal.id = '';
    button.setAttribute('disabled', '');

    const data = { "meal_id": String(this.state.mealSelect), "user_id": "Chanchito triste" }
    this.postOrder(data);
  }

  render() {
    return (
      <div className="App" >
        <Meals meals={this.state.meals} selectMeal={this.ableButton} mealSelect={this.state.mealSelect} checkOrder={this.checkOrder} />
        <Orders orders={this.state.orders} meals={this.state.meals} />
      </div>
    );
  }
}


export default App;