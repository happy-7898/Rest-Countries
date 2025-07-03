export function mapShortNames(data){
    let shortNames=new Map();
    return data.reduce((acc,curr)=>{
        acc.set(curr["cca3"],curr["name"]["common"])
        return acc;
    },shortNames)
}