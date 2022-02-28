import { Github, Linkedin, Microsoftoutlook } from '@icons-pack/react-simple-icons';
import Stack from '@mui/material/Stack';
import './styles.css';




export default function ContactLinks() {
	return (
		<Stack spacing={2} className={'container'}>
			<a
				style={{ color: 'black', fontSize: '1.5rem' }}
				href="https://github.com/JuanVitorFreitas">
				<Github color='black' size={30} className={'icon'} />
				GitHub
			</a>
			<a
				style={{ color: 'black', fontSize: '1.5rem' }}
				href="https://www.linkedin.com/in/juan-vitor-freitas-483827205/">
				<Linkedin color='black' size={22} className={'icon'} />
				LinkedIn
			</a>
			<a
				style={{ color: 'black', fontSize: '1.5rem' }}
				href="mailto:juanvitor2001@outlook.com">
				<Microsoftoutlook color='black' size={22} className={'icon'} />
				Outlook
			</a>
		</Stack>
	)
}