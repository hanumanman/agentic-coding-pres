export default function StrategySlide1() {
  return (
    <div className="slide">
      <h2>🎯 Chiến Lược Sử Dụng Hiệu Quả (1/2)</h2>

      <div className="grid-2">
        <div className="card">
          <p>
            <strong>🧠 Claude Opus 4.5</strong>
          </p>
          <ul>
            <li>✅ Best coding model.</li>
            <li>❌ Chi phí token cao.</li>
          </ul>
        </div>

        <div className="card">
          <p>
            <strong>⚡ Claude Sonnet 4.5/ GPT 5</strong>
          </p>
          <ul>
            <li>✅ Tốt cho coding hàng ngày.</li>
            <li>✅ Cân bằng hiệu năng/giá.</li>
          </ul>
        </div>

        <div className="card">
          <p>
            <strong>🎨 Gemini 3</strong>
          </p>
          <ul>
            <li>✅ Best cho Visual Design.</li>
            <li>✅ Xử lý đa phương tiện tốt.</li>
          </ul>
        </div>

        <div className="card">
          <p>
            <strong>🦖 Raptor-mini</strong>
          </p>
          <ul>
            <li>✅ Custom model (GPT5-mini).</li>
            <li>✅ Context window lớn, rẻ.</li>
          </ul>
        </div>
      </div>

      <div className="highlight-box" style={{ marginTop: "1.5rem" }}>
        <p>
          <strong>💡</strong>Chọn model phù hợp với độ phức tạp của task để tối
          ưu chi phí và tốc độ.
        </p>
      </div>
    </div>
  )
}
