"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center text-gray-900">
        <h1 className="text-4xl font-bold mb-4">🚀 MentorBridge is Coming Soon!</h1>
        <p className="text-lg mb-6">
          We are working on something amazing. Stay tuned!
        </p>
        <div className="flex space-x-4">
          <Link href="/auth/login">
            <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
              Login
            </button>
          </Link>
          <Link href="/auth/signup">
            <button className="bg-green-500 hover:bg-green-700 text-white px-6 py-2 rounded-md">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
