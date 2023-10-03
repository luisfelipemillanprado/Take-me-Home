import db from '@pages/api/db.json';
// --
/**
 * @description: returns an array with all the pet information.
 * @returns: returns an array with the items.
 */
const getAllPetsInformation = async () => {
  return db.pets;
};
/**
 * @description returns the information of the element specified by the id.
 * @param {string} id
 * @returns returns an array with the found element or an empty array.
 */
const getPetInformation = async (id) => {
  return db.pets.filter((pets) => pets.id === id);
};
// --
const drive = {
  getAllPetsInformation,
  getPetInformation,
};
export default drive;
