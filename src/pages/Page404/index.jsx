import React from 'react'
import Container from '../../components/Container'
import Header from '../../components/Header'

import illustrate from '../../assets/404 Error-rafiki.png'

import style from './Page404.module.css'
export default function Page() {
    return (
        <>
        <Header/>
            <Container>
                <img src={illustrate} alt="imagem - 404" />
                <h4>Não encontrada</h4>
                <h1>Erro 404 - Página não encontrada</h1>
            </Container>
        <footer><p>Ilustração por <a href="https://storyset.com/web">Web illustrations by Storyset</a></p></footer>
        </>
    )
}