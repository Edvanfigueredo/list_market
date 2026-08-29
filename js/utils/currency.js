export function toNumber(value){return Number.parseFloat((value||'').replace(',','.'))||0}export function formatCurrency(value){return value.toFixed(2).replace('.',',')}
