import "highlight.js/styles/github-dark.css"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import remarkGfm from "remark-gfm"

export default function InstructionsSlide() {
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
          <h2>📝 Ví Dụ Hướng Dẫn</h2>
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
      <h2>📋 Files Quy Tắc (Rules Files)</h2>

      <div className="highlight-box">
        <h3>Các loại files phổ biến:</h3>
        <ul>
          <li>
            <code>.cursorrules</code> - Cursor IDE
          </li>
          <li>
            <code>copilot-instructions.md</code> - GitHub Copilot
          </li>
          <li>
            <code>AGENTS.md</code> - Quy ước chung
          </li>
        </ul>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>💡 Tại sao cần Rules Files?</h3>
        <ul>
          <li>
            <strong>Tính nhất quán:</strong> Đảm bảo AI tuân theo chuẩn code của
            dự án
          </li>
          <li>
            <strong>Chất lượng code:</strong> Hướng dẫn AI viết code dễ đọc, bảo
            trì
          </li>
          <li>
            <strong>Giảm thiểu lỗi:</strong> Định nghĩa rõ ràng những gì nên và
            không nên làm
          </li>
        </ul>
      </div>

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <button
          onClick={() => setShowExample(true)}
          className="nav-button"
          style={{ padding: "0.75rem 1.5rem", fontSize: "1rem" }}
        >
          📄 Xem Ví Dụ Hướng Dẫn
        </button>
      </div>
    </div>
  )
}
