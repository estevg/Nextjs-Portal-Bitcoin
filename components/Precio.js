const Precio = (props) => {

    const { price, percent_change_1h, percent_change_7d, percent_change_24h } = props.precio;

   
    
    return ( 
        <div className="card text-white bg-dark mb-3">
            <div className="card-header">
                Precio del BitCoin
            </div>
            <div className="card-body">
                <h4 className="card-title">Precio Actual : ${price.toFixed(2)} </h4>
            <div className="d-md-flex justify-content-between">
                <p className="card-text">
                    <span className="font-weight-bold">Ultima Hora: </span>{percent_change_1h} %
                </p>
                <p className="card-text">
                    <span className="font-weight-bold">Ultimas 24 Horas: </span> {percent_change_24h} %
                </p>
                <p className="card-text">
                    <span className="font-weight-bold">Ultimas 7 Dias: </span>{percent_change_7d} %
                </p>
            </div>
            </div>
        </div>
     );
}
 
export default Precio;