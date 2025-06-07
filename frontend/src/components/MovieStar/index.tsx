import {ReactComponent as StarFull} from 'assets/img/starFull.svg'
import {ReactComponent as StarHalf} from 'assets/img/starblack.svg'
import './style.css'


function MovieStar(){
    return(
        <div className="dsmovie-stars-container">
            <StarFull/>
            <StarFull/>
            <StarFull/>
            <StarHalf/>
            <StarHalf/>
        </div>
    )
}

export default MovieStar