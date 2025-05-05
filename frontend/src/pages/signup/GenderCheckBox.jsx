const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={
            'label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}'
          }
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={
            'label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}'
          }
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;

// import React, { Component } from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// export default function GenderCheckBox() {
//   const [gender, setGender] = React.useState('');

//   const handleChange = (event) => {
//     setGender(event.target.value);
//   };

//   const GenderCheckBox = ({onCheckboxChange,selectedGender}) => {

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel id="gender-select-label"

// sx={{
//     color: 'gray',
//     '&.Mui-focused': {
//       color: 'lightblue', // Change label color when focused
//     },
//   }}

//         >Gender</InputLabel>
//         <Select
//           labelId="gender-select-label"
//           id="gender-select"
//           value={gender}
//           label="Gender"
//           onChange={handleChange}

//           sx={{
//             '& .MuiOutlinedInput-notchedOutline': {
//               borderColor: 'gray', // default border color
//             },
//             '&:hover .MuiOutlinedInput-notchedOutline': {
//               borderColor: 'red', // border on hover
//             },
//             '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
//               borderColor: 'navyblue', // border when focused
//             },
//           }}

//         >
//           <MenuItem value="male">Male</MenuItem>
//           <MenuItem value="female">Female</MenuItem>
//           <MenuItem value="other">Other</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }
