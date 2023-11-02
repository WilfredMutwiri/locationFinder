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
document.querySelector(".find-state").addEventListener("click",findMyState)