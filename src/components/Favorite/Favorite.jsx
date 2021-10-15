import { Container, Typography, List, ListItem, IconButton, Tooltip, Collapse } from '@mui/material';
import { ExitToApp as RedirectIcon, Favorite as FavoriteIcon } from '@mui/icons-material';
import { TransitionGroup } from 'react-transition-group';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';

import { useHistory } from 'react-router-dom';

import useCodeHistory from '../../hooks/useCodeHistory';
import { useState, useEffect } from 'react';

function Favorites() {

	const [favoritesShown, setFavoritesShown] = useState(false);

	const history = useHistory();

	const {
		favorites,
		toggleFavorite,
	} = useCodeHistory();

	useEffect(() => {
		setFavoritesShown(favorites.length > 0);
	}, [favorites])


	function clickRedirect(query) {
		history.push(`/result/${query.code}`);
	}


	return (
		<Container maxWidth="xs" sx={{ borderRadius: '10px' }} >
			<List style={{ textAlign: 'center' }}>
				<Collapse in={favoritesShown}>
					<Slide direction="down" in={favoritesShown}>
						<Typography variant="h5" sx={{ textAlign: 'center', fontFamily: 'Noto Sans Mono, monospace' }}>
							Favoritos
						</Typography>
					</Slide>
				</Collapse>
				<TransitionGroup>
					{favorites && favorites.map((query) => (
						<Collapse key={query.code} easing='ease' timeout={400}>
							<ListItem
								sx={{
									fontFamily: 'Noto Sans Mono, monospace',
									padding: 0,
								}}>
								<Tooltip title={query.code} arrow>
									<Typography variant='body2' sx={{ textAlign: 'center', fontWeight: 700 }}>
										{query.name}
									</Typography>
								</Tooltip>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center',
										paddingLeft: '0',
										marginLeft: 'auto',
									}}>
									<IconButton
										variant="text"
										onClick={() => clickRedirect(query)}
									>
										<RedirectIcon
											sx={{ color: '#580463' }}
										/>
									</IconButton>
									<IconButton
										variant="text"
										onClick={() => toggleFavorite(query.code)}
									>
										<FavoriteIcon sx={{ color: '#580463' }} />
									</IconButton>
								</div>
							</ListItem>
						</Collapse>
					))}
				</TransitionGroup>
			</List>
		</Container >
	)
}
export default Favorites;