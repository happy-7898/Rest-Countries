const baseURL=import.meta.env.VITE_BASE_URL

export async function fetchData() {
    let res=await fetch(`${baseURL}?fields=name,flags,languages,capital,region,subregion,currencies,population,borders,tld`);
    let data=await res.json();
    return data;
}

export async function fetchShortNames(){
    let res=await fetch(`${baseURL}?fields=name,cca3`);
    let data=await res.json();
    return data;
}