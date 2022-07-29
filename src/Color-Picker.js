import React from 'react'
import { useState } from 'react'
import './style.css'

export default function Color_Picker() {

  const [color, changeColor] = useState('')
  const [R, changeR] = useState('');
  const [G, changeG] = useState('');
  const [B, changeB] = useState('');

  const Change = (event) => {
    changeColor(event.target.value);

  }
  const ChangeR = (event) => {
    if (/^[0-9a-f]+$/.test(event.target.value) || event.target.value === '') {
      changeR(event.target.value.toString('hex'));
    }
  }
  const ChangeG = (event) => {
    if (/^[0-9a-f]+$/.test(event.target.value || event.target.value === '')) {
      changeG(event.target.value.toString('hex'));
    }
  }
  const ChangeB = (event) => {
    if (/^[0-9a-f]+$/.test(event.target.value || event.target.value === '')) {
      changeB(event.target.value.toString('hex'));
    }
  }

  const makeColor = () => {
    changeColor(`#${R}${G}${B}`);
  }

  return (
    <div className='color-picker' style={{ backgroundColor: color }}>
      <p>
        <input type='color' onChange={Change} />
      </p>
      <div className='input'>
        <input type='text' placeholder='R' value={R} onChange={ChangeR} pattern="#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?" maxLength={2} />
        <input type='text' placeholder='G' value={G} onChange={ChangeG} maxLength={2} />
        <input type='text' placeholder='B' value={B} onChange={ChangeB} maxLength={2} />
        <button onClick={makeColor} style={{ backgroundColor: color }}>Change Color</button>
      </div>
    </div>
  )
}
