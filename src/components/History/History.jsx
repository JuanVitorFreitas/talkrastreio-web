import { CardContent, Container, Typography, List, ListItem, IconButton } from '@material-ui/core';
import RedirectIcon from '@material-ui/icons/ExitToApp';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

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
					{codeHistory && codeHistory.map((query) => (
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
					))}
				</List>
			</CardContent>
		</Container >
	)
}

export default History;