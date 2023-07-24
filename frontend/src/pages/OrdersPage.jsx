function OrdersPage() {
  return (
    <div className="w-[90%] mx-auto min-h-screen">
      <h3 className="flex font-bold justify-items-start text-2xl mb-5 pt-8">
        All Orders
      </h3>
      <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg">
        <table className="w-full max-w-full text-left text-gray-500 dark:text-gray-400">
          <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-sm">
              <th scope="col" className="px-1 text-center py-3  ">
                Order ID
              </th>
              <th scope="col" className="px-1 text-center py-3">
                Custom Prefix
              </th>
              <th scope="col" className="px-1 text-center py-3">
                No. of Coupons
              </th>
              <th scope="col" className="px-1 text-center py-3">
                Redemption Limit
              </th>
              <th scope="col" className="px-1 text-center py-3 ">
                Format
              </th>
              <th scope="col" className="px-1 text-center py-3">
                Discount Type
              </th>
              <th scope="col" className="px-1 text-center py-3">
                Discount Number
              </th>
              <th scope="col" className="px-1 text-center py-3">
                Expiry
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-6 text-center">
                123456789
              </th>
              <td className="px-6 py-4 text-center">TP</td>
              <td className="px-6 py-4 text-center">100</td>
              <td className="px-6 py-4 text-center">10</td>
              <td className="px-6 py-4 text-center">alphanumeric</td>
              <td className="px-6 py-4 text-center">Percentage</td>
              <td className="px-6 py-4 text-center">200</td>
              <td className="px-6 py-4 text-center">2021-10-10</td>
              <td className="px-6 py-4 text-center">
                <button
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  onClick={() => {
                    setEditCoupon(true);
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersPage;
