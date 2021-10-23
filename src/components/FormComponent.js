import "./FormComponent.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

//! onChange onSubmit
const FormComponent = (props) => {
  const [title, setTitle] = useState(""); //โครงสร้าง [ชื่อตัวแปร, ฟังก์ชันที่ใช้ setState] = useState(ค่าเริ่มต้น)
  const [amount, setAmount] = useState(0);

  const inputTitle = (event) => {
    setTitle(event.target.value);
  };

  const inputAmount = (event) => {
    setAmount(event.target.value);
  };

  const saveItem = (event) => {
    event.preventDefault(); //ใช้กัน form รีเซตค่า
    const itemData = {
      id: uuidv4(),
      title: title, //เอาข้อมูลจากตัวแปรมาใส่ ตัวแปรในที่นี้คือตัวแปรของ useState
      amount: Number(amount), // cast ข้อมูลเป็น string เนื่องจากตอนส่ง propsไปที่ <Items > amount require number
    };
    props.onAddItem(itemData);
    setTitle(""); //เมื่อกด submit สั่งให้ state เคลียค่าข้อมูล
    setAmount("");
  };

  return (
    <div>
      <form onSubmit={saveItem}>
        <div className="form-control">
          <label>ชื่อรายการ</label>
          <input
            type="text"
            placeholder="ระบุชื่อรายการของคุณ"
            onChange={inputTitle} //onChange จะทำการเรียก Callback function
            value={title}
          />
        </div>
        <div className="form-control">
          <label>จำนวนเงิน</label>
          <input
            type="number"
            placeholder="(+ รายรับ , - รายจ่าย)"
            onChange={inputAmount}
            value={amount}
          />
        </div>
        <div className="form-control">
          <button type="submit" className="btn">
            เพิ่มข้อมูล
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
