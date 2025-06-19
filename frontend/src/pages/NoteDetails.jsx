import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../components/DetailCard";
import api from "../services/api";

export default function NoteDetails() {
  const { id } = useParams();
  const [note, setNote] = useState({
    id: "",
    title: "",
    details: "",
  });

  useEffect(() => {
    api
      .get(`/noteDetails/${id}`)
      .then((res) => {
        setNote(res.data.content);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-700 flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8">
        <DetailCard note={note} />
      </div>
    </div>
  );
}
