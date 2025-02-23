"use client";

import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "@/firebaseConfig";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/ProtectedRoute"; // ✅ Import Protected Route

const auth = getAuth(app);

export default function Profile() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push("/auth/login"); // Redirect to login if not authenticated
      }
    });

    return () => unsubscribe();
  }, [router]); // ✅ Fix: Added router to dependency array

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/auth/login");
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-gray-700">User Profile</h2>
          {user ? (
            <div className="mt-4">
              <p className="text-gray-600">Email: {user.email}</p>
              <button
                onClick={handleLogout}
                className="mt-4 w-full bg-red-500 text-white p-2 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          ) : (
            <p className="text-gray-600">Loading...</p>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
