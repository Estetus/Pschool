import { useEffect, useState } from 'react';


export function useLocalStorage<T> (key: string, initialValue: T): [T, (newData: T) => void] {

	const [data, setData] = useState<T>(initialValue);


	useEffect(() => {
    const res = localStorage.getItem(key)
    if( res) {
      const parsed = JSON.parse(res) as T;
      setData(parsed);
    }
	}, []);


	const saveData = (newData: T) => {
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	};



	return [data, saveData];
	
}