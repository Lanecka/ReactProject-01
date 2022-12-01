// Храниние данных о товаре
import { products } from '../products';
// Карточка товара меню:
import HeaderProducts from '../components/blocks/Header/HeaderProducts';
import Card from '../components/elements/Card';


function Products() {
  return (
    <>
      <HeaderProducts
        title={'НАША ПРОДУКЦИЯ'}
      />

      <main className="main">
        <div className="container">
          <div className="menu">
            {products.map(item => {
              const { id, name, description, price, weight, img } = item;
              return (
                <Card
                  key={id}
                  id={id}
                  img={img}
                  name={name}
                  description={description}
                  price={price}
                  weight={weight}
                />
              )
            })}
          </div>
        </div>
      </main>
    </>
  )
}

export default Products;