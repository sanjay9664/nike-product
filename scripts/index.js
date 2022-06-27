//store the products array in localstorage as "data"

function store(a, b, c, d) {

    this.brand = a

    this.name = b

    this.price = c

    this.image = d
}

let arr = JSON.parse(localStorage.getItem("data")) || []

function alldata(e) {

    e.preventDefault()



    let form = document.getElementById("form")

    let brand = form.product_brand.value

    let name = form.product_name.value

    let price = form.product_price.value

    let image = form.product_image.value

    let storage = new store(brand, name, price, image)

    arr.push(storage)



    localStorage.setItem("data", JSON.stringify(arr))


}