import './Navbar.css'
import Logo from '../../assets1/Logo.svg'
import {RiCloseLine, RiMenu3Line} from 'react-icons/ri'
import { useEffect, useRef, useState } from 'react'
import useClickOutside from '../../assets1/outSideClick'

const Navbar = () => {

  const { ref, open, setOpen } = useClickOutside(false);

  console.log(open)

  const Navitems = [
    {name: 'Home', active: true, path: '#home'},
    {name: 'What is GPT', active: false, path: '#about'},
    {name: 'Open Ai', active: false, path: '#ai'},
    {name: 'Case Studies', active: false, path: '#cases'},
    {name: 'Library', active: false, path: '#library'},
  ]
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        document.querySelector('.Navbar').classList.add('nav')
      } else {
        document.querySelector('.Navbar').classList.remove('nav')
      }
    })
  }, [])

  
  return (
    <div className="Navbar">
      <div className="left">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="items">
          {Navitems.map((item) => (
            <div
              key={item.name}
              className={`item ${item.active ? "active" : ""}`}
            >
              <a href={item.path}>{item.name}</a>
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <button>Sign in</button>
        <button>Sign up</button>
        <div className="nav-menu">
          {menu ? (
            <div ref={ref} className="close-icon">
              <RiCloseLine
                color="#fff"
                size={27}
                onClick={() => setMenu(false)}
                // ref={ref}
              />
            </div>
          ) : (
            <div ref={ref} className="menu-icon">
              <RiMenu3Line
                color="#fff"
                size={27}
                onClick={() => setMenu(true)}
                // ref={ref}
              />
            </div>
          )}
          {menu && (
            <div className="menu scale-up-center">
              {Navitems.map((item) => (
                <div key={item.name} className="menu-item">
                  <a href={item.path}>{item.name}</a>
                </div>
              ))}
              <div className="btns">
                <button>Sign in</button>
                <button>Sign up</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar