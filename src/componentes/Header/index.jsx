import { Link } from 'react-router-dom'
import styles from './Header.module.css'
function Header(){
    return(
        <header className= {styles.header}>
            <span>Giovanna Oliveira</span>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='/ods'>ODS</Link>
                <Link href="https://www.linkedin.com/in/giovanna-gabriela-44b726270">Contato</Link>
                
            </nav>
        </header>

    )
}