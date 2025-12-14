import './css/Menu.css'
function Menu (){
    return(
        <div className='Conteiner'>
            <a className='home' href="/">Home</a>&nbsp;&nbsp;&nbsp;
            <a className='cadastrar' href="/cadastrar">Cadastrar</a>&nbsp;&nbsp;&nbsp;
            <a className='produtos' href="/produtos">Produtos</a>&nbsp;&nbsp;&nbsp;
        </div>
    )


}
export default Menu