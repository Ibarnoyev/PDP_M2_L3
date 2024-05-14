import React from "react";
import DashboardTemplete from "../../Components/DashboardTemplete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { useSearchParams } from "react-router-dom";

const users = [
  {
    id: 1,
    phone: "+99893 158 08 06",
    name: "Tursunkhujaev Toyirkhuja",
    role: "Admin",
  },
  {
    id: 2,
    phone: "+99893 158 08 06",
    name: "Abdulaziz Ochilov",
    role: "Foydalanuvchi",
  },
  { id: 3, phone: "+99893 158 08 06", name: "Mehriddin", role: "Yetkazuvchi" },
  {
    id: 4,
    phone: "+99893 158 08 06",
    name: "Barnoyev Ramziddin",
    role: "Foydalanuvchi",
  },
];

export default function Users() {
  const [filter, setFilter] = React.useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <DashboardTemplete>
      <p className="h3">Foydalanuvchilar</p>
      <p className="text-warning">
        Yetib kelgan arizalarni kuzatishingiz mumkin
      </p>
      <div>
        <p>Users</p>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter user's name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Telefon raqami</th>
              <th scope="col">To'liq ismi</th>
              <th scope="col">Roli</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((user) => {
                if (!filter) return true;
                return user.name.toLowerCase().includes(filter.toLowerCase());
              })
              .map((user, index) => (
                <tr key={user.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.phone}</td>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>
                    <div>
                      <FontAwesomeIcon icon={faPen} className="me-3" />
                      <FontAwesomeIcon icon={faTrash} className="text-danger" />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="h6">
          <div className="row">
            <div className="col">
              <p className="">Jami</p>
            </div>
            <div className="col text-center">{users.length} ta</div>
          </div>
        </div>
      </div>
    </DashboardTemplete>
  );
}
