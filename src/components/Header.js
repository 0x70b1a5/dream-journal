import {useLocation} from 'react-router-dom'

function Header({ toggleShowAdd, showAdd }){

  const location = useLocation()

    return (
      <header>
        <h1>Dream Journal</h1>
        {location.pathname === '/' && <button 
          className={'btn' + (showAdd ? ' btn-invert' : '')}
          onClick={toggleShowAdd}>
            {showAdd ? 'Close' : 'Add'}
        </button>}
      </header>
    )
}

export default Header;