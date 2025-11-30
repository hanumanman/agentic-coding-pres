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
function getUserStatus(user?: User): string {
  return user
    ? user.isActive
      ? "active"
      : user.isPending
        ? "pending"
        : "inactive"
    : "unknown"
}
```

- Good (TypeScript):

```ts
interface User {
  isActive?: boolean
  isPending?: boolean
}

function getUserStatus(user?: User): string {
  if (!user) return "unknown"
  if (user.isActive) return "active"
  if (user.isPending) return "pending"
  return "inactive"
}
```

- Note: Using chainable methods like `filter` → `map` → `find` is _not_ inherently bad — it's concise and declarative. The issue arises when variable names are unclear or the chain contains side effects.
- Acceptable (TypeScript):

```ts
const firstActiveUserId = users
  .filter(user => user.isActive)
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
let totalPrice = 0

function addItemToCart(item: CartItem): void {
  cart.push(item)
  totalPrice += item.price // hidden mutation of global state
}
```

- Good (TypeScript):

```ts
interface Cart {
  items: CartItem[]
  totalPrice: number
}

function addItemToCart(cart: Cart, item: CartItem): Cart {
  return {
    items: [...cart.items, item],
    totalPrice: cart.totalPrice + item.price
  }
}
// caller decides how to persist the new cart state
```

4. Use meaningful names instead of comments

- Explanation: Name variables and functions so their purpose is clear — fewer "why" comments needed.
- Bad (TypeScript):

```ts
// Get users who haven't logged in for 30 days
const u = users.filter(x => x.ll < Date.now() - 30 * 24 * 60 * 60 * 1000)
```

- Good (TypeScript):

```ts
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000

function isInactiveUser(user: User): boolean {
  return user.lastLoginAt < Date.now() - THIRTY_DAYS_MS
}

const inactiveUsers = users.filter(isInactiveUser)
```

5. Use the type system and explicit contracts where available

- Explanation: Use language features (static typing, type hints, interfaces) to make function contracts explicit. In untyped languages, favor runtime input validation and clear docs.
- Bad (TypeScript):

```ts
function getUser(id: any) {
  return fetch(`/api/users/${id}`).then(res => res.json())
}

// Caller has no idea what shape to expect
const user = await getUser(123)
console.log(user.nmae) // typo goes unnoticed
```

- Good (TypeScript):

```ts
interface User {
  id: string
  name: string
  email: string
}

async function getUser(id: string): Promise<User> {
  const response = await fetch(`/api/users/${id}`)
  const data: unknown = await response.json()
  return data as User
}

// Caller knows the shape; typos are caught at compile time
const user = await getUser("123")
console.log(user.name)
```

- Note: If your language supports a typed system (TypeScript, Go, Java), prefer it; otherwise, use runtime checks and clear docstrings/comments.

6. Prefer small functions / single responsibility

- Explanation: Each function should do one thing. Complex functionality should be broken into small, testable pieces.
- Bad (TypeScript):

```ts
async function handleUserRegistration(req: Request): Promise<Response> {
  // validation
  if (!req.body.email || !req.body.password) {
    return new Response("Invalid input", { status: 400 })
  }
  // hash password
  const hashedPassword = await bcrypt.hash(req.body.password, 10)
  // save to database
  const user = await db.users.create({
    email: req.body.email,
    password: hashedPassword
  })
  // send welcome email
  await sendEmail(user.email, "Welcome!", "Thanks for signing up")
  // build response
  return new Response(JSON.stringify({ id: user.id }), { status: 201 })
}
```

- Good (TypeScript):

```ts
interface RegistrationInput {
  email: string
  password: string
}

function validateRegistration(body: unknown): RegistrationInput {
  // validation logic
}

async function createUser(input: RegistrationInput): Promise<User> {
  const hashedPassword = await bcrypt.hash(input.password, 10)
  return db.users.create({ email: input.email, password: hashedPassword })
}

async function sendWelcomeEmail(email: string): Promise<void> {
  await sendEmail(email, "Welcome!", "Thanks for signing up")
}

async function handleUserRegistration(req: Request): Promise<Response> {
  const input = validateRegistration(req.body)
  const user = await createUser(input)
  await sendWelcomeEmail(user.email)
  return new Response(JSON.stringify({ id: user.id }), { status: 201 })
}
```

7. Use guard clauses and early returns

- Explanation: Prefer early exits for invalid or trivial inputs to reduce nesting and clarify the main path.
- Bad (TypeScript):

```ts
function calculateDiscount(user: User, order: Order): number {
  if (user) {
    if (order) {
      if (order.items.length > 0) {
        if (user.isPremium) {
          return order.total * 0.2
        } else {
          return order.total * 0.1
        }
      }
    }
  }
  return 0
}
```

- Good (TypeScript):

```ts
function calculateDiscount(user?: User, order?: Order): number {
  if (!user || !order) return 0
  if (order.items.length === 0) return 0

  const discountRate = user.isPremium ? 0.2 : 0.1
  return order.total * discountRate
}
```

8. Error handling & logging — fail aggressively and add context

- Explanation: Add helpful error messages and avoid swallowing errors. Mask sensitive data in logs and include actionable context when rethrowing or returning an error.
- Bad (TypeScript):

```ts
async function processOrder(orderId: string) {
  try {
    return await submitOrder(orderId)
  } catch (e) {
    console.error(e) // Error swallowed, caller doesn't know it failed
  }
}
```

- Good (TypeScript):

```ts
async function processOrder(orderId: string): Promise<OrderResult> {
  try {
    return await submitOrder(orderId)
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "unknown error"
    throw new Error(`Failed to process order ${orderId}: ${message}`)
  }
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
import { z } from "zod"
import { UserService } from "../../../../../services/user"
import { validateEmail } from "../../../../../utils/validation"
```

- Good (TypeScript):

```ts
import { UserService } from "@/services/user"
import { validateEmail } from "@/utils/validation"
import express from "express"
import { z } from "zod"
```

11. Prefer immutability when feasible

- Explanation: Mutating objects/arrays in place can lead to subtle bugs and make reasoning about code harder. Prefer immutable updates where the language and performance permit.
- Bad (TypeScript):

```ts
function updateUserSettings(user: User, newTheme: string): void {
  user.settings.theme = newTheme // mutation can cause unexpected side effects
  user.settings.updatedAt = Date.now()
}
```

- Good (TypeScript):

```ts
function updateUserSettings(user: User, newTheme: string): User {
  return {
    ...user,
    settings: {
      ...user.settings,
      theme: newTheme,
      updatedAt: Date.now()
    }
  }
}
```

12. Avoid global state; inject dependencies

- Explanation: Pass dependencies (DB, config, logger) into modules/functions rather than using globals. This improves testability and reduces hidden coupling.
- Bad (TypeScript):

```ts
import { db } from "./db"
import { logger } from "./logger"

export async function getActiveUsers(): Promise<User[]> {
  logger.info("Fetching active users")
  return db.query("SELECT * FROM users WHERE active = true")
}
// Hard to test: must mock global imports
```

- Good (TypeScript):

```ts
interface Dependencies {
  db: Database
  logger: Logger
}

export async function getActiveUsers(deps: Dependencies): Promise<User[]> {
  deps.logger.info("Fetching active users")
  return deps.db.query("SELECT * FROM users WHERE active = true")
}
// Easy to test: pass mock dependencies directly
```

13. Keep modules small and focused

- Explanation: Each file/module should contain logic for one bounded concern.
- Bad: One file contains API handlers, DB access, validation, and business logic all in one place.
- Good: Split responsibilities into `controller/handler`, `service`, `db`, and `validators` modules.

14. Test small units and public APIs

- Explanation: Unit tests should verify the public behavior and cover edge cases. Keep tests small, fast, and deterministic.
- Bad (no tests):

```ts
// Complex function with no tests - bugs will only surface in production
function calculateTax(price: number, region: string): number {
  const rates: Record<string, number> = { US: 0.08, EU: 0.2, UK: 0.2 }
  return price * (rates[region] ?? 0)
}
```

- Good (TypeScript example):

```ts
import { calculateTax } from "./tax"

describe("calculateTax", () => {
  test("applies US tax rate", () => {
    expect(calculateTax(100, "US")).toBe(8)
  })

  test("applies EU tax rate", () => {
    expect(calculateTax(100, "EU")).toBe(20)
  })

  test("returns 0 for unknown region", () => {
    expect(calculateTax(100, "UNKNOWN")).toBe(0)
  })

  test("handles zero price", () => {
    expect(calculateTax(0, "US")).toBe(0)
  })
})
```

15. Write clear function contracts (docs + types)

- Explanation: The function signature should explain the contract. Small doc comments for complex or non-obvious behavior are fine.
- Bad (TypeScript):

```ts
// What does this return if user is null? What format is the date?
function fmt(u: any, d: any) {
  return u.n + " - " + d
}
```

- Good (TypeScript):

```ts
interface User {
  firstName: string
  lastName: string
}

/**
 * Formats a user's full name with a formatted date.
 * @returns Format: "FirstName LastName - Jan 1, 2020"
 */
function formatUserWithDate(user: User, date: Date): string {
  const fullName = `${user.firstName} ${user.lastName}`
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })
  return `${fullName} - ${formattedDate}`
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
