import {useContext} from "react";
import {GlobalContext} from "../context/GlobalState"
import {ExpenseTransactions} from "./ExpenseTransactions";

export const ExpenseList = () => {
    const {expenseTransactions} = useContext(GlobalContext)

    return (
        <div className="transactions transactions-expense">
            <h2>Transaction History</h2>
            <ul  className="transaction-list">
                {
                    expenseTransactions.map((expenseTransaction, index) => (
                        <ExpenseTransactions key={`${expenseTransaction}_${index}`} expenseTransaction={expenseTransaction}/>
                    ))
                }

            </ul>
        </div>
    )
}
