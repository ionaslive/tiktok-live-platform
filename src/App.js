import React, { useState, useEffect } from "react";
import { Card } from "./components/ui/Card";
import { Button } from "./components/ui/Button";
import { db } from "./firebase";
import { collection, addDoc, query, onSnapshot, orderBy } from "firebase/firestore";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  // Αναφορά στη συλλογή "posts"
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const q = query(postsCollectionRef, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedPosts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(fetchedPosts);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      alert("Title and content cannot be empty.");
      return;
    }

    try {
      await addDoc(postsCollectionRef, {
        title,
        content,
        createdAt: new Date()
      });
      setTitle("");
      setContent("");
    } catch (err) {
      console.error("Error adding post: ", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">TikTok Live Discussion Platform</h1>

        <Card>
          <h2 className="text-xl font-semibold mb-2">Create a New Post</h2>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border mb-2 rounded"
          />
          <textarea
            placeholder="Write your thoughts..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border mb-2 rounded"
          ></textarea>
          <Button onClick={handleSubmit}>Submit</Button>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold mb-2">Recent Discussions</h2>
          {posts.length === 0 ? (
            <p>No posts yet.</p>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="p-2 bg-white mb-2 rounded shadow">
                <h3 className="font-bold">{post.title}</h3>
                <p>{post.content}</p>
              </div>
            ))
          )}
        </Card>
      </div>
    </div>
  );
}

export default App;
