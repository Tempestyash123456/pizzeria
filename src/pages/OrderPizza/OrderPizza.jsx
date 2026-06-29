import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice.js";
import pizzas from "../../data/pizzas.js";
import { useToast } from "../../context/ToastContext.jsx";
import "./OrderPizza.css";

export default function OrderPizza() {
    const dispatch = useDispatch();
    const { showToast } = useToast();

    const handleAddToCart = (pizza) => {
        dispatch(
            addToCart({
                id: pizza.id,
                name: pizza.name,
                price: Number(pizza.price),
                image: pizza.image,
                type: pizza.type,
            })
        );
        showToast(`${pizza.name} added to cart!`, "success");
    };

    return (
        <div className="order-pizza">
            <div className="order-pizza__grid">
                {pizzas.map((pizza) => (
                    <div key={pizza.id} className="pizza-card">
                        <div className="pizza-card__left">
                            <div className="pizza-card__header">
                                <h3 className="pizza-card__name">
                                    {pizza.name}
                                </h3>

                                <span className={`pizza-card__dot pizza-card__dot--${pizza.type}`}></span>
                            </div>

                            <p className="pizza-card__price">
                                &#8377;{Number(pizza.price).toFixed(2)}
                            </p>
                        </div>

                        <div className="pizza-card__middle">
                            <p className="pizza-card__description">{pizza.description}</p>

                            <p className="pizza-card__meta">
                                <span className="pizza-card__label"> Ingredients : </span>
                                {pizza.ingredients.join(",")}
                            </p>

                            <p className="pizza-card__meta">
                                <span className="pizza-card__label">Toppings : </span>
                                {pizza.topping.join(",")}
                            </p>
                        </div>


                        <div className="pizza-card__right">
                            <img src={pizza.image} alt={pizza.name} className="pizza-card__img" onError={(e) => { e.target.src = "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg?w=2000"; }} />
                            <button className="pizza-card__btn" onClick={() => handleAddToCart(pizza)}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}