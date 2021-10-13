import { Container, Typography, List, ListItem, IconButton, Tooltip } from '@material-ui/core';
import RedirectIcon from '@material-ui/icons/ExitToApp';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { useHistory } from 'react-router-dom';

import useCodeHistory from '../../hooks/useCodeHistory';

function Favorites() {

	const history = useHistory();

	const {
		favorites,
		toggleFavorite,
		isCodeInFavorites
	} = useCodeHistory();


	function clickRedirect(query) {
		history.push(`/result/${query.code}`);
	}


	return (
		<Container maxWidth="xs" sx={{ borderRadius: '10px' }} >
			{favorites.length > 0 ?
				<List style={{ textAlign: 'center' }}>
					<Typography variant="h5" sx={{ textAlign: 'center', fontFamily: 'Noto Sans Mono, monospace' }}>
						Favoritos
					</Typography>
					{favorites && favorites.map((query) => (
						<ListItem
							key={query.code}
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
					))}
				</List>
				: ""}
		</Container >
	)
}
export default Favorites;