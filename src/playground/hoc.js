import React from 'react'
import ReactDom from 'react-dom'

// Component
const Info = ({ info }) => {
  return (
    <div>
      <h1>Info</h1>
      <p>The info is: {info}</p>
    </div>
  )
}

// with {...props} we pass all props to the child
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info, please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {
        props.isAuthenticated
        ? <WrappedComponent {...props} />
        : <p>You are not authenticated, please login to view the info</p>
      }
    </div>
  )
}

// Higher order component
const AdminInfo = withAdminWarning(Info)
// Higher order component
const AuthInfo = requireAuthentication(Info)

// ReactDom.render(<AdminInfo isAdmin={true} info="This are the details"/>, document.getElementById('app'))
ReactDom.render(<AuthInfo isAuthenticated={true} info="This are the details"/>, document.getElementById('app'))
