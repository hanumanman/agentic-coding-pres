export default function WritingRulesSlide() {
  return (
    <div className="slide">
      <h2>🎓 Viết Rules Hiệu Quả</h2>

      <div className="highlight-box">
        <p style={{ fontSize: "1.4rem" }}>
          <strong>💡</strong> AI Agents học tốt nhất từ ví dụ cụ thể!
        </p>
      </div>

      <h3>✨ Best Practices:</h3>
      <ul>
        <li>
          <strong>Sử dụng ví dụ "Bad" và "Good":</strong> Minh họa rõ ràng những
          gì nên và không nên làm
        </li>
        <li>
          <strong>Cụ thể hơn chung chung:</strong> "Đặt tên biến theo camelCase"
          tốt hơn "Code phải sạch"
        </li>
        <li>
          <strong>Giải thích lý do:</strong> Tại sao quy tắc này quan trọng?
        </li>
        <li>
          <strong>Thêm context:</strong> Khi nào áp dụng, khi nào có thể ngoại
          lệ
        </li>
      </ul>

      <div
        style={{
          marginTop: "2rem",
          background: "#f0f7ff",
          padding: "1.5rem",
          borderRadius: "8px"
        }}
      >
        <p>
          <strong>📂 Cấu trúc đề xuất:</strong>
        </p>
        <ul style={{ marginTop: "1rem", textAlign: "left" }}>
          <li>
            <strong>Project-wide rules:</strong> Code style, naming, cấu trúc dự
            án
          </li>
          <li>
            <strong>System-level rules:</strong> Code style chung
          </li>
        </ul>
      </div>
    </div>
  )
}
