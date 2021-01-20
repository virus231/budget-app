import {useContext} from "react";
import {GlobalContext} from "../context/GlobalState";

export const ExpenseTransactions = ({expenseTransaction}) => {
    const {deleteTransaction} = useContext(GlobalContext)


    return (
        <>
            <li  className="transaction">
                <span className="transaction-text">{expenseTransaction.expenseText}</span>
                <span className="transaction-amount">${expenseTransaction.expenseAmount}</span>
                <button onClick={() => deleteTransaction(expenseTransaction.id)} className="delete-btn">
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        </>
    )
}
