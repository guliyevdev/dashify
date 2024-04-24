import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Login from './pages/Login.tsx'
import Index from './pages/Index.tsx'
import Category from "./pages/Category.tsx";
import category from "./pages/Category.tsx";
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // staleTime: 60 * 1000,
            staleTime: 0,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <BrowserRouter>
                <Routes >
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Index />} />
                    <Route path="/category" element={<Category />} />
                </Routes>
            </BrowserRouter>
</QueryClientProvider>
    )
}

export default App