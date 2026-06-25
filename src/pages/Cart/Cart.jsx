import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../../store/cartSlice.js";
import "./Cart.css";

function Cart() {
  const dispatch = useDispatch();
  const { items, ingredientsCost } = useSelector((state) => state.cart);

  const pizzaSubTotal = items.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  const grandTotal = pizzaSubTotal + ingredientsCost;

  const handleIncrease = (id) => dispatch(increaseQuantity(id));
  const handleDecrease = (id) => dispatch(decreaseQuantity(id));
  const handleRemove = (id) => dispatch(removeFromCart(id));

  const handlePay = () => {
    if (items.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert(`Payment successful! Total paid: ₹${grandTotal.toFixed(2)}`);
    dispatch(clearCart());
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart">
      <div className="cart__layout">
        <div className="cart__left">
          <h2 className="cart__heading">My Cart</h2>

          {items.length === 0 ? (
            <p className="cart__empty">Your cart is empty.</p>
          ) : (
            <>
              {items.map((item) => (
                <div key={item.id} className="cart__item">
                  <div className="cart__item-img-wrap">
                    <img src={item.image} alt={item.name} className="cart__item-img" onError={(e) => {e.target.src = "https://via.placeholder.com/60x60?text=Pizza";}}/>
                  </div>

                  <div className="cart__item-info">
                    <div className="cart__item-header">
                      <span className={`cart__item-dot cart__item-dot--${item.type}`}></span>

                      <span className="cart__item-name">{item.name}</span>
                    </div>

                    <p className="cart__item-unit">
                      &#8377;{Number(item.price).toFixed(0)}
                    </p>
                  </div>

                  <div className="cart__item-controls">
                    <button className="cart__qty-btn" onClick={() => handleDecrease(item.id)}>
                      &#8722;
                    </button>
                    
                    <span className="cart__qty-value">{item.quantity}</span>

                    <button className="cart__qty-btn" onClick={() => handleIncrease(item.id)}>
                      &#43;
                    </button>
                  </div>

                  <span className="cart__item-total">
                    &#8377;{(Number(item.price) * item.quantity).toFixed(2)}
                  </span>

                  <button className="cart__item-delete" onClick={() => handleRemove(item.id)} title="Remove item">
                    🗑
                  </button>
                </div>
              ))}

              <div className="cart__subtotal">
                <span>Sub Total : </span>

                <span>&#8377;{pizzaSubTotal.toFixed(2)}</span>
              </div>
            </>
          )}
        </div>

        <div className="cart__right">
          <h3 className="cart__summary-heading">The total amount of</h3>

          <div className="cart__summary-table">
            <div className="cart__summary-row">
              <span className="cart__summary-label">Pizza</span>

              <span className="cart__summary-value">
                &#8377;{pizzaSubTotal.toFixed(2)}
              </span>
            </div>

            <div className="cart__summary-row">
              <span className="cart__summary-label">
                Ingredients&#8964;
              </span>

              <span className="cart__summary-value">
                &#8377;{ingredientsCost.toFixed(2)}
              </span>
            </div>

            <div className="cart__summary-divider"></div>

            <div className="cart__summary-total-row">
              <span className="cart__summary-total-label">Total :</span>

              <span className="cart__summary-total-value">
                &#8377;{grandTotal.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="cart__actions">
            <button className="cart__btn cart__btn--pay" onClick={handlePay}>Pay</button>

            <button className="cart__btn cart__btn--clear" onClick={handleClear}>Clear</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Cart;