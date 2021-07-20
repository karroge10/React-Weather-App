import React from 'react';
import './form.style.css'

const Form = props => {
    return(
        <div className="container" style={{paddingTop: 30}}>
            <div>{props.error ? error() : null}</div>
            <form onSubmit={props.loadweather}>
            <div className="form-row align-items-center justify-content-center">
                <div className="col-sm-4 m-2">
                    <input type="text" className="form-control" id="city" name="city" autoComplete="off" placeholder="City"/>
                    <label for="city"></label>
                </div>
                <div className="col-sm-4 m-2">
                    <input type="text" className="form-control" id="country" name="country" autoComplete="off" placeholder="Country"/>
                    <label for="country"></label>
                </div>
                <div className="col-sm-4 m-1">
                    <button className="btn btn-dark">Get Weather</button>
                </div>
            </div>
            </form>
        </div>
    );
}

function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert">Please Enter City and Country</div>
    )
}

export default Form;