import { Link } from "react-router-dom";
import style from './Nav.module.css'


export default function Nav() {
    return (
        <nav className={style.mainNav}>
           <ul>
            <li><Link to='/'>HomePage</Link></li>
            <li><Link to="/dashboard">DashBoard</Link></li>
            <li><Link to='/create'> CreateForm</Link></li>
            <li><Link to='/auth'>Sign In / Sign Out</Link></li>
        
           </ul>
        </nav>
    )
}


