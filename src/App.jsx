import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Layout } from "./pages/layout/Layout";
import { Book } from "./pages/Book";
import { BookList } from "./pages/BookList";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
