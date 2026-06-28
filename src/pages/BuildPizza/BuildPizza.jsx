import { useDispatch, useSelector } from "react-redux";
import { toggleIngredient, resetBuild } from "../../store/buildPizzaSlice.js";
import { setIngredientsCost, setIngredients } from "../../store/cartSlice.js";
import { useToast } from "../../context/ToastContext.jsx";
import ingredients from "../../data/ingredients.js";
import "./BuildPizza.css";

function BuildPizza() {
  const dispatch = useDispatch();
  const { showToast } = useToast();
  const { selectedIngredients, totalCost } = useSelector(
    (state) => state.buildPizza
  );

  const isSelected = (id) =>
    selectedIngredients.some((i) => i.id === id);

  const handleToggle = (ingredient) => {
    dispatch(toggleIngredient(ingredient));
  };

  const handleBuildPizza = () => {
    if (selectedIngredients.length === 0) {
      showToast("Please select at least one ingredient!", "error");
      return;
    }
    dispatch(setIngredientsCost(totalCost));
    dispatch(setIngredients(selectedIngredients));
    showToast(
      `Ingredients have been added to the cart! Total Cost: ₹${totalCost}`,
      "success"
    );
    dispatch(resetBuild());
  };

  return (
    <div className="build-pizza">
      <p className="build-pizza__subtitle">
        Pizzeria now gives you options to build your own pizza. Customize your
        pizza by choosing ingredients from the list given below
      </p>

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
                    "https://via.placeholder.com/60x60?text=Ing";
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
              checked={isSelected(ingredient.id)}
              onChange={() => handleToggle(ingredient)}
              id={`ing-${ingredient.id}`}
            />

            <label
              htmlFor={`ing-${ingredient.id}`}
              className="build-pizza__add-label"
            >
              Add
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