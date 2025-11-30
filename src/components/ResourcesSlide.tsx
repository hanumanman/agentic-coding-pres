export default function ResourcesSlide() {
  return (
    <div className="slide">
      <h2>📚 Tài Nguyên Học Tập</h2>

      <div className="grid-2" style={{ marginTop: "2rem" }}>
        <div className="card">
          <h4>🎥 YouTube Channels</h4>
          <ul style={{ fontSize: "1.1rem" }}>
            <li>
              <a
                href="https://www.youtube.com/@WebDevCody"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>WebDevCody</strong>
              </a>
              <br />
              <span style={{ fontSize: "0.9rem", color: "#666" }}>
                AI coding tips & tricks
              </span>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@bridgemindai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>BridgeMind</strong>
              </a>
              <br />
              <span style={{ fontSize: "0.9rem", color: "#666" }}>
                Agentic workflows
              </span>
            </li>
          </ul>
        </div>

        <div className="card">
          <h4>🔗 Các nguồn khác</h4>
          <ul style={{ fontSize: "1.1rem" }}>
            <li>
              <a
                href="https://cursor.com/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cursor Documentation
              </a>
            </li>
            <li>
              <a
                href="https://docs.github.com/en/copilot"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Copilot Guides
              </a>
            </li>
            <li>
              <a
                href="https://github.com/modelcontextprotocol"
                target="_blank"
                rel="noopener noreferrer"
              >
                MCP Protocol Docs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
