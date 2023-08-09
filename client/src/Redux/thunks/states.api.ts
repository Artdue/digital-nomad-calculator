export const fetchStates = async () => {
  try {
    const response = await fetch('http://localhost:3000/admin');
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};
