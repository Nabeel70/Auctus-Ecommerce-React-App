import React from 'react'

const submenu = () => {
  return (
    class Submenu extends React.Component {
        render() {
          return (
            <ul className="nav__submenu">
              <li className="nav__submenu-item ">
                <a href='#productSection' className='navbarLink'>Our Company</a>
              </li>
              <li className="nav__submenu-item ">
                <a href='#productSection' className='navbarLink'>Our Team</a>
              </li>
              <li className="nav__submenu-item ">
                <a href='#productSection' className='navbarLink'>Our Portfolio</a>
              </li>
            </ul>
          )
        }
      }
  )
}

export default submenu