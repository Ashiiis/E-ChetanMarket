import React from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import "./Good.css";
import CartIcon from './CartIcon';
const ParallelComponents = ({ onFilterChange }) => {
  const [selectedType, setSelectedType] = React.useState("All");

  const shopTypes = [
    "All",
    "Medical",
    "Grocery",
    "Beauty",
    "Clothing",
    "Electronics",
    "Bakery",
    "Stationery",
    "Fitness",
  ];

  const handleTypeChange = (event) => {
    const selected = event.target.value;
    setSelectedType(selected);
    onFilterChange(selected === "All" ? "" : selected);
  };

  return (
    <div className="good-container">
      <FormControl variant="outlined" size="small" className="form-control">
        <Select 
          value={selectedType} 
          onChange={handleTypeChange} 
          displayEmpty
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderRadius: "2rem",
              color: "black"
            },
            "& .MuiSelect-outlined": {
              borderRadius: "2rem"
            }
          }}
        >
          {shopTypes.map((type, index) => (
            <MenuItem key={index} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <CartIcon onClick={() => console.log('Cart clicked')} />
    </div>
  );
};

export default ParallelComponents;
