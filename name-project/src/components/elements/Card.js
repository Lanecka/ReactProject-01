import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/reducers/basket';
import { cardDepiction } from '../../store/reducers/cardInfo';
import { v4 as uuidv4 } from 'uuid';
import './Card.css';

function Card({ name, description, price, weight, img, id }) {
	const dispatch = useDispatch()

	const handleClickCard = () => {
		let item = {
			id: id,
			idOld: id,
			name: name,
			description: description,
			img: img,
			price: price,
			weight: weight
		}
		dispatch(cardDepiction(item))
	}

	const handleAddProduct = (e) => {
		let item = {
			id: uuidv4(),
			idOld: id,
			name: name,
			description: description,
			img: img,
			price: price,
			weight: weight
		}
		dispatch(addProduct(item))
		e.preventDefault()
	}

	return (
		<Link to={`/depiction/${id}`} onClick={handleClickCard} className="card">
			<div className="card__preview">
				<img
					className="card__preview-img"
					src={img}
					alt={name}
				/>
				<h2 className="card__title">{name}</h2>
			</div>
			<p className="card__description">{description}</p>
			<div className="card__footer">
				<div className="card__footer-price" />
				{price} ₽ / {weight} г
				<button onClick={handleAddProduct} className="card__button" >
					+
				</button>
			</div>
		</Link>
	);
}

export default Card;