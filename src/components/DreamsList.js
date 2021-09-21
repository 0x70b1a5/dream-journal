import DreamListItem from './DreamListItem'

function DreamsList({ dreams, onEdit, onDelete }){

    const getSummaryText = dream =>  dream.text
        ? dream.text.length > 100
            ? dream.text.slice(0,100) + '...'
            : dream.text
        : '';
    return (
        <div className="dreamsList">
        {dreams.length > 0 ? 
            dreams.map((dream, idx) => 
                <DreamListItem
                    name={dream.name} 
                    key={dream.id}
                    summary={getSummaryText(dream)}
                    date={dream.date} 
                    onDelete={onDelete}
                    id={dream.id}
                />)
            : 'No dreams yet.'}
        </div>
    );
}


export default DreamsList;