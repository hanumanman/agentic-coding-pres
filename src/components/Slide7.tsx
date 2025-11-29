export default function Slide7() {
  return (
    <div className="slide">
      <h2>🎯 Chiến Lược Sử Dụng Hiệu Quả</h2>

      <h3>🤖 Chọn Model Phù Hợp:</h3>
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <p>
          <strong>Raptor-mini:</strong> Fine-tuned từ GPT-4o mini cho VSCode
        </p>
        <ul>
          <li>✅ Context window lớn</li>
          <li>✅ Phù hợp với tác vụ đơn giản cần nhiều context</li>
          <li>✅ Chi phí thấp</li>
        </ul>
      </div>

      <h3>✍️ Viết Prompts Hiệu Quả:</h3>
      <ol>
        <li>
          <strong>Giữ phạm vi nhỏ gọn:</strong> Tập trung vào 1 vấn đề cụ thể
        </li>
        <li>
          <strong>Lập kế hoạch trước:</strong> Phác thảo các bước cần làm
        </li>
        <li>
          <strong>Đặt câu hỏi thu thập context:</strong> Giúp AI hiểu rõ hơn
        </li>
        <li>
          <strong>Cung cấp context liên quan:</strong> Đủ nhưng không dư thừa
        </li>
      </ol>

      <div className="highlight-box">
        <p>
          <strong>⚠️ Quan trọng nhất:</strong> LUÔN REVIEW THỦ CÔNG!
        </p>
      </div>
    </div>
  )
}
