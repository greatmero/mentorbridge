import { useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ Correct import for Next.js 13+
import { useAuth } from "@/authContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/auth/login"); // Redirect to login if user is not authenticated
    }
  }, [user, router]); // ✅ Fixed useEffect dependency array

  return user ? children : null;
};

export default ProtectedRoute;
