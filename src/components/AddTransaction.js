import {useState, useContext} from "react"
import {GlobalContext} from "../context/GlobalState";
import {v4 as uuid} from 'uuid'

export const AddTransaction = () => {
    const { addIncome, addExpense } = useContext(GlobalContext)

    const [income, setIncome] = useState({
        id: uuid(),
        incomeText: "",
        incomeAmount: 0
    })

    const [expense, setExpense] = useState({
        id: uuid(),
        expenseText: "",
        expenseAmount: 0
    })

    const {incomeText, incomeAmount} = income
    const {expenseText, expenseAmount} = expense


    const onChangeIncome = e => {
        setIncome({
            ...income,
            [e.target.name]: e.target.value
        })
    }

    const onChangeExpense = e => {
        setExpense({
            ...expense,
            [e.target.name]: e.target.value
        })
    }


    const onSubmitIncome = e => {
        e.preventDefault()

        if(incomeText !== "") {
            const newIncomeTransaction = {
                id: uuid(),
                incomeText,
                incomeAmount: incomeAmount * 1,
            }
            addIncome(newIncomeTransaction)

            setIncome({
                incomeText: "",
                incomeAmount: 0
            })
        }

    }

    const onSubmitExpense = e => {
        e.preventDefault()

        if(expenseText !== "" ) {
            const newExpenseTransaction = {
                id: uuid(),
                expenseText,
                expenseAmount: expenseAmount * 1,
            }
            addExpense(newExpenseTransaction)

            setExpense({
                expenseText: "",
                expenseAmount: 0
            })
        }
    }



    return (
        <div className="form-wrapper">
            <form onSubmit={onSubmitIncome}>
                <div className="input-group income">
                    <input
                        value={incomeText}
                        name="incomeText"
                        onChange={onChangeIncome}
                        type="text"
                        placeholder="Add Income..."
                        autoComplete="off"/>
                    <input
                        value={incomeAmount}
                        name="incomeAmount"
                        onChange={onChangeIncome}
                        type="number"
                        placeholder="Amount"
                        autoComplete="off"/>
                    <input type="submit" value="Submit"/>
                </div>
            </form>

            <form onSubmit={onSubmitExpense}>
                <div className="input-group expense">
                    <input
                        value={expenseText}
                        name="expenseText"
                        onChange={onChangeExpense}
                        type="text"
                        placeholder="Add Expenses..."
                        autoComplete="off"/>
                    <input
                        value={expenseAmount}
                        name="expenseAmount"
                        onChange={onChangeExpense}
                        type="number"
                        placeholder="Amount"
                        autoComplete="off"/>
                    <input type="submit" value="Submit"/>
                </div>
            </form>

        </div>
    )
}
