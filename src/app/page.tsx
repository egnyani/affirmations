"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [affirmations, setAffirmations] = useState([]);
  const [newAffirmation, setNewAffirmation] = useState("");

  // Load affirmations from localStorage on page load
  useEffect(() => {
    const saved = localStorage.getItem("affirmations");
    if (saved) {
      setAffirmations(JSON.parse(saved));
    }
  }, []);

  // Save affirmations to localStorage on change
  useEffect(() => {
    localStorage.setItem("affirmations", JSON.stringify(affirmations));
  }, [affirmations]);

  const addAffirmation = () => {
    if (newAffirmation.trim() === "") return;
    setAffirmations([{ type: "text", content: newAffirmation }, ...affirmations]);
    setNewAffirmation("");
  };

  return (
    <main className="p-6 min-h-screen" style={{ backgroundColor: "#f4b9b8" }}>
      <h1 className="text-4xl font-bold mb-6 text-center text-white drop-shadow-lg">🌻 My Affirmations</h1>

      <div className="max-w-xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Write your affirmation here..."
          value={newAffirmation}
          onChange={(e) => setNewAffirmation(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
        />
        <button
          onClick={addAffirmation}
          className="mt-2 w-full text-white font-semibold py-2 px-4 rounded-lg hover:brightness-90 transition"
          style={{ backgroundColor: "#a882b5" }}
        >
          ➕ Add Affirmation
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {affirmations.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 text-center text-lg"
          >
            {item.content}
          </div>
        ))}
      </div>
    </main>
  );
}
