'use strict'
import React, { Component } from 'react'
import { v4 } from 'node-uuid'
import marked from 'marked'
import MarkdownEditor from 'views/markdown-editor'
import './css/style.css'

import('highlight.js').then((hljs) => {
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(lang, code).value
      }
      return hljs.highlightAuto(code).value
    }
  })
})

class App extends Component {
  constructor () {
    super()
    this.clearState = () => ({
      value: '',
      id: v4(),
    })
    this.state = {
      ...this.clearState(),
      isSaving: null
    }

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value,
        isSaving: true
      })
    }

    this.createNews = () => {
      this.setState(this.clearState())
      this.textarea.focus()
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }
    this.handleSave = () => {
      localStorage.setItem(this.state.id, this.state.value)
    }
    this.handleRemove = () => {
      localStorage.removeItem(this.state.id)
      this.createNews()
    }
    this.handleCreate = () => {
      this.createNews()
    }
    this.textAreaRef = (node) => {
      this.textarea = node
    }
  }


  componentDidUpdate () {
    clearInterval(this.timer)
    this.timer = setTimeout(() => {
      if (this.state.isSaving) {
        this.handleSave()
        this.setState({ isSaving: false })
      }
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <MarkdownEditor
        value={this.state.value}
        isSaving={this.state.isSaving}
        handleChange={this.handleChange}
        handleRemove={this.handleRemove}
        handleCreate={this.handleCreate}
        getMarkup={this.getMarkup}
        textAreaRef={this.textAreaRef} />
    )
  }
}

export default App
