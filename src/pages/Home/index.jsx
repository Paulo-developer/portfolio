import React from 'react'

import { Link } from 'react-router-dom'
import style from './Home.module.css'

import Header from '../../components/Header/index.jsx'
import Footer from '../../components/Footer/index.jsx'

import minhalogo from '../../assets/minha-logo.png'
import minhafoto from '../../assets/eu.jpg'

export default function Home() {
    return (
        <>
            <Header />
            <section className={style.home}>
                <div className={style.homep1}>
                    <h2>Com o objetivo de tornar o seu <span>produto digital</span> acessível e com uma aparência moderna.</h2>
                    <h3>Juntar a tecnologia e a modernidade na estética é a chave para destacar seu produto</h3>
                    <button className={style.entrarcontato}><Link className={style.a} to='/contatos'>Entre em contato comigo</Link></button>
                </div>
                <div className={style.homep2}>
                    <figure>
                        <img src={minhalogo} alt="minha logo" />
                    </figure>
                </div>
            </section>
            <section className={style.homesobremim}>
                <div className={style.sobremim}>
                    <div className={style.cardsobremim}>
                        <img src={minhafoto} alt="minha logo" />
                        <h1>Antônio Paulo</h1>
                        <h3>💻 Frontend Developer</h3>
                        <div className={style.social}>
                            <button><a href="https://www.linkedin.com/in/antonio-paulo-74615025b/" target='_blank'><i className={style.i} class="bi bi-linkedin"></i></a></button>
                            <button><a href="https://github.com/Paulo-developer?tab=repositories" target='_blank'><i className={style.i} class="bi bi-github"></i></a></button>
                            <button><a href="mailto:antoniopaulodeveloper@gmail.com?" target='_blank'><i className={style.i} class="bi bi-envelope-fill"></i></a></button>
                        </div>
                    </div>
                    <div className={style.textosobremim}>
                        <div className={style.bio}>
                            <h3>Sobre mim</h3>
                            <p>Paulo é um Desenvolvedor Web Frontend Freelancer, nascido e criado no Brasil desde 2005, apaixonado por tecnologia simplesmente por ficar impressionado com a forma que ela mudou o mundo. <br></br>
                                Paulo escolheu focar no Frontend porque gosta de imaginar as cores, formatos, ilustrações de um projeto e dar vida a ele de forma que agrade o usuário!</p>

                            <h3>Experiência</h3>
                            <p>Adquiri experiência com HTML, CSS, JavaScript e ReactJS através de muitos projetos. <br></br>
                                Adquiri experiência em Web Design com o foco em interfaces modernas, como pode ser visto em meus projetos pessoais.
                            </p>
                            <Link to="/projetos"><button>Acesse meus projetos <i class="bi bi-chevron-right"></i></button></Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}