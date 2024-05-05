export interface IMenu {
  id: string,
  name: string,
  description?: string,
  isDaytime: boolean,
  products: IProduct[]
  createdAt: string,
  updatedAt: string
}

export interface ICategory {
  id: string,
  name: string,
  description?: string
  createdAt: string,
  updatedAt: string
}

export interface IProduct {
  id: string,
  name: string,
  price: number,
  imageSrc: string,
  description: string
  menuId: string,
  categoryId: string,
  createdAt: string,
  updatedAt: string
}