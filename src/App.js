import Transaction from "./components/Transaction";
import "./App.css";
import FormComponent from "./components/FormComponent";
import { useState } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";
import { useEffect } from "react";
import { elementType } from "prop-types";

function App() {
  const design = { color: "red", textAlign: "center", fontSize: "1.5rem" };

  const initState = [
    { id: 1, title: "ค่าเช่าบ้าน", amount: -2000 },
    { id: 2, title: "เงินเดือน", amount: 12000 },
    { id: 3, title: "ค่าเดินทาง", amount: -500 },
    { id: 4, title: "ขายของ", amount: 2000 },
  ];
  const [items, setItems] = useState(initState);

  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  const onAddItem = (newItem) => {
    setItems((prevItem) => {
      //setState คือการเปลี่ยนแปลงข้อมูลใน state ฉะนั้นแล้วถ้าใช้ callback fn พารามิเตอร์ที่ใส่เข้ามา (prevItem) คือการวนลูปรับค่าตัวแปรของ state (items)
      return [newItem, ...prevItem];
    });
  };

  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    const income = amounts
      .filter((element) => element > 0)
      .reduce((total, element) => (total += element), 0);
    const expense =
      amounts
        .filter((element) => element < 0)
        .reduce((total, element) => (total += element), 0) * -1;
    setReportIncome(income);
    setReportExpense(expense);
  }, [items, reportIncome, reportExpense]);

  return (
    <DataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense,
      }}
    >
      <div className="container">
        <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
        <ReportComponent />
        <FormComponent onAddItem={onAddItem} />
        <Transaction items={items} />
      </div>
    </DataContext.Provider>
  );
}

export default App;
