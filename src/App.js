import Transaction from "./components/Transaction";
import "./App.css";
import FormComponent from "./components/FormComponent";
import React, { useState } from "react";

function App() {
  const design = { color: "red", textAlign: "center", fontSize: "1.5rem" };
  const initData = [
    { title: "ค่ารักษาพยาบาล", amount: 2000 },
    { title: "ค่าน้ำมัน", amount: 5000 },
    { title: "ค่าเช่าบ้าน", amount: 8000 },
  ];

  const [items, setItems] = useState(initData);

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => { //setState คือการเปลี่ยนแปลงข้อมูลใน state ฉะนั้นแล้วถ้าใช้ callback fn พารามิเตอร์ที่ใส่เข้ามา (prevItem) คือการวนลูปรับค่าตัวแปรของ state (items)
      return [newItem, ...prevItem];
    });
  };


  return (
    <div className="container">
      <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
      <FormComponent onAddItem={onAddNewItem} />
      <Transaction items={items} />
    </div>
  );
}

export default App;
