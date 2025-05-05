import React from "react";
import useConversation from '../../zustand/useConversation'

const Conversation = ({conversation,lastIdx,emoji}) => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-500 roundded p-2 py-1 cursor-pointer
      ${isSelected ? "bg-sky-500" : ""}
        `}
        onClick={() => setSelectedConversation(conversation)}
        >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src={conversation.profilePic}
              alt="user avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200">{conversation.fullName}</p>
                <span className="text-x1">{emoji}</span>
            </div>
        </div>
      </div>

      {!lastIdx && <div className='divider my-0 py-0 h-1' />}
    </>
  );
};

export default Conversation;

// starter code
// import React from "react";

// const Conversation = () => {
//   return (
//     <>
//       <div className="flex gap-2 items-center hover:bg-sky-500 roundded p-2 py-1 cursor-pointer">
//         <div className="avatar online">
//           <div className="w-12 rounded-full">
//             <img
//               src="data:image/png;base64,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"
//               alt="user avatar"
//             />
//           </div>
//         </div>

//         <div className="flex flex-col flex-1">
//             <div className="flex gap-3 justify-between">
//                 <p className="font-bold text-gray-200">John Doe</p>
//                 <span className="text-x1">😊</span>
//             </div>
//         </div>
//       </div>

//       <div className="divider my-0 py-0 h-1" />
//     </>
//   );
// };

// export default Conversation;
