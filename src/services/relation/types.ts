export type Relation = {
  id: string
  name?: string
  surname?: string
  gender?: 'male' | 'female' | 'other'
  age?: number
  phone?: string
  email?: string
  address?: string
}

export type PartialLoadItem<T> = {
  item: T
  index: number
  total: number
}
