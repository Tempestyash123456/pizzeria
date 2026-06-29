import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleIngredient, resetBuild } from "../../store/buildPizzaSlice.js";
import { addCustomizationToItem } from "../../store/cartSlice.js";
import { useToast } from "../../context/ToastContext.jsx";
import ingredients from "../../data/ingredients.js";
import "./BuildPizza.css";

function BuildPizza() {
  const dispatch = useDispatch();
  const { showToast } = useToast();
  const { selectedIngredients, totalCost } = useSelector(
    (state) => state.buildPizza
  );
  const cartItems = useSelector((state) => state.cart.items);
  const [selectedPizzaId, setSelectedPizzaId] = useState("");
  
  const selectedPizza = cartItems.find((item) => item.id === selectedPizzaId);

  const isAlreadyAddedToPizza = (id) => {
    if (!selectedPizza || !selectedPizza.ingredients) return false;
    return selectedPizza.ingredients.some((i) => i.id === id);
  };

  const handlePizzaChange = (e) => {
    setSelectedPizzaId(e.target.value);
    dispatch(resetBuild());
  };

  const isSelected = (id) =>
    selectedIngredients.some((i) => i.id === id);

  const handleToggle = (ingredient) => {
    if (isAlreadyAddedToPizza(ingredient.id)) return;
    dispatch(toggleIngredient(ingredient));
  };

  const handleBuildPizza = () => {
    if (selectedIngredients.length === 0) {
      showToast("Please select at least one ingredient!", "error");
      return;
    }
    
    if (cartItems.length === 0) {
      showToast("Please add a pizza to the cart first!", "error");
      return;
    }

    if (!selectedPizzaId) {
      showToast("Please select a pizza to customize!", "error");
      return;
    }

    dispatch(addCustomizationToItem({
      pizzaId: selectedPizzaId,
      ingredients: selectedIngredients,
      cost: totalCost
    }));
    
    showToast(
      `Ingredients have been added to the selected pizza! Extra Cost: ₹${totalCost}`,
      "success"
    );
    dispatch(resetBuild());
    setSelectedPizzaId("");
  };

  return (
    <div className="build-pizza">
      <p className="build-pizza__subtitle">
        Pizzeria now gives you options to build your own pizza. Customize your
        pizza by choosing ingredients from the list given below
      </p>

      {cartItems.length > 0 && (
        <div className="build-pizza__select-pizza">
          <label htmlFor="pizza-select">Select Pizza to Customize: </label>
          <select 
            id="pizza-select" 
            value={selectedPizzaId} 
            onChange={handlePizzaChange}
            className="build-pizza__dropdown"
          >
            <option value="">-- Select a Pizza --</option>
            {cartItems.map(item => (
              <option key={item.id} value={item.id}>
                {item.name} (Qty: {item.quantity})
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="build-pizza__table">
        {ingredients.map((ingredient) => (
          <div key={ingredient.id} className="build-pizza__row">
            <div className="build-pizza__img-wrap">
              <img
                src={ingredient.image}
                alt={ingredient.tname}
                className="build-pizza__img"
                onError={(e) => {
                  e.target.src =
                    "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg?w=2000";
                }}
              />
            </div>

            <span className="build-pizza__name">{ingredient.tname}</span>

            <span className="build-pizza__price">
              &#8377;{ingredient.price.toFixed(2)}
            </span>

            <input
              type="checkbox"
              className="build-pizza__checkbox"
              checked={isSelected(ingredient.id) || isAlreadyAddedToPizza(ingredient.id)}
              disabled={isAlreadyAddedToPizza(ingredient.id)}
              onChange={() => handleToggle(ingredient)}
              id={`ing-${ingredient.id}`}
            />

            <label
              htmlFor={`ing-${ingredient.id}`}
              className="build-pizza__add-label"
              style={{ 
                opacity: isAlreadyAddedToPizza(ingredient.id) ? 0.5 : 1, 
                cursor: isAlreadyAddedToPizza(ingredient.id) ? 'not-allowed' : 'pointer' 
              }}
            >
              {isAlreadyAddedToPizza(ingredient.id) ? "Added" : "Add"}
            </label>
          </div>
        ))}
      </div>

      <div className="build-pizza__footer">
        <p className="build-pizza__total">
          Total Cost : <span>{totalCost}</span>
        </p>
        <button className="build-pizza__btn" onClick={handleBuildPizza}>
          Build Ur Pizza
        </button>
      </div>
    </div>
  );
}

export default BuildPizza;