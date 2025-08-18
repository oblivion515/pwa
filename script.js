if ("serviceWorker" in navigator)  {   
    navigator.serviceWorker
    .register("sw.js")
    .then ((registration)=> {
        console.log("Service Worker registrado com sucesso!")
    })
    .catch((error)=>{
        console.log("falha ao tentar registrar o Service Worker",error)
    });
}