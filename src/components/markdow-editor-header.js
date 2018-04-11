'use strict'
import React from 'react'

const Header = ({ onSave }) => (
  <header>
    <button onClick={onSave}>Salvar</button>
  </header>
)

export default Header
