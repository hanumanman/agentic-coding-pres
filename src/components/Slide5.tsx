export default function Slide5() {
  return (
    <div className="slide">
      <h2>🎓 Agents Học Từ Ví Dụ</h2>

      <div className="highlight-box">
        <p style={{ fontSize: "1.4rem" }}>
          <strong>💡 Mẹo:</strong> AI agents học tốt nhất từ các ví dụ cụ thể!
        </p>
      </div>

      <h3>📂 Cấu trúc Rules Files đề xuất:</h3>
      <ul>
        <li>
          <strong>1+ file project-wide:</strong> Quy tắc chung cho toàn dự án
          <ul>
            <li>Code style, naming conventions</li>
            <li>Cấu trúc thư mục, import patterns</li>
          </ul>
        </li>
        <li>
          <strong>1 file system-level:</strong> Quy tắc cho AI assistant
          <ul>
            <li>Cách tương tác với developer</li>
            <li>Format output, error handling</li>
          </ul>
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
          <strong>✨ Best Practice:</strong> Bao gồm cả ví dụ "Bad" và "Good"
          trong rules file
        </p>
      </div>
    </div>
  )
}
