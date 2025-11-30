import { useEffect, useState } from "react"
import "./App.css"
import InstructionsSlide from "./components/InstructionsSlide"
import MCPSlide1 from "./components/MCPSlide1"
import MCPSlide2 from "./components/MCPSlide2"
import ManualReviewSlide1 from "./components/ManualReviewSlide1"
import ManualReviewSlide2 from "./components/ManualReviewSlide2"
import ResourcesSlide from "./components/ResourcesSlide"
import StrategySlide1 from "./components/StrategySlide1"
import StrategySlide2 from "./components/StrategySlide2"
import ThankSlide from "./components/ThankSlide"
import TitleSlide from "./components/TitleSlide"
import WritingRulesSlide1 from "./components/WritingRulesSlide1"
import WritingRulesSlide2 from "./components/WritingRulesSlide2"

const slides = [
  TitleSlide,
  InstructionsSlide,
  WritingRulesSlide1,
  WritingRulesSlide2,
  MCPSlide1,
  MCPSlide2,
  StrategySlide1,
  StrategySlide2,
  ManualReviewSlide1,
  ManualReviewSlide2,
  ResourcesSlide,
  ThankSlide
]

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
