function Header({ toggleShowAdd, showAdd }){

    return (
      <header>
        <h1>Dream Journal</h1>
        <button 
          className={'btn' + (showAdd ? ' btn-invert' : '')}
          onClick={toggleShowAdd}>
            {showAdd ? 'Close' : 'Add'}
        </button>
      </header>
    )
}

export default Header;