import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';


export default function Result() {

	const [tracking, setTracking] = useState([]);

	const { code } = useParams();

	useEffect(() => {
		async function fetchTracking() {
			let response = await api.post('/', { trackingCode: code });
			setTracking([response.data]);
		};

		fetchTracking();
	}, [code]);


	return (
		<div>
			<ul>
				{tracking.map((t) => (
					<div>
						<p>Código: {t.code}</p>
						<p>Última atualização: {t.updatedAt}</p>
					</div>
				))}

			</ul>
		</div>
	)
}