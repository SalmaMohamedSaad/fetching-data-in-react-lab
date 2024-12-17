import StarshipCard from './StarshipCard'

const StarshipList = ({ starships }) => {
  return (
    <div className="starship-list">
      {starships.length > 0 ? ( // using this bracits was the idea of AI to be able to write a multiline if condition using ternary operator
        starships.map((ship, index) => (
          <StarshipCard key={index} ship={ship} /> // to pass each ship information to StarshipCard
        ))
      ) : (
        <p>No starships found.</p>
      )}
    </div>
  )
}

export default StarshipList
