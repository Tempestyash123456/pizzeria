import { useDispatch, useSelector } from "react-redux";
import { toggleIngredient, resetBuild } from "../../store/buildPizzaSlice.js"; 
import { setIngredientsCost } from "../../store/cartSlice.js"; 
import ingredients from "../../data/ingredients.js"; 
import "./BuildPizza.css"; 

export default function BuildPizza() {
    const dispatch = useDispatch(); 
    const { selectedIngredients, totalCost } = useSelector((state) => state.buildPizza); 

    const isSelected = (id) => {
        selectedIngredients.some((i) => i.id === id); 
    };

    const handleToggle = (ingredient) => {
        dispatch(toggleIngredient(ingredient));
    }

    const handleBuildPizza = () => {
        if(selectedIngredients.length === 0){
            alert("Please select at least one ingredient!"); 
            return; 
        }

        dispatch(setIngredientsCost(totalCost)); 

        alert(`Your custom pizza has been build! Ingredient cost: ₹${totalCost.toFixed(2)}`); 

        dispatch(resetBuild()); 

        document.querySelectorAll(".build-pizza__checkbox").forEach((checkbox) => {
            checkbox.checked = false; 
        }); 
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
                            <img src={ingredient.image} alt={ingredient.name} className="build-pizza__img" onError={(e) => {e.target.src = "https://via.placeholder.com/60x60?text=Ing";}}/>
                        </div>

                        <span className="build-pizza__name">
                            {ingredient.tname}
                        </span>

                        <span className="build-pizza__price">
                            &#8377;{ingredient.price.toFixed(2)}
                        </span>

                        <input type="checkbox" className="build-pizza__checkbox" checked={isSelected(ingredient.id)} onChange={() => handleToggle(ingredient)} id={`ing-${ingredient.id}`}/>

                        <label htmlFor={`ing-${ingredient.id}`} className="build-pizza__add-label">
                            Add
                        </label>
                    </div>
                ))}
            </div>

            <div className="build-pizza__footer">
                <p className="build-pizza__total">
                    Total Cost : <span>&#8377;{totalCost.toFixed(2)}</span>
                </p>

                <button className="build-pizza__btn" onClick={handleBuildPizza}>
                    Build Your Pizza
                </button>
            </div>
        </div>
    );
}