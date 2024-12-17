import './App.css'
import * as starshipService from './services/starshipService'
import StarshipSearch from './components/StarshipSearch'
import StarshipList from './components/StarshipList'
import { useEffect, useState } from 'react'

const App = () => {
  const [starships, setStarships] = useState([])
  const [starshipCount, setStarshipCount] = useState(0)

  useEffect(() => {
    const loadStarships = async () => {
      // the creation of this function and use of async was suggested by AI to solve the problem of not being able to load all the index results on the first load of the page
      const data = await starshipService.index()
      setStarships(data) // Set the starships to state
      setStarshipCount(data.length) // to set the count of all found starships
    }
    // To call the function on the load of the page for the first time to populate the page with all the found ships
    loadStarships()
  }, [])

  const handleSearch = async (name) => {
    const results = await starshipService.search(name)
    setStarships(results) // to update starships with search results
    setStarshipCount(results.length) // to update the counter with the count of search results
  }

  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch onSearch={handleSearch} />
      <p>Number of results: {starshipCount}</p>
      <StarshipList starships={starships} />
    </main>
  )
}

export default App
