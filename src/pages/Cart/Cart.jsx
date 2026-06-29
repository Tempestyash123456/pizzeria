import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../../store/cartSlice.js";
import { useToast } from "../../context/ToastContext.jsx";
import "./Cart.css";

function Cart() {
  const dispatch = useDispatch();
  const { showToast } = useToast();
  const { items, ingredientsCost, ingredients } = useSelector((state) => state.cart);
  const [showIngredients, setShowIngredients] = useState(false);

  const pizzaOnlySubTotal = items.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  const itemIngredientsTotal = items.reduce(
    (sum, item) => sum + (item.ingredientsCost || 0) * item.quantity,
    0
  );

  const pizzaSubTotal = pizzaOnlySubTotal + itemIngredientsTotal;
  const displayIngredientsCost = ingredientsCost + itemIngredientsTotal;
  const grandTotal = pizzaOnlySubTotal + displayIngredientsCost;

  const handleIncrease = (id) => dispatch(increaseQuantity(id));
  const handleDecrease = (id) => dispatch(decreaseQuantity(id));

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    showToast("Item removed from cart.", "info");
  };

  const handlePay = () => {
    if (items.length === 0) {
      if (ingredients && ingredients.length > 0) {
        showToast("Only ingredients can't be purchased, you need to add atleast one pizza", "error");
      } else {
        showToast("Your cart is empty!", "error");
      }
      return;
    }
    showToast(
      `Payment successful! Total paid: ₹${grandTotal.toFixed(2)}`,
      "success"
    );
    dispatch(clearCart());
  };

  const handleClear = () => {
    if (items.length === 0 && (!ingredients || ingredients.length === 0)) {
      showToast("Cart is already empty!", "info");
      return;
    }
    dispatch(clearCart());
    showToast("Cart cleared.", "info");
  };

  return (
    <div className="cart">
      <div className="cart__layout">

        <div className="cart__left">
          <h2 className="cart__heading">My Cart</h2>
          {items.length === 0 ? (
            <p className="cart__empty">
              {(!ingredients || ingredients.length === 0) 
                ? "Your cart is empty." 
                : "You haven't added any pizzas yet."}
            </p>
          ) : (
            <>
              {items.map((item) => (
                <div key={item.id} className="cart__item">
                  <div className="cart__item-img-wrap">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart__item-img"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/60x60?text=Pizza";
                      }}
                    />
                  </div>

                  <div className="cart__item-info">
                    <div className="cart__item-header">
                      <span
                        className={`cart__item-dot cart__item-dot--${item.type}`}
                      ></span>
                      <span className="cart__item-name">{item.name}</span>
                    </div>
                    <p className="cart__item-unit">
                      &#8377;{Number(item.price).toFixed(0)}
                    </p>
                    {item.ingredients && item.ingredients.length > 0 && (
                      <div className="cart__item-ingredients">
                        <small style={{ color: "#777" }}>
                          + {item.ingredients.map(i => i.tname).join(", ")} (&#8377;{item.ingredientsCost.toFixed(2)})
                        </small>
                      </div>
                    )}
                  </div>

                  <div className="cart__item-controls">
                    <button
                      className="cart__qty-btn"
                      onClick={() => handleDecrease(item.id)}
                    >
                      &#8722;
                    </button>
                    <span className="cart__qty-value">{item.quantity}</span>
                    <button
                      className="cart__qty-btn"
                      onClick={() => handleIncrease(item.id)}
                    >
                      &#43;
                    </button>
                  </div>

                  <span className="cart__item-total">
                    &#8377;
                    {((Number(item.price) + (item.ingredientsCost || 0)) * item.quantity).toFixed(2)}
                  </span>

                  <button
                    className="cart__item-delete"
                    onClick={() => handleRemove(item.id)}
                    title="Remove item"
                  >
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
                &#8377;{pizzaOnlySubTotal.toFixed(2)}
              </span>
            </div>
            <div className="cart__summary-row">
              <span className="cart__summary-label">
                Ingredients
                {ingredients && ingredients.length > 0 && (
                  <button 
                    className="cart__summary-dropdown-btn"
                    onClick={() => setShowIngredients(!showIngredients)}
                    title="View selected ingredients"
                  >
                    {showIngredients ? '▲' : '▼'}
                  </button>
                )}
              </span>
              <span className="cart__summary-value">
                &#8377;{displayIngredientsCost.toFixed(2)}
              </span>
            </div>
            {showIngredients && ingredients && ingredients.length > 0 && (
              <div className="cart__ingredients-dropdown">
                {ingredients.map(ing => (
                  <div key={ing.id} className="cart__ingredient-item">
                    <span>{ing.tname}</span>
                    <span>&#8377;{ing.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="cart__summary-divider"></div>
            <div className="cart__summary-total-row">
              <span className="cart__summary-total-label">Total :</span>
              <span className="cart__summary-total-value">
                &#8377;{grandTotal.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="cart__actions">
            <button className="cart__btn cart__btn--pay" onClick={handlePay}>
              Pay
            </button>
            <button
              className="cart__btn cart__btn--clear"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Cart;