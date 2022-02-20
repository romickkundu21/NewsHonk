import React from 'react'

const NewsItem =(props)=> {

        let { title, description, imgurl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3 mx-3 ">
                <div className="card  mb-5 rounded " style={{ boxShadow: "rgba(125, 128, 124, 0.35) 0px 19px 38px, rgba(125, 128, 124, 0.28) 0px 18px 15px" }}>
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-secondary" style={{left:"87%",zIndex:"1"}}>
                        {source}
                    </span>
                    <img src={!imgurl ? "https://images.hindustantimes.com/tech/img/2022/01/02/1600x900/adem-ay-ik_AuIWeBBM-unsplash_(1)_1616179387770_1641136225277.jpg" : imgurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><b>{title}</b></h5>
                        <hr />
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-success">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm" style={{background: "rgb(111,216,116)"}}><b>Read More</b></a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem;
