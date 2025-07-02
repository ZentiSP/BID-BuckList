"use client";
import Image from "next/image";
import Typewriter from "../components/Typewriter";
import { useState } from "react";

import { Edit, Trash2, Save, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem.trim()]);
      setNewItem("");
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };

  // Remove item by index
  const handleRemoveItem = (idxToRemove) => {
    setItems(items.filter((_, idx) => idx !== idxToRemove));
  };

  // Edit item by index
  const handleEditItem = (idxToEdit, newValue) => {
    setItems(items.map((item, idx) => (idx === idxToEdit ? newValue : item)));
  };

  // Track which item is being edited and its value
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const startEdit = (idx) => {
    setEditIndex(idx);
    setEditValue(items[idx]);
  };

  const saveEdit = (idx) => {
    if (editValue.trim() !== "") {
      handleEditItem(idx, editValue.trim());
      setEditIndex(null);
      setEditValue("");
    }
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div className="min-h-screen  font-[family-name:var(--font-geist-sans)]">
      {/* Hero/Main section */}
      <main className="flex flex-col gap-8 sm:gap-[32px] items-center justify-center w-full max-w-2xl min-h-screen mx-auto pb-0">
        <div className="w-full">
          <h1 className="text-3xl sm:text-[50px] font-[800] text-center">
            Before I Die I want to
          </h1>
          <p className="text-xl sm:text-[35px] font-[500] text-green-400 text-center">
            <Typewriter
              texts={["Learn German", "Play Guitar", "Become Youtuber"]}
            />
          </p>
          <div className="flex flex-col gap-4 items-center mt-5 w-full">
            <div className="w-full border-b border-gray-300">
              <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                onKeyDown={handleInputKeyDown}
                className="w-full p-2 focus:outline-none text-wrap text-center bg-transparent text-white placeholder-gray-400"
                placeholder="Add a new item to your bucket list"
              />
            </div>
            <button
              onClick={handleAddItem}
              className="w-full sm:w-auto px-6 py-3 bg-[var(--transparent-50)] backdrop-brightness-250 backdrop-blur-xl backdrop-saturate-100 border-1 border-[var(--lumy-green)] text-green-200 rounded-md hover:bg-green-400 hover:text-black transition-all duration-200"
            >
              Add Item
            </button>
          </div>
        </div>
      </main>
      {/* Overlapping Bucket List Section */}
      <section className="relative w-full max-w-2xl mx-auto -mt-12 sm:-mt-48 z-10 bg-[var(--transparent-50)] backdrop-brightness-250 backdrop-blur-xl backdrop-saturate-100 border-1 border-[var(--transparent-50)] rounded-t-3xl shadow-2xl pt-12 pb-12">
        <div className="min-w-full px-4 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-white">
            My Bucket List
          </h2>
        </div>
        <ul className="mt-8 grid grid-cols-1 gap-4 items-start w-full px-4">
          {items.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
              className="py-3 px-4 rounded-lg backdrop-blur-md bg-white/5 text-white border border-[var(--transparent-50)] hover:border-green-400 transition-all duration-300 w-full flex flex-col sm:flex-row items-center justify-between gap-2"
            >
              {editIndex === idx ? (
                <div className="flex items-center w-full gap-2">
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") saveEdit(idx);
                      if (e.key === "Escape") cancelEdit();
                    }}
                    className="flex-1 bg-transparent text-white border-b border-green-400 focus:outline-none px-2 py-1 placeholder-white/50"
                    autoFocus
                  />
                  <button
                    onClick={() => saveEdit(idx)}
                    className="p-1 border border-green-400 rounded hover:bg-green-400 hover:text-black"
                    aria-label="Save"
                  >
                    <Save size={18} />
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="p-1 border border-gray-400 rounded hover:bg-gray-400 hover:text-black"
                    aria-label="Cancel"
                  >
                    <X size={18} />
                  </button>
                </div>
              ) : (
                <div className="flex flex-1 w-full break-words flex-row items-center justify-between">
                  <span className="text-left flex-1 max-w-[200px]">
                    <span className="text-[var(--lumy-green)]">
                      I want to...{" "}
                    </span>
                    {item}
                  </span>
                  <div className="flex gap-2 ml-2">
                    <button
                      onClick={() => startEdit(idx)}
                      className="p-1 border border-blue-400 rounded hover:bg-blue-400 hover:text-black"
                      aria-label="Edit"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleRemoveItem(idx)}
                      className="p-1 border border-red-400 rounded hover:bg-red-400 hover:text-black"
                      aria-label="Remove"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              )}
            </motion.li>
          ))}
        </ul>
      </section>
      {/* <footer className="flex gap-4 sm:gap-[24px] flex-wrap items-center justify-center text-xs sm:text-base pb-8">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
