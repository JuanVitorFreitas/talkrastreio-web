import Header from '../../components/Header/Header';

import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import { Typography } from '@mui/material';

export default function About() {
	return (
		<>
			<Header></Header> {/* Adicionar seletor de idioma */}
			<Box>
				<Grid container spacing={2} columns={16}>
					<Grid item xs={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
						<Avatar
							alt="profilePhoto"
							src='https://github.com/JuanVitorFreitas.png'
							sx={{ marginTop: '10px', maxWidth: '250px', width: '50%', height: 'auto', boxShadow: '0 0 0.5em black' }} />
						<Typography variant='h4' sx={{ marginTop: '20px' }}>Informações Básicas</Typography>
					</Grid>
					<Grid item xs={8}>
						<Typography variant='h5' sx={{ marginTop: '20px' }}>Links Úteis</Typography>
					</Grid>
				</Grid>
			</Box>
		</>
	)
}