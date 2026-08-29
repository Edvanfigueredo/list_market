const keyFor=id=>`smq2_${id}`;
export function loadItem(id){try{const value=localStorage.getItem(keyFor(id));return value?JSON.parse(value):null}catch{return null}}
export function saveItem(id,value){try{localStorage.setItem(keyFor(id),JSON.stringify(value))}catch{}}
