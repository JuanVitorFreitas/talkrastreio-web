import { Card, CardContent, Container, Typography, List, ListItem, Button } from '@material-ui/core';
import useCodeHistory from '../../hooks/useCodeHistory';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Delete from '@material-ui/icons/Delete';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';

function History() {

	const { codeHistory } = useCodeHistory();

	return (

		<Container maxWidth="xs" >
			<Card>
				<CardContent>
					<List style={{ textAlign: 'center' }}>
						<Typography variant="h5" component="div">
							Últimas Pesquisas
						</Typography>
						{codeHistory && codeHistory.map((c) => (
							<ListItem sx={{
								fontFamily: 'Noto Sans Mono, monospace',
							}}>
								{c.code}
								<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
									<Button xs={{ padding: 0 }} variant="text"><ExitToApp /></Button>
									<Button xs={{ padding: 0 }} variant="text"><FavoriteBorder /></Button>
									<Button xs={{ padding: 0 }} variant="text"><Delete /></Button>
								</div>
							</ListItem>
						))}
					</List>
				</CardContent>
			</Card>
		</Container >
	)
}

export default History;