'use strict'
import React, { PropTypes } from 'react'
import Header from './markdow-editor-header.js'

const MarkdownEditor = ({ value, handleChange, getMarkup, handleSave }) => (
  <section className='editor'>
    <Header onSave={handleSave} />
    <textarea name='textarea' value={value} onChange={handleChange} autoFocus />
    <article className='view' dangerouslySetInnerHTML={getMarkup()} />
  </section>
)
MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired
}

export default MarkdownEditor
