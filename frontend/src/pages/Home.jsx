import React, { useEffect, useState } from "react";
import AddNote from "../components/AddNote";
import NoteCard from "../components/NoteCard";
import api from "../services/api";

export default function Home() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = () => {
      api
        .get("/allNotes")
        .then((res) => {
          if (res.data.content) {
            setNotes(res.data.content);
          } else {
            setNotes([]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-6 py-12 flex flex-col items-center">
      <h1 className="text-white text-4xl font-extrabold mb-12 drop-shadow-lg text-center max-w-3xl">
        Save Your <span className="text-yellow-400">Notes</span> Here
      </h1>

      {notes && notes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-7xl">
          {notes.map((note) => (
            <NoteCard key={note._id} note={note} />
          ))}
        </div>
      ) : (
        <p className="flex justify-center items-center h-64 text-gray-300 text-lg tracking-wide">
          No Notes To Show
        </p>
      )}
   

  
  <div className="w-full mt-auto flex justify-end sticky">
    <AddNote />
  </div>
    </div>
  );
}
