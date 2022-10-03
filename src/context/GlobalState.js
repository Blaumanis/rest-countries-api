import React, {useState} from 'react'
export const GlobalContext = React.createContext(null)

export default ({ children }) => {
    // Use states
    const [isLight,setIsLight] = useState(false)

    const numberWithCommas = ( number => {
      return number
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g,",");
    })


  const store = {
    isLight: [isLight, setIsLight],
    numberWithCommas,
  }

  return <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
}