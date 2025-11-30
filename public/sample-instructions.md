---
applyTo: "**"
---

## Code Style & Engineering Guidelines

This document provides compact, practical rules for producing readable, maintainable, and scalable code across languages (JavaScript/TypeScript, Python, Go, Java, etc.). Examples are provided in TypeScript so the guidance is easy to read and apply across languages.

### Principles

- Favor clarity and maintainability over cleverness. Simple, clear code is easier to reason about, test, and refactor.
- Aim for small, single-purpose functions and modules. Prefer composition over monolithic classes.
- Prefer pure functions and immutable data where practical. Side effects should be explicit and minimal.

### Core rules (with examples)

1. Readability > Cleverness

- Explanation: Code that is easy to scan and understand wins. Avoid compact/clever tricks that obscure intent. Prefer clear control-flow and naming—variable names like `u`, `x`, or `res` are not descriptive.
- Bad (TypeScript):

```ts
// Hard to follow: nested ternaries and compressed logic.
const status = user
  ? user.isActive
    ? "active"
    : user.isPending
      ? "pending"
      : "inactive"
  : "unknown"
```

- Good (TypeScript):

```ts
interface User {
  id: string
  isExpired?: boolean
}
const users: User[] = [] // example
const activeUsers: User[] = users.filter(user => !user.isExpired)
const activeUserIds: string[] = activeUsers.map(user => user.id)
const anyActiveUserId: string | undefined = activeUserIds[0]
```

- Note: Using chainable methods like `filter` → `map` → `find` is _not_ inherently bad — it's concise and declarative. The issue arises when variable names are unclear or the chain contains side effects.
- Acceptable (TypeScript):

```ts
const firstActiveUserId = users
  .filter(user => !user.isExpired)
  .map(user => user.id)
  .find(Boolean)
```

2. Limit nesting level — max depth 2

- Explanation: Deep nesting is hard to reason about. Use early returns, small helpers, or guard clauses to reduce indentation.
- Bad (TypeScript):

```ts
interface Address {
  city?: string
}
interface Profile {
  address?: Address
}
interface User {
  profile?: Profile
}
function process(u?: User): string | undefined {
  if (u) {
    if (u.profile) {
      if (u.profile.address) {
        return doSomething(u.profile.address.city)
      }
    }
  }
  return undefined
}
```

- Good (TypeScript):

```ts
function process(u?: User): string | undefined {
  if (!u?.profile?.address) return undefined
  return doSomething(u.profile.address.city)
}
```

3. Avoid side effects — write pure functions when possible

- Explanation: Pure functions are easier to test and reason about: no hidden state changes.
- Bad (TypeScript):

```ts
interface User {
  id: string
}
const db: Record<string, User> = {}
function addUser(user: User): void {
  // mutation of global state
  db[user.id] = user
}
```

- Good (TypeScript):

```ts
type DBState = Record<string, User>
function addUser(dbState: DBState, user: User): DBState {
  return { ...dbState, [user.id]: user }
}
// call site decides how to persist the return value
```

- Keep the pattern: return a new state instead of mutating (use the equivalent approach in your language).

4. Use meaningful names instead of comments

- Explanation: Name variables and functions so their purpose is clear — fewer “why” comments needed.
- Bad (TypeScript):

```ts
interface User {
  status?: string
}
const a = users.filter(u => u.s === "inactive")
```

- Good (TypeScript):

```ts
const inactiveUsers: User[] = users.filter(user => user.status === "inactive")
```

5. Use the type system and explicit contracts where available

- Explanation: Use language features (static typing, type hints, interfaces) to make function contracts explicit. In untyped languages, favor runtime input validation and clear docs.
- Bad (TypeScript):

```ts
function getUser(id: any) {
  return fetch(`/api/users/${id}`).then(res => res.json())
}
```

- Good (TypeScript):

```ts
interface User {
  id: string
  name: string
  email: string
}
async function getUser(id: string): Promise<User> {
  const res = await fetch(`/api/users/${id}`)
  return res.json() as Promise<User>
}
```

- Note: If your language supports a typed system (TypeScript, Go, Java), prefer it; otherwise, use runtime checks and clear docstrings/comments.

6. Prefer small functions / single responsibility

- Explanation: Each function should do one thing. Complex functionality should be broken into small, testable pieces.
- Bad (TypeScript):

```ts
interface RequestLike {
  /* example fields */
}
async function handleRequest(req: RequestLike): Promise<any> {
  // validate input
  // call DB
  // map results
  // build response
}
```

- Good (TypeScript):

```ts
function validateRequest(req: RequestLike) {
  /* ... */
}
async function fetchFromDB(params: unknown): Promise<any> {
  /* ... */
}
function buildResponse(data: any) {
  /* ... */
}
async function handleRequest(req: RequestLike) {
  const params = validateRequest(req)
  const data = await fetchFromDB(params)
  return buildResponse(data)
}
```

7. Use guard clauses and early returns

- Explanation: Prefer early exits for invalid or trivial inputs to reduce nesting and clarify the main path.
- Bad (TypeScript):

```ts
function process(data?: unknown) {
  if (data) {
    // long logic
  }
}
```

- Good (TypeScript):

```ts
function process(data?: unknown) {
  if (!data) return
  // long logic
}
```

8. Error handling & logging — fail fast and add context

- Explanation: Add helpful error messages and avoid swallowing errors. Mask sensitive data in logs and include actionable context when rethrowing or returning an error.
- Bad (TypeScript):

```ts
try {
  return await doSomething();
} catch (e) {
  console.error(e);
}
```

- Good (TypeScript):

```ts
try {
  return await doSomething();
} catch (err: unknown) {
  if (err instanceof Error) {
    throw new Error(`doSomething failed for id=${id}: ${err.message}`);
  }
  throw new Error("doSomething failed: unknown error");
}
```

- Keep the spirit: include context and avoid logging secrets; apply idioms appropriate to the language (exceptions, error wraps, etc.).

9. Avoid magic numbers and strings

- Explanation: Use named constants or enums for values that have domain meaning; this makes code self-explanatory and easier to update/test.
- Bad (TypeScript):

```ts
if (statusCode === 401) {
  /* ... */
}
```

- Good (TypeScript):

```ts
enum HttpStatus {
  Unauthorized = 401
}
if (statusCode === HttpStatus.Unauthorized) {
  /* ... */
}
```

10. Group and order imports, avoid deep relative paths

- Explanation: Keep a consistent import order (standard libs → third-party → internal modules) and prefer aliases or package imports instead of deep relative paths when supported by your language/tooling.
- Bad (TypeScript):

```ts
import express from "express"
import _ from "lodash"
import { Foo } from "../../../../../models/foo"
```

- Good (TypeScript):

```ts
import { Foo } from "@/models/foo"
import express from "express"
import _ from "lodash"
```

11. Prefer immutability when feasible

- Explanation: Mutating objects/arrays in place can lead to subtle bugs and make reasoning about code harder. Prefer immutable updates where the language and performance permit.
- Bad (TypeScript):

```ts
interface User {
  roles: string[]
}
const user: User = { roles: [] }
user.roles.push("admin")
```

- Good (TypeScript):

```ts
const updatedUser: User = { ...user, roles: [...user.roles, "admin"] }
```

12. Avoid global state; inject dependencies

- Explanation: Pass dependencies (DB, config, logger) into modules/functions rather than using globals. This improves testability and reduces hidden coupling.
- Bad (TypeScript):

```ts
// global db client
import { db } from "./db"

export function getUsers() {
  return db.query("select * from users")
}
```

- Good (TypeScript):

```ts
interface DBClient {
  query(sql: string): Promise<any>
}
export function getUsers(dbClient: DBClient) {
  return dbClient.query("select * from users")
}
```

13. Keep modules small and focused

- Explanation: Each file/module should contain logic for one bounded concern.
- Bad: One file contains API handlers, DB access, validation, and business logic all in one place.
- Good: Split responsibilities into `controller/handler`, `service`, `db`, and `validators` modules.

14. Test small units and public APIs

- Explanation: Unit tests should verify the public behavior and cover edge cases. Keep tests small, fast, and deterministic.
- Bad (no tests):
  - A function with complex logic is added without tests.

- Good (TypeScript example):

```ts
// jest + ts-jest
import { formatDate } from "./formatDate"

test("formatDate happy path", () => {
  expect(formatDate("2020-01-01")).toBe("Jan 1, 2020")
})
test("formatDate invalid", () => {
  expect(() => formatDate("not-a-date")).toThrow()
})
```

15. Write clear function contracts (docs + types)

- Explanation: The function signature should explain the contract. Small doc comments for complex or non-obvious behavior are fine.
- Good (TypeScript):

```ts
interface User {
  name?: string
}
function getDisplayName(user?: User): string {
  return user?.name ?? "Unknown"
}
```

### Quick checklist (before PR)

- Does the change add or improve tests for modified functionality? ✅
- Are interfaces/contract checks present when the language supports types or is runtime validation used otherwise? ✅
- Is logic broken into small, single-responsibility functions? ✅
- Are magic numbers replaced with constants or enums? ✅
- Are side effects explicit and at the edges of the application? ✅
- Are imports grouped and paths readable? ✅

### Notes

- Apply these rules pragmatically. Exceptions may exist for valid, well-justified edge cases; document the reason.
- Prefer to keep documentation in the code (doc comments) or project README/CONTRIBUTING as appropriate — do not create new MD docs for every small rule change.
- Respect the project's chosen language and tooling conventions; update existing project docs if a new practice is adopted broadly.
