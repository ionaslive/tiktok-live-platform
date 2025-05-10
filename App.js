import React from "react";
import { Card } from "./components/ui/Card";
import { Button } from "./components/ui/Button";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">TikTok Live Discussion Platform</h1>

        {/* Create a New Post */}
        <Card>
          <h2 className="text-xl font-semibold mb-2">Create a New Post</h2>
          <input
            type="text"
            placeholder="Title"
            className="w-full p-2 border mb-2 rounded"
          />
          <textarea
            placeholder="Write your thoughts..."
            className="w-full p-2 border mb-2 rounded"
          ></textarea>
          <input type="file" accept="image/*,video/*" className="mb-2" />
          <Button>Submit</Button>
        </Card>

        {/* Recent Discussions */}
        <Card>
          <h2 className="text-xl font-semibold mb-2">Recent Discussions</h2>
          <div className="p-2 bg-white mb-2 rounded shadow">
            <h3 className="font-bold">Discussion Title</h3>
            <p>User's comment or video...</p>
          </div>
          <div className="p-2 bg-white mb-2 rounded shadow">
            <h3 className="font-bold">Another Discussion</h3>
            <p>Another user's comment or video...</p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
