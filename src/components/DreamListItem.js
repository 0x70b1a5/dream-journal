import PropTypes from 'prop-types';

function DreamListItem ({ title, date, summary, onEdit, id }) {
    return (
        <div className="dreamListItem" onClick={() => onEdit(id)}>
            <h3 className="dreamTitle" >
                {title} 
                <span className="dreamDate">{date.format('DD MMM YY')}</span>
            </h3>
            <div className="dreamSummary">{summary}</div>
        </div>
    )
}

DreamListItem.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    summary: PropTypes.string.isRequired,
    onEdit: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
}

export default DreamListItem;