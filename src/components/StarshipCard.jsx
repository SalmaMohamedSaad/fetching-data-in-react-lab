const StarshipCard = ({ ship }) => {
  return (
    <div className="starship-card" key={ship.name}>
      <h2 className="starship-name">{ship.name}</h2>
      <p className="starship-class">Class: {ship.starship_class}</p>
      <p className="starship-manufacturer">Manufacturer: {ship.manufacturer}</p>
      <p className="starship-model">Model: {ship.model}</p>
    </div>
  )
}

export default StarshipCard
