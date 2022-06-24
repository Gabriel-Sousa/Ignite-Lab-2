import { Route, Routes } from "react-router-dom";
import { Event } from "../pages/Event";
import { Subscribe } from "../pages/Subscribe";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Event />} />
      <Route path="/teste" element={<h1>adadadad</h1>} />
      <Route path="/event/lesson/:slug_url" element={<Event />} />
    </Routes>
  );
}
