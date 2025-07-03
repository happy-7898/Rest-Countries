export async function fetchData() {
    let res=await fetch("https://restcountries.com/v3.1/all?fields=name,flags,languages,capital,region,subregion,currencies,population,borders,tld");
    let data=await res.json();
    return data;
}

export async function fetchShortNames(){
    let res=await fetch("https://restcountries.com/v3.1/all?fields=name,cca3");
    let data=await res.json();
    return data;
}