import { Card as MaterialCard, CardContent, Typography } from '@material-ui/core';

function Cards(e) {

	return (
		<MaterialCard variant="outlined">
			<CardContent>
				<Typography variant="h5" component="div">
					<p>{e.date}</p>
					<p>{e.unity}</p>
					<p>{e.city}</p>
					<p>{e.state}</p>
					<p>{e.status}</p>
					<p>{e.subStatus}</p>
				</Typography>
			</CardContent>
		</MaterialCard>
	)
}

export default Cards;