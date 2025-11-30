export default function ManualReviewSlide2() {
  return (
    <div className="slide">
      <h2>⚠️ Manual Review - Tại Sao Bắt Buộc Phải Kiểm Tra? (2/2)</h2>

      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h4>3. 🐛 Hiệu năng </h4>
        <p style={{ fontSize: "0.95rem" }}>
          AI có thể tạo code chạy được nhưng không tối ưu. Ví dụ: query N+1,
          không cache, hoặc load toàn bộ dataset vào memory.
        </p>
      </div>

      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h4>4. 🧪 Test</h4>
        <p style={{ fontSize: "0.95rem" }}>
          AI viết tests nhưng có thể thiếu edge cases quan trọng hoặc tạo tests
          quá đơn giản (chỉ test happy path).
        </p>
      </div>

      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h4>5. 🔄 Breaking Changes</h4>
        <p style={{ fontSize: "0.95rem" }}>
          AI có thể thay đổi API contracts, xóa function đang được dùng, hoặc
          refactor theo cách không backward compatibility.
        </p>
      </div>

      <div className="highlight-box" style={{ marginTop: "2rem" }}>
        <p>
          <strong>💡 Best Practice:</strong> Luôn đọc và hiểu từng dòng code AI
          generate.
        </p>
      </div>
    </div>
  )
}
