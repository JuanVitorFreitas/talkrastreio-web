import { createContext, useState, useEffect } from 'react';

export const historyContext = createContext({});

export default function HistoryContextProvider({ children }) {


	// {code: string, timestamp: number}
	const [codeHistory, setCodeHistory] = useState([]);

	useEffect(() => {
		const storedHistory = JSON.parse(localStorage.getItem('@talkrastreio/codeHistory') || '[]');
		console.log(`loaded history from storage`);
		setCodeHistory(storedHistory);
	}, []);

	useEffect(() => {
		if (codeHistory === null) {
			return;
		}
		console.log(`saved history to storage`);
		localStorage.setItem('@talkrastreio/codeHistory', JSON.stringify(codeHistory));
	}, [codeHistory]);

	function appendToHistory(code) {
		console.log(`${code} added to history`);

		// Previne qualquer elemento repetido no array
		// if (codeHistory.some((c) => c.code === code)) {
		//     return;
		// }

		// Previne dois elementos consecutivos iguais
		if (codeHistory.length > 0 && codeHistory[codeHistory.length - 1].code === code) {
			return;
		}

		setCodeHistory((current) => [...current, { code, timestamp: Date.now() }]);
	}

	return (
		<historyContext.Provider value={{
			codeHistory,
			appendToHistory
		}}>
			{children}
		</historyContext.Provider>
	);
}