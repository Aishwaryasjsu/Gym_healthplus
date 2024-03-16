import { Location } from './model/location.js'; // Assuming this is the file where the Location model is defined

const fetchAllLocations = async () => {
  try {
    const locations = await Location.findAll();
    return locations;
  } catch (error) {
    console.error('Error fetching locations:', error);
    throw error;
  }
};

const locationRepository = { fetchAllLocations };

export default locationRepository;
