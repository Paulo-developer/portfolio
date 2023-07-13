import style from './Projetos.module.css'
import batman from '../../assets/batman.jpg'
import minhalogo from '../../assets/minha-logo.png'
import Header from '../../components/Header/index.jsx'
import Container from '../../components/Container/index.jsx'
import Footer from '../../components/Footer/index.jsx'


export default function Projetos() {
    return (
        <>
          <Header/>
            <main>
              <div className={style.apresentacao}>
                <h2>Projetos.</h2>
              </div>
              <div className={style.container_pr}>
                <div className={style.card_pr}>
                  <picture><img src={batman} alt="" /></picture>
                  <div className={style.button_card_pr}>
                    <h3>Acesse</h3>
                  </div>
                  <a href="https://github.com">Acesse o repositório no GitHub</a>
                </div>
                <div className={style.card_pr}>
                  <picture><img src={batman} alt="" /></picture>
                  <div className={style.button_card_pr}>
                    <h3>Acesse</h3>
                  </div>
                  <a href="https://github.com">Acesse o repositório no GitHub</a>
                </div>
                <div className={style.card_pr}>
                  <picture><img src={batman} alt="" /></picture>
                  <div className={style.button_card_pr}>
                    <h3>Acesse</h3>
                  </div>
                  <a href="https://github.com">Acesse o repositório no GitHub</a>
                </div>
              </div>
            </main>
          <Footer/>
        </>
    )
}