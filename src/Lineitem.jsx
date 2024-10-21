import React from 'react'

const Lineitem = ({item, handleCheck, handleDelete}) => {
  return (
    <li className='list' >
        <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
            checked = {item.checked}
        />
        <label
            style={(item.checked)? {textDecoration:"line-through"} : null}
            onClick={() => handleCheck(item.id)}>{item.item}</label>
        <button onClick={()=> handleDelete(item.id)}>X</button>
    </li>
  )
}

export default Lineitem