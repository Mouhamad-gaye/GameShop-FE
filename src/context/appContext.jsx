import AuthProvider from "./auth/authContext";
import UseProvider from "./userContext/userContext";

export default function AppProvider({ children }) {
    return (
    <AuthProvider>
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    </AuthProvider>
    )
}