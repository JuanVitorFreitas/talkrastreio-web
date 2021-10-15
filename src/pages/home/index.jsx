import { Container, Box, Card, Collapse } from '@mui/material';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import History from '../../components/History/History';
import Favorite from '../../components/Favorite/Favorite';
import { TransitionGroup } from 'react-transition-group';


export default function Home() {

	return (
		<div className="App">
			<Container maxWidth="xs" >
				<Header />
				<Box>
					<Form />
				</Box>
				<Card sx={{ marginTop: '25px', borderRadius: '7px' }} >
					<Favorite />
					<History />
				</Card>
			</Container>
		</div>
	)
}
