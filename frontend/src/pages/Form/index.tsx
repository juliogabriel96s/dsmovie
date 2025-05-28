import './styles.css'
function Form(){

    const movie = {
        id: 1,
        image: "https://image.tmdb.org/t/p/original/8eifdha9GQeZAkexgtD45546XKx.jpg",
        title: "Capitão America",
        count: 2,
        score: 4.5
    }

    return(
        <div className="dsmovie-form-container">
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-buttom-container">
                <h3>{movie.title}</h3>
                <form className="dsmovie-form">
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email">Informe seu email:</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Informe a sua avaliação:</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <button type="submit" className="btn-salvar ds-movie-btn">Salvar</button>
                    </div>
                </form>
                <button className=" btn-cancelar ds-movie-btn">Cancelar</button>
            </div>
            
        </div>
    )
}

export default Form