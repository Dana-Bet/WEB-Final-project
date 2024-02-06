import { useEffect, useState}from 'react'

//components
import RecipeDetails from '../components/RecipeDetails'
const Home = () => {
  const [recipes, setRecipes] = useState(null)
  useEffect(() => {
    const fetchRecips = async () => {
      const response = await fetch('/api/recipes')
      const json = await response.json()

      if (response.ok) {
        setRecipes(json)
      }
    }

    fetchRecips()
  }, [])

  return (
    <div className="home">
      <div className="recipes">
        {recipes && recipes.map((recipe) => (
          <RecipeDetails key={recipe._id} recipe={recipe}/>
        ))}
      </div>
    </div>
  )
}

export default Home