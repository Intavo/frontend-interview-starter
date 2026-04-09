import { products } from './data/products'

/**
 * INTERVIEW CHALLENGE — Product Dashboard
 * =========================================
 *
 * You have 30 minutes. AI tools are encouraged.
 *
 * TASK 1 — Product Grid  (required)
 *   Display the products below in a responsive grid.
 *   Each card should show: image, name, price, rating, category, and stock status.
 *
 * TASK 2 — Search & Filter  (required)
 *   - A search input that filters products by name (real-time, no submit button).
 *   - A category dropdown/pill filter.
 *   - An "In stock only" toggle.
 *
 * TASK 3 — Sort  (required)
 *   Let users sort by: price (low→high, high→low) and rating (high→low).
 *
 * TASK 4 — Polish & Extras  (if time allows)
 *   Pick ONE or more:
 *   - Empty state when no products match.
 *   - Keyboard-accessible filter controls (a11y).
 *   - A product detail modal/drawer on card click.
 *   - URL query-param sync so filters survive a page refresh.
 *   - Animated transitions (card enter/exit).
 *   - Dark mode toggle.
 *
 * GROUND RULES
 *   - You may install any npm package you like.
 *   - You may use AI assistants (Copilot, ChatGPT, Claude, etc.).
 *   - We care about *how* you use AI, not *whether* you use it.
 *   - Talk through your decisions as you go.
 *
 * GOOD LUCK!
 */

function App() {
  // 👋 Start here — the product data is already imported above.
  console.log(`Loaded ${products.length} products`)

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Product Dashboard</h1>
        <p className="text-gray-500 mt-1">
          {products.length} products — build the UI below
        </p>
      </header>

      <main className="max-w-6xl mx-auto">
        {/* TODO: Build your solution here */}
        <div className="rounded-lg border-2 border-dashed border-gray-300 p-12 text-center text-gray-400">
          <p className="text-lg">Your product grid goes here.</p>
          <p className="text-sm mt-2">
            See the comment block at the top of this file for the full brief.
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
