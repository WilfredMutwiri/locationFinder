
const findMyState=()=>{
    const status=document.querySelector(".status");
    const error=()=>{
        status.textContent="Location Not Found!";
    }
    const success=(position)=>{
        const latitude=position.coords.latitude;
        const longitude=position.coords.longitude;
        const geoAPIUrl=`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}longitude=${longitude}localitylanguage=en`
        fetch(geoAPIUrl)
        .then(res=>res.json())
        .then(data=>{
            status.textContent=data.countryName+":\t"+data.principalSubdivision+":\n"+ data.locality 

        })
       
    }
    navigator.geolocation.getCurrentPosition(success,error)
}
const textChange=()=>{
    let button=document.getElementById("textChange");
    button.innerText="Don't Get Lost Again!!!";
};
document.querySelector(".find-state").addEventListener("click",findMyState);
document.querySelector(".find-state").addEventListener("click",textChange);