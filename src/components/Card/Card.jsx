import { Card as MaterialCard, CardContent, Typography } from '@mui/material';


import statusColors from '../../utils/Status/statusColors';
import statusEmojis from '../../utils/Status/statusEmojis';

import { DateTime } from 'luxon';


function Cards({ event }) {

	return (
		<MaterialCard sx={{
			backgroundColor: "#fff",
			marginTop: '1rem',
			borderRadius: '10px',
			borderLeft: `5px solid ${statusColors.Default}`,
		}}
			style={{ borderLeft: `5px solid ${statusColors[event.status]}` }}
			variant="outlined">
			<CardContent>
				<Typography component="div">
					<p>{event.unity} em {event.city} - {event.state}</p>
				</Typography>
				<p>{event.status} {DateTime.fromISO(event.date).toFormat("'no dia' DDD", { locale: "pt-BR" })} {statusEmojis[event.status]}.</p>
				<p dangerouslySetInnerHTML={{ __html: event.subStatus.join('<br/>') }}></p>
			</CardContent>
		</MaterialCard>
	)
}

export default Cards;