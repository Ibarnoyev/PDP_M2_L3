import React from "react";
import DashboardTemplete from "../../Components/DashboardTemplete";

export default function Statistika() {
  return (
    <DashboardTemplete>
       <p className="h3">Arizalar</p>
      <p className="">Yetib kelgan arizalarni kuzatishingiz mumkin</p>
      <div>
        <p>Statistika</p>
      <table class="table">
  <thead>
    <tr className="">
      <th scope="col">#</th>
      <th scope="col">To'liq ismi</th>
      <th scope="col">Taom nomi </th>
      <th scope="col">Narxi</th>
      <th scope="col">Soni </th>
      <th scope="col">Umumiy narx</th>
      <th scope="col">Telefon raqami</th>
      <th scope="col">Izoh</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Abdulaziz Ochilov </td>
      <td>Osh</td>
      <td>20 000</td>
      <td>2</td>
      <td>40 000</td>
      <td>+998 97 888 10 27</td>
      <td>Lorem ipsum </td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Tursunkhujaev Toyirkhuja  </td>
      <td>Manti</td>
      <td>30 000</td>
      <td>2</td>
      <td>60 000</td>
      <td>+998 97 888 10 27</td>
      <td>Lorem ipsum </td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Barnoyev Mehriddin </td>
      <td>Xonim</td>
      <td>20 000</td>
      <td>3</td>
      <td>60 000</td>
      <td>+998 93 158 08 06</td>
      <td>Lorem ipsum </td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Barnoyev Ramziddin </td>
      <td>Osh</td>
      <td>20 000</td>
      <td>1</td>
      <td>20 000</td>
      <td>+998 97 888 10 27</td>
      <td>Lorem ipsum </td>
    </tr>
  </tbody>
</table>
  <div className="h6 justify-content-between d-flex">
    <p className="">Jami</p>
    <p>180 000</p>
  </div>
      </div>   

    </DashboardTemplete>
  );
}
