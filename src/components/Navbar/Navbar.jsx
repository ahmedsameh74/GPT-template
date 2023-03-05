import './Navbar.css'
import Logo from '../../assets1/Logo.svg'

const Navbar = () => {
  const Navitems = [
    {name: 'Home', active: true},
    {name: 'What is GPT', active: false},
    {name: 'Open Ai', active: false},
    {name: 'Case Studies', active: false},
    {name: 'Library', active: false},
  ]
  return (
    <div className='Navbar'>
      <div className="left">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="items">
            {Navitems.map(item => (
              <div key={item.name} className={`item ${item.active ? 'active' : ''}`}>
              <p>{item.name}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="right">
        <button>Sign in</button>
        <button>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar