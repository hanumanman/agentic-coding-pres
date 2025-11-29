import { useEffect, useState } from "react"
import "./App.css"
import Slide1 from "./components/Slide1"
import Slide2 from "./components/Slide2"
import Slide3 from "./components/Slide3"
import Slide4 from "./components/Slide4"
import Slide5 from "./components/Slide5"
import Slide6 from "./components/Slide6"
import Slide7 from "./components/Slide7"
import Slide8 from "./components/Slide8"

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault()
        setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))
      } else if (event.key === "ArrowLeft") {
        event.preventDefault()
        setCurrentSlide(prev => Math.max(prev - 1, 0))
      } else if (event.key === "Home") {
        event.preventDefault()
        setCurrentSlide(0)
      } else if (event.key === "End") {
        event.preventDefault()
        setCurrentSlide(slides.length - 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const CurrentSlideComponent = slides[currentSlide]

  return (
    <div className="presentation">
      <div className="slide-container">
        <CurrentSlideComponent />
      </div>

      <div className="navigation">
        <button
          onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
          disabled={currentSlide === 0}
          className="nav-button"
        >
          ← Trước
        </button>

        <div className="slide-indicator">
          {currentSlide + 1} / {slides.length}
        </div>

        <button
          onClick={() =>
            setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))
          }
          disabled={currentSlide === slides.length - 1}
          className="nav-button"
        >
          Sau →
        </button>
      </div>

      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  )
}

export default App
