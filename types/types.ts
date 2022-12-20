

export type urlParams = string | null

export interface urlParamsObj {
    brand: urlParams,
    category: urlParams,
}


export interface productObj {
    id: number,
    name: string,
    brand: string,
    category: string,
    image: string,
    price: string
}

export type productObjArr = productObj[] | null
    
