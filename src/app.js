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
      title: '',
      value: '',
      id: v4()
    })
    this.state = {
      ...this.clearState(),
      isSaving: null,
      files: {}
    }

    this.handleChange = (field) => (e) => {
      this.setState({
        [field]: e.target.value,
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
      const files = {
        ...this.state.files,
        [this.state.id]: {
          title: this.state.title || 'Sem titulo',
          content: this.state.value
        }
      }
      localStorage.setItem('markdown-editor', JSON.stringify(files))
      this.setState({ files })
    }
    this.handleRemove = () => {
      // eslint-disable-next-line no-unused-vars
      const { [this.state.id]: id, ...files } = this.state.files

      localStorage.setItem('markdown-editor', JSON.stringify(files))
      this.setState({ files })
      this.createNews()
    }
    this.handleCreate = () => {
      this.createNews()
    }
    this.textAreaRef = (node) => {
      this.textarea = node
    }
    this.handleOpenFile = (fileId) => () => {
      this.setState({
        title: this.state.files[Object.values(fileId)].title,
        value: this.state.files[Object.values(fileId)].content,
        id: Object.values(fileId)
      })
    }
  }

  componentDidMount () {
    const files = JSON.parse(localStorage.getItem('markdown-editor'))
    this.setState({ files })
    /* const files = Object.keys(localStorage)
    this.setState({
      files: files.reduce((acc, fileId) => ({
        ...acc,
        [fileId]: JSON.parse(localStorage.getItem(fileId))
      }), {})
    }) */
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
        textAreaRef={this.textAreaRef}
        files={this.state.files}
        handleOpenFile={this.handleOpenFile}
        title={this.state.title} />
    )
  }
}

export default App
