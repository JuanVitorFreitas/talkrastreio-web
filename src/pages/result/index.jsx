import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Container, CircularProgress } from '@mui/material';


import Header from '../../components/Header/Header';
import Cards from '../../components/Card/Card';
import api from '../../services/api';
import statusEmojis from '../../components/Status/statusEmojis';


import { DateTime } from 'luxon';

export default function Result() {

	const [trackings, setTrackings] = useState(null);
	const [loading, setLoading] = useState(true);

	const history = useHistory();

	const { code } = useParams();

	useEffect(() => {
		async function fetchTracking() {
			try {
				const response = await api.post(`/tracking/${code}`);
				setTrackings(response.data);
				setLoading(true);
			} catch (err) {
				history.push(`/`);
				return alert('Erro ao buscar objeto, verifique o código e tente novamente.')
			}
			setLoading(false);
		};
		fetchTracking();
	}, [code, history]);

	return (
		<div>
			<Header />
			<Container
				sx={{
					paddingTop: '4rem',
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
				}}
				maxWidth="md">
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<h1 style={{ marginBottom: '0' }}>{loading ?
						<CircularProgress style={{ color: '#580463', width: '2em', height: '2em', marginTop: '8em' }} /> : trackings && trackings.code}</h1>
					<p style={{ marginTop: '0', fontWeight: '600', color: '#353b48' }}>{trackings && trackings.events[0]?.status}{trackings && statusEmojis[trackings.events[0]?.status]}</p>
					<p>{trackings && (trackings.events.length > 0 ? DateTime.fromISO(trackings.updatedAt).toFormat("'Última Atualização: 'dd/MM/yyyy 'às' HH:mm") : 'Nenhuma atualização encontrada😢')}</p>
					<ul>
						{
							trackings && trackings.events.map((e) => (
								<Cards
									key={e.date}
									event={e} />
							))
						}
					</ul>
				</div>
			</Container>
		</div>
	)
}