import "./barraLateral.css"

export default function BarraLateral(props) {
    return(
        <aside className="barra_lateral">
            <h2>{props.titulo}</h2>
            <nav>
                <ul>
                    {props.items.map(item => (
                        <li key={item.id}>{item.nome}</li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}