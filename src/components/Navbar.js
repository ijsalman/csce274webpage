import { useState } from 'react'
import { Menu, XCircle } from 'react-feather'
import {Link} from 'react-router-dom'

export default () => {
    const [menu, setMenu] = useState(true)

    return <nav>
        {
            menu 
            ? <Menu className='nav-button' onClick={() => setMenu(!menu)}/> 
            : <div className='nav-full'>
                <XCircle className='nav-button' onClick={() => setMenu(!menu)}/>
                <div className='nav-links'>
                    <Link className='btn margin-buttom-1' to='/' onClick={() => setMenu(!menu)}>Home</Link>
                    <a 
                        className='btn margin-buttom-1'
                        href='https://dropbox.cse.sc.edu'
                        target='__blank'
                        onClick={() => setMenu(!menu)}
                    >Syllabus
                    </a>
                    <Link className='btn margin-buttom-1' to='/lectures' onClick={() => setMenu(!menu)}>Lectures</Link>
                    <a 
                        className='btn margin-buttom-1'
                        href='https://dropbox.cse.sc.edu'
                        target='__blank'
                        onClick={() => setMenu(!menu)}
                    >Dropbox
                    </a>
                    <a 
                        className='btn margin-buttom-1'
                        href='https://github.com'
                        target='__blank'
                        onClick={() => setMenu(!menu)}
                    >Github
                    </a>
                </div>
            </div>
        }
    </nav>
}