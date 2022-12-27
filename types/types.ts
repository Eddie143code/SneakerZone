export type urlParams = string | null;

export interface urlParamsObj {
  brand: urlParams | undefined;
  category: urlParams | undefined;
}

export interface productObj {
  id?: number;
  name: string;
  brand: string;
  category: string;
  image: string;
  price: string;
  quantity?: number;
}

export type productObjArr = productObj[] | null;
