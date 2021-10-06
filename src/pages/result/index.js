import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Card, CardContent, Typography } from '@material-ui/core';
import Header from '../../components/Header/Header';
import api from '../../services/api';


export default function Result() {

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
						<Card variant="outlined">
							<CardContent>
								<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
									<p>{e.date}</p>
								</Typography>
								<p>{e.unity}</p>
								<p>{e.city}</p>
								<p>{e.state}</p>
								<p>{e.status}</p>
								<p>{e.subStatus}</p>
							</CardContent>
						</Card>
					)))
				}
			</ul>
		</div>
	)
}