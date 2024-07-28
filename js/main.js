
var productNameInput = document.getElementById('productNameInput');
var productPriceInput = document.getElementById('productPriceInput');
var productCategoryInput = document.getElementById('productCategoryInput');
var productDescInput = document.getElementById('productDescInput');
var productsContainer;
var productUpdateIndex;
var tableBody = document.getElementById('tableBody');
if (localStorage.getItem("productsContainer") != null ) {
    productsContainer = JSON.parse(localStorage.getItem("productsContainer"));
    displayProducts(productsContainer)
}
else{
    productsContainer = []
}
function addProduct() {
    if (document.getElementById("addbtn").innerHTML == "add Product") {
        var product = {
            productName: productNameInput.value,
            productPrice:productPriceInput.value,
            productCategory: productCategoryInput.value,
            productDesc: productDescInput.value
        }
        productsContainer.push(product)
        localStorage.setItem("productsContainer",JSON.stringify(productsContainer))
        clearForm()
        displayProducts(productsContainer)
    }
    else{
        productsContainer[productUpdateIndex].productName = productNameInput.value
        productsContainer[productUpdateIndex].productCategory = productCategoryInput.value
        productsContainer[productUpdateIndex].productPrice = productPriceInput.value
        productsContainer[productUpdateIndex].productDesc = productDescInput.value
        localStorage.setItem("productsContainer",JSON.stringify(productsContainer))
        displayProducts(productsContainer)
        document.getElementById("addbtn").innerHTML = "add Product"
        document.getElementById("addbtn").classList.add("btn-info")
        document.getElementById("addbtn").classList.remove("btn-warning")
        clearForm()
    }
    
}
function clearForm() {
    productCategoryInput.value = ""
    productNameInput.value= ""
    productPriceInput.value =""
    productDescInput.value =""
}

function displayProducts(productlist) {
    var html ="";
    for (let i = 0; i < productlist.length; i++) {
        html += `<tr>
            <td>${i}</td>
            <td>${productlist[i].productName}</td>
            <td>${productlist[i].productPrice}</td>
            <td>${productlist[i].productCategory}</td>
            <td>${productlist[i].productDesc}</td>
            <td><button class="btn btn-warning btn-sm" onclick="updateProduct(${i})">Update</button></td>
            <td><button class="btn btn-danger btn-sm" onclick="deleteProduct(${i});">Delete</button></td>
         </tr>`
    }
    tableBody.innerHTML = html
}

function serachForProduct(searchedTerm) {
    var html = '';
    for (let i = 0; i < productsContainer.length; i++) {
        if(productsContainer[i].productName.toLowerCase().includes(searchedTerm.toLowerCase()) == true){ 
            html += `<tr>
            <td>${i}</td>
            <td>${productsContainer[i].productName}</td>
            <td>${productsContainer[i].productPrice}</td>
            <td>${productsContainer[i].productCategory}</td>
            <td>${productsContainer[i].productDesc}</td>
            <td><button class="btn btn-warning btn-sm" onclick="updateProduct(${i})">Update</button></td>
            <td><button class="btn btn-danger btn-sm" onclick="deleteProduct(${i});">Delete</button></td>
         </tr>`
        }
    }
    tableBody.innerHTML = html
    console.log(searchedProduct);
    
}
function deleteProduct(index) {
    productsContainer.splice(index,1)
    console.log(productsContainer);
    localStorage.setItem("productsContainer",JSON.stringify(productsContainer))
    displayProducts(productsContainer)
}

function updateProduct(index) {
    productUpdateIndex = index
    productCategoryInput.value = productsContainer[index].productCategory
    productPriceInput.value = productsContainer[index].productPrice
    productDescInput.value = productsContainer[index].productDesc
    productNameInput.value = productsContainer[index].productName
    document.getElementById("addbtn").innerHTML = "UPDATE"
    document.getElementById("addbtn").classList.remove("btn-info")
    document.getElementById("addbtn").classList.add("btn-warning")
}

// var productsContainer = [
//     {name:'nokia' , price:9000 , category:'mobile' , desc:'good'},
//     {name:'samsung' , price:9000 , category:'mobile' , desc:'good'},
//     {name:'toshiba' , price:9000 , category:'mobile' , desc:'good'},
//     {name:'oppo' , price:9000 , category:'mobile' , desc:'good'},

// ]



