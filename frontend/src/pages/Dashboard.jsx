import { useState, useContext } from "react";
import CircularProgressBar from "../Components/CircularProgressBar";
import { MdAutoGraph } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { VscGraph } from "react-icons/vsc";
import { BsFillCartFill } from "react-icons/bs";
import { GiShoppingBag } from "react-icons/gi";
import NewCoupon from "../Components/modals/NewCoupon";
import EditCoupon from "../Components/modals/EditCoupon";
import { UserContext } from "../Components/ContextAPI/UserContext";
export const Dashboard = (props) => {
  const [showNewCouponModal, setShowNewCouponModal] = useState(false);
  const [editCoupon, setEditCoupon] = useState(false);
  const { userInfo } = useContext(UserContext);

  return (
    <div className="flex h-full min-h-screen bg-[#f6f6f9]">
      {showNewCouponModal && (
        <NewCoupon onClose={() => setShowNewCouponModal(false)} />
      )}
      {editCoupon && <EditCoupon onClose={() => setEditCoupon(false)} />}
      <div className="absolute top-5 right-16">
        <span className=" text-xl">
          Hey, <span className="font-bold">{userInfo.userName}</span>
        </span>
        <p className="text-right w-full">Admin</p>
      </div>

      <div className="mt-[-60px] p-10 bg-[#f6f6f9]">
        <h1 className="flex justify-items-start font-bold bg-[#f6f6f9] pb-5 pt-24 text-3xl">
          Dashboard{" "}
        </h1>

        <div className="flex">
          <div className=" w-4/5">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex card w-90 p-2 h-[200px] shadow-2xl relative bg-white text-primary-content">
                <div className="card-body ">
                  <h2 className="card-title text-xl font-bold text-left text-black">
                    <GoGraph className="inline-block mr-2 h-10 w-10 text-white bg-red-400 rounded-full" />
                    Total Coupons Generated
                  </h2>
                  <div className="w-[80px] absolute ml-auto bottom-5 right-5">
                    <CircularProgressBar
                      color={"#69f0b7"}
                      percentage={66}
                      textColor="#69f0b7"
                    ></CircularProgressBar>{" "}
                  </div>
                </div>
              </div>
              <div className="card w-90 p-2  bg-white h-[200px] shadow-2xl relative text-primary-content">
                <div className="card-body">
                  <h2 className="card-title text-xl font-bold text-left text-black">
                    <VscGraph className="inline-block h-10 w-10 text-white bg-blue-400 rounded-full mr-2" />
                    Total Coupons Used
                  </h2>
                  <div className="w-[80px] absolute ml-auto bottom-5 right-5">
                    <CircularProgressBar
                      color={"#8791ee"}
                      percentage={66}
                      textColor={"#8791ee"}
                    ></CircularProgressBar>{" "}
                  </div>
                </div>
              </div>
              <div className="card w-90 p-2 relative h-[200px] shadow-2xl pb-0 pt-[15px]   bg-white text-primary-content">
                <div className="card-body">
                  <h2 className="card-title text-xl font-bold text-black">
                    <MdAutoGraph className="inline-block h-10 w-10 text-white bg-green-400 rounded-full mr-2" />
                    Billing
                  </h2>
                  <div className="w-[80px] absolute bottom-5 right-5">
                    <CircularProgressBar
                      percentage={66}
                      textColor="#F37582"
                      color="#F37582"
                    ></CircularProgressBar>{" "}
                  </div>
                </div>
              </div>
            </div>
            <h3 className="flex font-bold justify-items-start text-2xl mb-5 mt-8">
              Recent Orders
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

                        

          <div className="w-1/5 ml-5">
            <span className="flex font-bold justify-items-start text-xl mb-5 mt-8">
              Sales analytics
            </span>
            <div>
              <div className="flex bg-white font-bold rounded-xl shadow-2xl flex-col justify-start items-start">
                <span className=" pl-3  py-6 text-left">
                  <BsFillCartFill className="inline-block mr-2 h-10 w-10 p-2 text-white bg-blue-400 rounded-full" />
                  Static Coupons
                </span>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex bg-white font-bold rounded-xl shadow-2xl flex-col justify-start items-start">
                <span className=" pl-3 py-6 text-left">
                  <GiShoppingBag className="inline-block mr-2 h-10 w-10 p-2 text-white bg-green-400 rounded-full" />
                  Dynamic Coupons
                </span>
              </div>
            </div>
            <div className="mt-3 ">
              <button
                className="flex w-full border-dashed border-2 rounded-xl border-blue-600 hover:border-blue-400 cursor-pointer hover:text-blue-400 hover:bg-blue-100 font-bold shadow-2xl text-blue-600 flex-col justify-center items-center"
                onClick={() => setShowNewCouponModal(true)}
              >
                <span className="px-8 py-8">Create New Orderp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
