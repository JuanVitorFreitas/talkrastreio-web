import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useCodeHistory from '../../hooks/useCodeHistory';



function Form() {

	const [submitEnabled, setSubmitEnabled] = useState(false);

	const history = useHistory();

	const { appendToHistory } = useCodeHistory();

	const [trackingCode, setTrackingCode] = useState('');

	useEffect(() => {
		setSubmitEnabled(trackingCode.length === 13);
	}, [trackingCode])

	async function handleSubmit(e) {
		e.preventDefault();
		appendToHistory(trackingCode);
		history.push(`/result/${trackingCode}`);
	}


	return (
		<form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
			<TextField
				required={true}
				id="standard-search"
				label="Código de rastreio"
				variant="standard"
				onChange={(e) => setTrackingCode(e.target.value.toUpperCase())}
				value={trackingCode}
				inputProps={{
					maxLength: 13,
				}}
			/>
			<Button
				sx={{
					marginTop: '0.5rem',
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