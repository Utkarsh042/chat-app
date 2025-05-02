import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='search.....' className='input input-bordered rounded-full' />
        <button type="submit" className='btn btn-circle bg-sky-500 text-white hover:bg-black'>
        <IoSearchSharp className='w-6 h-6 outline-none' />
        </button>
    </form>
  );
};

export default SearchInput

// starter code 
// import React from 'react'
// import { IoSearchSharp } from "react-icons/io5";

// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2 bg-gray-400 backdrop-blur-lg bg-opacity-20'>
//         <input type="text" placeholder='search.....' className='input input-bordered rounded-full' />
//         <button type="submit" className='btn btn-circle bg-sky-500 text-white hover:bg-black'>
//         <IoSearchSharp className='w-6 h-6 outline-none' />
//         </button>
//     </form>
//   );
// };

// export default SearchInput