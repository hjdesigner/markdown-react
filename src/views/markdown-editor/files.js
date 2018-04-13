'use strict'

import React from 'react'

const files = {
  '1234': '# titulo 1',
  '5678': '# titulo 2'
}

const handleOpenFile = (fileId) => () => {
  console.log(fileId)
}

const Files = () => (
  <div className='files-list'>
    <h2>Files</h2>
    <ul>
      {Object.keys(files).map((fileId) => (
        <li><button onClick={handleOpenFile({fileId})}>{fileId}</button></li>
      ))}
    </ul>
  </div>
)

export default Files
