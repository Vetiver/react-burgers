import React, { Component } from 'react';
import ElementBurger from '../ElementsBurger/ElementsBurger.js';
import Stuffing from '../Stuffing/Stuffing.jsx';
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorStyle from '../BurgerConstructor/BurgerConstructor.module.css';
import mas from '../Mas.js'

const ingredients = mas.filter(el => el.type === 'sauce' || el.type === 'main')

class BurgerConstructor extends Component {
    render() {
        return (
            <div className={`${BurgerConstructorStyle.burgerContainer}`}>
              <ElementBurger>
                <div className={`${BurgerConstructorStyle.ingredientsBar}`}>
                  {ingredients.map(el =>{
                    return <Stuffing el={el}  key={el._id}/>
                  })}
                </div>
              </ElementBurger>
              <div className={`${BurgerConstructorStyle.counter}`}>
                <div className={`${BurgerConstructorStyle.counterContainer}`}>
                  <h2 className={`text text_type_main-large`}>610</h2>
                  <CurrencyIcon type="primary" />
                </div>
              <Button type="primary" size="medium">
              Оформить заказ
              </Button>
              </div>
            </div>
          
        );
    }
}


export default BurgerConstructor;