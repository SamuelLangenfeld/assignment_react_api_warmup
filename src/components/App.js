import React from 'react'
import JumbotronFluid from './elements/JumbotronFluid'
import UserList from './UserList'
import UserForm from './UserForm'

const App = ({users, isFetching, error, onAddUser, onDeleteUser, editingUser, onEditUser, onEditForm}) => (
  <div className="App">
    <JumbotronFluid
      heading="User CRUD"
      lead="Using an API for User CRUD operations in React Applications"
    />
    <UserList
      users={users}
      onDelete={onDeleteUser}
      isFetching={isFetching}
      onEditForm={onEditForm}
    />
    <br />
    {editingUser? <UserForm
      instructions="Edit User"
      onSubmit={onEditUser}
      error={error}
      user={editingUser}
    />
   : <UserForm
      instructions="Add a New User"
      onSubmit={onAddUser}
      error={error}
    />}

     <br/>
    
    
  </div>
)

export default App
