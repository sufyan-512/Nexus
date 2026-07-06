import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const SchedulingPage = () => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Meeting Scheduling</h1>

      <div className="bg-white shadow rounded-lg p-5">
        <Calendar
          onChange={(value) => setDate(value as Date)}
          value={date}
        />
      </div>

      <div className="bg-white shadow rounded-lg p-5 mt-6">
        <h2 className="text-xl font-semibold mb-3">Availability Slots</h2>

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Availability Slot
        </button>
      </div>

      <div className="bg-white shadow rounded-lg p-5 mt-6">
        <h2 className="text-xl font-semibold mb-3">Meeting Requests</h2>

        <div className="flex gap-3">
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Accept
          </button>

          <button className="bg-red-600 text-white px-4 py-2 rounded">
            Decline
          </button>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-5 mt-6">
        <h2 className="text-xl font-semibold mb-3">Confirmed Meetings</h2>

        <ul className="list-disc ml-6">
          <li>Investor Meeting - 5 July 2026 - 03:00 PM</li>
          <li>Startup Demo - 7 July 2026 - 11:00 AM</li>
        </ul>
      </div>
    </div>
  );
};

export default SchedulingPage;