import styled from "styled-components"
import {useEffect, useState} from "react"
import axios from "axios"
import Seat from "../../components/Seat"

import {useParams, useNavigate} from "react-router-dom"


export default function SeatsPage({setSeatName, seatName, name, setName, cpf, setCpf}) {

    const [seats, setSeats] = useState(null)
    const [ids, setIds] = useState([])

    const {idSection} = useParams()
    const navigate = useNavigate()


    const url = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSection}/seats`

    useEffect(() => {
        const promise = axios.get(url)

        promise.then((sucess) => setSeats(sucess.data))
        promise.catch((fail) => console.log(fail.response.data))
    }, [])

    function reserveSeat(e){
        e.preventDefault()

        const body = {ids, name, cpf}
        console.log(body)

        const url = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many"
        const promise = axios.post(url, body)

        promise.then(() => {
            navigate("/sucess")
        })
        promise.catch((fail) => console.log(fail))
    }

    console.log(ids)

    if(seats !== null){
        return (
            <PageContainer>
                Selecione o(s) assento(s)
    
                <SeatsContainer>
                    {seats.seats.map((seatNum) => <Seat id={seatNum.id} avaible={seatNum.isAvailable} name={seatNum.name} key={seatNum.id} setIds={setIds} ids={ids} sName={seatNum.name} setSeatName={setSeatName} seatName={seatName}/>)}
                </SeatsContainer>
    
                <CaptionContainer>
                    <CaptionItem>
                        <CaptionCircle props={"chairSelected"}/>
                        Selecionado
                    </CaptionItem>
                    <CaptionItem>
                        <CaptionCircle props={"chairAvaible"}/>
                        Disponível
                    </CaptionItem>
                    <CaptionItem>
                        <CaptionCircle props={"chairUnavaible"}/>
                        Indisponível
                    </CaptionItem>
                </CaptionContainer>
    
                <FormContainer>
                    <form onSubmit={reserveSeat}>
                        <Title htmlFor="name">Nome do Comprador:</Title>
                        <input id="name" type="text" required placeholder="Digite seu nome..." value={name} onChange={(e) => setName(e.target.value)}/>
                        <Title htmlFor="cpf">CPF do Comprador:</Title>
                        <input id="cpf" type="text" pattern="\d{3}\.?\d{3}\.?\d{3}\.?\d{2}" required placeholder="Digite seu CPF..." value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                        <button type="submit">Reservar Assento(s)</button>
                    </form>
                </FormContainer>
    
                <FooterContainer>
                    <div>
                        <img src={seats.movie.posterURL} alt={seats.movie.title} />
                    </div>
                    <div>
                        <p>{seats.movie.title}</p>
                        <p>{seats.day.weekday} - {seats.day.date}</p>
                    </div>
                </FooterContainer>
    
            </PageContainer>
        )
    } else {
        return (
            <PageContainer>
                <p>Carregando...</p>
            </PageContainer>
        )
    }
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`

const Title = styled.label`
    font-size: 18px
`

const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionCircle = styled.div`
    border: 1px solid ${(props) => props.props === "chairSelected" && "#0E7D71"};        
    background-color: ${(props) => props.props === "chairSelected" && "#1AAE9E"};    

    border: 1px solid ${(props) => props.props === "chairAvaible" && "#7B8B99"};        
    background-color: ${(props) => props.props === "chairAvaible" && "#C3CFD9"};   

    border: 1px solid ${(props) => props.props === "chairUnavaible" && "#F7C52B"};        
    background-color: ${(props) => props.props === "chairUnavaible" && "#FBE192"};     

    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`

const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`