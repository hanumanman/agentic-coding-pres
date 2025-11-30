import "highlight.js/styles/github-dark.css"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import remarkGfm from "remark-gfm"

export default function WritingRulesSlide2() {
  const [showExample, setShowExample] = useState(false)
  const [markdownContent, setMarkdownContent] = useState("")

  useEffect(() => {
    if (showExample && !markdownContent) {
      fetch("/sample-instructions.md")
        .then(response => response.text())
        .then(text => setMarkdownContent(text))
        .catch(error => {
          console.error("Failed to load markdown:", error)
          setMarkdownContent("Failed to load sample instructions.")
        })
    }
  }, [showExample, markdownContent])

  if (showExample) {
    return (
      <div className="slide" style={{ overflow: "auto", textAlign: "left" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem"
          }}
        >
          <h2>📝file: copilot-instruction.md</h2>
          <button
            onClick={() => setShowExample(false)}
            className="nav-button"
            style={{ padding: "0.5rem 1rem" }}
          >
            Quay Lại
          </button>
        </div>
        <div
          className="markdown-content"
          style={{ fontSize: "0.85rem", maxHeight: "70vh", overflow: "auto" }}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {markdownContent}
          </ReactMarkdown>
        </div>
      </div>
    )
  }

  return (
    <div className="slide">
      <h2>🎓 Viết Rules Hiệu Quả (2/2)</h2>

      <div
        style={{
          background: "#f0f7ff",
          padding: "2rem",
          borderRadius: "8px"
        }}
      >
        <p>
          <strong>📂 Cấu trúc đề xuất:</strong>
        </p>
        <ul
          style={{ marginTop: "1.5rem", textAlign: "left", fontSize: "1.1rem" }}
        >
          <li style={{ marginBottom: "1rem" }}>
            <strong>Project-wide rules:</strong> Code style, naming, cấu trúc dự
            án
          </li>
          <li>
            <strong>System-level rules:</strong> Code style chung
          </li>
        </ul>
      </div>

      <div className="highlight-box" style={{ marginTop: "2rem" }}>
        <p>
          <strong>💡 Pro Tip:</strong> Sử dụng code examples thực tế từ codebase
          của bạn trong rules - điều này giúp AI hiểu context và conventions tốt
          hơn nhiều so với mô tả chung chung.
        </p>
      </div>

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <button
          onClick={() => setShowExample(true)}
          className="nav-button"
          style={{ padding: "0.75rem 1.5rem", fontSize: "1rem" }}
        >
          📄 Xem Ví Dụ
        </button>
      </div>
    </div>
  )
}
