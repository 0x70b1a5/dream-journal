import PropTypes from 'prop-types'
import moment from 'moment'

function DreamListItem ({ name, date, summary, onEdit, onDelete, id }) {
    return (
        <div className="dreamListItem" onClick={() => onEdit(id)}>
            <div>
                <h3 className="dreamName" >
                    {name} 
                    <span className="dreamDate">{moment(date, 'YYYY MM DD').format('DD MMM YY')}</span>
                </h3>
                <div className="dreamSummary">{summary}</div>
            </div>
            <button className='btn btn-delete' onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}

DreamListItem.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    onEdit: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
}

export default DreamListItem;