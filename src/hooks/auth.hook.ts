import { AuthContext } from "@/context/Auth/provider";
import { useContext } from "react";

export function useAuth() {
    return useContext(AuthContext)
}