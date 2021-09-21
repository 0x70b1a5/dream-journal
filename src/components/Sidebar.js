import LinkButton from './LinkButton'

function Sidebar() {
    return (
        <nav className='container'>
            <ol>
                <li>
                    <LinkButton to='/' text='Home' />
                </li>
                <li>

                    <LinkButton to='/add' text='Add' />
                </li>
                <li>
                    <LinkButton to='/about' text='About' />
                </li>
                <li>
                    <LinkButton to='/word-cloud' text='Word Cloud' />
                </li>
            </ol>
        </nav>
    )
}

export default Sidebar
