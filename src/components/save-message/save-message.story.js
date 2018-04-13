'use strict'
import React from 'react'
import { storiesOf } from '@storybook/react'
import SaveMessage from './index'

const stories = storiesOf('SaveMessage', module)

stories.add('SaveMessage with isSaving === null', () => (
  <div style={{ background: '#000000', display: 'flex', color: '#FFF', padding: 20}}>
    Message: "<SaveMessage isSaving={null} />"
  </div>
))
stories.add('SaveMessage with isSaving === true', () => (
  <div style={{ background: '#000000', display: 'flex', color: '#FFF', padding: 20}}>
    Message: "<SaveMessage isSaving />"
  </div>
))
stories.add('SaveMessage with isSaving === false', () => (
  <div style={{ background: '#000000', display: 'flex', color: '#FFF', padding: 20}}>
    Message: "<SaveMessage isSaving={false} />"
  </div>
))
