import Image from "next/image";
import Typewriter from '../components/Typewriter'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>
          <h1 className="text-[50px] font-[800] text-center sm:text-left">
            Before I Die I want to
          </h1>
          <p className="text-[35px] font-[500] text-green-400 text-center sm:text-center">
            <Typewriter texts={['Learn German', 'Play Guitar', 'Become Youtuber']} />
          </p>

          <div className="flex flex-col gap-4 items-center mt-5">
            <div className="w-full sm:w-120 border-b border-gray-300">
              <input
                type="text"
                className="w-full sm:w-120 p-2 focus:outline-none text-wrap text-center"
                placeholder="Add a new item to your bucket list"
      
              />
            </div>
            <button className="px-6 py-2 border-green-400 border-2 text-white rounded-md hover:px-7  transition-all duration-200 ">
              Add Item
            </button>
          </div>
        </div>
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
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
