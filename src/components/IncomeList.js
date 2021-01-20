import {useContext} from "react";
import {GlobalContext} from "../context/GlobalState"
import {IncomeTransactions} from "./IncomeTransactions";


export const IncomeList = () => {
    const {incomeTransactions} = useContext(GlobalContext)

    return (
        <div className="transactions transactions-income">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
                {
                    incomeTransactions.map((incomeTransaction, index) => (
                        <IncomeTransactions key={`${incomeTransaction}_${index}`} incomeTransaction={incomeTransaction}/>
                    ))
                }

            </ul>
        </div>
    )
}
