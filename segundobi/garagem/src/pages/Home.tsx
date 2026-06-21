import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css";
import "../styles/solution.css";
import "../styles/planos.css";
import Button from "../components/Button";
import CardCarrosel from "../components/card_carrosel";
import CardVantagem from "../components/card_vantagem";
import imgPequena from "../assets/imagem_pequena_azul.png";
import imgGrande from "../assets/imagem_grande_azul.png";
import ChampionCarro from "../assets/carro_champ.svg";
import ChampionChave from "../assets/chave_champ.svg";
import ChampionVelocimetro from "../assets/velocimetro_champ.svg";
import maverick from "../assets/maverick.jpg";
import reddington from "../assets/reddington.jpg";
import maximus  from "../assets/maximus.jpg";
import tony  from "../assets/tony.jpg";
import nascimento  from "../assets/nascimento.jpg";
import estrela from "../assets/estrela.svg";
import "../styles/testmonials.css";

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
                        <p>Nossos veículos são selecionados para oferecer a melhor experiência possível, unindo qualidade, desempenho e segurança. Cada carro passa por critérios rigorosos de avaliação para garantir confiabilidade, procedência e alto padrão de entrega. Aqui você encontra vantagens reais que fazem diferença na hora da escolha.</p>
                    </span>
                </header>
                <section className="even-columns">
                    <CardVantagem imagem={ChampionCarro} titulo="Confiabilidade" 
                    descricao="Seleção de veículos que se destacam em desempenho, qualidade de construção e confiabilidade. Cada modelo é escolhido com base em critérios rigorosos para garantir uma experiência superior ao dirigir e maior durabilidade no uso diário."></CardVantagem>

                    <CardVantagem imagem={ChampionChave} titulo="Revisão" 
                    descricao="Todos os veículos passam por uma inspeção completa antes de serem disponibilizados, incluindo verificação mecânica, elétrica e estrutural. Isso garante mais segurança, transparência e confiança na compra."></CardVantagem>
                    
                    <CardVantagem imagem={ChampionVelocimetro} titulo="Esportivos" 
                    descricao="Linha de veículos esportivos voltada para quem busca alta performance, aceleração responsiva e dirigibilidade precisa. São modelos projetados para entregar uma experiência de condução mais agressiva e envolvente."></CardVantagem>
                </section>
            </section>
            <section id="testimonials">
                <header>
                    <span>
                        <p>Nós acreditamos que</p>
                        <h2>Cada Cliente Importa!</h2>
                    </span>
                    <p>
                        Anos de mercado nos proporcionam confiancia em nossos produtos, prova disso são as avaliações de nossos clientes
                    </p>
                </header>
                <div className="carousel">
                    <div className="carousel-content">
                        <CardCarrosel estrela1={estrela} estrela2={estrela} estrela3={estrela} estrela4={estrela} estrela5={estrela} 
                        imagem={maverick} texto="O carro parece um jato." 
                        nome="Pete Maverick" cargo="Capitão da Marinha"></CardCarrosel>

                        <CardCarrosel estrela1={estrela} estrela2={estrela} estrela3={estrela} estrela4={estrela} estrela5={estrela} 
                        imagem={reddington} texto="Atendimento espetacular." 
                        nome="Raymond Reddington" cargo="Informante do FBI."></CardCarrosel>

                        <CardCarrosel estrela1={estrela} estrela2={estrela} estrela3={estrela} estrela4={estrela} estrela5={estrela} 
                        imagem={maximus} texto="Nunca vi nada parecido." 
                        nome="Maximus Decimus Meridius" cargo="General das Legiões Felix"></CardCarrosel>

                        <CardCarrosel estrela1={estrela} estrela2={estrela} estrela3={estrela} estrela4={estrela} estrela5={estrela} 
                        imagem={nascimento} texto="Exelente." 
                        nome="Roberto Nascimento" cargo="Capitão do BOPE"></CardCarrosel>

                        <CardCarrosel estrela1={estrela} estrela2={estrela} estrela3={estrela} estrela4={estrela} estrela5={estrela} 
                        imagem={tony} texto="Comprei meu Audi R8 aqui." 
                        nome="Tony Stark" cargo="CEO das Industrias Stark"></CardCarrosel>
                    </div>
                    <div className="carousel-content">
                        <CardCarrosel estrela1={estrela} estrela2={estrela} estrela3={estrela} estrela4={estrela} estrela5={estrela} 
                        imagem={maverick} texto="O carro parece um jato." 
                        nome="Pete Maverick" cargo="Capitão da Marinha"></CardCarrosel>

                        <CardCarrosel estrela1={estrela} estrela2={estrela} estrela3={estrela} estrela4={estrela} estrela5={estrela} 
                        imagem={reddington} texto="Atendimento espetacular." 
                        nome="Raymond Reddington" cargo="Informante do FBI."></CardCarrosel>

                        <CardCarrosel estrela1={estrela} estrela2={estrela} estrela3={estrela} estrela4={estrela} estrela5={estrela} 
                        imagem={maximus} texto="Nunca vi nada parecido." 
                        nome="Maximus Decimus Meridius" cargo="General das Legiões Felix"></CardCarrosel>

                        <CardCarrosel estrela1={estrela} estrela2={estrela} estrela3={estrela} estrela4={estrela} estrela5={estrela} 
                        imagem={nascimento} texto="Exelente." 
                        nome="Roberto Nascimento" cargo="Capitão do BOPE"></CardCarrosel>

                        <CardCarrosel estrela1={estrela} estrela2={estrela} estrela3={estrela} estrela4={estrela} estrela5={estrela} 
                        imagem={tony} texto="Comprei meu Audi R8 aqui." 
                        nome="Tony Stark" cargo="CEO das Industrias Stark"></CardCarrosel>
                    </div>
                </div>
            </section>
            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Opções</p>
                    <h2>Formas de Pagamento</h2>
                </header>
                <section className="even-columns gap-1.5">
                    <div className="pricing-card">
                        <span className="plan">
                            <p>Planeje a compra do seu carro com parcelas mais acessíveis e sem entrada obrigatória.</p>
                        </span>
                            <h2>Consórcio</h2>
                        <Button text="Simular agora" secondary key="free" />
                        <span className="hr" /><span className="features">
                            <img src={estrela} alt="ícone check" width={24} height={24} />
                            <p>Parcelas mais acessíveis</p>
                        </span>
                        <ul className="features">
                            <li>
                                <img src={estrela} alt="ícone check" width={24} height={24} />
                                <p>Possibilidade de lance para antecipar a contemplação</p>
                            </li>
                        </ul>
                    </div>
                    <div className="pricing-card premium">
                        <span className="bonus">
                                <p>A OPÇÃO MAIS POPULAR</p>
                        </span>
                        <span className="plan">
                            <p>Para quem quer sair com o carro da loja de forma rápida, após aprovação do crédito.</p>
                        </span>
                        <span className="price">
                            <h2>FINANCIAMENTO</h2>
                        </span>
                        <Button text="Simular agora" key="premium" />
                        <span className="hr" />
                        <span className="features">
                            <img src={estrela} alt="ícone check" width={24} height={24} />
                            <p>Carro liberado após aprovação</p>
                        </span>
                        <span className="features">
                            <img src={estrela} alt="ícone check" width={24} height={24} />
                            <p>Entrada facilitada</p>
                        </span>
                        <span className="features">
                            <img src={estrela} alt="ícone check" width={24} height={24} />
                            <p>Parcelas ajustadas ao seu perfil</p>
                        </span>
                    </div>
                </section>
            </section>
        </>
    )
}