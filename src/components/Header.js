import {useLocation, useHistory} from 'react-router-dom'
function Header({ toggleShowAdd, showAdd }){
  const history = useHistory()
  const location = useLocation()

    return (
      <header>
        <h1>Dream Journal</h1>
        {location.pathname === '/' 
            ? <button 
              className={'btn' + (showAdd ? ' btn-invert' : '')}
              onClick={toggleShowAdd}>
                {showAdd ? 'Close' : 'Add'}
              </button>
            : 
            <button className='btn' onClick={() => history.go(-1)}>Back</button>
        }
      </header>
    )
}

export default Header;