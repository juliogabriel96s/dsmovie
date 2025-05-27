import  {ReactComponent as GithubIcom} from 'assets/img/github1.svg'
import './style.css'

function Navbar(){
    return(
        <header>
        <nav className='container'>
            <div className='dsmovie-nav-content'>
                <h1>DSmovie</h1>
                <a href="https://github.com/juliogabriel96s">
                <div className='dsmovie-div-content'>
                    <GithubIcom className='dsmovie-icon-content'/>
                    <p className='dsmovie-p-content'>/devsuperior</p>
                </div>
                </a>
            </div>
        </nav>
    </header>
    );
}

export default Navbar;