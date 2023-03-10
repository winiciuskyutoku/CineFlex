import {useState} from "react"
import styled from "styled-components"

export default function Seat({name, avaible, setIds, ids, id}){
    const [selected, isSelected] = useState(false)

    function selectChair(e){ 

        {selected === false ? isSelected(true) : isSelected(false)}
        
        if(!ids.includes(e)){
            setIds([...ids, id])
        } else {
            ids.filter((event, i) => {
                if(event === e){
                    ids.splice(i, 1, )
                }
            })
        }
    }

    return(
        <SeatItem avaible={avaible} selected={selected} onClick={avaible === false ? () => selectChair(id) : null}>{name}</SeatItem>
    )
}

const SeatItem = styled.div`
    border: 1px solid ${(props) => !props.avaible ? "#7B8B99" : "#F7C52B"};         
    background-color: ${(props) => !props.avaible ? "#C3CFD9" : "#FBE192"};

    background-color: ${(props) => props.selected && "#1AAE9E"};
    border: 1px solid ${(props) => props.selected && "#0E7D71"};

    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
    cursor: pointer;
`