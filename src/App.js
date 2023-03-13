import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function App() {

    const [movieId, setMovieId] = useState("")
    const [seatId, setSeatId] = useState(null)
    const [seatName, setSeatName] = useState([])
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [movieTitle, setMovieTitle] = useState("")
    const [movieDate, setMovieDate] = useState("")
    const [movieHour, setMovieHour] = useState("")

    //const navigate = useNavigate()

    return (
        <>
           <BrowserRouter>
               <NavContainer>CINEFLEX</NavContainer>
                <Routes>
                    <Route path="/" element={<HomePage setMovieId={setMovieId} setMovieTitle={setMovieTitle}/>}/>
                    <Route path="/assentos/:idSection" element={<SeatsPage seatId={seatId} setSeatName={setSeatName} seatName={seatName} name={name} setName={setName} cpf={cpf} setCpf={setCpf}/>}/>
                    <Route path="/sessoes/:idMovie" element={<SessionsPage movieId={movieId} setSeatId={setSeatId} setMovieHour={setMovieHour} setMovieDate={setMovieDate}/>}/>
                    <Route path="/sucess" element={<SuccessPage seatName={seatName} name={name} cpf={cpf} movieTitle={movieTitle} movieDate={movieDate} movieHour={movieHour} setName={setName} setCpf={setCpf} setSeatName={setSeatName}/>}/>
                </Routes>
           </BrowserRouter>
        </>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
