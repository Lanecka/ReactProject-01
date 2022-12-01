import ButtonPush from '../../ui/Button';
import { useSelector } from 'react-redux';
import './Footer.css';

function Footer() {
  const { pricesProducts } = useSelector(state => state.basket)

  return (
    <footer className="footerBasket">
      <div className="container">
        <div className="footerBasket__description">
          <div className="footerBasket__description-check">
            <h3>Заказ на сумму:</h3>
            <h4>{pricesProducts} ₽</h4>
          </div>
          <div className="buttons">
            <ButtonPush btnText={'Оформить заказ'} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;