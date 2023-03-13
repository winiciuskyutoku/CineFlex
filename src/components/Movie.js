import {Link} from "react-router-dom"

export default function Movie({img, alt, id, setMovieId, setMovieTitle}){
    return(
        <Link to={`/sessoes/${id}`}>
            <img src={img} alt={alt} onClick={() => {
                 setMovieId(id)
                 setMovieTitle(alt)
            }}/>
        </Link>
    )
}   