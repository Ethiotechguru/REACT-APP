import Logo from './Logo'
const Nav = () => {
    return (
        <nav className="nav">
            <Logo/>
            <ul className="nav-list">
                <li className="nav-items">One</li>
                <li className="nav-items">Two</li>
                <li className="nav-items">Three</li>
            </ul>
        </nav>
    )
}

export default Nav;