import React, { useState } from "react";
import DashboardTemplete from "../../Components/DashboardTemplete";
import { Table, Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export default function Qoshish() {
  const button1 = <button className="btn btn-warning">Kategoriya</button>;
  const button2 = <button className="btn ">Taom</button>;
  const button3 = <button className="btn ">Taomlar ro'yxati</button>;

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [value, setValue] = useState("Taom nomi");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleClick = () => {
    dispatch({ type: "ADD_NEW_MEAL", payload: value });
    dispatch({ type: "ADD_NEW_PICTURE", payload: image });
    dispatch({type:"ADD_NEW_PRICE", payload: price})
  };

  return (
    <DashboardTemplete>
      <div className="container">
        <p className="h3">Foydalanuvchi qo'shish</p>
        <p className="">Yetib kelgan arizalarni kuzatishingiz mumkin</p>
        <div className="container">
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title={button1}>
              <div className="row py-5">
                <input
                  type="text"
                  placeholder="Kategoriya nomi"
                  className="form-control mb-4"
                />
              </div>
              <div className="text-center button1">
                <button className="btn btn-warning ">Qo'shish</button>
              </div>
            </Tab>
            <Tab eventKey="meal" title={button2} className="py-5">
              <div className="d-flex justify-content-between">
                <div className="row w-50">
                  <input
                    type="text"
                    placeholder={value}
                    className="form-control"
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>
                <div className="row w-50">
                  <input
                    type="text"
                    placeholder="Rasmga yo'l"
                    className="me-5 form-control"
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>
              </div>
              <div className="py-5">
                <input
                  type="text"
                  placeholder="Ta'rif"
                  style={{ width: "1200px", height: "197px", top: "398px" }}
                  className="form-control"

                />
              </div>
              <div className="d-flex justify-content-between">
                <div className="row w-50">
                  <input
                    type="text"
                    placeholder="Narxi"
                    className="me-5  dropdown-toggle form-control"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="row w-50">
                  <button
                    className="btn dropdown-toggle border-black form-control"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Kategoriya
                  </button>
                </div>
              </div>
              <div className="text-center py-5">
                <button
                  className="btn btn-warning"
                  style={{ width: "200px" }}
                  onClick={handleClick}
                >
                  Qo'shish
                </button>
              </div>
            </Tab>
            <Tab eventKey="newMeal" title={button3}>
              <Table striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Taom nomi</th>
                    <th>Rasm (url)</th>
                    <th>narxi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>{value}</td>
                    <td>{image}</td>
                    <td>{price}</td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
          </Tabs>
        </div>
      </div>
    </DashboardTemplete>
  );
}
