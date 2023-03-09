import './Navbar.css'
import Logo from '../../assets1/Logo.svg'
import {RiCloseLine, RiMenu3Line} from 'react-icons/ri'
import { useCallback, useEffect, useRef, useState } from 'react'

const Navbar = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  const closeOpenMenus = useCallback(
    (e) => {
      if (ref.current && open && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    },
    [open]
  );

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus);
    return () => {
      document.removeEventListener("mousedown", closeOpenMenus);
    };
  }, [open]);

  

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
          {open ? (
            <div className="close-icon">
              <RiCloseLine
                color="#fff"
                size={27}
                style={{ cursor: "pointer" }}
                onClick={() => setOpen(false)}
                // ref={ref}
              />
            </div>
          ) : (
            <div className="menu-icon">
              <RiMenu3Line
                color="#fff"
                size={27}
                style={{ cursor: "pointer" }}
                onClick={() => setOpen(true)}
                // ref={ref}
              />
            </div>
          )}
          {open && (
            <div ref={ref} className="menu scale-up-center">
              {Navitems.map((item) => (
                <div key={item.name} className="menu-item" onClick={() => setOpen(false)}>
                  <a href={item.path }>{item.name}</a>
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