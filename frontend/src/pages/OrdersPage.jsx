import { useState, useEffect } from "react";
import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

import axios from "axios";
import CollapseAll from "../Components/Accordian";
function OrdersPage() {
  const random = {
    type: "dynamic",
    format: "alphanumeric",
    customPrefix: "BIGSALE",
    applicableTo: "cart",
    discountType: "percentage",
    discountValue: 20,
    maxDiscountAmount: 10000,
    length: 10,
    conditions: "none",
    expiry: {
      $date: "2023-07-28T00:00:00.000Z",
    },
    couponList: [
      {
        $oid: "64badd820401da3b3f21ed38",
      },
    ],
  };
  const [orderList, setOrderList] = useState([{}]);
  useEffect(() => {
    console.log("entered");

    axios.get("http://localhost:3000/coupon/fetchOrders").then((orderList) => {
      console.log(orderList);

      setOrderList(
        orderList.data.filter((order) => {
          return order.customPrefix != "ABC";
        })
      );
    });
  }, []);
  return (
    <div className="w-[90%] mx-auto min-h-screen">
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      <div
        id="dropdown"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>

      <h3 className="flex font-bold justify-items-start text-2xl mb-5 pt-8">
        All Orders
      </h3>

      <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg">
        <table className="w-full max-w-full text-left text-gray-500 dark:text-gray-400">
          <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-sm">
              <th scope="col" className="px-1 text-center py-3">
                Order Type
              </th>
              <th scope="col" className="px-1 text-center py-3  ">
                Order Name
              </th>
              <th scope="col" className="px-1 text-center py-3">
                Custom Prefix
              </th>
              <th scope="col" className="px-1 text-center py-3">
                No. of Coupons
              </th>
              <th scope="col" className="px-1 text-center py-3 ">
                Format
              </th>
              <th scope="col" className="px-1 text-center py-3">
                Discount Type
              </th>
              <th scope="col" className="px-1 text-center py-3">
                Discount Value
              </th>
              <th scope="col" className="px-1 text-center py-3">
                Expiry
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <CollapseAll /> */}
        
            {orderList.map((order, key) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={key}
                >
                  {/* <td className="px-6 py-4 text-center">
                {order.couponList.length}
              </td> */}

                  <td className="px-6 py-4 text-center">{order.type}</td>
                  <td className="px-6 py-4 text-center">ORDER NAME</td>

                  <td className="px-6 py-4 text-center">
                    {order.customPrefix}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {order.couponList?.length}
                  </td>
                  <td className="px-6 py-4 text-center">{order.format}</td>
                  <td className="px-6 py-4 text-center">
                    {order.discountType}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {order.discountValue}
                  </td>
                  <td className="px-6 py-4 text-center">{order.expiry}</td>
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
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersPage;
