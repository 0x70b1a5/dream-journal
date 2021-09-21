import {Link} from 'react-router-dom'

function LinkButton({ to, text, classes }) {
    classes = (classes || ['btn']).join('')
    text = text || 'Button'

    return (
        <Link 
            className={classes} 
            to={to}>
            {text}
        </Link>
    )
}

export default LinkButton
