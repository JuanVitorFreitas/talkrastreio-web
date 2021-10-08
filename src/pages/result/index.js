import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Header from '../../components/Header/Header';
import Cards from '../../components/Card/Card';
import api from '../../services/api';


import { DateTime } from 'luxon';
import statusColors from '../../statusColors';


export default function Result() {

	const useStyles = makeStyles({
		container: {
			paddingTop: '4rem',
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'column',
		}
	});

	const [trackings, setTrackings] = useState(null);

	let history = useHistory();

	const { code } = useParams();

	useEffect(() => {
		async function fetchTracking() {
			try {
				let response = await api.post('/', { trackingCode: code });
				setTrackings(response.data);
			} catch (err) {
				if (err.response.status === 500) {
					history.push(`/`);
					return alert('Erro ao buscar objeto, verifique o código e tente novamente.')
				}
			}
		};
		fetchTracking();
	}, [code, history]);

	const classes = useStyles();


	return (
		<div>
			<Header />
			<Container
				className={classes.container}
				maxWidth="md">
				<h1 style={{ marginBottom: '0' }}>{trackings && trackings.code}</h1>
				<p style={{ marginTop: '0', fontWeight: '600', color: '#353b48' }}>{trackings && trackings.events[0].status}</p>
				<p>Última Atualização: {DateTime.fromISO(trackings && trackings.updatedAt).toFormat("dd/MM/yyyy 'às' HH:mm")}</p>
				<ul>
					{
						trackings && trackings.events.map((e) => (
							<Cards
								key={e.date}
								event={e} />
						))
					}
				</ul>
			</Container>
		</div>
	)
}