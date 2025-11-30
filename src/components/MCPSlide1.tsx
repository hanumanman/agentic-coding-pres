export default function MCPSlide1() {
  return (
    <div className="slide">
      <h2>🔌 MCP - Model Context Protocol (1/2)</h2>

      <div className="highlight-box" style={{ marginBottom: "2rem" }}>
        <p>
          <strong>MCP</strong> là protocol chuẩn để kết nối AI với data sources.
          Thay vì mỗi AI tool tự build integrations, MCP tạo ra một giao thức
          chung.
        </p>
      </div>

      <div className="grid-2">
        <div
          className="card"
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <h4>🌐 Context7 MCP</h4>
          <p>Fetch documentation từ libraries/frameworks phổ biến</p>
          <ul style={{ fontSize: "0.95rem" }}>
            <li>React, Next.js, Vue, Angular...</li>
            <li>MongoDB, Supabase, Prisma...</li>
            <li>Tài liệu luôn được update mới nhất</li>
          </ul>
          <a
            href="https://context7.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.9rem",
              marginTop: "auto",
              display: "inline-block"
            }}
          >
            → https://context7.com/
          </a>
        </div>

        <div
          className="card"
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <h4>📚 DeepWiki MCP</h4>
          <p>Tài liệu AI cho rất nhiều public GitHub repo</p>
          <ul style={{ fontSize: "0.95rem" }}>
            <li>Tự động phân tích codebase</li>
            <li>Q&A về repo architecture</li>
          </ul>
          <a
            href="https://deepwiki.org/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.9rem",
              marginTop: "auto",
              display: "inline-block"
            }}
          >
            → deepwiki.org/
          </a>
        </div>
      </div>
    </div>
  )
}
