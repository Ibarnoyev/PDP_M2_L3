import React from "react";
import DashboardTempleteWrapper from "./DashboardTempleteWrapper";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import rasm1 from "../../Images/image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircleChevronDown,  faDiagnoses,  faUser} from "@fortawesome/free-solid-svg-icons"; // Import the icon
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";

export default function DashboardTemplete({ children }) {
  return (
    <div>
      <DashboardTempleteWrapper>
        <aside className="p-3 shadow">
          <img src={rasm1} alt="" className="w-100" />
          <ListGroup className="py-5">
            <ListGroup.Item>
              <Link to={"/dashboard"} className="btn w-100">
                <FontAwesomeIcon icon={faCircleChevronDown} className="me-3"></FontAwesomeIcon>
               Arizalar <br />
               <span>Yetib kelgan arizalar</span> 
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to={"/dashboard/products"} className="btn ">
                <FontAwesomeIcon icon={faCheck} className="me-3"></FontAwesomeIcon>
                Yetkazilgan <br />
                <span>Yetkazilgan taomlar</span>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to={"/dashboard/statistika"} className="btn ">
                <FontAwesomeIcon icon={faDiagnoses} className="me-3"></FontAwesomeIcon>
                Statistika <br />
                <span>Diagramma bilan ishlanadi</span>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to={"/dashboard/qoshish"} className="btn ">
                <FontAwesomeIcon icon={faPlus} className="me-3"></FontAwesomeIcon>
                Qo'shish <br />
                <span>Yetkazilgan taomlar</span>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to={"/dashboard/users"} className="btn ">
                <FontAwesomeIcon icon={faUsers} className="me-3"></FontAwesomeIcon>
                Users <br />
                <span>Yetkazilgan taomlar</span>
              </Link>
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
            </div>
          </header>
          <main className="p-3">{children}</main>
        </div>
      </DashboardTempleteWrapper>
    </div>
  );
}
