import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css";
import "../styles/solution.css";
import Button from "../components/Button";
import imgPequena from "../assets/imagem_pequena_azul.png";
import imgGrande from "../assets/imagem_grande_azul.png";
import ChampionCarro from "../assets/carro_champ.svg";
import ChampionChave from "../assets/chave_champ.svg";
import ChampionVelocimetro from "../assets/velocimetro_champ.svg";

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);
    
    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />

                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#">Home</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#contact">Contato</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} className="reverse-color" href="#">Login</a>
                                        </li>                                        
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>
                </nav>
            </header>
            <section id="hero">
                <span className="desktop-only">
                    <img src={imgPequena} alt="Linhas que formam a imagem de um carro visto de cima" />
                </span>
                <img src={imgGrande} alt="Linhas que formam a imagem de um carro visto de lado" />
                
                <div className="container content">               
                    <p className="desktop-only">
                    Olá
                    </p>    
                    <h1>O carro dos seus sonhos direto na sua garagem!</h1>
                    <p>Já pensou em dirigir o carro perfeito para o seu dia a dia? O melhor de tudo, temos veículos revisados, com qualidade garantida e condições imperdíveis.</p>
                    
                    <div className="flex gap-1">
                            <span><Button text="Cadastre-se" /></span>
                            <span className="desktop-only">
                                <Button text="Veja mais" secondary />
                            </span>
                    </div>
                </div>
            </section>
            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop_only"><h2>Texto aqui</h2></span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolor corporis delectus ipsa, ipsam error enim exercitationem, rerum <strong>labore</strong> dolores animi nesciunt voluptate sed ad, tempora vel rem iure iusto.</p>
                    </span>
                </header>
                <section className="even-columns">
                    <div className="card">
                        <span>
                            <img src={ChampionCarro} alt="ícone campeão" width={64} height={64} />
                        </span>
                        <div>
                            <h3>
                                Produto Vencedor
                            </h3>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit in cupiditate dolorum tempora beatae ratione laboriosam id ipsum modi, pariatur tempore mollitia ipsam qui ex maiores corporis provident aspernatur impedit.
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="card">
                        <span>
                            <img src={ChampionVelocimetro} alt="ícone campeão" width={64} height={64} />
                        </span>
                        <div>
                            <h3>
                                Produto Vencedor
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nemo fugiat exercitationem, dolorum rem placeat maxime vero, consequatur, adipisci est recusandae reiciendis alias blanditiis dolores quo dicta iusto magni expedita!
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="card">
                        <span>
                            <img src={ChampionChave} alt="ícone campeão" width={64} height={64} />
                        </span>
                        <div>
                            <h3>
                                Produto Vencedor
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil blanditiis unde, repudiandae, libero reiciendis ipsum fuga adipisci sapiente voluptatem, autem maiores maxime praesentium doloremque magnam sint eum natus? Maiores, quam.
                            </p>
                            <hr />
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}