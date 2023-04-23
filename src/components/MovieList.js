import React from 'react'
import { useSelector } from 'react-redux'

export default function MovieList(props) {

    const mode = useSelector((state) => state.mode.value)

    return (
        <div>
            <div className={`card bg-${mode=='dark'?'black':'white'} text-${mode==='light'?'black':'white'} border border-${mode==='light'?'black':'warning'} my-2`} >
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-warning text-dark" style={{left:'90%', zIndex:1}}>IMDB: {props.imdb}</span>
                <img src={props.imgSrc} className="card-img-top" alt="..." style={{height:"457px",width:"304px"}}/>
                    <div className="card-body">
                        
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text" >{props.desc}</p>
                        <p style={{fontWeight:"bold"}}>Type: {props.type}</p>
                        <a href={props.trailer} target='_blank' className="btn btn-primary">Watch Trailer</a>
                    </div>
            </div>
        </div>
    )
}
