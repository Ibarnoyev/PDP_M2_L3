import React, { useContext } from "react";
import DashboardTempleteWrapper from "./DashboardTempleteWrapper";
import { ListGroup } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import rasm1 from "../../Images/image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCircleChevronDown,
  faDiagnoses,
  faUser,
} from "@fortawesome/free-solid-svg-icons"; // Import the icon
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";
import { LoginContext } from "../../App";

export default function DashboardTemplete({ children }) {
  const navigate = useNavigate();
  const {login, setLogin} = useContext(LoginContext);
  return (
    <div>
      <DashboardTempleteWrapper>
        <aside className="p-3 shadow">
          <img src={rasm1} alt="" className="w-100" />
          <ListGroup className="py-5">
            <ListGroup.Item>
              <NavLink
                className=""
                to={"/dashboard"}
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
              >
                <FontAwesomeIcon
                  icon={faCircleChevronDown}
                  className="me-3"
                ></FontAwesomeIcon>
                Arizalar <br />
                <span>Yetib kelgan arizalar</span>
              </NavLink>
            </ListGroup.Item>
            <ListGroup.Item>
              <NavLink
                to={"/dashboard/products"}
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
              >
                <FontAwesomeIcon
                  icon={faCheck}
                  className="me-3"
                ></FontAwesomeIcon>
                Yetkazilgan <br />
                <span>Yetkazilgan taomlar</span>
              </NavLink>
            </ListGroup.Item>
            <ListGroup.Item>
              <NavLink
                to={"/dashboard/statistika"}
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
              >
                <FontAwesomeIcon
                  icon={faDiagnoses}
                  className="me-3"
                ></FontAwesomeIcon>
                Statistika <br />
                <span>Diagramma bilan ishlanadi</span>
              </NavLink>
            </ListGroup.Item>
            <ListGroup.Item>
              <NavLink
                to={"/dashboard/qoshish"}
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className="me-3"
                ></FontAwesomeIcon>
                Qo'shish <br />
                <span>Yetkazilgan taomlar</span>
              </NavLink>
            </ListGroup.Item>
            <ListGroup.Item>
              <NavLink
                to={"/dashboard/users"}
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
              >
                <FontAwesomeIcon
                  icon={faUsers}
                  className="me-3"
                ></FontAwesomeIcon>
                Users <br />
                <span>Yetkazilgan taomlar</span>
              </NavLink>
            </ListGroup.Item>
          </ListGroup>
        </aside>
        <div className="rightSide">
          <header className="p-3 shadow d-flex justify-content-between">
            <Link to={"/"} className="btn btn-primary">
              Home
            </Link>
            <div className="d-flex">
              <FontAwesomeIcon icon={faUser} className="py-2"></FontAwesomeIcon>
              <p className="h6 ms-3 btn">Axror</p>

              <button className="btn btn-primary"
              onClick={() => {
                setLogin(false)
                navigate('/')
              }}
              >Log out</button>
            </div>
          </header>
          <main className="p-3">{children}</main>
        </div>
      </DashboardTempleteWrapper>
    </div>
  );
}
