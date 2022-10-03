import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'

import Loading from '../components/Loading'

import useFetch from '../useFetch'
import { GlobalContext } from '../context/GlobalState'

let url = "https://restcountries.com/v2/all"

function Home() {
  const { loading, data} = useFetch(url)
  const {isLight, numberWithCommas} = useContext(GlobalContext)
  const [query, setQuery] = useState('')

  const [paginate, setpaginate] = useState(12);
  const loadData = (event) => {
    setpaginate((prevValue) => prevValue + 12);
  };
  
  const regions = [...new Set(data.map((item) => item.region))];
  const [filter,setFilter] = useState('')

  // search function
  function search(items) {
      return items.filter((item) => 
      item.region.includes(filter) &&
      item.name.toLowerCase().includes(query))
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div className='container'>

<div className='inputs'>
      <div className='search-input'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
          fill='#fff'
          className={`search-icon ${isLight[0] ? 'light' : ''}`}
        >
          <path d='M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z' />
        </svg>
        <input
          onChange={e=> setQuery(e.target.value)}
          type='search'
          name='search'
          id='search'
          className={`search ${isLight[0] ? 'light' : ''}`}
          placeholder='Search for a country...'
        />
      </div>

      <div className='filter-box'>
        <small className='close-icon'>x</small>
        <select onChange={(e)=> setFilter(e.target.value)} aria-label="Filter Countries By Region" 
        className={`filter-region ${isLight[0] ? 'light' : ''}`}>
          <option value="">All Regions</option>
          {regions.map((item)=> (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
    </div>

      <main className='countries'>
        {search(data)
        .slice(0,paginate)
        .map((d) => {
          return  <Link key={d.name} to={`/${d.name}`} className={`country ${isLight[0] ? 'light' : ''}`}>
          <img src={d.flag} alt={d.name} className='country-flag' />
          <h2 className={`country-name ${isLight[0] ? 'light' : ''}`}>{d.name}</h2>
          <div className='extra-info'>
            <p className={`population ${isLight[0] ? 'light' : ''}`}>
              Population: <small>{numberWithCommas(d.population)}</small>
            </p>
            <p className={`region ${isLight[0] ? 'light' : ''}`}>
              Region: <small>{d.region}</small>
            </p>
            <p className={`capital ${isLight[0] ? 'light' : ''}`}>
              Capital: <small>{d.capital}</small>
            </p>
          </div>
        </Link>
        })}
      </main>
        <button className="btn" onClick={loadData}>Load More</button>
    </div>
  )
}

export default Home
