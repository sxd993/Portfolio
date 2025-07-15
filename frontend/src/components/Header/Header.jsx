import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
        </header>
    )
}