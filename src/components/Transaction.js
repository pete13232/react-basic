import Item from "./Item";
import "./Transaction.css";


const Transaction = (props) => {
  const {items} = props
  return (
    <ul className="item-list">
      {items.map((element) => {
        // return <Item title={element.title} amount={element.amount}/>;
        return <Item {...element} key={element.id}/>; //* ถ้าชื่อ prop ใน data เหมือนกับ prop ที่ส่งไปยัง component รวบโดยใช้ spred operator ได้ //อย่าลืมระบุ key
      })}
    </ul>
  );
};

export default Transaction;
