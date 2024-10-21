import React from 'react'
import { useRef } from 'react'

const AddItems = ({ newItem, setNewItem, handleSubmit }) => {
    
    const inputRef = useRef();
  return (
        <form className='addform' onSubmit={handleSubmit}>
          <label htmlFor="additem">Add Item</label>
          <input
              autoFocus
              ref={inputRef}
              type="text"
              id='additem'
              placeholder='Add Item'
              required
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
          />
          <button className='add'
              type='submit'
              aria-label='Add items'
              onClick={()=> inputRef.current.focus()}
          >+</button>
    </form>
  )
}

export default AddItems