import React from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import "./Good.css"
const ParallelComponents = ({ onFilterChange }) => {
  const [selectedType, setSelectedType] = React.useState("All");

  // Hardcoded shop types for the dropdown
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
    onFilterChange(selected === "All" ? "" : selected); // Pass empty string for "All"
  };

  return (
    <FormControl variant="outlined" size="small" className="form-control" >
      <Select value={selectedType} onChange={handleTypeChange} displayEmpty>
        {shopTypes.map((type, index) => (
          <MenuItem key={index} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ParallelComponents;
