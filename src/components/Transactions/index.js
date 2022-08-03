import React, { useState, useEffect } from "react";
import { getTransactions } from "../../services/Users";

import './index.css';

const Transactions = ({ selectedUserId }) => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        if (selectedUserId) {
            void handleGetTransactions();
        }
    }, [selectedUserId]);

    const handleGetTransactions = async () => {
        const { data: transactions } = await getTransactions(selectedUserId);
        const transactionList = transactions.transactions;
        transactionList.sort((a, b) => (a.transaction_id > b.transaction_id) ? 1 : -1);

        setTransactions(transactions.transactions);
    };

    return (
        <div className={'transaction-container'}>
            <div className={'transaction-row'}>
                <div className={'transaction-header'}>Message</div>
                <div className={'transaction-header'}>Amount</div>
                <div className={'transaction-header'}>From User</div>
                <div className={'transaction-header'}>To User</div>
                <div className={'transaction-header'}>ID</div>
            </div>
            {transactions.map(t => (
                <div className={'transaction-row'}>
                    <div className={'transaction-item'}>{t.message}</div>
                    <div className={'transaction-item'}>{t.amount}</div>
                    <div className={'transaction-item'}>{t.from_user_id}</div>
                    <div className={'transaction-item'}>{t.to_user_id}</div>
                    <div className={'transaction-item'}>{t.transaction_id}</div>
                </div>
            ))}
        </div>
    );
};

export default Transactions;
