import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'

function Header() {
  const {isLight} = useContext(GlobalContext);

  function changeMode () {
    isLight[1](!isLight[0]);
  }

  let body = document.querySelector('body')
  if(isLight[0]) {
    body.classList.add('light')
  } else {
    body.classList.remove('light')
  }

  return (
    <header className={`header ${isLight[0] ? 'light' : ''}`}>
      <Link className={`${isLight[0] ? 'light' : ''}`} to='/'>Where in the world?</Link>
      <div className='dark-mode' onClick={changeMode}>
        <svg
          className={`moon-icon ${isLight[0] ? '' : 'hide'}`}
          width='0.85em'
          height='0.85em'
          viewBox='0 0 16 16'
          fill='#111517'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z'
          ></path>
        </svg>
        <svg
          className={`sun-icon ${isLight[0] ? 'hide' : ''}`}
          width='0.85em'
          height='0.85em'
          viewBox='0 0 16 16'
          fill='#fff'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M3.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z'></path>
          <path
            fillRule='evenodd'
            d='M8.202.28a.25.25 0 0 0-.404 0l-.91 1.255a.25.25 0 0 1-.334.067L5.232.79a.25.25 0 0 0-.374.155l-.36 1.508a.25.25 0 0 1-.282.19l-1.532-.245a.25.25 0 0 0-.286.286l.244 1.532a.25.25 0 0 1-.189.282l-1.509.36a.25.25 0 0 0-.154.374l.812 1.322a.25.25 0 0 1-.067.333l-1.256.91a.25.25 0 0 0 0 .405l1.256.91a.25.25 0 0 1 .067.334L.79 10.768a.25.25 0 0 0 .154.374l1.51.36a.25.25 0 0 1 .188.282l-.244 1.532a.25.25 0 0 0 .286.286l1.532-.244a.25.25 0 0 1 .282.189l.36 1.508a.25.25 0 0 0 .374.155l1.322-.812a.25.25 0 0 1 .333.067l.91 1.256a.25.25 0 0 0 .405 0l.91-1.256a.25.25 0 0 1 .334-.067l1.322.812a.25.25 0 0 0 .374-.155l.36-1.508a.25.25 0 0 1 .282-.19l1.532.245a.25.25 0 0 0 .286-.286l-.244-1.532a.25.25 0 0 1 .189-.282l1.508-.36a.25.25 0 0 0 .155-.374l-.812-1.322a.25.25 0 0 1 .067-.333l1.256-.91a.25.25 0 0 0 0-.405l-1.256-.91a.25.25 0 0 1-.067-.334l.812-1.322a.25.25 0 0 0-.155-.374l-1.508-.36a.25.25 0 0 1-.19-.282l.245-1.532a.25.25 0 0 0-.286-.286l-1.532.244a.25.25 0 0 1-.282-.189l-.36-1.508a.25.25 0 0 0-.374-.155l-1.322.812a.25.25 0 0 1-.333-.067L8.203.28zM8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z'
          ></path>
        </svg>
        <h4 className={`${isLight[0] ? 'light' : ''}`}>{isLight[0] ? 'Dark Mode' : 'Light Mode'}</h4>
      </div>
    </header>
  )
}

export default Header
