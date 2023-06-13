<>
<button
  data-drawer-target="default-sidebar"
  data-drawer-toggle="default-sidebar"
  aria-controls="default-sidebar"
  type="button"
  className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
>
  <span className="sr-only">Open sidebar</span>
  <svg
    className="w-6 h-6"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      fillRule="evenodd"
      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
    ></path>
  </svg>
</button>

<aside
  id="default-sidebar"
  className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
  aria-label="Sidebar"
>
  <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
    <ul className="space-y-2 font-medium">
      <li>
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
          </svg>
          <span className="ml-3 text-2xl">Dashboard</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex align-center items-left p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
          </svg>
          <span className="ml-3 whitespace-nowrap text-2xl">
            Order History
          </span>
        </a>
      </li>

      <li>
        <a
          href="#"
          className="flex align-center  p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="ml-3 whitespace-nowrap text-2xl">
            User Profile
          </span>
        </a>
      </li>

      <li>
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="ml-3 whitespace-nowrap text-2xl">
            Sign Out
          </span>
        </a>
      </li>
    </ul>
  </div>
</aside>
<div className="ml-[100px]">
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

{/* </div> */}
</>