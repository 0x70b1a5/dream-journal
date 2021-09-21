import {useLocation, useHistory} from 'react-router-dom'
import LinkButton from './LinkButton'

function Header({ toggleShowAdd, showAdd }){
  const history = useHistory()
  const location = useLocation()

  const backBtn = <button className='btn' onClick={() => history.go(-1)}>Back</button>
  const addBtn = <LinkButton text='Add' to='/add' />
  
  const routes = {
    '/': addBtn,
    '/add': backBtn,
    default: backBtn,
  }

  const routeBtn = routes[location.pathname] || routes.default

  // console.log('path', location.pathname)

    return (
      <header>
        <h1>Dream Journal</h1>
        {routeBtn}
      </header>
    )
}

export default Header;