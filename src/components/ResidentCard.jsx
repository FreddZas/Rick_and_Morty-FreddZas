import { useEffect, useState } from "react"
import axios from "axios"
import "./styles/ResidentCard.css"

const ResidentCard = ({url}) => {

  const [character, setCharacter] = useState()

  useEffect(() => {
    axios.get(url)
    .then(res => setCharacter(res.data))
    .catch(err => console.log(err))
  }, [])

  console.log(character)

  return (
    <article className="resident">
      <header className="resident__header">
        <img className="resident__image" src={character?.image} alt="" />
        <div className="resident__status">
          <div className={`resident__status-circle ${character?.status}`}></div>
          <span className="resident__status-value">{character?.status} </span>
        </div>
      </header>
      <section className="resident__body">
        <h3 className="resident__name">{character?.name}</h3>
        <hr className="resident__line"/>
        <ul className="resident__list">
          <li className="resident__item">
            <span className="resident__label">Specie 
              <span className="resident__item-value"> {character?.species} </span>
            </span>
          </li>
          <li className="resident__item">
            <span className="resident__label">Origin 
              <span className="resident__item-value"> {character?.origin.name} </span>
            </span>
          </li>
          <li className="resident__item">
            <span className="resident__label">Episodes where appear 
              <span className="resident__item-value"> {character?.episode.length} </span>
            </span>
          </li>
        </ul>
      </section>
    </article>
  )
}

export default ResidentCard