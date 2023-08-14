// ⭐ Company Name (non-editable)
// ⭐ Email
// ⭐ Username
// ⭐ Password
// ⭐ Profile picture

{
  userId: "64a1c9e74a47fb83b59c70c1";
  couponCode: quantity: totalAmount: productIdList: [];
}
import { LuCopy } from "react-icons/lu";
import { BiEditAlt } from "react-icons/bi";
import React from "react";
import CodeBlock from "../Components/CodeBlock";
import Clipboard from "clipboard";
// import CodeSyntaxHighlight from "../Components/CodeSyntaxHighlight";
function ProfilePage() {
  return (
    <div className="min-h-screen h-full">
      <h1 className="font-bold text-gray-700 p-20 pt-20 pb-5 text-3xl">
        Profile Page
      </h1>
      <div className="border-red-600 border-2 flex-col gap-x-10">
        <div className="m-auto w-[90%] bg-white shadow-2xl p-10 rounded-lg ">
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
        <div>
          <div className="flex h-15 w-[90%] m-auto flex-row  bg-[#2db6e2] mt-10 rounded-xl">
            <div className="flex items-end justify-between w-full p-2 pb-0">
              <span className="font-bold text-2xl m-3 ">
                Connect to our services using our API.{" "}
              </span>
              <div className="tabs inline-block border-purple-500 pr-10">
                <a className="tab tab-lifted border-purple-500 tab-active font-bold">
                  VERIFY
                </a>
                <a className="tab tab-lifted border-purple-500 font-bold">
                  REDEEM
                </a>
              </div>
            </div>
          </div>
          <div className="flex  m-auto w-[90%]">
            <div className="block w-[50%] bg-[#9fdcf0]">
              <span className="font-bold text-lg">
                For verifying a coupon !!!
              </span>
            </div>
            <div className=" bg-white w-[65%]">
              <pre>
                <LuCopy className="text-3xl right-20 mt-5 absolute inline-block ml-3 cursor-pointer p-1 rounded-lg" />

                <CodeBlock
                  code={`
      axios
      .post("http://localhost:3000/coupon/verify", 
          {
            userId: "64a1c9e74a47fb83b59c70c1";
            couponCode: __;
            quantity: __;
            totalAmount: __;
            productIdList: [__];
          }, 
          {
            headers: { "Content-Type": "application/json",},
          })    
            .then((response) => {
            
            })
            .catch((error) => {
            });
      `}
                />
                {/* <CodeSyntaxHighlight /> */}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
