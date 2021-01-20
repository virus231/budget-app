import {GlobalContext} from "../context/GlobalState";
import {useContext} from "react";

export const IncomeTransactions = ({incomeTransaction}) => {
    const {deleteTransaction} = useContext(GlobalContext)

    return (
        <>
            <li className="transaction">
                <span className="transaction-text">{incomeTransaction.incomeText}</span>
                <span className="transaction-amount">${incomeTransaction.incomeAmount}</span>
                <button onClick={() => deleteTransaction(incomeTransaction.id)} className="delete-btn">
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        </>
    )
}
