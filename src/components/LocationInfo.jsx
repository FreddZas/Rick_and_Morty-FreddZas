import "./styles/LocationInfo.css";

//rafce
const LocationInfo = ({ location }) => {

    console.log(location)

  return (
    <article className="location">
        <h2 className="location__name">{location?.name}</h2>
        <ul className="location__char">
            <li className="location__characteristics">
              <span className="location__characteristics-label">Type: </span>
              <span className="location__characteristics-value">{location?.type}</span>
            </li>
            <li className="location__characteristics">
              <span className="location__characteristics-label">Dimension: </span>
              <span className="location__characteristics-value">{location?.dimension}</span>
            </li>
            <li className="location__characteristics">
              <span className="location__characteristics-label">Population: </span>
              <span className="location__characteristics-value">{location?.residents.length} </span>
            </li>
        </ul>
    </article>
  )
}

export default LocationInfo