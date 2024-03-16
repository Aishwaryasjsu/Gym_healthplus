import { Member } from './model/member.js';
import jwt from "../common/utils/jwt/index.js"
import { Membership } from './model/membership.js';

const createMember = async ({ firstName, lastName, email, phoneNumber, password, address, membershipId }) => {
  try {
    console.log({ firstName, lastName, email, phoneNumber, password, address, membershipId });
    const hashedPassword = jwt.hashPassword(password, jwt.createSalt());

    const member = await Member.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      password: hashedPassword,
      address,
      membershipId
    });

    return member;
  } catch (err) {
    console.error('Error getting member by email and password: ', err);
    throw err;
  }
}



const getByEmailAndPassword = async (email, password) => {
  try {
    const member = await Member.findOne({
      where: {
        email: email,
      }
    });



    if (!member) {
      return null;
    }

    const salt = member.dataValues.password.split("$")[0];

    const hashedPassword = jwt.hashPassword(password, salt);

    if (hashedPassword !== member.dataValues.password) {
      return null;
    }

    return member;
  } catch (err) {
    console.error('Error getting member by email and password: ', err);
    throw err;
  }
}

const getMemberDetails = async (memberId) => {
  try {
    const member = await Member.findByPk(memberId, {
      attributes: ['firstName', 'lastName', 'email', 'phoneNumber', 'address', 'membershipId']
    });
    if (!member) {
      throw new Error('Member not found');
    }

    if (!member.membershipId) {
      throw new Error('Membership not assigned');
    }

    const membership = await Membership.findByPk(member.membershipId, {
      attributes: ['name', 'type', 'fee', 'desc']
    });
    if (!membership) {
      throw new Error('Membership details not found');
    }

    return { member, membership };
  } catch (error) {
    console.error('Error retrieving member and membership details:', error);
    throw error;
  }
};

const getAllMembers = async () => {
  try {
    const members = await Member.findAll();
    return members;
  } catch (error) {
    console.error('Error retrieving all member details:', error);
    throw error;
  }
}

async function getMembersByMemberIds(memberIds) {
  try {
    const members = await Member.findAll({
      where: {
        id: memberIds
      }
    });
    return members;
  } catch (error) {
    console.error('Error retrieving members:', error);
    throw new Error('Error retrieving members');
  }
}

async function getMemberById(id) {
  try {
    const member = await Member.findOne({
      where: {
        id
      }
    });
    return member;
  } catch (error) {
    console.error('Error retrieving member:', error);
    throw new Error('Error retrieving member');
  }
}
const memberRepository = { createMember, getByEmailAndPassword, getMemberDetails, getAllMembers, getMembersByMemberIds, getMemberById };

export default memberRepository;