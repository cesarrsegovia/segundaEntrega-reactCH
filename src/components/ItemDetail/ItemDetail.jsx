import './ItemDetail.css'

const ItemDetail = ({id,nombre,precio,img}) => {
    return (
        <div className='contenedorItem'>
            <h2>{nombre}</h2>
            <h3>Precio: ${precio}</h3>
            <h3>ID: {id}</h3>
            <p className='texto-detail'>Envios a todo el pais! 3 y 6 cuotas sin interes.</p>
            <img className='imgProductoDetails' src={img} alt={nombre} />

        </div>
    )
}

export default ItemDetail