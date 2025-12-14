import { use, useState } from "react";
import './css/Card.css'

const API_Key = 'https://crudcrud.com/api/35abb0335e304b0fbe1c0ac2c597742a/tarefas'

function Card({name, text, price, img, onDelete}){




    return(
        <div className="conteiner">
            <h2>{name}</h2>
            <img className="imgCards" src={img} alt="img"/>
            <p>{text}</p>
            <p>{`R$: ${price}`}</p>
            <button onClick={onDelete}>Remover</button>
        </div>
    )
}


export default Card