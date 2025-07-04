export function countryDetails(data) {
  const countryMap=new Map();
  return data.reduce((acc,curr)=>{
    acc.set(curr["name"]["common"],curr);
    return acc;
  },countryMap);
}