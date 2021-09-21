import {useState, useEffect} from 'react'

function WordCloud() {
    const [words, setWords] = useState([])
    const fetchDreams = async () => {
        const res = await fetch(`http://localhost:5000/dreams`)
        const data = res.json()

        return data
    }

    useEffect(() => {
        const getWords = async () => {
            const dreamsFromServer = await fetchDreams()
            // console.log(dreamsFromServer)
            const allWords = {}

            dreamsFromServer.forEach(dream => {
                const dreamWords = dream.text.replace(/[^a-z0-9 ]/gi, '').split(' ')

                dreamWords.forEach(word => {
                    if (allWords[word]) {
                        allWords[word].count ++
                    } else {
                        allWords[word] = { word, count: 1 }
                    }
                })
            })

            // console.log(allWords)


            setWords(Object.keys(allWords).map(key => allWords[key]))
        }

        getWords()
    }, [])

    const wordCounts = words.sort((a, b) => a.count < b.count ? 1 : -1)
    return (
        <>
            <h2>Word Cloud</h2>
            <div className='graph'></div>
            <ul>
                {wordCounts.map(word => <li>{word.count}: {word.word}</li>)}
            </ul>
        </>
    )
}

export default WordCloud
