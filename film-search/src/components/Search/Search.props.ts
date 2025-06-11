import type { ChangeEvent } from 'react';

export interface SearchProps {
  inputData: string,
  setInputData: (value: string) => void,
  seacrhFilm: (e: ChangeEvent<HTMLFormElement>) => void,
  
}