import { useState } from "react";

const BreadForm = ({ addBreadEntry }) => {
  const [smallBread, setSmallBread] = useState("");
  const [bigBread, setBigBread] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!smallBread || !bigBread) return;
    addBreadEntry(parseInt(smallBread), parseInt(bigBread));
    setSmallBread("");
    setBigBread("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 mb-4">
      <input
        type="number"
        placeholder="Small Bread"
        value={smallBread}
        onChange={(e) => setSmallBread(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Big Bread"
        value={bigBread}
        onChange={(e) => setBigBread(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
};

export default BreadForm;


// import { useState } from "react";

// const BreadForm = ({ addSmallBread, addBigBread }) => {
//   const [smallBread, setSmallBread] = useState("");
//   const [bigBread, setBigBread] = useState("");

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (smallBread) {
//       addSmallBread(parseInt(smallBread, 10));
//       setSmallBread(""); // Clear input after adding
//     }

//     if (bigBread) {
//       addBigBread(parseInt(bigBread, 10));
//       setBigBread(""); // Clear input after adding
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//       <div className="flex gap-4">
//         <input
//           type="number"
//           placeholder="Enter small bread"
//           value={smallBread}
//           onChange={(e) => setSmallBread(e.target.value)}
//           className="border p-2 rounded w-full"
//         />
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//           Add Small Bread
//         </button>
//       </div>

//       <div className="flex gap-4">
//         <input
//           type="number"
//           placeholder="Enter big bread"
//           value={bigBread}
//           onChange={(e) => setBigBread(e.target.value)}
//           className="border p-2 rounded w-full"
//         />
//         <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
//           Add Big Bread
//         </button>
//       </div>
//     </form>
//   );
// };

// export default BreadForm;
