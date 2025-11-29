export default function Slide4() {
  return (
    <div className="slide">
      <h2>💻 Ví dụ Code: Bad vs Good</h2>

      <div className="grid-2">
        <div>
          <h3 style={{ color: "#d9534f" }}>❌ Bad</h3>
          <pre>
            <code>{`// Khó hiểu, lồng nhau sâu
const s = user 
  ? user.isActive 
    ? "active" 
    : user.isPending 
      ? "pending" 
      : "inactive"
  : "unknown";

// Mutation toàn cục
const db = {};
function addUser(u) {
  db[u.id] = u;
}`}</code>
          </pre>
        </div>

        <div>
          <h3 style={{ color: "#5cb85c" }}>✅ Good</h3>
          <pre>
            <code>{`// Rõ ràng, dễ đọc
function getUserStatus(user?: User) {
  if (!user) return "unknown";
  if (user.isActive) return "active";
  if (user.isPending) return "pending";
  return "inactive";
}

// Pure function
function addUser(
  db: DBState, 
  user: User
): DBState {
  return { ...db, [user.id]: user };
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}
