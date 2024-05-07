import React from "react";
import DashboardTemplete from "../../Components/DashboardTemplete";
import { Tab, Tabs } from "react-bootstrap";
export default function Qoshish() {
  const button1 = <button className="btn btn-warning">Kategoriya</button>;
  const button2 = <button className="btn ">Taom</button>;

 
  return (
    <DashboardTemplete>
      <div className="container">
        <p className="h3">Foydalanuvchi qo'shish</p>
        <p className="">Yetib kelgan arizalarni kuzatishingiz mumkin</p>
        <div className="container">
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title={button1}>
              {/* z */}
              <div className="row py-5">
                <input type="text" placeholder="Kategoriya nomi" className="form-control mb-4"/>
              </div>
              <div className="text-center button1">
                <button className="btn btn-warning ">Qo'shish</button>
              </div>
            </Tab>
            <Tab eventKey="meal" title={button2} className="py-5">
              <div className="d-flex justify-content-between">
                <div className="row w-50">
                  <input
                    type="text "
                    placeholder="Rasmga yo'l"
                    className="me-5 form-control"
                  />
                </div>
                <div className="row w-50">
                  <input type="text" placeholder="Rasmga yo'l" className="form-control" />
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
                    type="text "
                    placeholder="Narxi"
                    className="me-5  dropdown-toggle form-control"
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
                <button className="btn btn-warning" style={{width:"200px"}}>Qo'shish</button>
              </div>
            </Tab>
          </Tabs>
          {/* <button className="btn btn-warning shadow">Kategoriya</button> */}
        </div>
      </div>
    </DashboardTemplete>
  );
}
