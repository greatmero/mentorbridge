"use client";

import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold flex items-center">
          🚀 MentorBridge is Coming Soon!
        </h1>
        <p className="mt-4 text-lg">We are working on something amazing. Stay tuned!</p>
        
        <div className="mt-8 flex space-x-4">
          <button
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
            onClick={() => router.push("/auth/login")}
          >
            Login
          </button>
          <button
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500"
            onClick={() => router.push("/auth/signup")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
