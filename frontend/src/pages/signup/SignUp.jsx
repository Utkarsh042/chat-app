import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  Box,
  Button,
  createTheme,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import GenderCheckBox from "./GenderCheckbox";
import GenderCheckbox from "./GenderCheckbox";
import useSignup from "../../hooks/useSignup";

const theme = createTheme({
  palette: {
    light: "",
  },
});

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-700"> Introverse</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  width: 300,
                  margin: "100px auto",
                  p: 4,
                  borderRadius: 3,
                  backdropFilter: "blur(10px)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  color: "white",
                  // "&:hover": {
                  //   bgcolor: "primary.light",
                  // },
                }}
              >
                <TextField
                  fullWidth
                  label="Full Name"
                  variant="filled"
                  placeholder="Ukarsh"
                  InputProps={{
                    style: { backgroundColor: "#1e1e1e", color: "white" },
                  }}
                  InputLabelProps={{ style: { color: "#aaa" } }}
                  sx={{ mb: 2 }}
                  value={inputs.fullName}
                  onChange={(e) =>
                    setInputs({ ...inputs, fullName: e.target.value })
                  }
                />

                <TextField
                  fullWidth
                  label="Username"
                  variant="filled"
                  placeholder="Ukarsh123"
                  InputProps={{
                    style: { backgroundColor: "#1e1e1e", color: "white" },
                  }}
                  InputLabelProps={{ style: { color: "#aaa" } }}
                  sx={{ mb: 2 }}
                  value={inputs.username}
                  onChange={(e) =>
                    setInputs({ ...inputs, username: e.target.value })
                  }
                />

                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  variant="filled"
                  placeholder="password"
                  InputProps={{
                    style: { backgroundColor: "#1e1e1e", color: "white" },
                  }}
                  InputLabelProps={{ style: { color: "#aaa" } }}
                  sx={{ mb: 2 }}
                  value={inputs.password}
                  onChange={(e) =>
                    setInputs({ ...inputs, password: e.target.value })
                  }
                />

                <TextField
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  variant="filled"
                  placeholder="confirm password"
                  InputProps={{
                    style: { backgroundColor: "#1e1e1e", color: "white" },
                  }}
                  InputLabelProps={{ style: { color: "#aaa" } }}
                  sx={{ mb: 2 }}
                  value={inputs.confirmPassword}
                  onChange={(e) =>
                    setInputs({ ...inputs, confirmPassword: e.target.value })
                  }
                />

                {/* Gendeer checkbox goes here */}
                <GenderCheckbox
                  onCheckboxChange={handleCheckboxChange}
                  selectedGender={inputs.gender}
                />

                <Typography
                  variant="body2"
                  component={Link}
                  to={"/login"}
                  sx={{
                    display: "inline-block",
                    color: "#aaa",
                    textDecoration: "none",
                    mt: 2,
                    fontSize: "0.875rem",
                    "&:hover": {
                      color: "blue",
                    },
                  }}
                >
                  Already have an account?
                </Typography>

                <div>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: "#1e1e1e",
                      "&:hover": { backgroundColor: "#333" },
                    }}
                    disabled={loading}
                  >
                    {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
                  </Button>
                </div>
              </Box>
            </ThemeProvider>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

// Started code for the signup component
// import React from "react";
// import {
//   Box,
//   Button,
//   createTheme,
//   TextField,
//   ThemeProvider,
//   Typography,
// } from "@mui/material";
// import GenderCheckBox from "./GenderCheckBox";

// const theme = createTheme({
//   palette: {
//     light: "",
//   },
// });

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           SignUp
//           <span className="text-blue-700"> Introverse</span>
//         </h1>

//         <form>
//           <div>
//             <ThemeProvider theme={theme}>
//               <Box
//                 sx={{
//                   width: 300,
//                   margin: "100px auto",
//                   p: 4,
//                   borderRadius: 3,
//                   backdropFilter: "blur(10px)",
//                   backgroundColor: "rgba(255, 255, 255, 0.1)",
//                   boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
//                   color: "white",
//                   // "&:hover": {
//                   //   bgcolor: "primary.light",
//                   // },
//                 }}
//               >
//                 <TextField
//                   fullWidth
//                   label="Full Name"
//                   variant="filled"
//                   placeholder="Ukarsh"
//                   InputProps={{
//                     style: { backgroundColor: "#1e1e1e", color: "white" },
//                   }}
//                   InputLabelProps={{ style: { color: "#aaa" } }}
//                   sx={{ mb: 2 }}
//                 />

//                 <TextField
//                   fullWidth
//                   label="Username"
//                   variant="filled"
//                   placeholder="Ukarsh123"
//                   InputProps={{
//                     style: { backgroundColor: "#1e1e1e", color: "white" },
//                   }}
//                   InputLabelProps={{ style: { color: "#aaa" } }}
//                   sx={{ mb: 2 }}
//                 />

//                 <TextField
//                   fullWidth
//                   label="Password"
//                   type="password"
//                   variant="filled"
//                   placeholder="password"
//                   InputProps={{
//                     style: { backgroundColor: "#1e1e1e", color: "white" },
//                   }}
//                   InputLabelProps={{ style: { color: "#aaa" } }}
//                   sx={{ mb: 2 }}
//                 />

//                 <TextField
//                   fullWidth
//                   label="Confirm Password"
//                   type="password"
//                   variant="filled"
//                   placeholder="confirm password"
//                   InputProps={{
//                     style: { backgroundColor: "#1e1e1e", color: "white" },
//                   }}
//                   InputLabelProps={{ style: { color: "#aaa" } }}
//                   sx={{ mb: 2 }}
//                 />

//                 {/* Gendeer checkbox goes here */}
//                 <GenderCheckBox />

//                 <Typography
//                   variant="body2"
//                   component="a"
//                   href="#"
//                   sx={{
//                     display: "inline-block",
//                     color: "#aaa",
//                     textDecoration: "none",
//                     mt: 2,
//                     fontSize: "0.875rem",
//                     "&:hover": {
//                       color: "blue",
//                     },
//                   }}
//                 >
//                   Already have an account?
//                 </Typography>

//                 <div>
//                   <Button
//                     fullWidth
//                     variant="contained"
//                     sx={{
//                       backgroundColor: "#1e1e1e",
//                       "&:hover": { backgroundColor: "#333" },
//                     }}
//                   >
//                     Sign Up
//                   </Button>
//                 </div>
//               </Box>
//             </ThemeProvider>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
