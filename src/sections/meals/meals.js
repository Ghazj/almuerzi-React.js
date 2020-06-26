import React from 'react';
import './meals.css';

function Meals(props) {

    return (
        <div id="meals">
            <ul id="meals-list">
                {
                    props.meals !== [] && props.meals.map((x, i) => {
                        return (<li key={i} meal_id={x._id} onClick={props.selectMeal}> {x.name} </li>);
                    })
                }
            </ul>
            <form id='check' onSubmit={props.checkOrder} >
                <input meal_select={props.mealSelect} type="hidden" />
                <input id="submit" type="submit" disabled  />
            </form>
        </div>
    );
}

export default Meals;