import DreamListItem from './DreamListItem';

function DreamsList({ dreams }){

    return (
        <div className="dreamsList">
        {dreams.map((dream, idx) => 
            <DreamListItem
                title={dream.title} 
                key={idx}
                summary={dream.text.slice(0,100)}
                date={dream.date} 
            />)}
        </div>
    );
}


export default DreamsList;