import { Home, Info, LocalShipping as LocalShippingIcon } from '@mui/icons-material';

import { AppBar, Toolbar, Typography, Button } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";


function Header() {

	const headerButtons = [
		{
			label: 'Home',
			icon: <Home />,
			href: "/",
		},
		{
			label: 'Sobre',
			icon: <Info />,
			href: "/about",
		},
	];

	const getMenuButtons = () => {
		return headerButtons.map(({ label, icon, href }) => {
			return (
				<Button
					sx={{
						fontFamily: "Noto Sans Mono, monospace",
						fontWeight: 700,
						fontSize: "100%",
					}}
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


	const displayDesktop = () => {
		return (
			<Toolbar
				sx={{
					display: "flex",
					justifyContent: "space-between",
				}}>
				<div style={{
					display: 'grid',
					flexDirection: 'row',
					alignItems: 'center',
					gridTemplateColumns: '1fr 3fr',
				}}>
					{talkRastreioLogo}
					<LocalShippingIcon sx={{
						marginLeft: '0.4rem',
					}} />
				</div>
				<div style={{ display: 'flex' }}>{getMenuButtons()}</div>
			</Toolbar>
		)
	};

	const talkRastreioLogo = (
		<Typography variant='body1' sx={{ fontFamily: 'Noto Sans Mono, monospace', fontWeight: '700', fontSize: '100%' }}>
			TALK RASTREIO
		</Typography>
	);

	return (
		<div>
			<AppBar
				sx={{
					bgcolor: '#580463',
				}}>{displayDesktop()}</AppBar>
		</div>
	)
}

export default Header;