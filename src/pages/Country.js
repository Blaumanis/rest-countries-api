import React, {useContext,useState,useEffect} from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom'

import { GlobalContext } from '../context/GlobalState'
import useFetch from '../useFetch';

function Country({getCountryName}) {
  const {isLight, numberWithCommas} = useContext(GlobalContext)

  const countryName = useParams();
  const {data} = useFetch(`https://restcountries.com/v2/name/${countryName.countryName}?fullText=true`);
  const [country,setCountry] = useState(data);
  useEffect(() => {
      setCountry(data);
  },[data])
  
  return (
    <div className={`country-page ${isLight[0] ? 'light' : ''}`}>
      <Link to='/' className={`back ${isLight[0] ? 'light' : ''}`}>
        <FaArrowLeft/>
        Back
        </Link>
        {country.length === 1 &&  
      <div className='country-detailed-info'>
        <div className='img-container'>
          <img src={country[0].flag} alt={country[0].name} />
        </div>
        <div className='info-container'>
              <h2 className={isLight[0] ? 'light' : ''}>{country[0].name}</h2>
          <div className='info-box'>
            <div className='first-column'>
              <p className={isLight[0] ? 'light' : ''}>
                Native name: <small>{country[0].nativeName}</small>
              </p>
              <p className={isLight[0] ? 'light' : ''}>
                Population: <small>{numberWithCommas(country[0].population)}</small>
              </p>
              <p className={isLight[0] ? 'light' : ''}>
                Region: <small>{country[0].region}</small>
              </p>
              <p className={isLight[0] ? 'light' : ''}>
                Sub Region: <small>{country[0].subregion}</small>
              </p>
              <p className={isLight[0] ? 'light' : ''}>
                Capital: <small>{country[0].capital}</small>
              </p>
            </div>
            <div className='second-column'>
              <p className={isLight[0] ? 'light' : ''}>
                Top Level Domain: <small>{country[0].topLevelDomain[0]}</small>
              </p>
              <p className={isLight[0] ? 'light' : ''}>
                Currencies: <small>{country[0]?.currencies[0]?.name || ''}</small>
              </p>
              <p className={isLight[0] ? 'light' : ''}>
                Languages:
                {country[0].languages.map((language) => {
                  return <small key={countryName}>{language.name}</small>
                })}
              </p>
            </div>
          </div>
          {!country[0].borders ? '' : <div className={`border-countries ${isLight[0] ? 'light' : ''}`} >
            Border Countries:
            {country[0].borders.map((border) => {
              const countryName = getCountryName(border)
              return <Link className={isLight[0] ? 'light' : ''} key={countryName} to={`/${countryName}`}>{countryName}</Link>
            })}
          </div>}
        </div>
      </div>
}
    </div>
  )
}

export default Country;
