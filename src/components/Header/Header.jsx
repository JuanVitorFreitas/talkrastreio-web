import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';


const useStyles = makeStyles({
	header: {
		backgroundColor: "#580463",
	},
	icon: {
		marginLeft: '1rem',
	},
	title: {
		fontFamily: 'Courier New, monospace',
	}
});

function Header() {
	const classes = useStyles();

	const displayDesktop = () => {
		return <Toolbar>
			{talkRastreioLogo}
			<LocalShippingIcon className={classes.icon} />
		</Toolbar>;
	};

	const talkRastreioLogo = (
		<Typography variant='h5' component='h1' className={classes.title}>
			Talk Rastreio
		</Typography>
	);

	return (
		<header>
			<AppBar className={classes.header} >{displayDesktop()}</AppBar>
		</header>
	)
}

export default Header;