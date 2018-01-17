import React from 'react';
import ContentCreateForm from "./ContentCreateForm";

class AdminPage extends React.Component{

  render(){
    return(
    <div className="admin">
      <h1>This is my admin page</h1><br/>
      <ContentCreateForm/>
    </div>
    )
  }
}

export default AdminPage