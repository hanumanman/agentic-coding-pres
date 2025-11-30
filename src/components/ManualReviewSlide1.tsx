export default function ManualReviewSlide1() {
  return (
    <div className="slide">
      <h2>⚠️ Manual Review - Tại Sao Bắt Buộc Phải Kiểm Tra? (1/2)</h2>

      <div className="highlight-box" style={{ marginBottom: "2rem" }}>
        <p>
          <strong>Nguyên tắc vàng:</strong> AI agents tăng tốc 10x, nhưng không
          có khả năng đảm bảo chất lượng production-ready. Bạn phải là người
          giám sát cuối cùng.
        </p>
      </div>

      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h4>1. 🔐 Lỗ hổng bảo mật</h4>
        <p style={{ fontSize: "0.95rem", marginBottom: "0.5rem" }}>
          <strong>Ví dụ thực tế:</strong> AI có thể generate SQL queries mà quên
          sanitize user input → SQL injection. Hoặc expose sensitive data trong
          logs/error messages.
        </p>
        <code
          style={{
            fontSize: "0.85rem",
            display: "block",
            background: "#2d2d2d",
            padding: "0.5rem",
            borderRadius: "4px",
            color: "#ff6b6b"
          }}
        >
          {`// AI có thể tạo code như này:
const query = \`SELECT * FROM users WHERE id=\${req.params.id}\``}
        </code>
      </div>

      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h4>2. 🧩 Hiểu nhầm Business Logic</h4>
        <p style={{ fontSize: "0.95rem" }}>
          AI thiếu context về domain, edge cases của business. Ví dụ: xử lý
          refund có thể cần check fraud score, inventory status, payment gateway
          state - những điều AI không tự hiểu được từ prompt đơn giản.
        </p>
      </div>
    </div>
  )
}
