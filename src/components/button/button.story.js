'use strict'
import React from 'react'
import { storiesOf, action } from '@storybook/react'
import Button from './index'

const stories = storiesOf('Button', module)

stories.addDecorator((story) => (
  <div style={{ display: 'flex', height: 40 }}>
    {story()}
  </div>
))

stories.add('Button Success', () => (
  <Button onClick={action('success')} kind='success'>
    Success
  </Button>
))
stories.add('Button Danger', () => (
  <Button onClick={action('danger')} kind='danger'>
    Danger
  </Button>
))
