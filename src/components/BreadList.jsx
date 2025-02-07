const BreadList = ({ breadData }) => {
    const totalSmall = breadData.reduce((acc, item) => acc + item.smallBread, 0);
    const totalBig = breadData.reduce((acc, item) => acc + item.bigBread, 0);
  
    const costPrice = totalSmall * 180 + totalBig * 240;
    const sellingPrice = totalSmall * 200 + totalBig * 280;
    const profit = sellingPrice - costPrice;
  
    return (
      <div>
        <h2 className="text-xl font-bold mb-2">Sales Summary</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Small Bread</th>
              <th className="border p-2">Big Bread</th>
            </tr>
          </thead>
          <tbody>
            {breadData.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{item.smallBread}</td>
                <td className="border p-2">{item.bigBread}</td>
              </tr>
            ))}
          </tbody>
        </table>
  
        <div className="mt-4 text-lg">
          <p>Total Small Bread: {totalSmall}</p>
          <p>Total Big Bread: {totalBig}</p>
          <p>Cost Price: ₦{costPrice}</p>
          <p>Selling Price: ₦{sellingPrice}</p>
          <p className="font-bold">Profit: ₦{profit}</p>
        </div>
      </div>
    );
  };
  
  export default BreadList;
  