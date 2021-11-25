import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Container, CircularProgress, Collapse, Typography } from '@mui/material';


import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import Cards from '../../components/Card/Card';
import api from '../../services/api';
import statusEmojis from '../../utils/Status/statusEmojis';


import { DateTime } from 'luxon';
import { TransitionGroup } from 'react-transition-group';

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
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
				}}
				maxWidth="md">
				<Typography variant='body1' sx={{ marginTop: '2rem', fontFamily: 'Noto Sans Mono, monospace', fontWeight: '700', fontSize: '100%' }}>
					REALIZAR OUTRA PESQUISA
				</Typography>
				<Form style={{ marginTop: 0, textAlign: 'center' }} />
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<h1 style={{ marginBottom: '0' }}>{loading ?
						<CircularProgress style={{ color: '#580463', width: '2em', height: '2em', marginTop: '6em' }} /> : trackings && trackings.code}</h1>
					<p style={{ marginTop: '0', fontWeight: '600', color: '#353b48' }}>{trackings && trackings.events[0]?.status}{trackings && statusEmojis[trackings.events[0]?.status]}</p>
					<p style={{ margin: 0 }}>{trackings && (trackings.events.length > 0 ? DateTime.fromISO(trackings.updatedAt).toFormat("'Última Atualização: 'dd/MM/yyyy 'às' HH:mm") : 'Nenhuma atualização encontrada😢')}</p>
					<ul>
						<TransitionGroup>
							{
								trackings && trackings.events.map((e) => (
									<Collapse timeout={700}>
										<Cards
											key={e.date}
											event={e} />
									</Collapse>
								))
							}
						</TransitionGroup>
					</ul>
				</div>
			</Container>
		</div>
	)
}