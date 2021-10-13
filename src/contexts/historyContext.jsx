import { createContext, useState, useEffect } from 'react';

export const historyContext = createContext({});

export default function HistoryContextProvider({ children }) {


	// {code: string, timestamp: number}
	const [codeHistory, setCodeHistory] = useState([]);
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		const storedHistory = JSON.parse(localStorage.getItem('@talkrastreio/codeHistory') || '[]');
		const storedFavorites = JSON.parse(localStorage.getItem('@talkrastreio/favorites') || '[]');
		setCodeHistory(storedHistory);
		setFavorites(storedFavorites);
	}, []);

	useEffect(() => {
		if (codeHistory === null) {
			return;
		}
		localStorage.setItem('@talkrastreio/codeHistory', JSON.stringify(codeHistory));
	}, [codeHistory]);



	useEffect(() => {
		if (favorites === null) {
			return;
		}
		localStorage.setItem('@talkrastreio/favorites', JSON.stringify(favorites));
	}, [favorites]);

	function appendToHistory(code) {

		// Previne dois elementos consecutivos iguais
		// if (codeHistory.length > 0 && codeHistory[codeHistory.length - 1].code === code) {
		// 	return;
		// }

		setCodeHistory((current) => [{ code, timestamp: Date.now() }, ...current.filter((c) => c.code !== code)]);
	}

	function appendToFavorites(code) {
		const name = window.prompt("Insira o nome para este pacote", code);
		setFavorites((current) => [...current, { code, name: name || code }]);
	}

	function removeFromFavorites(code) {
		setFavorites((current) => current.filter((query) => code !== query.code));
	}

	function removeFromHistory(code) {
		setCodeHistory((current) => current.filter((query) => code !== query.code));
	}

	function isCodeInFavorites(code) {
		return favorites.some((f) => f.code === code)
	}

	function toggleFavorite(code) {
		if (!isCodeInFavorites(code)) {
			appendToFavorites(code);
			return;
		}
		removeFromFavorites(code);
	}

	return (
		<historyContext.Provider value={{
			codeHistory,
			favorites,
			appendToHistory,
			removeFromHistory,
			appendToFavorites,
			removeFromFavorites,
			toggleFavorite,
			isCodeInFavorites
		}}>
			{children}
		</historyContext.Provider>
	);
}