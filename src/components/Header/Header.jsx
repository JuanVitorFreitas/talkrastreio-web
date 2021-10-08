import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import Home from '@material-ui/icons/Home';
import Info from '@material-ui/icons/Info';

import { Link as RouterLink } from "react-router-dom";



const useStyles = makeStyles({
	header: {
		backgroundColor: "#580463",
	},
	icon: {
		marginLeft: '1rem',
	},
	title: {
		fontFamily: 'Courier New, monospace',
	},
	menuButton: {
		fontFamily: "Open Sans, sans-serif",
		fontWeight: 700,
		size: "18px",
		marginLeft: "38px",
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
	}
});

const headerButtons = [
	{
		label: 'Home',
		icon: <Home />,
		href: "/",
	},
	{
		label: 'Sobre',
		icon: <Info />,
		href: "/sobre",
	},
];

const getMenuButtons = () => {
	return headerButtons.map(({ label, icon, href }) => {
		return (
			<Button
				{...{
					key: label,
					icon: icon,
					color: "inherit",
					to: href,
					component: RouterLink,
				}}
			>
				{icon}
				{label}
			</Button>
		);
	});
};

function Header() {
	const classes = useStyles();

	const displayDesktop = () => {
		return (
			<Toolbar className={classes.toolbar}>
				{talkRastreioLogo}
				<LocalShippingIcon className={classes.icon} />
				<div>{getMenuButtons()}</div>
			</Toolbar>
		)
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