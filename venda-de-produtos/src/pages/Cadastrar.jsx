import { useState, useEffect, use } from "react";
import App from "../App.jsx";
import Card from "../components/Card.jsx";
import Menu from "../Menu.jsx";
import './css/Cadastro.css'

const API_Key  = 'https://crudcrud.com/api/35abb0335e304b0fbe1c0ac2c597742a/tarefas'

function Cadastrar(){
    const[lista, setLista] = useState([])

    const[name, setName]= useState('')
    const[img, setImg]= useState('')
    const[text, setText]= useState('')
    const[price, setPrice]= useState('')


    const[image, setImage] = useState(null)
    const[previw, setPreviw] = useState(null)

    const handleImage = (e)=>{
        const file = e.target.files[0];

        if(!file) return;
        setImage(file)
        setPreviw(URL.createObjectURL(file));


        const reader = new FileReader();
        reader.onloadend = ()=>{
            setImg(reader.result)
        }
        reader.readAsDataURL(file)
    }

    useEffect(()=>{
        fetch(API_Key)
         .then(res => res.json())
         .then(data => setLista(data))
         .catch(error => console.error('Não foi possivel achar o produto', error))
    },[])


    
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.trim() === "" ||
      img === null ||
      text.trim() === "" ||
      price.trim() === ""
    ) {
      alert("Preencha todos os campos");
      return;
    }

    const newCard = {
      name: name.trim(),
      img,
      text,
      price
    };

    fetch(API_Key, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newCard),
    })
      .then(res => res.json())
      .then(cardCriado => {
        setLista([...lista, cardCriado]);

        setName("");
        setImg("");
        setText("");
        setPrice("");
      })
      .catch(error =>
        console.error("Erro ao criar Card", error)
      );
  };






    return(
    <div>
        <h1>Cadastrar</h1>
        <Menu></Menu>
        <div className="conteiner">
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}  
                placeholder="Digite o Nome do Produto"/>
                <input type="file"accept="image/*" onChange={handleImage}/>
                <input type="text" value={text} onChange={(e) =>{setText(e.target.value)}}
                placeholder="Descrição do produto" />
                <input type="text" value={price} onChange={(e) =>{setPrice(e.target.value)}}
                placeholder="Digite o preço"/>

                <button type="submit">Cadastrar</button>

            </form>
           
        </div>
    </div>

    )
}

export default Cadastrar