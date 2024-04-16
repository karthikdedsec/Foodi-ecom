import { useState } from "react";
import AdminLayout from "../AdminLayout";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import SalesChart from "../charts/SalesChart";

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date().setDate(1));
  const [endDate, setEndDate] = useState(new Date());

  const submitHandler = () => {
    console.log(new Date(startDate).toISOString());
    console.log(new Date(endDate).toISOString());
  };

  return (
    <AdminLayout>
      <div className="flex justify-start items-center">
        <div className="mb-3 mr-4">
          <label className="block">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="block">End Date</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            className="form-control"
          />
        </div>
        <button
          onClick={submitHandler}
          className="btn fetch-btn ml-4 mt-3 px-5"
        >
          Fetch
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 my-5">
        <div className="bg-green-500 text-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <div className="text-center text-xl font-bold">Sales</div>
            <div className="text-center text-2xl font-bold">$0.00</div>
          </div>
        </div>

        <div className="bg-red-500 text-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <div className="text-center text-xl font-bold">Orders</div>
            <div className="text-center text-2xl font-bold">0</div>
          </div>
        </div>
      </div>

      <SalesChart />

      <div className="mb-5"></div>
    </AdminLayout>
  );
};
export default Dashboard;
