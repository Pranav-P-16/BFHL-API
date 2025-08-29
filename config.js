require('dotenv').config();

const FULL_NAME = (process.env.FULL_NAME || 'pranav p').toLowerCase();
const DOB = process.env.DOB || '06072004'; // ddmmyyyy
const EMAIL = process.env.EMAIL || 'pranavpraveen268@gmail.com';
const ROLL_NUMBER = process.env.ROLL_NUMBER || '22BEE0102';

module.exports = { FULL_NAME, DOB, EMAIL, ROLL_NUMBER };