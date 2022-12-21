export const getAllMotorcycles = async (query: string = '') => {
    try {
        const response = await fetch(`http://localhost:3001/motorcycles${query}`);
        return await response.json();
    } catch (error) {
        console.log('Ошибка', error);
    }
};