import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeProductBasket } from '../../store/reducers/basket';
import { cardDepiction } from '../../store/reducers/cardInfo';
import './Card.css';

function BasketProducts({ id, img, name, price, description, weight, idOld }) {
  const dispatch = useDispatch()

  let item = {
    id: id,
    idOld: idOld,
    name: name,
    description: description,
    img: img,
    price: price,
    weight: weight
  }

  const handleClickCard = () => {
    dispatch(cardDepiction(item))
  }

  const handleRemoveProduct = (e) => {
    dispatch(removeProductBasket(item))
    e.preventDefault()
  }
  return (
    <Link to={`/depiction/${idOld}`} onClick={handleClickCard} className="basketCard">
      <div className="basketCard__preview">
        <img className="basketCard__preview-img" src={img} alt={name} />
        <h5 className="basketCard__preview-title">{name}</h5>
      </div>
      <div className="basketCard__choice">
        <div className="basketCard__choice-price">{price} ₽</div>
        <button
          onClick={handleRemoveProduct}
          className="card__buttonClose">
          X
        </button>
      </div>
    </Link>
  )
}

export default BasketProducts;