import axios from 'axios';

const BASE_URL = 'https://interviewing-payments-jrfs4f275q-uc.a.run.app';

export const getUsers = async () => {
    return await axios.get(`${BASE_URL}/users`);
};

export const getTransactions = async (userId) => {
    return await axios.get(`${BASE_URL}/transactions?user_id=${userId}`);
};
