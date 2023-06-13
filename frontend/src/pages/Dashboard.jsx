import React from "react";
import "../Styles/styles.css";
import CircularProgressBar from "../Components/CircularProgressBar";
export const Dashboard = (props) => {
  return (
    <div>
      <div className="ml-[100px] mt-[-60px]">
        <h1 className="flex justify-items-start text-5xl">Dashboard </h1>
        {/* <div className="p-4 sm:ml-64"> */}
        <div className="p-4 border-2  border-gray-200 border-dashed rounded-lg dark:border-gray-700 w-11/12">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex card w-90 p-2 h-[230px] bg-white text-primary-content">
              <div className="card-body ">
                <h2 className="card-title text-2xl text-left text-black">
                  Total Coupons Generated
                </h2>
                <div className="w-[100px] ml-auto mt-2">
                  <CircularProgressBar
                    color={"#69f0b7"}
                    percentage={66}
                    textColor="#69f0b7"
                  ></CircularProgressBar>{" "}
                </div>
              </div>
            </div>
            <div className="card w-90 p-2  bg-white h-[230px] text-primary-content">
              <div className="card-body">
                <h2 className="card-title text-2xl  text-black">
                  Total Coupons Used
                </h2>
                <div className="w-[100px] ml-auto mt-9">
                  <CircularProgressBar
                    color={"#8791ee"}
                    percentage={66}
                    textColor={"#8791ee"}
                  ></CircularProgressBar>{" "}
                </div>
              </div>
            </div>
            <div className="card w-90 p-2  h-[230px] pb-0 pt-[15px]   bg-white text-primary-content">
              <div className="card-body">
                <h2 className="card-title text-2xl text-black">Billing</h2>
                <div className="w-[100px] mb-0 pb-0 ml-auto mt-6">
                  <CircularProgressBar
                    percentage={66}
                    textColor="#F37582"
                    color="#F37582"
                  ></CircularProgressBar>{" "}
                </div>
              </div>
            </div>
          </div>
          <h3 className="flex justify-items-start text-2xl">Recent Orders </h3>

          <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg">
            <table className="w-full  text-left text-gray-500 dark:text-gray-400">
              <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-lg flex align-text-top "
                  >
                    Order ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-lg">
                    Custom Prefix
                  </th>
                  <th scope="col" className="px-6 py-3 text-lg">
                    No. of Coupons
                  </th>
                  <th scope="col" className="px-6 py-3 text-lg">
                    Redemption Limit
                  </th>
                  <th scope="col" className="px-6 text-lg ">
                    Format
                  </th>
                  <th scope="col" className="px-6 py-3 text-lg">
                    Discount Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-lg">
                    Discount Number
                  </th>
                  <th scope="col" className="px-6 py-3 text-lg">
                    Expiry
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Microsoft Surface Pro
                  </th>
                  <td className="px-6 py-4">White</td>
                  <td className="px-6 py-4">Laptop PC</td>
                  <td className="px-6 py-4">$1999</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
