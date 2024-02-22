"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'

import Imagens from '@/components/Imagens'
import Hero from '@/components/Hero'
import Header from '@/components/Header'
import Menu from '@/components/Menu'
export default function Home() {
  var itensMenu=["Marcas","Lojas","Feminino","Masculino","Infantil","Casa","Viagem","..."]
 
  var imagens=[<img src="biquine.jpg" className="img1"/>,
  <img src="crianca.jpg" className="img2"/>,
  <img src="hering.jpg" className="img3"/>,
  
    <img src="maio.jpg" className="img4"/>,
  ]
  var [imagemAtiva,setImagemAtiva]=useState(0)
  function Corre(){function intervalo(){setImagemAtiva(imagemAtiva<3?imagemAtiva+1:0)}
    setTimeout(intervalo,5000)}
    
    useEffect(Corre,[imagemAtiva])
    const secoes=[{imagem1:"destaque1.webp",imagem2:"destaque2.webp",titulo:"destaques"},
    {imagem1:"imagemcrianca01.webp",imagem2:"imagemlacoste2.webp"},
    {imagem1:"lacoste3.webp",imagem2:"panela.webp"},
    {imagem1:"crocs.jpg",imagem2:"puma.webp"},{imagem1:"viagem.jpg",imagem2:"calvin.jpg"},
  {imagem1:"dimy.webp",imagem2:"farm.webp",titulo:".Novidades."},
{imagem1:"tramontina.webp",imagem2:"heringkids.webp"}]
    secoes[0][2]
    secoes[1][1]
    secoes[1].imagem1
    const roupas=[{camiseta:10}]
    const mercado=[{salada:"alface"}]
    const academia=[{leg:100}]
    const aula=[{informatica:8}]
    const aniversario=[{nai:27}]
    const carro=["ford","ka"]

  return (
    <main className={styles.main}>
      <Header/>
      <Menu itensMenu={itensMenu} />
     <Hero imagem={imagens[imagemAtiva]}/>
    {secoes.map(item =>  <Imagens titulo={item.titulo} 
    imagem1={item.imagem1} 
    imagem2={item.imagem2}/>)}
     
    </main>
  )
}
