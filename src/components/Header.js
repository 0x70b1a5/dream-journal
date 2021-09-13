function Header({ addDream }){

    return (
      <header>
        <h1>Dream Journal</h1>
        <button className='btn' onClick={addDream}>Add</button>
      </header>
    )
}

export default Header;