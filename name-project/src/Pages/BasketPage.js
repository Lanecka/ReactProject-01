import { useSelector } from 'react-redux';
import Footer from '../components/blocks/Footer/Footer';
import BasketProducts from '../components/elements/BasketCard';
import HeaderProducts from '../components/blocks/Header/HeaderProducts';
import BtnBack from '../components/ui/BtnBack';

function Basket() {
  const basket = useSelector(state => state.basket.basket)

  return (
    <>
      <HeaderProducts
        btnBack={<BtnBack />}
        title={'КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ'}
        basket
      />

      <main className="main">
        <div className="container">
          <div className="basket">
            {basket.length !== 0 ? basket.map(item => {
              const { id, name, price, img, weight, description, idOld } = item
              return (
                <BasketProducts
                  key={id}
                  id={id}
                  idOld={idOld}
                  img={img}
                  name={name}
                  price={price}
                  weight={weight}
                  description={description}
                />
              )
            }) : <p className="basketCard-empty">Ваша корзина пуста, вернитесь к выбору товара</p>
            }
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Basket;