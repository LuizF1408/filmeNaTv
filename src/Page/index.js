import React from "react";
import "./Page.css"
import Guerra from './Genres/Action/img/guerradoamanha.jpg'


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
            <a href='https://play2.bolsonaro.xyz/public/dist/index.html?id=43e395d643a1e8d216e448746f414292'>A Guerra do Amanhã </a>
        </div>



    </div>
    </div>
    
    </>
)

}
