'use strict'
import React from 'react'
import Button from 'components/button'
import SaveMessage from 'components/save-message'

const Header = ({ title, isSaving, handleRemove, handleCreate, handleChange }) => (
  <header>
    <SaveMessage isSaving={isSaving} />
    <input type='text' value={title} onChange={handleChange('title')} placeholder='Sem titulo' />
    <Button kind='success' onClick={handleCreate}>
      Criar novo
    </Button>
    <Button kind='danger' onClick={handleRemove}>
      Remover
    </Button>
  </header>
)

export default Header
