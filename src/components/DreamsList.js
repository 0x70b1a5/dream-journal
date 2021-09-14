import DreamListItem from './DreamListItem';

function DreamsList({ dreams, onEdit, onDelete }){

    return (
        <div className="dreamsList">
        {dreams.length > 0 ? 
            dreams.map((dream, idx) => 
                <DreamListItem
                    name={dream.name} 
                    key={dream.id}
                    summary={dream.text && dream.text.slice(0,100) || ''}
                    date={dream.date} 
                    onEdit={onEdit}
                    onDelete={onDelete}
                    id={dream.id}
                />)
            : 'No dreams yet.'}
        </div>
    );
}


export default DreamsList;