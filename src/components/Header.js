function Header(){
    function addDream() {
            console.log('dreamin');
    }

    return (
      <button className='btn' onClick={addDream}>Add</button>
    )
}

export default Header;