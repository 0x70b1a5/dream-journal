import PropTypes from 'prop-types'
import moment from 'moment'
import {Link} from 'react-router-dom'

function DreamListItem ({ name, date, summary,   onDelete, id }) {
    const onDeleteClick = e => {
        e.preventDefault()

        onDelete(id)
    }

    return (
        <Link className="dreamListItem" to={'/dream/'+id} >
            <div>
                <h3 className="dreamName" >
                    {name} 
                    <span className="dreamDate">{moment(date, 'YYYY MM DD').format('DD MMM YY')}</span>
                </h3>
                <div className="dreamSummary">{summary}</div>
            </div>
            <button className='btn btn-delete btn-inline' onClick={onDeleteClick}>Delete</button>
        </Link>
    )
}

DreamListItem.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}

export default DreamListItem;