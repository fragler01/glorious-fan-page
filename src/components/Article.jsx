import '../styles/Article.scss'

export default function Article({article}) {
    if(article.id%2===0){
        return (
            <article className="leftie">
                <div className="image-container desktop-only">
                    <img src={require(`../images/${article.imageUrl}`)} alt="" />
                </div>
                <div className="text-container">
                    <h1>{article.title}</h1>
                    <p>{article.content}</p>
                </div>
                <div className="image-container mobile-only">
                    <img src={require(`../images/${article.imageUrl}`)} alt="" />
                </div>
            </article>
        )
    }else{
        return (
            <article className="rightie">                
                <div className="text-container">
                    <h1>{article.title}</h1>
                    <p>{article.content}</p>
                </div>
                <div className="image-container">
                    <img src={require(`../images/${article.imageUrl}`)} alt="" />
                </div>
            </article>
        )
    }
    

}