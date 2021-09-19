import {useLocation, useHistory, Link} from 'react-router-dom'
function Header({ toggleShowAdd, showAdd }){
  const history = useHistory()
  const location = useLocation()

  const backBtn = <button className='btn' onClick={() => history.go(-1)}>Back</button>
  const addBtn = <Link className='btn' to='/add'>Add</Link>
  
  const routes = {
    '/': addBtn,
    '/add': backBtn,
    default: backBtn,
  }

  const routeBtn = routes[location.pathname] || routes.default

  console.log('path', location.pathname)

    return (
      <header>
        <h1>Dream Journal</h1>
        {routeBtn}
      </header>
    )
}

export default Header;