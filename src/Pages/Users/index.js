import React from "react";
import DashboardTemplete from "../../Components/DashboardTemplete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";

export default function Users() {
  return (
    <DashboardTemplete>
      <p className="h3">Foydalanuvchilar</p>
      <p className="text-warning">Yetib kelgan arizalarni kuzatishingiz mumkin</p>
      <div>
        <p>Users</p>
        <table class="table">
          <thead>
            <tr className="">
              <th scope="col">#</th>
              <th scope="col">Telefon raqami</th>
              <th scope="col"> To'liq ismi</th>
              <th scope="col">Roli</th>
             
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>+99893 158 08 06 </td>
              <td>Tursunkhujaev Toyirkhuja</td>   
              <td>Admin</td>           
             <td>
              <div className="">
                <FontAwesomeIcon icon={faPen} className="me-3"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTrash} className="text-danger"></FontAwesomeIcon>
              </div>
             </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>+99893 158 08 06 </td>
              <td>Abdulaziz Ochilov</td>   
              <td>Foydalanuvchi</td>           
             <td>
              <div className="">
                <FontAwesomeIcon icon={faPen} className="me-3"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTrash} className="text-danger"></FontAwesomeIcon>
              </div>
             </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>+99893 158 08 06 </td>
              <td>Barnoyev Mehriddin</td>   
              <td>Yetkazuvchi</td>           
             <td>
              <div className="">
                <FontAwesomeIcon icon={faPen} className="me-3"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTrash} className="text-danger"></FontAwesomeIcon>
              </div>
             </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>+99893 158 08 06 </td>
              <td>Barnoyev Ramziddin</td>   
              <td>Foydalanuvchi</td>           
             <td>
              <div className="">
                <FontAwesomeIcon icon={faPen} className="me-3"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTrash} className="text-danger"></FontAwesomeIcon>
              </div>
             </td>
            </tr>
          </tbody>
        </table>
        <div className="h6">
          <div className="row">
            <div className="col">
          <p className="">Jami</p>
            </div>
            <div className="col text-center">4 ta</div>
          </div>
         
        </div>
      </div>
    </DashboardTemplete>
  );
}
