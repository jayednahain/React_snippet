import React from 'react';


function get_time(place_data){
    return new Date().toLocaleTimeString(place_data)
}


function Fun_clock({
    // this will work as property as in element!
    place_data
}) {
    return (
        <h1 className='text'>
            <span>Hellow time {get_time(place_data)} </span>
        </h1>
    );
}

export default Fun_clock ;