import classes from "./Item.module.css";
import { useState, useRef } from "react";

const Item = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const titleRef = useRef(null);

  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  const editHandler = () => {
    titleRef.current.focus();
    setIsEditing(true);
  };
  const saveHandler = () => {
    titleRef.current.blur();
    props.onEdit(props.id, titleRef.current.textContent);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if ((e.Key === "Enter")) {
      saveHandler();
    }
  };
  return (
    <li
      className={`${classes["task-item"]} ${props.even && classes.even}`}
      onClick={deleteHandler}
    >
      <div
        onClick={editHandler}
        onKeyPress={handleKeyPress}
        contentEditable={true}
        suppressContentEditableWarning={true}
      ></div>

      {props.children}
    </li>
  );
};

export default Item;
