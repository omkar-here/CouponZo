// ⭐ Company Name (non-editable)
// ⭐ Email
// ⭐ Username
// ⭐ Password
// ⭐ Profile picture

import { BiEditAlt } from "react-icons/bi";
import React from "react";
import CodeBlock from "../Components/CodeBlock";

function ProfilePage() {
  return (
    <div className="min-h-screen h-full">
      <h1 className="font-bold text-gray-700 p-20 pt-20 pb-5 text-3xl">
        Profile Page
      </h1>

      <div className="m-auto w-[90%] bg-white shadow-2xl p-10 rounded-lg">
        <div className="flex justify-between">
          <img
            className="border-2 rounded-full bg-slate-300 w-64"
            src="
        https://github.com/omkar-here.png"
            alt="Omkar"
          />
          <div>
            <div>
              <label className="text-gray-700 font-semibold mb-2">
                Company Name :{" "}
              </label>

              <div>
                <input
                  className="border-none mb-4 rounded-md bg-blue-200 text-md"
                  type="text"
                  placeholder="Company Name"
                />
                <BiEditAlt className="text-4xl inline-block ml-3 cursor-pointer hover:bg-sky-400 hover:text-white p-2 rounded-lg" />
              </div>
            </div>

            <div>
              <label className="text-gray-700 mb-2 font-semibold">
                Email :{" "}
              </label>

              <div>
                <input
                  className="border-none mb-4 rounded-md bg-blue-200 text-md"
                  type="text"
                  placeholder="Email"
                />
                <BiEditAlt className="text-4xl inline-block ml-3 cursor-pointer hover:bg-sky-400 hover:text-white p-2 rounded-lg" />
              </div>
            </div>
            <button className="btn btn-primary p-2 py-2">
              Change Password
            </button>
          </div>
        </div>
      </div>
      <div className="flex h-20 w-[90%] m-auto flex-row bg-sky-200">
        <div className="flex items-center justify-between w-full p-3">
          <span className="font-bold text-2xl m-3">
            Connect to our services using our API.{" "}
          </span>
          <div className="tabs inline-block border-purple-500">
            <a className="tab tab-lifted border-purple-500 tab-active">Tab 1</a>
            <a className="tab tab-lifted border-purple-500 ">Tab 2</a>
            <a className="tab tab-lifted border-purple-500">Tab 3</a>
          </div>
        </div>
      </div>
      <div className="flex m-auto w-[90%] justify-between p-5">
        <div>
          <span className="font-bold text-lg">For verifying a coupon !!!</span>
        </div>
        <div className="bg-white w-fit">
          <pre>
            <CodeBlock
              code={`
      const verifyCoupon = async (couponCode) => {
        const response = await fetch(
          "https://coupon-verification-api.herokuapp.com/api/verify",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              couponCode,
            }),
          }
        );
        const data = await response.json();
        return data;
      };
      `}
            />
          </pre>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
