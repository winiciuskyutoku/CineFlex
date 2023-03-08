import {Link} from "react-router-dom"

export default function SessionButton({hour, id, setSeatId}){
    return(
        <Link to={`/assentos/${id}`}>
            <button onClick={() => setSeatId(id)}>{hour}</button>
        </Link>
    )
}