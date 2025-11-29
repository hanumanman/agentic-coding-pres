export default function Slide3() {
  return (
    <div className="slide">
      <h2>📝 Demo: Quy Tắc Code Tốt</h2>

      <h3>🎯 Nguyên tắc cốt lõi:</h3>
      <ul>
        <li>
          <strong>Dễ đọc và hiểu</strong> {">"} Thông minh hay khéo léo
        </li>
        <li>
          <strong>Giới hạn độ sâu lồng nhau:</strong> Tối đa 2 cấp
        </li>
        <li>
          <strong>Tránh side effects:</strong> Ưu tiên pure functions
        </li>
        <li>
          <strong>Đặt tên có ý nghĩa:</strong> Thay vì comment
        </li>
        <li>
          <strong>Sử dụng type system nghiêm ngặt</strong>
        </li>
      </ul>

      <div className="highlight-box" style={{ marginTop: "2rem" }}>
        <p>
          <strong>⚠️ Quan trọng:</strong> Không tự động tạo file tài liệu MD cho
          mỗi thay đổi nhỏ!
        </p>
      </div>
    </div>
  )
}
