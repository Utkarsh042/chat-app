import { Link } from "react-router-dom"
import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import useLogin from "../../hooks/useLogin";

const theme = createTheme({
  palette: {
    light: "",
  },
})

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {loading,login}= useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password)
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-700"> Introverse</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <ThemeProvider
              theme={theme}
            >
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
        label="Username"
        variant="filled"
        InputProps={{ style: { backgroundColor: '#1e1e1e', color: 'white' } }}
        InputLabelProps={{ style: { color: '#aaa' } }}
        sx={{ mb: 2 }}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        variant="filled"
        InputProps={{ style: { backgroundColor: '#1e1e1e', color: 'white' } }}
        InputLabelProps={{ style: { color: '#aaa' } }}
        sx={{ mb: 2 }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <Typography
  variant="body2"
  component={Link}
  to = "/SignUp"
  sx={{
    display: 'inline-block',
    color: '#aaa',
    textDecoration: 'none',
    mt: 2,
    fontSize: '0.875rem',
    '&:hover': {
      color: 'blue',
    },
  }}
>
  Don’t have an account?
</Typography>


      <Button
      type="submit"
        fullWidth
        variant="contained"
        sx={{ backgroundColor: '#1e1e1e', '&:hover': { backgroundColor: '#333' } }}
        disabled={loading}
      >
        {loading ? <span className='loading loading-spinner'></span> : "Login"}
      </Button>

              </Box>
              
            </ThemeProvider>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// started code for this file
// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Login
//           <span className="text-blue-700"> Introverse</span>
//         </h1>

//         <form>
//           <div>
//             <ThemeProvider
//               theme={theme}
//             >
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
//         fullWidth
//         label="Username"
//         variant="filled"
//         InputProps={{ style: { backgroundColor: '#1e1e1e', color: 'white' } }}
//         InputLabelProps={{ style: { color: '#aaa' } }}
//         sx={{ mb: 2 }}
//       />

//       <TextField
//         fullWidth
//         label="Password"
//         type="password"
//         variant="filled"
//         InputProps={{ style: { backgroundColor: '#1e1e1e', color: 'white' } }}
//         InputLabelProps={{ style: { color: '#aaa' } }}
//         sx={{ mb: 2 }}
//       />
      
//       <Typography
//   variant="body2"
//   component="a"
//   href="#"
//   sx={{
//     display: 'inline-block',
//     color: '#aaa',
//     textDecoration: 'none',
//     mt: 2,
//     fontSize: '0.875rem',
//     '&:hover': {
//       color: 'blue',
//     },
//   }}
// >
//   Don’t have an account?
// </Typography>


//       <Button
//         fullWidth
//         variant="contained"
//         sx={{ backgroundColor: '#1e1e1e', '&:hover': { backgroundColor: '#333' } }}
//       >
//         Login
//       </Button>

//               </Box>
              
//             </ThemeProvider>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
