import React from 'react'
import { sidebarItems } from '~/constants'
import { Link, NavLink } from 'react-router'
import { cn } from '~/lib/utils'

const Navbar = () => {
    const user = {
        name: 'John Doe',
        email: 'john@gmail.com',
        imageurl: '/public/assets/images/david.webp'
    }
  return (
    <section className="nav-items">
        <Link to='/' className="link-logo">
        <img src='/public/assets/icons/logo.svg' alt="logo" className='size-[30px]'/>
         <h1>Tourvisto</h1>
        </Link>

        <div className='container'>
            <nav>
                {sidebarItems.map(({id, href, icon, label}) => (
                    <NavLink
                        to={href}
                        key={id}>
                            
                            {({ isActive }: { isActive: boolean }) => (
                           <div className={cn("group nav-item", { 'bg-primary !text-white': isActive 
})}>
                        <img 
                        src={icon}
                        alt={label}
                        className={`group-hover:brightness-0 size-0 group-hover:invert ${isActive ? ' brightness-0 invert' : ''}`}/>
                        {label}
                        </div>
)}
                    </NavLink>
                ))}
            </nav>

            <footer className='nav-footer'>
                <img src={user?.imageurl || '/public/assets/images/david.webp'} alt={user?.name}/>

                <article>
                    <h2>{user?.name}</h2>
                    <p>{user?.email}</p>
                </article>

                <button 
                onClick={() => {
                    console.log('Logout')
                }}
                className='cursor-pointer'>
                    <img 
                    src='/public/assets/icons/logout.svg'
                    alt='logout'
                    className='size-10'/>
                    </button>
                </footer>

        </div>
    </section>
  )
}

export default Navbar