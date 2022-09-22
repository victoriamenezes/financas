import React from 'react'
import "./userHome.scss"
// import AdminDrawer from '../../../components/adminDrawer/AdminDrawer';
import UserNavbar from '../../../components/userNavbar/UserNavbar';
// import DashDrawer from '../../../components/common/dashDrawer';
import Widget from '../../../components/widget/Widget';
import Featured from '../../../components/featured/Featured';
// import Table from '../../../components/table/Table';
import UserDrawer from '../../../components/userDrawer/UserDrawer';

const UserHome = () => {
  return (
    <div className="home">
      <UserDrawer />
      <div className="homeContainer">
        <UserNavbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
        </div>
      </div>
    </div>
  )
}

export default UserHome
