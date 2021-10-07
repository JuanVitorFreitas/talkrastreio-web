import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Cards from '../../components/Card/Card';
import api from '../../services/api';


export default function Result(props) {

	const [trackings, setTrackings] = useState([]);

	let history = useHistory();

	const { code } = useParams();

	useEffect(() => {
		async function fetchTracking() {
			try {
				let response = await api.post('/', { trackingCode: code });
				setTrackings([response.data]);
			} catch (err) {
				if (err.response.status === 500) {
					history.push(`/`);
					return alert('Erro ao buscar objeto, verifique o código e tente novamente.')
				}
			}
		};
		fetchTracking();
	}, [code, history]);


	return (
		<div>
			<Header />
			<ul>
				{
					trackings.map((t) => t.events.map((e) => (
						<Cards />
					)))
				}
			</ul>
		</div>
	)
}