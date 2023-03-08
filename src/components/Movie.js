import {Link} from "react-router-dom"

export default function Movie({img, alt, id, setMovieId}){
    return(
        <Link to={`/sessoes/${id}`}>
            <img src={img} alt={alt} onClick={() => setMovieId(id)}/>
        </Link>
    )
}   