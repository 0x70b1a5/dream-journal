import moment from 'moment'
import React from 'react'
import { useState } from 'react'

const AddDream = ({ onAdd }) => {
    const yesterday = moment().add(-1, 'day').format('YYYY-MM-DD')
    const [name, setName] = useState('')
    const [date, setDate] = useState(yesterday)
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        const newDream = { name, date, text }
        // console.log(newDream)

        if (!name || !date) {
            alert('Dream must have a name and date.')
            return
        }

        onAdd(newDream)

        setName('')
        setDate(yesterday)
        setText('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Name</label>
                <input 
                    placeholder='brief display name'
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input 
                    type='date' 
                    placeholder='when the dream took place' 
                    max={moment().format('YYYY-MM-DD')}
                    value={date}
                    onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Description</label>
                <textarea 
                    placeholder='describe the dream in detail'
                    value={text}
                    onChange={(e) => setText(e.target.value)}></textarea>
            </div>
            <input 
                type='submit'
                value='Save Dream' 
                className='btn btn-block' 
                />
        </form>
    )
}

export default AddDream
