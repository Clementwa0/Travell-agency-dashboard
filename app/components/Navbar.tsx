import React from 'react'
import { sidebarItems } from '~/constants'
import { Link, NavLink, useLoaderData, useNavigate } from 'react-router'
import { cn } from '~/lib/utils'
import { logoutUser } from '~/appwrite/auth'

const Navbar = ({handleClick }:{handleClick?:() => void}) => {
    const user = useLoaderData();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logoutUser();
        navigate('/sign-in')
    }
  return (
    <section className="min-h-screen w-72 border-r border-gray-200">
        <Link to='/' className="flex items-center gap-4 px-6 py-5 border-b border-gray-200">
            <img src='/public/assets/icons/logo.svg' alt="logo" className='w-7 h-7'/>
            <h1 className="text-lg font-semibold tracking-wide">Tourvisto</h1>
        </Link>

        <div className='flex flex-col h-[calc(100vh-4.5rem)]'>
            <nav className='flex-1 py-4'>
                {sidebarItems.map(({id, href, icon, label}) => (
                    <NavLink
                        to={href}
                        key={id}>
                        {({ isActive }: { isActive: boolean }) => (
                            <div 
                                className={cn(
                                    "group flex items-center gap-3 mx-3 px-4 py-2.5 rounded-lg transition-all duration-200",
                                    "hover:bg-primary-100/80",
                                    { 'bg-primary text-gray': isActive }
                                )} 
                                onClick={handleClick}>
                                <img 
                                    src={icon}
                                    alt={label}
                                    className={cn(
                                        "w-5 h-5 transition-all",
                                        isActive ? 'brightness-0 invert' : 'group-hover:brightness-75'
                                    )}
                                />
                                <span className="font-medium">{label}</span>
                            </div>
                        )}
                    </NavLink>
                ))}
            </nav>

            <footer className='nav-footer'>
                
                    <img 
                        src={user?.imageurl || '/assets/images/david.webp'} 
                        alt={user?.name}
                        referrerPolicy='no-referrer'
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100"
                    />
                    <div className="flex-1">
                        <h2 className="font-medium leading-tight">{user?.name}</h2>
                        <p className="text-sm text-gray-500 truncate">{user?.email}</p>
                    </div>
                    <button 
                        onClick = {handleLogout}
                        className='p-2 rounded-lg hover:bg-gray-100 transition-colors'
                    >
                        <img 
                            src='/assets/icons/logout.svg'
                            alt='logout'
                            className='w-5 h-5'
                        />
                    </button>
               
            </footer>
        </div>
    </section>
  )
}

export default Navbar