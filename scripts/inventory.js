let show = JSON.parse(localStorage.getItem("data"))

console.log(show)


show.forEach((el, index) => {

    let div = document.createElement("div")
    let brand = document.createElement("P")
    brand.innerText = el.brand
    let name = document.createElement("P")
    name.innerText = el.name
    let price = document.createElement("P")
    price.innerText = el.price
    let img = document.createElement("img")
    img.src = el.image

    let btn = document.createElement("button")

    btn.innerText = "Remove"

    btn.addEventListener("click", function() {

        Removedata(el, index)
    })

    div.append(img, brand, name, price, btn)

    document.getElementById("products_data").append(div)

    function Removedata(el, index) {
        show.splice(index, 1)
        localStorage.setItem("data", JSON.stringify(show))
        window.location.reload()
    }
})