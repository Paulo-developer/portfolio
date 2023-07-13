import style from './Container.module.css'

export default function Container({children}) {
    return (
        <section className={style.container}> 
          {children}
        </section>
    )
}