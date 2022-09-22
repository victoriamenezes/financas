import React from 'react';
import "./userDrawer.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

const UserDrawer = () => {
  return (
    <div className="user-drawer">
    <div className="top">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className="logo">finanças</span>
      </Link>
    </div>

    <div className="center">
      <ul>
        <p className="title"></p>
        <Link to="/usuario" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
        </Link>
        <p className="title">Minhas finanças</p>
        <Link to="" style={{ textDecoration: "none" }}>
          <li>
            <PersonOutlineIcon className="icon" />
            <span>Meus dados</span>
          </li>
        </Link>
        <Link to="/serviços" style={{ textDecoration: "none" }}>
          <li>
            <StoreIcon className="icon" />
            <span>Minhas transações</span>
          </li>
        </Link>
        <li>
          <CreditCardIcon className="icon" />
          <span>Controle de finanças</span>
        </li>
        <p className="title">Contato</p>
        <li>
          <InsertChartIcon className="icon" />
          <span>Entrar em contato</span>
        </li>
        <li>
          <NotificationsNoneIcon className="icon" />
          <span>Notificações</span>
        </li>
        <p className="title">Serviços</p>
        <li>
          <SettingsApplicationsIcon className="icon" />
          <span>Configurações</span>
        </li>
        <p className="title">Usuário</p>
        <li>
          <AccountCircleOutlinedIcon className="icon" />
          <span>Perfil</span>
        </li>
        <li>
          <ExitToAppIcon className="icon" />
          <span>Sair</span>
        </li>
      </ul>
    </div>
  </div>
);
};
export default UserDrawer
