'use strict'
import React from 'react'
import Button from 'components/button'
import SaveMessage from 'components/save-message'

const Header = ({ isSaving, handleRemove, handleCreate }) => (
  <header>
    <SaveMessage isSaving={isSaving} />
    <Button kind='success' onClick={handleCreate}>
      Criar novo
    </Button>
    <Button kind='danger' onClick={handleRemove}>
      Remover
    </Button>
  </header>
)

export default Header
