import React from 'react'
import loading from './loading.gif';

const Spinner=()=>{
        return (
            <div className="text-center" style={{paddingBottom:"100vh"}}>
                <img className="my-3"src={loading} alt="loading" />
                <p><br />LOADING</p>
            </div>
        )
}

export default Spinner;
