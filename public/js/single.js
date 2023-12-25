document.getElementById("cart").addEventListener("click",()=>{
    try {
        let url = window.location.href.split("/");
        let id = url[url.length - 1];
        console.log("sent to cart");
        fetch(`/cart/tocart/${id}`,{
            method:"POST",
            headers:{"content-type":"application/json"}
        })
    } catch (error) {
        console.log(error.message);
    }
})