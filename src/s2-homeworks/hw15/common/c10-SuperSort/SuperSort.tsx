import React from "react";
import SortUpDown from "../icons/SortUpDown.svg";
import Up from "../icons/Up.svg";
import Down from "../icons/Down.svg";
// добавить в проект иконки и импортировать
const downIcon = Up;
const upIcon = Down;
const noneIcon = SortUpDown;

export type SuperSortPropsType = {
  id?: string;
  sort: string;
  value: string;
  onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
  // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
  if (sort === down) {
    return up;
  } else if (sort === up) {
    return "";
  }

  return down; // исправить
};

const SuperSort: React.FC<SuperSortPropsType> = ({
  sort,
  value,
  onChange,
  id = "hw15",
}) => {
  const up = "0" + value;
  const down = "1" + value;

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up));
  };

  const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;

  return (
    <span id={id + "-sort-" + value} onClick={onChangeCallback}>
      {/*сделать иконку*/}
      <img
        id={id + "-icon-" + sort}
        src={icon}
        alt="SortUpDown"
        style={{ width: "10px", height: "10px" }}
      />
      {/*{icon} /!*а это убрать*!/*/}
    </span>
  );
};

export default SuperSort;
