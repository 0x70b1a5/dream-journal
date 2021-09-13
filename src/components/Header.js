function Header({ toggleAddDream }){

    return (
      <header>
        <h1>Dream Journal</h1>
        <button className='btn' onClick={toggleAddDream}>Add</button>
      </header>
    )
}

export default Header;