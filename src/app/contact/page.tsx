"use client";
import { useState } from "react";
import Header from "@/components/Header";
import { db } from "@/lib/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import Footer from "@/components/Footer";
import { FaPaperPlane } from "react-icons/fa";

export default function Home() {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, "contacts"), {
        subject: subject,
        name: name,
        email: email,
        message: message,
        timestamp: new Date(),
      });
      alert("Message sent successfully!");
      // フォームをリセットする
      setSubject("");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <div className="md:container mx-5 md:mx-auto mt-10 flex flex-col">
        <div className="w-20 h-20 text-[32px] bg-white bg-opacity-10 rounded-full flex items-center justify-center">
          📮
        </div>
        <h1 className="font-bold text-[64px] text-[#EF9A9A] mb-10">Contact</h1>
        <div className="flex flex-col space-y-5">
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            className="outline-none bg-black bg-opacity-10 rounded py-1.5 px-3.5"
          />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="outline-none bg-black bg-opacity-10 rounded py-1.5 px-3.5"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="outline-none bg-black bg-opacity-10 rounded py-1.5 px-3.5"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            placeholder="Message"
            className="outline-none bg-black bg-opacity-10 rounded py-1.5 px-3.5"
          />
          <div className="ml-auto">
            <button
              onClick={handleSubmit}
              className="rounded-full text-[#1e1e1e] font-bold bg-[#EF9A9A] py-2.5 px-3.5 flex items-center"
            >
              Submit
              <FaPaperPlane className="ml-2.5" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}