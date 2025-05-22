import React from 'react'
import { sidebarItems } from '~/constants'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
  return (
    <section className="nav-items">
        <Link to='/' className="link-logo">
        <img src='/public/assets/icons/logo.svg' alt="logo" className='size-[30px]'/>
         <h1>Tourvisto</h1>
        </Link>

        <div className='container'>
            <nav>
                {sidebarItems.map(({id, href, icon,label}) => (
                    <NavLink to={href} key={id}>
                        {({isActive}:{isActive:boolean}) => (
                           <div>
                            {label}
                           </div>)}
                    </NavLink>
                ))}
            </nav>
        </div>
    </section>
  )
}

export default Navbar