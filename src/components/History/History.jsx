import { CardContent, Container, Typography, List, ListItem, IconButton, Collapse } from '@mui/material';
import { Delete as DeleteIcon, ExitToApp as RedirectIcon, FavoriteBorder as FavoriteBorderIcon, Favorite as FavoriteIcon } from '@mui/icons-material';
import { TransitionGroup } from 'react-transition-group';
import Slide from '@mui/material/Slide';

import { useHistory } from 'react-router-dom';

import useCodeHistory from '../../hooks/useCodeHistory';

function History() {

	const history = useHistory();

	const {
		codeHistory,
		removeFromHistory,
		isCodeInFavorites,
		toggleFavorite
	} = useCodeHistory();

	function clickRedirect(query) {
		history.push(`/result/${query.code}`);
	}

	return (

		<Container maxWidth="xs" >
			<CardContent sx={{ padding: '0' }}>
				<List style={{ textAlign: 'center' }}>
					<Typography variant="h5" sx={{ textAlign: 'center' }}>
						Últimas Pesquisas
					</Typography>
					<TransitionGroup>
						{codeHistory && codeHistory.map((query) => (
							<Collapse easing='ease' timeout={400}>
								<ListItem
									key={query.code}
									sx={{
										fontFamily: 'Noto Sans Mono, monospace',
										padding: 0
									}}>
									<Typography sx={{ textAlign: 'center', fontWeight: 500, fontFamily: 'Noto Sans Mono, monospace' }}>
										{query.code}
									</Typography>
									<div
										style={{
											display: 'flex',
											flexDirection: 'row',
											alignItems: 'center',
											marginLeft: 'auto',
											paddingLeft: '0'
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
											{isCodeInFavorites(query.code) ? <FavoriteIcon sx={{ color: '#580463' }} /> : <FavoriteBorderIcon sx={{ color: '#580463' }} />}

										</IconButton>
										<IconButton
											variant="text"
											onClick={() => removeFromHistory(query.code)}
										>
											<DeleteIcon
												sx={{ color: '#580463' }}
											/>
										</IconButton>
									</div>
								</ListItem>
							</Collapse>
						))}
					</TransitionGroup>
				</List>
			</CardContent>
		</Container >
	)
}

export default History;