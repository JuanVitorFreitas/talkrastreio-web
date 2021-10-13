import { useContext } from 'react';
import { historyContext } from '../contexts/historyContext';

const useCodeHistory = () => useContext(historyContext);

export default useCodeHistory;