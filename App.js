import RootNavigation from "./navigation"
import { AuthProvider } from "./context/AuthContext"

export default function App(){
  return (
    <AuthProvider>
      <RootNavigation/>
    </AuthProvider>
  )
}
