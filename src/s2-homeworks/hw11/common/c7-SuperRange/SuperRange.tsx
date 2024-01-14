import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  const { value, ...otherProps } = props;
  return (
    <Slider
      value={value}
      sx={{
        width: 300,
        color: "#00CC22",
        backgroundColor: "#fff",
        "& .MuiSlider-thumb": {
          color: "white",
          borderColor: "#00CC22",
          border: "2px",
          borderRadius: "60%",
        }, // стили для слайдера // пишет студент
      }}
      {...otherProps} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
