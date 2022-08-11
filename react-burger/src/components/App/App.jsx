import React from 'react';
import AppHeader from '../App-header/App-header';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import AppStyle from "../App/App.module.css";
import mas from '../Mas.js';



function App() {
  return (
    <div className={AppStyle.App}>
      <AppHeader />
      <main className={AppStyle.container}>
        <BurgerIngredients arr={mas}/>
        <BurgerConstructor />
      </main>
    
    </div>
  );
}

export default App;
