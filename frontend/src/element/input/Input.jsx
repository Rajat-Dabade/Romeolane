import React from 'react'
import { TextField } from '@mui/material'

import './Input.css'

const Input = (props) => {

  return (
    <div className="Input">
      <div className="Input__content">
        <div className="Input__label">
          {props.icon}
          <label>{props.label}</label>
        </div>
        <div className="Input__inputbox">
          <TextField
            variant="outlined"
            type={props.type}
            placeholder={props.placeholder}
            size="medium"
            fullWidth
          />
        </div>
      </div>
    </div>
  )
}

export default Input
