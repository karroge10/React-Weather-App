import React from 'react';

const Weather = (props) => {
    return(
        <div className="container" style={{paddingBottom: 30}}>
            <div className="cards pt-4">
                <h1>
                    {props.city}
                </h1>
                <h1 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-1`}></i>
                </h1>
                {props.temp_celcius ? (<h1 className="py2">{props.temp_celcius}&deg;</h1>) : null}
            
                {/* show max and min temperature */}
                {minmaxTemp(props.temp_min, props.temp_max)}
            
                <h4 className="py-3">{props.description}</h4>
            </div>
        </div>
    );
};

function minmaxTemp(min,max){
    if(min && max){
        return(
            <h3>
                <span className="px-4">Min: {min}&deg;</span>
                <span className="px-4">Max: {max}&deg;</span>
            </h3>
        )
    }
}

export default Weather;