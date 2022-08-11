import React, { Component } from 'react';
import BurgerIngredientsStyle from '../BurgerIngredients/BurgerIngredients.module.css';
import '../Tab/Tab.js';
import Ingredient from '../Ingredient/Ingredient.jsx';
import mas from "../Mas.js";
import Tabs from '../Tab/Tab.js';

const bun = mas.filter(el => el.type === 'bun');
const main = mas.filter(el => el.type === 'main');
const sauce = mas.filter(el => el.type === 'sauce');

class BurgerIngredients extends Component {
    render() {
        return (
            <div className={`${BurgerIngredientsStyle.burgerCatalog}`}>
                <h2 className={`${BurgerIngredientsStyle.title} text text_type_main-large`}>Соберите бургер</h2>
                <Tabs />
                <div className={`${BurgerIngredientsStyle.chapter}`}>
             <h3 className={`${BurgerIngredientsStyle.title} text text_type_main-medium`}>Булки</h3>
             <div className={`${BurgerIngredientsStyle.burgerGrid}`}>
                {bun.map(function(el) {
                  return <Ingredient arr={el} key={el._id} />;
                })}
             </div>
             <h3 className={`${BurgerIngredientsStyle.title} text text_type_main-medium`}>Соусы</h3>
             <div className={`${BurgerIngredientsStyle.burgerGrid}`}>
             {sauce.map(function(el) {
                  return <Ingredient arr={el} key={el._id} />;
                })}
             </div>
             <h3 className={`${BurgerIngredientsStyle.title} text text_type_main-medium`}>Начинки</h3>
             <div className={`${BurgerIngredientsStyle.burgerGrid}`}>
             {main.map(function(el) {
                  return <Ingredient arr={el} key={el._id} />;
                })}
             </div>
           </div>
                
            </div>
        );
    }
}

export default BurgerIngredients;