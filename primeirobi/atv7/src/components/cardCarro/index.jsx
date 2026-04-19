import "./cardCarro.css"

export default function CardCarro(props) {
    return(
        <section className="card_carro" 
        titulo={props.titulo}
        data={props.data} 
        data_escrita={props.data} 
        descricao={props.descricao}
        img={props.img}
        img_descricao={props.img_descricao}>
            <div>
                <h2>{props.titulo}</h2>
                <time datetime={props.data}>{props.data_escrita}</time>
                <p>{props.descricao}</p>
            </div>
            <img src={props.img} alt={props.img_descricao} />

        </section>
    )
}