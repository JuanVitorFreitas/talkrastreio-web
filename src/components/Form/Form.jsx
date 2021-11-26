import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useCodeHistory from '../../hooks/useCodeHistory';
import useMediaQuery from '@mui/material/useMediaQuery';




function Form() {

	const [submitEnabled, setSubmitEnabled] = useState(false);

	const history = useHistory();

	const { appendToHistory } = useCodeHistory();

	const [trackingCode, setTrackingCode] = useState('');

	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

	useEffect(() => {
		setSubmitEnabled(trackingCode.length === 13);
	}, [trackingCode])

	async function handleSubmit(e) {
		e.preventDefault();
		appendToHistory(trackingCode);
		history.push(`/result/${trackingCode}`);
	}


	return (
		<form style={{ textAlign: 'center', marginTop: '20px' }} onSubmit={handleSubmit}>
			<TextField
				required={true}
				id="outlined-search"
				label="Código de rastreio"
				type="search"
				color='secondary'
				onChange={(e) => setTrackingCode(e.target.value.toUpperCase())}
				value={trackingCode}
				inputProps={{
					maxLength: 13,
				}}
			/>
			<Button
				sx={{
					height: '56px',
					marginTop: isDesktop ? '0' : '0.5rem',
					marginLeft: '0.5rem',
					backgroundColor: '#580463',
					fontFamily: 'Courier New, monospace',
					'&:disabled': {
						cursor: 'not-allowed',
					}
				}}
				disabled={!submitEnabled}
				variant="contained"
				color='secondary'
				type='submit'
			>
				Rastrear
				<SearchIcon sx={{
					marginLeft: '0.5rem',
				}} />
			</Button>
		</form>
	)
}

export default Form;