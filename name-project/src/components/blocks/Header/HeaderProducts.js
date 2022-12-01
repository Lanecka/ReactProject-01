import { BsFillBasket2Fill } from 'react-icons/bs';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ButtonExit from '../../ui/ButtonExit';
import './Header.css';

function HeaderProducts({ title, btnBack, basket }) {
  let [iconOpen, setIconOpen] = useState(false)

  const { pricesProducts } = useSelector(state => state.basket)
  const { count } = useSelector(state => state.basket)

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__containerRight">
          {btnBack}
          <h1 className="header__container-title">{title}</h1>
        </div>
        <div className="header__container-info">
          <div className={basket ? "header__container-info__text none" : "header__container-info__text"}>
            <div className="amount">{count} товара</div>
            <div className="sum">на сумму {pricesProducts} ₽</div>
          </div>
          <Link to="/basket" className="link">
            <BsFillBasket2Fill onClick={() => setIconOpen(iconOpen = !iconOpen)}
              className={basket ? "header__info-icon none" : "header__info-icon"}
            />
          </Link>
          <div className="buttons">
            <Link to='/entry' className="link">
              <ButtonExit btnText={'Выйти'} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderProducts;