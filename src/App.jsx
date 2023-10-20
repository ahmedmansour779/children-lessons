import { BrowserRouter, Route, Routes } from "react-router-dom"
import Intro from "./components/intro/Intro"
import Lesson from "./components/lesson"
import Lessons from "./components/lessons"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/children-lessons/" element={<Intro />} />
        <Route path="/children-lessons/lessons/:lessonId" element={<Lesson />} />
        <Route path="/children-lessons/lessons/" element={<Lessons />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
