import React from "react"

export const Navigation = (props) => {
  
  const [toggle, setToggle] = React.useState({});
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    if (window.innerWidth < 768) {
      setToggle('collapse');
      setData('#bs-example-navbar-collapse-1')
    }
    else {
      setToggle('');
      setData('')
    }
  } , [])

  function checkForWindowResize() {
    if (window.innerWidth < 768) {
      setToggle('collapse');
      setData('#bs-example-navbar-collapse-1')
    }
    else {
      setToggle('');
      setData('')
    }
}
window.addEventListener('resize', checkForWindowResize);


  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
        <ul className='nav navbar-nav navbar-left'>
            <li>            
            <img onClick={() => {window.location.href='#header'}} src='./img/Chip-locked-images/BIGPUTTERbagBANNER.png' alt='logo' className='logo' />
            </li>
          </ul>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
          data-target='#bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right' data-toggle={toggle} data-target={data}>
            <li className="nav-item">
              <a href='#chips' className='page-scroll anchor'>
                Chips
              </a>
            </li>
            <li>
              <a href='#rules' className='page-scroll anchor'>
                Rules
              </a>
            </li>
            <li>
              <a href='#play' className='page-scroll anchor'>
                How-To-Play
              </a>
            </li>
            <li>
              <a href='#shop' className='page-scroll anchor'>
                Shop
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll anchor'>
                About
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll anchor'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
