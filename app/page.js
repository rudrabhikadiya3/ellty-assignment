'use client'
import Link from 'next/link'
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
      <Link href='https://scarce-suggestion-575.notion.site/Process-How-do-I-do-this-1c552ab52d2e80b2b752fa9d888f0eee' className='processLink'>
        See How I did this
      </Link>
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
