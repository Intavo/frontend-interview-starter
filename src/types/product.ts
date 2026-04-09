export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: 'electronics' | 'clothing' | 'home' | 'sports' | 'books'
  rating: number
  reviewCount: number
  inStock: boolean
  imageUrl: string
  tags: string[]
  createdAt: string
}
