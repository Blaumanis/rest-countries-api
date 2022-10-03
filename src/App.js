import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Country from './pages/Country';
import SharedLayout from './pages/SharedLayout'

import GlobalState from './context/GlobalState';
import useFetch from './useFetch';

function App() {
  const {data} = useFetch("https://restcountries.com/v2/all")
  const getCountryName = (code) => {
    let countryName;
    const country = data.filter((element)=>{
      return element.alpha3Code === code;
    })  
    countryName = country[0].name
    return countryName;
  }

  return (
    <GlobalState>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/:countryName' element={<Country getCountryName={getCountryName} />} />
        </Route>
    </Routes>
    </BrowserRouter>
    </GlobalState>
  )
}

export default App

