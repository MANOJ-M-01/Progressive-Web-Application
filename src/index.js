if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration =>{
        console.log("Sw Registered");
        console.log(registration);
    }).catch(error =>{
        console.log("Sw registration Failed");
        console.log(error);
    });
}