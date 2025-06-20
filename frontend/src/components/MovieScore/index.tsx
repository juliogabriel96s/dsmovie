import MovieStar from "components/MovieStar";
import './style.css'

function MovieScore(){

    const score = 3.5;
    const count = 13;

    return(
        <div className="ds-movie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1): '-'}</p>
            <MovieStar/>
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>
    )
}

export default MovieScore
