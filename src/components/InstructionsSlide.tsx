export default function InstructionsSlide() {
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
            dự án.
          </li>
          <li>
            <strong>Chất lượng code:</strong> Hướng dẫn AI viết code dễ đọc, bảo
            trì.
          </li>
          <li>
            <strong>Giảm thiểu lỗi:</strong> Định nghĩa rõ ràng những gì nên và
            không nên làm.
          </li>
        </ul>
      </div>
    </div>
  )
}
