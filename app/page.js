'use client'
import { useState } from 'react'

export default function SelectBox() {
  const [selectedPages, setSelectedPages] = useState([])
  const pages = ['1', '2', '3', '4']

  const checkAll = (e) => {
    setSelectedPages(e.target.checked ? pages : [])
  }

  const checkSingle = (page) => {
    setSelectedPages((pre) => (pre.includes(page) ? pre.filter((p) => p !== page) : [...pre, page]))
  }

  return (
    <div className='centerContainer'>
      <div className='selectionBox'>
        <ul className='selectionBoxContent'>
          <li>
            <label htmlFor='all'>All Pages</label>
            <input type='checkbox' id='all' checked={selectedPages.length === pages.length} onChange={checkAll} />
          </li>
          <hr />
          {pages.map((page) => (
            <li key={page}>
              <label htmlFor={page}>Page {page}</label>
              <input type='checkbox' id={page} checked={selectedPages.includes(page)} onChange={() => checkSingle(page)} />
            </li>
          ))}
        </ul>
        <hr />
        <button>Done</button>
      </div>
    </div>
  )
}
