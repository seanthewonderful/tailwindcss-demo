import { FaSearch, FaShoppingCart } from "react-icons/fa"
import { MdAccountCircle } from "react-icons/md"
import { GiFullMotorcycleHelmet, GiHamburgerMenu } from "react-icons/gi"
import { useState } from 'react'

function Header() {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <nav className="flex lg:hidden justify-between items-center h-[10vh] w-full px-5 bg-primary-dark text-highlight">

        <GiFullMotorcycleHelmet />
        <GiHamburgerMenu onClick={() => setShowMenu(!showMenu)}/>
        {showMenu && 
          <div className="flex flex-col items-center absolute left-0 top-[10vh] h-[90vh] w-full bg-primary-dark">
            
            <div className="flex flex-col justify-evenly items-center w-1/3 h-1/3">
                <button>HyperSport</button>
                <button>Naked Sport</button>
                <button>Cruisers</button>
            </div>

            <div className="flex justify-evenly items-center w-1/2">
              <FaSearch />
              <FaShoppingCart />
              <MdAccountCircle />
            </div>
            
          </div>
        }

      </nav>

      <nav className="hidden lg:flex justify-between h-[10vh] w-full px-5 bg-primary-dark text-highlight">

        <div className="flex justify-evenly items-center w-1/3">
          <GiFullMotorcycleHelmet />
            <button>HyperSport</button>
            <button>Naked Sport</button>
            <button>Cruisers</button>
        </div>

        <div className="flex justify-evenly items-center w-1/4">
          <FaSearch />
          <FaShoppingCart />
          <MdAccountCircle />
        </div>

      </nav>

    </>
  )
}

export default Header