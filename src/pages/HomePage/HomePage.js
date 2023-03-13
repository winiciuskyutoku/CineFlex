import styled from "styled-components"
import axios from "axios"
import { useEffect, useState} from "react"
import Movie from "../../components/Movie"


export default function HomePage({setMovieId, setMovieTitle}) {
    const url = "https://mock-api.driven.com.br/api/v8/cineflex/movies"

    const [movies, setMovies] = useState(null)

    useEffect(() => {
        const promise = axios.get(url)

        promise.then((sucess) => setMovies(sucess.data))
        promise.catch((fail) => console.log(fail.responde.data))
    }, [])

    //console.log(movies)

    if(movies == null){
        return (
            <PageContainer>
                <p>
                    Carregando....
                </p>
            </PageContainer>
        )
    }

    return (
        <PageContainer>
            Selecione o filme

            <ListContainer>
                {movies.map(movie => {
                    return (
                        <MovieContainer key={movie.id}>
                            <Movie key={movie.id} img={movie.posterURL} alt={movie.title} id={movie.id} setMovieId={setMovieId} setMovieTitle={setMovieTitle}/>
                        </MovieContainer>
                    )
                })}
            </ListContainer>

        </PageContainer>
    )
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
    padding-top: 70px;
`
const ListContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`
const MovieContainer = styled.div`
    width: 145px;
    height: 210px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    img {
        width: 130px;
        height: 190px;
    }
`