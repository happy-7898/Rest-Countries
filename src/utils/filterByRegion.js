export function filterByRegion(data) {
  return data.reduce((acc,curr)=>{
    let region=curr["region"];
    if (!acc[region]) {
      acc[region]=[];
    }
    acc[region].push(curr);
    return acc;
  },{});
}

