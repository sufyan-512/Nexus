import React, { useState } from "react";

const VideoCallPage = () => {
  const [call, setCall] = useState(false);
  const [video, setVideo] = useState(true);
  const [audio, setAudio] = useState(true);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-5">Video Calling</h1>

      <div className="bg-gray-300 h-80 rounded flex items-center justify-center">
        Video Screen
      </div>

      <div className="flex gap-4 mt-6">
        {!call ? (
          <button
            onClick={() => setCall(true)}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Start Call
          </button>
        ) : (
          <button
            onClick={() => setCall(false)}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            End Call
          </button>
        )}

        <button
          onClick={() => setVideo(!video)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {video ? "Video ON" : "Video OFF"}
        </button>

        <button
          onClick={() => setAudio(!audio)}
          className="bg-yellow-600 text-white px-4 py-2 rounded"
        >
          {audio ? "Audio ON" : "Audio OFF"}
        </button>

        <button className="bg-purple-600 text-white px-4 py-2 rounded">
          Share Screen
        </button>
      </div>
    </div>
  );
};

export default VideoCallPage;