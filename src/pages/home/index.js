import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
    let history = useHistory();

    const trackingCode = useRef();

    async function handleSubmit(e) {
        e.preventDefault();
        history.push(`/result/${trackingCode.current}`);
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>PESQUISA</h1>
                <input onChange={(e) => {
                    trackingCode.current = e.target.value;
                }} />
                <button type='submit'>PESQUISAR</button>
            </form>

        </div>
    )
}