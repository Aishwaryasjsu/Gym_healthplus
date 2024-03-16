

import { GymClass } from './model/gymClass.js';
import { Membership } from './model/membership.js';

// const createMember = async ({firstName, lastName, email, phoneNumber, password, address}) => {
//     try {
//         const hashedPassword = jwt.hashPassword(password, jwt.createSalt());

//         const member = await Member.create({
//             firstName,
//             lastName,
//             email,
//             phoneNumber,
//             password: hashedPassword,
//             address            
//         });

//         return member;
//     } catch (err) {
//         console.error('Error getting member by email and password: ', err);
//         throw err;
//     }
// }

const getAllMembership= async ()=> {
    try {
        const classes = await Membership.findAll();
        return classes;
      } catch (error) {
        console.error(error);
        throw new Error('Error retrieving membership by location');
      }
  }

//adding new memberships done by employee
const addMembership = async ({ name, type, fee, desc }) => {
  try {

    const classes = await Membership.create({
      name,
      type,
      fee,
      desc
    });

    return classes;
  } catch (err) {
    console.error('Error in posting data to Memberships table: ', err);
    throw err;
  }
}

const membershipRepository = {getAllMembership,addMembership};

export default membershipRepository;