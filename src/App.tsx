import { useState } from 'react'
import { useProducts } from './hooks/useProducts'
import ProductCard from './components/ProductCard'
import Filters from './components/Filters'
import ProductDetail from './components/ProductDetail'
import { Product } from './types/product'

function App() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [sortBy, setSortBy] = useState('none')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [favorites, setFavorites] = useState<number[]>([])
  const [inStockOnly, setInStockOnly] = useState(false)

  const { products, total, loading, error } = useProducts(search, category)

  const sortedProducts = products.sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price
    if (sortBy === 'price-desc') return b.price - a.price
    if (sortBy === 'rating') return b.rating - a.rating
    return 0
  })

  const displayedProducts = inStockOnly
    ? sortedProducts.filter((p) => p.stock > 0)
    : sortedProducts

  const handleToggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((f) => f !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-8 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Product Dashboard</h1>
            <p className="text-gray-500 text-sm mt-0.5">{total} products</p>
          </div>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="rounded border-gray-300"
              />
              In stock only
            </label>
            <span className="text-sm text-gray-400">
              ♥ {favorites.length} favorites
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-6">
        <Filters
          search={search}
          onSearchChange={setSearch}
          category={category}
          onCategoryChange={setCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {error && (
          <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        {loading && (
          <div className="text-center py-12 text-gray-400">Loading...</div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={setSelectedProduct}
              selectedId={selectedProduct?.id ?? null}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      </main>

      <ProductDetail
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  )
}

export default App
