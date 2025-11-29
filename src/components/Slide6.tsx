export default function Slide6() {
  return (
    <div className="slide">
      <h2>🔌 MCP - Model Context Protocol</h2>

      <div className="grid-2">
        <div className="card">
          <h4>🌐 Context7</h4>
          <p>Tài liệu thư viện cập nhật</p>
          <ul style={{ fontSize: "1rem" }}>
            <li>Docs của frameworks</li>
            <li>API references</li>
            <li>Code examples</li>
          </ul>
        </div>

        <div className="card">
          <h4>📚 DeepWiki</h4>
          <p>Tài liệu GitHub repos</p>
          <ul style={{ fontSize: "1rem" }}>
            <li>README & Wiki</li>
            <li>Code structure</li>
            <li>Best practices</li>
          </ul>
        </div>
      </div>

      <div className="highlight-box" style={{ marginTop: "2rem" }}>
        <h3>💡 Pro Tip:</h3>
        <p>
          Sử dụng <strong>GitHub CLI</strong> thay vì GitHub MCP để:
        </p>
        <ul>
          <li>Tốc độ nhanh hơn</li>
          <li>Linh hoạt hơn trong queries</li>
          <li>Ít resource overhead hơn</li>
        </ul>
      </div>
    </div>
  )
}
