import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addProduct } from '../../store/reducers/basket';
import './Card.css';

function CardDepiction({ img, name, description, price, weight }) {
	const dispatch = useDispatch()

	const handleAddProduct = () => {
		let item = {
			id: uuidv4(),
			name: name,
			description: description,
			img: img,
			price: price,
			weight: weight
		}
		dispatch(addProduct(item))
	}

	return (
		<div className="depictionCard">
			<div className="depictionCard__preview">
				<img
					src={img}
					className="depictionCard__preview-left"
					alt={name}
				/>
				<div className="depictionCard__preview-right">
					<h2 className="depictionCard__preview-right__title">
						{name}
					</h2>
					<p className="depictionCard__preview-right__description">
						{description}
					</p>
					<div className="depictionCard__preview-right__footer">
						<div className="price__depictionCard" /><b> {price} ₽ /</b> {weight} г
						<button onClick={handleAddProduct} className="button">В корзину</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CardDepiction;