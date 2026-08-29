const keyFor=id=>`smq2_${id}`;
export function loadItem(id){try{const value=localStorage.getItem(keyFor(id));return value?JSON.parse(value):null}catch{return null}}
export function saveItem(id,value){try{localStorage.setItem(keyFor(id),JSON.stringify(value))}catch{}}
const CUSTOM_PRODUCTS_KEY='smq2_custom_products';
export function loadCustomProducts(){try{const value=localStorage.getItem(CUSTOM_PRODUCTS_KEY);return value?JSON.parse(value):[]}catch{return []}}
export function saveCustomProducts(products){try{localStorage.setItem(CUSTOM_PRODUCTS_KEY,JSON.stringify(products))}catch{}}
