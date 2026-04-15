import { Product } from '../types/product'

interface ProductDetailProps {
  product: Product | null
  onClose: () => void
}

function ProductDetail({ product, onClose }: ProductDetailProps) {
  if (!product) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="bg-white rounded-xl max-w-lg w-full mx-4 overflow-hidden shadow-xl">
        <img
          src={product.images[0] || product.thumbnail}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900">{product.title}</h2>
          <p className="text-sm text-gray-500 capitalize mt-1">{product.brand} · {product.category}</p>
          <p className="text-gray-700 mt-3 text-sm">{product.description}</p>

          <div className="flex items-center justify-between mt-4">
            <div>
              <span className="text-2xl font-bold text-gray-900">${product.price}</span>
              {product.discountPercentage > 0 && (
                <span className="ml-2 text-sm text-red-500">-{product.discountPercentage}%</span>
              )}
            </div>
            <span className="text-yellow-500">
              {'★'.repeat(Math.round(product.rating))} <span className="text-gray-400 text-sm">{product.rating}/5</span>
            </span>
          </div>

          <button
            onClick={onClose}
            className="mt-6 w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
