import Menu from "../Menu"
import './css/Home.css'

function Home(){
    return(
        <div>
            <div className="title">
                <h1>Home</h1>
            </div>
            <Menu></Menu>
            <div className="bloco">
                <h2>Trabalho</h2>
                <p style={{fontSize:"20px"}}>
                    Olá, este é meu trabalho de uma lista de cadastro de produtos com React.js.
                    espero que gostem do meu trabalho 
                </p>
                <p>&copy;Luiz Guilherme Peres</p>
            </div>

        </div>
    )
}
export default Home