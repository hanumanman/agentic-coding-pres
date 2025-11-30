import type { ComponentType } from "react"
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
import TableOfContentsSlide from "./components/TableOfContentsSlide"
import ThankSlide from "./components/ThankSlide"
import TitleSlide from "./components/TitleSlide"
import WritingRulesSlide1 from "./components/WritingRulesSlide1"
import WritingRulesSlide2 from "./components/WritingRulesSlide2"

type SlideConfig = {
  component: ComponentType<Record<string, unknown>>
  title: string
  subtitle?: string
}

const slidesConfig: SlideConfig[] = [
  { component: TitleSlide, title: "🤖 AGENTIC CODING" },
  { component: TableOfContentsSlide, title: "📑 Mục Lục" },
  { component: InstructionsSlide, title: "📋 Rule files" },
  { component: WritingRulesSlide1, title: "✍️ Viết rule hiệu quả (1)" },
  { component: WritingRulesSlide2, title: "✍️ Viết rule hiệu quả (2)" },
  { component: MCPSlide1, title: "🧠 MCP (1)" },
  { component: MCPSlide2, title: "🧠 MCP (2)" },
  { component: StrategySlide1, title: "🔍 Chiến lược Prompt (1)" },
  { component: StrategySlide2, title: "🔍 Chiến lược Prompt (2)" },
  { component: ManualReviewSlide1, title: "📝 Kiểm tra thủ công (1)" },
  { component: ManualReviewSlide2, title: "📝 Kiểm tra thủ công (2)" },
  { component: ResourcesSlide, title: "📚 Tài nguyên" },
  { component: ThankSlide, title: "🎉 Lời cảm ơn" }
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault()
        setCurrentSlide(prev => Math.min(prev + 1, slidesConfig.length - 1))
      } else if (event.key === "ArrowLeft") {
        event.preventDefault()
        setCurrentSlide(prev => Math.max(prev - 1, 0))
      } else if (event.key === "Home") {
        event.preventDefault()
        setCurrentSlide(0)
      } else if (event.key === "End") {
        event.preventDefault()
        setCurrentSlide(slidesConfig.length - 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const CurrentSlideComponent = slidesConfig[currentSlide].component
  const entries = slidesConfig.map((s, index) => ({ index, title: s.title }))
  const tocIndex = slidesConfig.findIndex(
    s => s.component === TableOfContentsSlide
  )

  return (
    <div className="presentation">
      <div className="slide-container">
        <CurrentSlideComponent
          setCurrentSlide={setCurrentSlide}
          entries={entries}
          currentSlide={currentSlide}
        />
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
          {currentSlide + 1} / {slidesConfig.length}
        </div>

        <button
          onClick={() =>
            setCurrentSlide(prev => Math.min(prev + 1, slidesConfig.length - 1))
          }
          disabled={currentSlide === slidesConfig.length - 1}
          className="nav-button"
        >
          Sau →
        </button>
        {tocIndex >= 0 && (
          <button
            onClick={() => setCurrentSlide(tocIndex)}
            disabled={currentSlide === tocIndex}
            className="nav-button"
          >
            Quay lại mục lục
          </button>
        )}
      </div>

      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${((currentSlide + 1) / slidesConfig.length) * 100}%`
          }}
        />
      </div>
    </div>
  )
}

export default App
