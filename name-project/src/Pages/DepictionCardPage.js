import { useSelector } from 'react-redux';
import { products } from '../products';
import HeaderProducts from '../components/blocks/Header/HeaderProducts';
import CardDepiction from '../components/elements/CardDepiction';
import BtnBack from '../components/ui/BtnBack';

function Depiction() {
  const card = useSelector(state => state.card.card)
  const product = products.find(i => i.id == parseInt(window.location.pathname.match(/\d+/)))

  return (
    <div className="depiction">
      <HeaderProducts
        btnBack={<BtnBack />}
      />

      <main className="main">
        <div className="container">
          {!!card.name ? <CardDepiction
            id={card.id}
            name={card.name}
            description={card.description}
            img={card.img}
            price={card.price}
            weight={card.weight}
          /> : <CardDepiction
            id={product.id}
            name={product.name}
            description={product.description}
            img={`${product.img}`}
            price={product.price}
            weight={product.weight}
          />
          }
        </div>
      </main>
    </div>
  )
}

export default Depiction;