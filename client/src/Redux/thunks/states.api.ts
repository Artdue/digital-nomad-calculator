import type { Istate } from '../../Types/types';

const fetchStates = async (): Promise<Istate[] | undefined> => {
  try {
    const response: Response = await fetch('http://localhost:3000/states');
    if (response.ok) {
      const data = (await response.json()) as Istate[];
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};

export default fetchStates;
