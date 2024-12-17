const BASE_URL = `https://swapi.py4e.com/api/starships/`

let data = [] // I'm losing let because the value of data will be changed whenever the user use the search functionality

const index = async () => {
  const URL = `${BASE_URL}`
  try {
    const response = await fetch(URL)
    const result = await response.json() //
    data = result // Assign the fetched data to the data variable
    //console.log(data.results)
    return data.results
  } catch (error) {
    console.log(error)
  }
}

// Search function remains the same
const search = async (name) => {
  try {
    if (name) {
      const filteredData = data.results.filter((ship) =>
        ship.name.toLowerCase().includes(name.toLowerCase())
      )
      return filteredData
    } else {
      return data.results || [] // Ensure to return an empty array if no results
    }
  } catch (error) {
    console.log(error)
    return [] // Return an empty array on error
  }
}

export { index, search }
