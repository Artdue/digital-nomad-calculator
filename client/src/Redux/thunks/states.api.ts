const fetchStates = async (): Promise<void> => {
  try {
    const response: Response = await fetch('http://localhost:3000/states');
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};

export default fetchStates;
