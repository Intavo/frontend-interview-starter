import { useState, useEffect } from 'react'
import { Product, ProductsResponse } from '../types/product'

const API_BASE = 'https://dummyjson.com'

export function useProducts(search: string, category: string) {
  const [products, setProducts] = useState<Product[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)

    let url = `${API_BASE}/products`

    if (category && category !== 'all') {
      url = `${API_BASE}/products/category/${category}`
    }

    if (search) {
      url = `${API_BASE}/products/search?q=${search}`
    }

    fetch(url)
      .then((res) => res.json())
      .then((data: ProductsResponse) => {
        setProducts(data.products)
        setTotal(data.total)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [search, category])

  return { products, total, loading, error }
}
