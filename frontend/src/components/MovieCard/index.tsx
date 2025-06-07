import { Link } from 'react-router-dom';
import './style.css'
import MovieScore from "components/MovieScore";

function MovieCard(){

     const movie = {
        id: 1,
        image: "https://image.tmdb.org/t/p/original/8eifdha9GQeZAkexgtD45546XKx.jpg",
        title: "Capitão America",
        count: 2,
        score: 4.5
    }

    return(
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                 <MovieScore/>
                 <Link to={`form/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                 </Link>
            </div>
        </div>
    )
}

export default MovieCard