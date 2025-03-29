export default function Home() {
  return (
    <div className='centerContainer'>
      <div className='selectionBox'>
        <ul className='selectionBoxContent'>
          <li>
            <span>All Pages</span>
            <span>
              <input type='checkbox' name='' id='' />
            </span>
          </li>
          <hr />

          <li>
            <span>Page 1</span>
            <span>
              <input type='checkbox' name='' id='' />
            </span>
          </li>
          <li>
            <span>Page 1</span>
            <span>
              <input type='checkbox' name='' id='' />
            </span>
          </li>
          <li>
            <span>Page 1</span>
            <span>
              <input type='checkbox' name='' id='' />
            </span>
          </li>
          <li>
            <span>Page 1</span>
            <span>
              <input type='checkbox' name='' id='' />
            </span>
          </li>
        </ul>
        <hr />

        <button>Done</button>
      </div>
    </div>
  )
}
