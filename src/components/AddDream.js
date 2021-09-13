import moment from 'moment'
import React from 'react'

const AddDream = () => {
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Name</label>
                <input placeholder='brief display name' />
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input type='date' 
                       placeholder='when the dream took place' 
                       defaultValue={moment().add(1, 'day').format('YYYY-MM-DD')}
                       max={moment().format('YYYY-MM-DD')} />
            </div>
            <div className='form-control'>
                <label>Description</label>
                <textarea placeholder='describe the dream in detail'></textarea>
            </div>
            <input type='submit' value='Save Dream' className='btn btn-block' />
        </form>
    )
}

export default AddDream
