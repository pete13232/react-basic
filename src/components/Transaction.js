import Item from "./Item";
import "./Transaction.css";

const Transaction = ({ items }) => {
  // const {items} = props //ทำให้ prop เรียกชื่อง่าย ๆ เฉย ๆ ไม่มีอะไร

  return (
    <div>
      <ul className="item-list">
        {items.map((element) => {
          // return <Item title={element.title} amount={element.amount}/>;
          return <Item {...element} key={element.id} />; //* ถ้าชื่อ prop ใน data เหมือนกับ prop ที่ส่งไปยัง component รวบโดยใช้ spred operator ได้ //อย่าลืมระบุ key
        })}
      </ul>
    </div>
  );
};

export default Transaction;
