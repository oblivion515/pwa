self.addEventListener("install", (event )=>{
    caches.open("qualquer-nome").then((Cache)=>{
        console.log("cache aberto!")
        Cache.add("index.html")
    } 
    )
});