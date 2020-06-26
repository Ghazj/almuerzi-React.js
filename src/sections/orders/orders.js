import React from 'react';
import './orders.css';

function Orders(props) {

    let mealId = (meal, order) => {
        return meal._id === order.meal_id;
    }

    return (
        <div id="orders">
            <ul id="orders-list">
                {
                    props.orders !== [] && props.orders.map((x, i) => {
                        return (<li key={i} order_id={x._id}> {props.meals.find(meal => mealId(meal, x)).name + ' - ' + x.user_id} </li>);
                    })
                }
            </ul>
        </div>
    );
}

export default Orders;