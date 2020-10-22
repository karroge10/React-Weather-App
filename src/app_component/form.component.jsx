import React from 'react';
import './form.style.css'

const Form = props => {
    return(
        <div className="container" style={{paddingTop: 30}}>
            <div>{props.error ? error() : null}</div>
            <form onSubmit={props.loadweather}>
            <div className="row justify-content-center rowform">
                <div className="col-md-3 offset-md-2">
                    <input type="text" className="form-control" id="city" name="city" autoComplete="off" placeholder="City"/>
                    <label for="city"></label>
                </div>
                <div className="col-md-3">
                    <input type="text" className="form-control" id="country" name="country" autoComplete="off" placeholder="Country"/>
                    <label for="country"></label>
                </div>
                <div className="col-md-3 mt-md-0 text-md-left">
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