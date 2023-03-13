import {Link} from "react-router-dom"


export default function SessionButton({hour, id, setSeatId, date, setMovieHour, setMovieDate}){
    return(
        <Link to={`/assentos/${id}`}>
            <button onClick={() => {
                setSeatId(id)
                setMovieHour(hour)
                setMovieDate(date)
            }}>{hour}</button>
        </Link>
    )
}