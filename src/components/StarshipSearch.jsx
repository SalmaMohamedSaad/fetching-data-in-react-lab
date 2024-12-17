// src/components/WeatherSearch.jsx
import { useState } from 'react'

const StarshipSearch = ({ onSearch }) => {
  const [name, setName] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(name)
    setName('')
  }
  const handleChange = (e) => {
    setName(e.target.value) // Update the state with the input value
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="search"
        type="text"
        placeholder="Search starship by name"
        value={name} //connection between state and value
        onChange={handleChange} //state handler
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default StarshipSearch
