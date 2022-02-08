import { useState, useEffect } from 'react';

import Header from '../../components/Header/Header';

import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import { Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ToggleButton } from "@mui/material";
import { Translate } from '@mui/icons-material';

import basicInformationText from '../../utils/Languages/basicInformationText';

export default function About() {

	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

	const [language, setLanguage] = useState('portuguese');
	const [selected, setSelected] = useState(false);

	useEffect(() => {
		if (selected) {
			setLanguage('english');
		} else {
			setLanguage('portuguese');
		}
	}, [selected])


	return (
		<>
			<Header>
				<ToggleButton
					value='english'
					selected={selected}
					onChange={() => {
						setSelected(!selected);
					}}
					sx={{
						border: 'none',
					}}>
					<Translate sx={{ color: 'white' }} />
					{isDesktop ? <Typography variant='body1' sx={{
						fontFamily: "Noto Sans Mono, monospace",
						fontWeight: '700',
						fontSize: "100%",
						color: 'white'
					}}>{language === 'portuguese' ? 'ENGLISH VERSION' : 'VERSÃO PORTUGUÊS'} </Typography> : ''}
				</ToggleButton>
			</Header>
			<Box>
				<Grid
					container
					spacing={2}
					columns={isDesktop ? 16 : 8}
					direction="row"
					justifyContent="space-between"
					alignItems="center">
					<Grid item xs={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
						<Avatar
							alt="profilePhoto"
							src='https://github.com/JuanVitorFreitas.png'
							sx={{ marginTop: '10px', maxWidth: '250px', width: '30%', height: 'auto', boxShadow: '0 0 0.5em black' }} />
						<Typography variant='h4' sx={{ marginTop: '20px' }}>{language === 'portuguese' ? 'Informações Básicas' : 'Basic Information'}</Typography>
						<Typography variant='h6' sx={{ marginTop: '20px', marginLeft: '10px', marginRight: '10px' }}>{basicInformationText[language]}</Typography>
					</Grid>
					<Grid item xs={8} sx={isDesktop ? { display: 'flex' } : { display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<Typography variant='h5' sx={{ marginTop: '20px' }}>{language === 'portuguese' ? 'Links Úteis' : 'Useful Links'}</Typography>
					</Grid>
				</Grid>
			</Box>
		</>
	)
}