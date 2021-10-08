import { Card as MaterialCard, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import statusColors from '../../statusColors';
import { DateTime } from 'luxon';

const useStyles = makeStyles({
	card: {
		backgroundColor: "#fff",
		marginTop: '1rem',
		borderRadius: '10px',
		borderLeft: `5px solid ${statusColors.Default}`,
	},
	title: {
		fontFamily: 'Courier New, monospace',
	}
});


function Cards({ event }) {

	const classes = useStyles();

	return (
		<MaterialCard className={classes.card} style={{ borderLeft: `5px solid ${statusColors[event.status]}` }} variant="outlined">
			<CardContent>
				<Typography component="div">
					<p>{event.unity} em {event.city} - {event.state}</p>
				</Typography>
				<p>{event.status} {DateTime.fromISO(event.date).toRelative({ locale: 'pt-br', style: 'narrow' },)}.</p>
				<p dangerouslySetInnerHTML={{ __html: event.subStatus }}></p>
			</CardContent>
		</MaterialCard>
	)
}

export default Cards;