import locationRepository from "../repository/locationRepository.js";


const getAll = async () => {
    const locations = await locationRepository.fetchAllLocations();
    return { locations };
}


const locationService = { getAll };

export default locationService;