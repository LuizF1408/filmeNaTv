import React from "react";
import "./Page.css"
import Guerra from './Genres/Action/img/donwload.jpg'


export const Page = ()=>{


return(
    <>
    <div className="content">
    <div className="header">
    <h1>Gabs</h1>
    </div>

    <div className="movies">
        <div className="card">
            <img src={Guerra} />
            <a href='https://cdn-player.ml/400da206-3280-4f75-bf33-bb0de2e46810'>A Guerra do Amanhã </a>
        </div>
        <div className="card">
            <img src={Guerra} />
            <a href='https://play.midiaflixhd.com/tt3480822'>Viúva Negra</a>
        </div>


    </div>
    </div>
    
    </>
)

}
