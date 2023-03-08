import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

export default function App() {

    const [movieId, setMovieId] = useState("")
    const [seatId, setSeatId] = useState(null)

    console.log(movieId)

    return (
        <>
           <BrowserRouter>
               <NavContainer>CINEFLEX</NavContainer>
                <Routes>
                    <Route path="/" element={<HomePage setMovieId={setMovieId}/>}/>
                    <Route path={`/assentos/${seatId}`} element={<SeatsPage />}/>
                    <Route path={`/sessoes/${movieId}`} element={<SessionsPage movieId={movieId} setSeatId={setSeatId}/>}/>
                    <Route path="/sucess" element={<SuccessPage />}/>
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
