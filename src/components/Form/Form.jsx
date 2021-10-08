import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
	form: {
		marginTop: '5rem',
	},
	button: {
		marginTop: '0.5rem',
		marginLeft: '0.5rem',
		backgroundColor: '#580463',
		fontFamily: 'Courier New, monospace',
		'&:disabled': {
			cursor: 'not-allowed',
		}
	},
	icon: {
		marginLeft: '0.5rem',
	}
});



function Form() {

	const [submitEnabled, setSubmitEnabled] = useState(false);

	let history = useHistory();

	const [trackingCode, setTrackingCode] = useState('');

	const classes = useStyles();

	useEffect(() => {
		setSubmitEnabled(trackingCode.length === 13);
	}, [trackingCode])

	async function handleSubmit(e) {
		e.preventDefault();
		history.push(`/result/${trackingCode}`);
	}


	return (
		<form className={classes.form} onSubmit={handleSubmit}>
			<TextField
				required={true}
				id="standard-search"
				label="Código de rastreio"
				variant="standard"
				onChange={(e) => setTrackingCode(e.target.value)}
				value={trackingCode}
				inputProps={{
					maxlength: 13,
				}}
			/>
			<Button
				className={classes.button}
				disabled={!submitEnabled}
				variant="contained"
				color='secondary'
				type='submit'
			>
				Rastrear
				<SearchIcon className={classes.icon} />
			</Button>
		</form>
	)
}

export default Form;