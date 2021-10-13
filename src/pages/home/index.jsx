import { Container, Box } from '@material-ui/core';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import History from '../../components/History/History';


export default function Home() {

	return (
		<div className="App">
			<Container maxWidth="xs" >
				<Header />
				<Box>
					<Form />
				</Box>
				<History />
			</Container>
		</div>
	)
}
