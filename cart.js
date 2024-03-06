//capturo los div de cart(de HTML) en una constante
const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");


const cartBtn = document.getElementById("cart-btn-h");
const cartCounter = document.getElementById("cart-counter");

const verConsola = document.getElementById("verConsola");


const displayCart = () =>{
    //cada vez que se ejecute la funcion va a limpiar apra que no se dupliquen los elementos
    modalContainer.innerHTML = "";

    //Al iniciar la pagina el carrito no se ve, pero quiero que se vea cuando rpeciono el boton carrito
    //para ello debo cambiar la propiedad de display(en css) de none a block
    modalContainer.style.display = "block";
    modalOverlay.style.display = "block";
    
    //modal Header
    const modalHeader = document.createElement("div");

    const modalClose = document.createElement("div");
    modalClose.innerText = "❌";
    modalClose.className = "modal-close";
    modalHeader.append(modalClose);

    modalClose.addEventListener("click", () => {
        modalContainer.style.display = "none";
        modalOverlay.style.display = "none";
    })

    const modalTitle = document.createElement("div");
    modalTitle.innerText = "Carrito";
    modalTitle.className = "modal-title";
    modalHeader.append(modalTitle);

    modalContainer.append(modalHeader);

    //modal Body
    if (cart.length > 0){
    cart.forEach((product) => {
        const modalBody = document.createElement("div");
        modalBody.className = "modal-body";
        modalBody.innerHTML = `
        <div class = "product">
           <div class = "product-info">
             <h4>${product.name}</h4>
           </div>
           <div class="price">$${product.price}</div>
           <div class = "delete-product">✖️​</div>
        </div>
        `;
        modalContainer.append(modalBody);

        //Funcion del boton de eliminar producto
        //Capturo el boton:
        const deleteProduct = modalBody.querySelector(".delete-product");

        deleteProduct.addEventListener("click", () => {
            deleteCartProduct(product.id);
        });
    });

    //modal footer

    // Función para calcular el total de los precios
    function calcularTotal(cart) {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }
    return total;
    }

    // Calcular el total de los precios
    var totalPrecio = calcularTotal(cart);

    

    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";
    modalFooter.innerHTML = `
    <div class = "total-price">Total: $${totalPrecio} </div>
    <button class = "btn-primary" id = "checkout-btn" onclick="sendOrder()">Enviar Pedido</button>
    <div id = "button-checkout"></div>
    `;
    
    modalContainer.append(modalFooter);



} else {
    const modalText = document.createElement("h2");
    modalText.className = "modal-body";
    modalText.innerText = "Su carrito esta vacio";
    modalContainer.append(modalText);
}



};

cartBtn.addEventListener("click", displayCart);

const deleteCartProduct = (id) => {
    const foundId = cart.findIndex((element) => element.id === id);
    cart.splice(foundId, 1);
    displayCart();
    displayCartCounter();
};

const displayCartCounter = () => {
    const cartLength = cart.reduce((acc, el) => acc + el.quanty, 0);
    if (cartLength > 0) {
        cartCounter.style.display = "block";
        cartCounter.innerText = cartLength;
    }else{
        cartCounter.style.display = "none";
    }

};








