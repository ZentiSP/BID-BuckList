'use client'
import Image from "next/image";
import Typewriter from '../components/Typewriter'
import { useState } from "react";

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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 sm:p-20 pb-20 gap-8 sm:gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 sm:gap-[32px] row-start-2 items-center w-full max-w-2xl">
        <div className="w-full">
          <h1 className="text-3xl sm:text-[50px] font-[800] text-center sm:text-center">
            Before I Die I want to
          </h1>
          <p className="text-xl sm:text-[35px] font-[500] text-green-400 text-center">
            <Typewriter texts={['Learn German', 'Play Guitar', 'Become Youtuber']} />
          </p>

          <div className="flex flex-col gap-4 items-center mt-5 w-full">
            <div className="w-full border-b border-gray-300">
              <input
                type="text"
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                onKeyDown={handleInputKeyDown}
                className="w-full p-2 focus:outline-none text-wrap text-center bg-transparent text-white placeholder-gray-400"
                placeholder="Add a new item to your bucket list"
              />
            </div>
            <button 
              onClick={handleAddItem}
              className="w-full sm:w-auto px-6 py-2 border-green-400 border-2 text-green-200 rounded-md hover:bg-green-400 hover:text-black transition-all duration-200"
            >
              Add Item
            </button>
          </div>

          {/* List of added items */}
          <ul className="mt-8 flex flex-col gap-2 items-center w-full">
            {items.map((item, idx) => (
              <li
                key={idx}
                className="px-2 sm:px-4 py-2 bg-black/40 rounded text-white border border-green-400 w-full max-w-xs flex items-center justify-between gap-2"
              >
                {editIndex === idx ? (
                  <>
                    <input
                      type="text"
                      value={editValue}
                      onChange={e => setEditValue(e.target.value)}
                      onKeyDown={e => {
                        if (e.key === "Enter") saveEdit(idx);
                        if (e.key === "Escape") cancelEdit();
                      }}
                      className="flex-1 p-1 bg-transparent text-white border-b border-green-400 focus:outline-none"
                      autoFocus
                    />
                    <button
                      onClick={() => saveEdit(idx)}
                      className="ml-2 px-2 py-1 text-green-400 border border-green-400 rounded hover:bg-green-400 hover:text-black"
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="ml-1 px-2 py-1 text-gray-400 border border-gray-400 rounded hover:bg-gray-400 hover:text-black"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <span className="flex-1 text-left break-words">{item}</span>
                    <button
                      onClick={() => startEdit(idx)}
                      className="ml-2 px-2 py-1 text-blue-400 border border-blue-400 rounded hover:bg-blue-400 hover:text-black"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleRemoveItem(idx)}
                      className="ml-1 px-2 py-1 text-red-400 border border-red-400 rounded hover:bg-red-400 hover:text-black"
                    >
                      Remove
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer className="row-start-3 flex gap-4 sm:gap-[24px] flex-wrap items-center justify-center text-xs sm:text-base">
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
      </footer>
    </div>
  );
}
