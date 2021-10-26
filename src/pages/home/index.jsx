import { Container, Box, Card } from '@mui/material';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import History from '../../components/History/History';
import Favorite from '../../components/Favorite/Favorite';


export default function Home() {

	return (
		<div>
			<Header />
			<Container maxWidth="xs">
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
