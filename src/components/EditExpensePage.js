import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

export class EditExpensePage extends Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense)
    this.props.history.push('/')
  }
  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id })
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <ExpenseForm
          onSubmit={this.onSubmit}
          expense={this.props.expense}
        />
        <button onClick={this.onRemove}> Remove Expense </button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id) // match is part of Router
})

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (data) => dispatch(removeExpense(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
