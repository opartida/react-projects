import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect }) => {
  return <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />;
};

export default Star;
