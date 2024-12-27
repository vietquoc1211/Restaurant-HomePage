import PropTypes from "prop-types";

export default function Modal({ meal, closeModal }) {
  console.log("Meal prop:", meal); // Full object
  if (!meal) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white  rounded-l-sm rounded-sm  w-11/12 sm:w-3/4  lg:w-1/2 pt-3 pb-4 px-4 lg:rounded-l-full">
        <div className="flex justify-end ">
          <button
            className="text-red-500 text-2xl font-bold"
            onClick={() => closeModal()}
          >
            ✖
          </button>
        </div>
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-4  items-center">
          <img
            src={meal?.strMealThumb }
            alt={meal?.strMeal }
            className=" w-50 col-span-3 rounded-full mb-5 ml-[-9px]"
          />
          <div className="mealinfo  col-span-9">
          <h2 className="text-xl font-bold mb-4">{meal.strMeal}</h2>
            <div className="flex items-center">
            <p>
              <strong className="">Category:</strong> {meal?.strCategory}
            </p>
            <p className="ml-10">
              <strong>Area:</strong> {meal?.strArea }
            </p>
            </div>
            <div className="mt-5"><strong className="">Ingredients:</strong></div>
            < div className=" mt-1 flex ">
              {Array.from({ length: 7 }).map((_, i) => {
                const ingredient = meal[`strIngredient${i + 1}`];
                return (
                  ingredient && <span key={i} className="ml-2">{ingredient},</span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  meal: PropTypes.shape({
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    strCategory: PropTypes.string,
    strArea: PropTypes.string,
    strIngredient1: PropTypes.string,
  }),
  closeModal: PropTypes.func.isRequired,
};
