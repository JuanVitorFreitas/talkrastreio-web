import React, { useRef, useState } from 'react';
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
	},
	icon: {
		marginLeft: '0.5rem',
	}
});



function Form() {

	async function handleSubmit(e) {
		e.preventDefault();
		history.push(`/result/${trackingCode.current}`);
	}

	function validateInputs() {
		if (!trackingCode.current || trackingCode.current.length < 13) {
			return setSubmitEnabled(false);
		}
		return setSubmitEnabled(true);
	}

	const [submitEnabled, setSubmitEnabled] = useState(false);

	let history = useHistory();

	const trackingCode = useRef();

	const classes = useStyles();

	return (
		<form className={classes.form} onSubmit={handleSubmit}>
			<TextField
				required={true}
				id="standard-search"
				label="Código de rastreio"
				variant="standard"
				onChange={(e) => {
					trackingCode.current = e.target.value;
					validateInputs();
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