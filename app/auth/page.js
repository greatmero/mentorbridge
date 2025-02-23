"use client";  // Ensure this is at the top

import { useContext } from "react";
import { AuthContext } from "@/authContext"; // Adjust this if needed
import { useRouter } from "next/navigation";

export default function AuthPage() {
    const { user } = useContext(AuthContext) || {}; // Prevents destructuring error
    const router = useRouter();

    if (!user) {
        return <p>Loading...</p>;  // Safe fallback for SSR issues
    }

    return (
        <div>
            <h2>Welcome, {user.email}!</h2>
        </div>
    );
}
