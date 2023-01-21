import React from "react"
import Article from "../components/Article"
import '../styles/Home.scss'
import HeroBg from '../images/glorious_keyboards_gmmk_2_hero_lifestyle_2x.webp'

export default function Home(){
    const articles = require('../data/articles.json').articles
    return(
        <div className="Home">
            <div className="Hero" style={{backGround : HeroBg}}>
                <h1>Welcome to the Glorious Fanpage</h1>
            </div>
            <section className="Showup">
                {articles.map(article => <Article key={article.id} 
                    article={article}></Article>)
                }
            </section>
        </div>
    )
}