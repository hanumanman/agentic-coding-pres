export default function StrategySlide1() {
  return (
    <div className="slide">
      <h2>🎯 Chiến Lược Sử Dụng Hiệu Quả (1/2)</h2>

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

      <div className="highlight-box">
        <p>
          <strong>💡 Lưu ý:</strong> Model mạnh hơn không phải lúc nào cũng tốt
          hơn. Chọn model phù hợp với độ phức tạp của task để tối ưu chi phí và
          tốc độ.
        </p>
      </div>
    </div>
  )
}
