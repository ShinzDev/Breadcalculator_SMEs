import { useState } from "react";
import BreadForm from "./BreadForm";
import BreadList from "./BreadList";

const BreadTracker = () => {
  const [breadData, setBreadData] = useState([]);

  // Function to add a new bread entry
  const addBreadEntry = (smallBread, bigBread) => {
    setBreadData([...breadData, { smallBread, bigBread }]);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Bread Sales Tracker</h1>
      <BreadForm addBreadEntry={addBreadEntry} />
      <BreadList breadData={breadData} />
    </div>
  );
};

export default BreadTracker;


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
