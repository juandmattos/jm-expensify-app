import React from 'react'
import { Link } from 'react-router-dom'

export const ExpenseListItem = ({ id, description, amount, createdAt, removeExpense, history }) => (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{ `Expense: ${description}` }</h3>
      </Link>
      <p>{ `Amount: ${amount} - CreatedAt: ${createdAt}` }</p>
    </div>
)

export default ExpenseListItem
