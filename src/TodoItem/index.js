import "./TodoItem.css";
import { HiXCircle } from "react-icons/hi";
import { HiCheck } from "react-icons/hi";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <HiCheck />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <HiXCircle />
      </span>
    </li>
  );
}

export { TodoItem };
