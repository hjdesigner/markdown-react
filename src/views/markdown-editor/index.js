'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Files from './files'

const MarkdownEditor = ({ value, handleChange, getMarkup, textAreaRef, ...props }) => (
  <section className='editor'>
    <Header {...props} />
    <Files />
    <textarea name='textarea' value={value} onChange={handleChange} autoFocus ref={textAreaRef} />
    <article className='view' dangerouslySetInnerHTML={getMarkup()} />
  </section>
)
MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textAreaRef: PropTypes.func.isRequired
}

export default MarkdownEditor
