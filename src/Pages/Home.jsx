import Carrusel from "../Components/Carrusel/Carrusel"

function Home() {
    return(
        <div className="app configBox columDisplay">
            <h1 className="title align whiteFont">Nuevos Productos</h1>
            <Carrusel/>
            <div className="app whiteFont">
                PlaceHolder Productos Populares/Visitados
            </div>
            <div className="app whiteFont">
                Boton para ver más productos /productos
            </div>
        </div>
    )
}

export default Home