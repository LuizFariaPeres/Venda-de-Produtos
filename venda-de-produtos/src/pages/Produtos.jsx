import { useState, useEffect } from "react"
import Cadastrar from "./Cadastrar"
import Menu from "../Menu"
import Card from "../components/Card"
import { data } from "react-router-dom"
import './css/Podrutos.css'


const API_Key =  'https://crudcrud.com/api/35abb0335e304b0fbe1c0ac2c597742a/tarefas'


function Produtos(){
    const[produtos,setProdutos] = useState([])


    useEffect(()=>{
        fetch(API_Key)
        .then(res => res.json())
        .then(data => setProdutos(data))
        .catch(error => console.error('nâo foi possivel buscar os produtos', error))

    },[])

    const remove = (_id)=>{
        fetch(`${API_Key}/${_id}`,{
            method: 'DELETE',
        })
        .then(()=>{
            setProdutos(prev => prev.filter(item => item._id !== _id))
        })
        .catch(error => console.error("Não foi possivel localizar o card", error))
        
    }


    return(
        <div>
            <div className="title">

                <h1>Produtos</h1>
            </div>
            <Menu></Menu>
             <ul>
                {produtos.length === 0 && <p style={{display:'flex', justifySelf:'center'}}>Nenhum produto Cadastrado</p>}
                {produtos.map(item =>
                (
                    <li>
                        <Card key={item._id}
                            name={item.name} 
                            text={item.text} 
                            img={item.img} 
                            price={item.price}
                            onDelete = {() => remove(item._id)}
                            />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Produtos