import React, { useState } from "react";
import DashboardTemplete from "../../Components/DashboardTemplete";
import { Table, Tab, Tabs } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  addNew as addNewAction,
  editTask,
  removeTask,
} from "../../Components/redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
export default function Qoshish() {

  const save = () =>{
    editTask(text);
    setEdit(false)
  }
  const [isEdit, setEdit] = useState(false);
  const [text, setText] = useState("");

  const button1 = <button className="btn btn-warning">Kategoriya</button>;
  const button2 = <button className="btn ">Taom</button>;
  const button3 = <button className="btn ">Taomlar ro'yxati</button>;

  const dispatch = useDispatch();
  const [value, setValue] = useState("Taom nomi");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [tableData, setTableData] = useState([]);

  const addNew1 = () => {
    if (value.trim() === "") return;
    const newRow = { value, image, price };
    setTableData([...tableData, newRow]);
    addNewAction(value, image, price, dispatch);
    setValue("");
    setImage("");
    setPrice("");
  };

  const handleRemoveTask = (index) => {
    dispatch(removeTask(index)); // Dispatch removeTask action
  };

  const handleEditClick = (index) => {
    const mealToEdit = tableData[index];
    setText(mealToEdit.value);
    setEdit(true); // Set isEdit to true when edit button is clicked
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
                  disabled
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
                <textarea
                  placeholder="Ta'rif"
                  style={{ width: "100%", height: "197px" }}
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
                  onClick={addNew1}
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
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        {isEdit ? (
                          <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                          />
                        ) : (
                          row.value
                        )}
                      </td>
                      <td>{row.image}</td>
                      <td>{row.price}</td>
                      <td>
                        {!isEdit ? (
                          <FontAwesomeIcon
                            icon={faEdit}
                            className="btn btn-warning me-2 ms-2"
                            onClick={() => handleEditClick(index)}
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faPen}
                            className="btn btn-success"
                            onClick={() => save(index)}
                          />
                        )}

                        <FontAwesomeIcon
                          icon={faTrash}
                          className="btn btn-danger me-2 ms-2"
                          onClick={() => handleRemoveTask(index)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
          </Tabs>
        </div>
      </div>
    </DashboardTemplete>
  );
}
