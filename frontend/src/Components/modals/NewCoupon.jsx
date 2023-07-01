import { useState } from "react";

function NewCoupon({ onClose }) {
  const [couponDetails, setCouponDetails] = useState({
    numCodes: 0,
    redemptionLimit: 0,
    format: "",
    customPrefix: "",
    applicableTo: "sku",
    discountType: "percentage",
    discountValue: 0,
    maxDiscountAmount: 0,
    length: 0,
    type: "",
    conditions: "none",
    conditionsValue: 0,
    expiry: "",
  });

  const handleNewCoupon = (e) => {
    e.preventDefault();
    console.log(couponDetails);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setCouponDetails({ ...couponDetails, [name]: value });
  };

  return (
    <div className="w-screen z-40 h-screen absolute top-0 left-0 bg-opacity-40 bg-black flex justify-center items-center">
      <div className="max-w-2xl w-full bg-white rounded-lg p-5">
        <h2 className=" text-black font-bold text-2xl">Add Coupon</h2>
        <div className="flex flex-col">
          <form onSubmit={handleNewCoupon}>
            <div className="flex flex-row mb-2">
              <div className="flex flex-col mr-4 w-1/2">
                <label className="text-black text-md">Coupon type</label>
                <select
                  onChange={handleChange}
                  name="type"
                  className=" cursor-pointer border-1 w-full border-purple-300 bg-blue-200 rounded-lg p-2"
                >
                  <option value="static">Static</option>
                  <option value="dynamic">Dynamic</option>
                </select>
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-black text-md">Coupon Format</label>
                <select
                  name="format"
                  onChange={handleChange}
                  className=" cursor-pointer border-1 border-purple-300 bg-blue-200 rounded-lg p-2"
                >
                  <option value="alphanumeric">alphanumeric</option>
                  <option value="alphabetic">alphabetic</option>
                  <option value="numeric">numeric</option>
                </select>
              </div>
            </div>

            <div className="flex flex-row mb-2">
              <div className="flex flex-col mr-4 w-1/2">
                <label className="text-black text-md">Coupon Length</label>
                <input
                  onChange={handleChange}
                  type="number"
                  name="length"
                  className="border-1 border-purple-300 bg-blue-200 rounded-lg p-2"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-black text-md">Custom Prefix</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="customPrefix"
                  className="border-1 border-purple-300 bg-blue-200 rounded-lg p-2"
                />
              </div>
            </div>

            <div className="flex flex-row mb-2">
              <div className="flex flex-col mr-4 w-1/2">
                <label className="text-black text-md">Applicable to:</label>
                <select
                  onChange={handleChange}
                  name="applicableTo"
                  className=" cursor-pointer border-1 border-purple-300 bg-blue-200 rounded-lg p-2"
                >
                  <option value="sku">SKU</option>
                  <option value="cart">Cart</option>
                </select>
              </div>
              {couponDetails.applicableTo === "sku" ? (
                <div className="flex flex-col w-full">
                  <label className="text-black text-md">Product Id:</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="productId"
                    className="border-1 border-purple-300 w-[90%] bg-blue-200 rounded-lg p-2"
                  />
                </div>
              ) : null}

              <div className="flex flex-col w-full">
                <label className="text-black text-md">Discount Value</label>
                <input
                  onChange={handleChange}
                  type="number"
                  name="discountValue"
                  className="border-1 border-purple-300 bg-blue-200 rounded-lg p-2"
                />
              </div>
            </div>

            <div className="flex flex-row mb-2">
              <div className="flex flex-col mr-4 w-1/2">
                <label className="text-black text-md">Discount Type</label>
                <select
                  onChange={handleChange}
                  name="discountType"
                  className=" cursor-pointer border-1 border-purple-300 bg-blue-200 rounded-lg p-2"
                >
                  <option value="percentage">Percentage</option>
                  <option value="amount">Fixed</option>
                </select>
              </div>

              {couponDetails.discountType === "percentage" ? (
                <div className="flex flex-col w-fit">
                  <label className="text-black text-md">Max Discount</label>
                  <input
                    onChange={handleChange}
                    type="number"
                    name="maxDiscountAmount"
                    className="border-1 border-purple-300 w-[90%] bg-blue-200 rounded-lg p-2"
                  />
                </div>
              ) : null}

              <div className="flex flex-col w-fit">
                <label className="text-black text-md">Redemption Limit</label>
                <input
                  onChange={handleChange}
                  type="number"
                  name={`${
                    couponDetails.type == "static"
                      ? "redemptionLimit"
                      : "numCodes"
                  }`}
                  className="border-1 border-purple-300 w-full bg-blue-200 rounded-lg p-2"
                />
              </div>
            </div>

            <div className="flex flex-row mb-2">
              <div className="flex flex-col mr-4 w-1/2">
                <label className="text-black text-md">Expiry Date</label>
                <input
                  onChange={handleChange}
                  type="date"
                  name="expiry"
                  className="border-1 border-purple-300 bg-blue-200 rounded-lg p-2"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-black text-md">Condition:</label>
                <select
                  onChange={handleChange}
                  name="conditions"
                  className=" cursor-pointer border-1 w-full border-purple-300 bg-blue-200 rounded-lg p-2"
                >
                  <option value="none">None</option>
                  <option value="minV">Minimum Value</option>
                  <option value="minQ">Minimum Quantity</option>
                </select>
              </div>
              {couponDetails.conditions != "none" && (
                <div className="flex flex-col ml-4">
                  <label className="text-black text-md">Condition Value</label>
                  <input
                    type="number"
                    onChange={handleChange}
                    name="conditionValue"
                    className="border-1 border-purple-300 bg-blue-200 rounded-lg p-2"
                  />
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <button className="bg-purple-500 text-white max-w-md w-32 rounded-lg p-2 mt-5 hover:bg-purple-600">
                Add Coupon
              </button>
              <button
                className="bg-red-500 text-white max-w-md w-32 rounded-lg p-2 mt-5 hover:bg-red-600"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewCoupon;
