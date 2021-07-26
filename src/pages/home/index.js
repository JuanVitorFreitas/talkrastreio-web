import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function Home() {
    let history = useHistory();
    const [tracking, setTracking] = useState([]);

    const trackingCode = useRef();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await api.post('/', {
                trackingCode: trackingCode.current,
            });
            setTracking(response.data);
            history.push(`/result/${response.data.code}`, response.data);
        } catch(err) {
            alert('Erro ao pesquisar o código, Se o erro persistir, por favor entre em contato.')
        }
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