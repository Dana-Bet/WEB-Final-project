const RecipeDetails = ({ recipe }) => {
    return (
      <div className="recipe-details">
        <h4>{recipe.title}</h4>
        <p><strong>Difficulty : </strong>{recipe.difficulty}</p>
        <p><strong>Created At:</strong> {new Date(recipe.createdAt).toLocaleDateString()}</p>
      </div>
    )
}

export default RecipeDetails