import { useEffect, useState } from 'react'
import './App.css'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormLocation from './components/FormLocation'
import useFetch from './hooks/useFetch'

function App() {

  // const [location, setLocation] = useState()
  const [idLocation, setIdLocation] = useState(getRandomNumber(126))
  // const [hasError, setHasError] = useState(false)
  //const [isLoading, setIsLoading] = useState(true)

  const url = `https://rickandmortyapi.com/api/location/${idLocation}`
  const [location, getLocationById, hasError, isLoading] = useFetch(url)

  useEffect(() => {
  getLocationById()
  }, [idLocation]) // Permite darle validez al texto ingresado en el input (renderizado)

  console.log(idLocation)

  return (
    <div>
        <div className='header'></div>
        <FormLocation
          setIdLocation={setIdLocation}
        />
        {
          isLoading
            ? (<p>Loading...</p>)
            : (  hasError
                ? (
                  <h1 className="error__message">
                    <i className="bx bx-error-circle"></i> Hey!🤬. You must provide an id from 1 to 126 😒
                  </h1>)
                : (
                  <>
                    <LocationInfo 
                      location={location}
                    />
                    <div className='resident-container'>
                      {
                        location?.residents.map(url => (
                          <ResidentCard
                            key={url}
                            url={url}
                          />
                        ))
                      }
                    </div>
                  </>
                  )      
              )    
        }
    </div>
  )
}

export default App
