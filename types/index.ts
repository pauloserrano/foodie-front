export interface IMenu {
  id: string,
  name: string,
  description: string | null,
  isDaytime: boolean,
  products: IProduct[]
  createdAt: string,
  updatedAt: string
}

export interface IMenuCreate {
  name: string,
  description: string | null,
  isDaytime: boolean
}

export interface ICategory {
  id: string,
  name: string,
  description: string | null
  products?: IProduct[]
  createdAt: string,
  updatedAt: string
}

export interface ICategoryCreate {
  name: string,
  description: string | null
}

export interface IProduct {
  id: string,
  name: string,
  price: number,
  imageSrc: string,
  description: string | null
  menuId: string,
  categoryId: string,
  createdAt: string,
  updatedAt: string
}

export interface IProductCreate {
  name: string,
  price: number,
  imageSrc: string,
  description: string | null
  menuId: string,
  categoryId: string
}