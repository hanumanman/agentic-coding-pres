export default function ResourcesSlide() {
  return (
    <div className="slide">
      <h2>📚 Tài Nguyên Học Tập</h2>

      <div className="grid-2" style={{ marginTop: "2rem" }}>
        <div className="card">
          <h4>🎥 YouTube Channels</h4>
          <ul style={{ fontSize: "1.1rem" }}>
            <li>
              <strong>WebDevCody</strong>
              <br />
              <span style={{ fontSize: "0.9rem", color: "#666" }}>
                AI coding tips & tricks
              </span>
            </li>
            <li>
              <strong>BridgeMind</strong>
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
            <li>Cursor Documentation</li>
            <li>GitHub Copilot Guides</li>
            <li>MCP Protocol Docs</li>
            <li>AI Engineering blogs</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
