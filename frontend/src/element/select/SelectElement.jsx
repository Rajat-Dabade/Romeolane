import React from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem';

import './SelectElement.css'

const SelectElement = (props) => {
  return (
    <div className="SelectElement">
      <div className="SelectElement__content">
        <div className="SelectElement__label">
          {props.icon}
          <label>{props.label}</label>
        </div>
        <div className="SelectElement__inputbox">
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={10}
            placeholder={props.placeholder}
            fullWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
      </div>
    </div>
  )
}

export default SelectElement
