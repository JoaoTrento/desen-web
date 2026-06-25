interface ICardCarroselProps {
    imagem: string;
    estrela1: string;
    estrela2: string;
    estrela3: string;
    estrela4: string;
    estrela5: string;
    texto: string;
    nome: string;
    cargo: string;
}

export default function CardCarrosel({imagem, 
                                    estrela1, 
                                    estrela2,
                                    estrela3,
                                    estrela4,
                                    estrela5,
                                    texto,
                                    nome,
                                    cargo
                                }: ICardCarroselProps) {
    return(
        <>
            <div className="carousel-card">
                <img src={imagem} alt="" />
                <span>
                    <p>{texto}</p>
                </span>
                <span>
                    <img src={estrela1} alt="" />
                    <img src={estrela2} alt="" />
                    <img src={estrela3} alt="" />
                    <img src={estrela4} alt="" />
                    <img src={estrela5} alt="" />
                </span>
                <span>
                    <p>{nome}</p>
                    <p>{cargo}</p>
                </span>
            </div>
        </>
    )
}