import React, { Component } from 'react';
import AppHeaderStyle from "../App-header/App-header.module.css";
import { BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'

class AppHeader extends Component {
    render() {
        return (
            <div className={AppHeaderStyle.appHeader}>
              <div className={`${AppHeaderStyle.constructorContainer} ${AppHeaderStyle.firstMargin}`}>
                <BurgerIcon type="primary" />
                <p className={`text_type_main-default ${AppHeaderStyle.constructorTitle}`}>Конструктор</p>
              </div>
              <div className={`${AppHeaderStyle.constructorContainer} ${AppHeaderStyle.secondMargin}`}>
                <ListIcon type="secondary" />
                <p className={`${AppHeaderStyle.constructorTitle}  text_type_main-default text_color_inactive`}>Лента заказов</p>
              </div>
              <Logo />
              <div className={`${AppHeaderStyle.constructorContainer} ${AppHeaderStyle.lastMargin}`}>
                <ProfileIcon type="secondary" />
                <p className={`${AppHeaderStyle.constructorTitle} text_type_main-default text_color_inactive`}>Личный кабинет</p>
              </div>
            </div>
        );
    }
}

export default AppHeader;