export default function MCPSlide2() {
  return (
    <div className="slide">
      <h2>🔌 MCP - Model Context Protocol (2/2)</h2>

      <div className="highlight-box">
        <h3>💡 Pro Tips:</h3>
        <ul style={{ marginTop: "1rem" }}>
          <li>
            <a href="https://cli.github.com/">
              <strong>GitHub CLI</strong>
            </a>{" "}
            có thể thay thế cho GitHub MCP
          </li>
          <li>
            <strong>Danh sách các MCP servers:</strong>{" "}
            <a
              href="https://mcpservers.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              mcpservers.org/
            </a>
          </li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: "2rem" }}>
        <h4>🛠️ Tự tạo MCP server của riêng bạn</h4>
        <p>MCP cho phép bạn tạo custom integrations cho:</p>
        <ul style={{ fontSize: "0.95rem", marginTop: "1rem" }}>
          <li>Internal APIs và databases của công ty</li>
          <li>Private documentation và knowledge bases</li>
          <li>Custom tools và workflows</li>
        </ul>
      </div>
    </div>
  )
}
