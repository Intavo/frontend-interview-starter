import { Product } from '../types/product'

interface ProductCardProps {
  product: Product
  onSelect: (product: Product) => void
  selectedId: number | null
  favorites: number[]
  onToggleFavorite: (id: number) => void
}

function ProductCard({ product, onSelect, selectedId, favorites, onToggleFavorite }: ProductCardProps) {
  const isFavorite = favorites.includes(product.id)

  console.log('Rendering ProductCard:', product.title)

  return (
    <div
      onClick={() => onSelect(product)}
      className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md"
      style={{
        border: selectedId === product.id ? '2px solid #3b82f6' : '1px solid #e5e7eb',
        transition: 'all 0.2s',
      }}
    >
      <img
        src={product.thumbnail}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2">
            {product.title}
          </h3>
          <button
            onClick={() => onToggleFavorite(product.id)}
            style={{
              color: isFavorite ? 'red' : '#9ca3af',
              fontSize: '20px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0',
              marginLeft: '8px',
              flexShrink: 0,
            }}
          >
            {isFavorite ? '♥' : '♡'}
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-1 capitalize">{product.category}</p>

        <div className="flex items-center mt-2">
          <span className="text-yellow-500 text-sm">{'★'.repeat(Math.round(product.rating))}</span>
          <span className="text-xs text-gray-400 ml-1">{product.rating}</span>
        </div>

        <div className="flex justify-between items-center mt-3">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          <span
            style={{
              color: product.stock > 0 ? 'green' : 'red',
              fontSize: '12px',
            }}
          >
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </span>
        </div>

        {product.discountPercentage > 10 && (
          <span className="inline-block mt-2 px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-full">
            {product.discountPercentage}% off
          </span>
        )}
      </div>
    </div>
  )
}

export default ProductCard
