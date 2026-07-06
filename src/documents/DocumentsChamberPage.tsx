import React, { useState } from "react";

const DocumentChamberPage = () => {
  const [status, setStatus] = useState("Draft");

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Document Chamber</h1>

      <div className="border rounded-lg p-5 mb-6">
        <input type="file" />
      </div>

      <div className="border rounded-lg p-5 mb-6">
        <h2 className="font-semibold mb-2">Document Preview</h2>
        <p>No document selected.</p>
      </div>

      <div className="border rounded-lg p-5 mb-6">
        <h2 className="font-semibold mb-2">E-Signature</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Sign Document
        </button>
      </div>

      <div className="border rounded-lg p-5">
        <h2 className="font-semibold mb-2">Status</h2>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-2 rounded"
        >
          <option>Draft</option>
          <option>In Review</option>
          <option>Signed</option>
        </select>
      </div>
    </div>
  );
};

export default DocumentChamberPage;