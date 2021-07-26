import React from 'react';
import { useHistory, useParams } from 'react-router-dom';


export default function Result() {

    const { code } = useParams();
    const history = useHistory();
    const { tracking } = history.location.state;
    
    console.log(tracking);
    

    
    return (
        <div>
            <h1>SALVADO</h1>
            <p>{ code}</p>
            <p>{ tracking }</p>
        </div>
    )
}