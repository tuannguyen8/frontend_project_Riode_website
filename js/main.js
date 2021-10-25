//popular, feature, sale, lastest, best
const products = [
    {
        "id": 1,
        "name": "Football Usage",
        "useFor": "FOR FITNESS",
        "price": 30,
        "imageMain": "./images/popularShoes1.jpg",
        "imageHover": "./images/popularShoes2.jpg",
        "star": 0,
        "category": ["popular", "feature", "lastest"]
    },
    {
        "id": 2,
        "name": "Sports Bag",
        "useFor": "FOR FITNESS",
        "price": 65,
        "imageMain": "./images/popularBag1.jpg",
        "imageHover": "./images/popularBag2.jpg",
        "star": 0,
        "category": ["popular", "feature", "lastest"]
    },
    {
        "id": 3,
        "name": "Basket Ball Usage",
        "useFor": "FOR FITNESS",
        "price": 33,
        "imageMain": "./images/popularBall1.jpg",
        "imageHover": "./images/popularBall2.jpg",
        "star": 0,
        "category": ["popular", "feature", "lastest"]
    },
    {
        "id": 4,
        "name": "Sports Glove",
        "useFor": "FOR FITNESS",
        "price": 22,
        "imageMain": "./images/feature-product-4.jpg",
        "imageHover": "./images/feature-product-4.jpg",
        "star": 0,
        "category": ["feature"]
    },
    {
        "id": 5,
        "name": "Lifting Deployment",
        "useFor": "FOR FITNESS",
        "price": 33,
        "imageMain": "./images/feature-product-5a.jpg",
        "imageHover": "./images/feature-product-5b.jpg",
        "star": 0,
        "category": ["feature"]
    },
    {
        "id": 6,
        "name": "Roller Skate",
        "useFor": "FOR FITNESS",
        "price": 66,
        "imageMain": "./images/feature-product-6a.jpg",
        "imageHover": "./images/feature-product-6b.jpg",
        "star": 0,
        "category": ["feature"]
    },
    {
        "id": 7,
        "name": "Cavin Klein Fashion Sheepskin Handbag",
        "useFor": "BAGS",
        "price": 221,
        "imageMain": "./images/feature-product-7a.jpg",
        "imageHover": "./images/feature-product-7b.jpg",
        "star": 0,
        "category": ["feature"]
    },
    {
        "id": 8,
        "name": "Fashionable Brown Denim Shoes",
        "useFor": "SHOES",
        "price": 110,
        "imageMain": "./images/feature-product-8a.jpg",
        "imageHover": "./images/feature-product-8b.jpg",
        "star": 0,
        "category": ["feature"]
    },
    {
        "id": 9,
        "name": "Converse Kids Star Suede Shoes",
        "useFor": "FOR FITNESS",
        "price": 234,
        "imageMain": "./images/sale-product-1a.jpg",
        "imageHover": "./images/sale-product-1b.jpg",
        "star": 0,
        "category": ["sale"]
    },
    {
        "id": 10,
        "name": "Fashionable Leather Satchel",
        "useFor": "BAGS",
        "price": 129,
        "imageMain": "./images/sale-product-2a.jpg",
        "imageHover": "./images/sale-product-2b.jpg",
        "star": 0,
        "category": ["sale"]
    },
    {
        "id": 11,
        "name": "Fashionable Leather Satchel",
        "useFor": "SHOES",
        "price": 98,
        "imageMain": "./images/sale-product-3a.jpg",
        "imageHover": "./images/sale-product-3b.jpg",
        "star": 0,
        "category": ["sale"]
    },
    {
        "id": 12,
        "name": "Women’s Hiking Hat",
        "useFor": "FOR FITNESS",
        "price": 119,
        "imageMain": "./images/best-product-1a.jpg",
        "imageHover": "./images/best-product-1b.jpg",
        "star": 5,
        "category": ["best"]
    },
    {
        "id": 13,
        "name": "Umbrella",
        "useFor": "FOR FITNESS",
        "price": 49,
        "imageMain": "./images/best-product-2a.jpg",
        "imageHover": "./images/best-product-2b.jpg",
        "star": 0,
        "category": ["best"]
    },
    {
        "id": 14,
        "name": "Fashionable Overnight Bag",
        "useFor": "FOR FITNESS",
        "price": 199,
        "imageMain": "./images/best-product-3a.jpg",
        "imageHover": "./images/best-product-3b.jpg",
        "star": 0,
        "category": ["best"]
    }

];
const cart =[];
const wishlist =[];
////////////////////////////////////////////////////////////////////////////////////////
$(".side-slide.owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    navText: [
        '<i class="fas fa-angle-left"></i>',
        '<i class="fas fa-angle-right"></i>',
    ],
    dots: false,
});

$(".main-slide.owl-carousel").owlCarousel({
    items: 1,
    dots: true,
});

$(".brands-slide.owl-carousel").owlCarousel({
    items: 5,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
});
///////////////////////////////////////////////////////////////

$(window).scroll(function(){
    const position = $(window).scrollTop();
    if(position > 100){
        $(".header-row").addClass('sticky');
    } else {
        $(".header-row").removeClass('sticky');
    }
});



///////////////////////////////////////////////////////
$(window).scroll(function(){
    const position = $(window).scrollTop();
    if(position > 300){
        $(".totop").fadeIn().css({
            display: "flex",
        });
    } else {
        $(".totop").fadeOut();
    }
});

$(".totop").click(function (e) { 
    e.preventDefault();
    $("html, body").animate(
        {
            scrollTop: 0,
        },
        1000,
        "easeOutQuint"
    );
});

//////////////////////////////////////////////////////////////////////////////////////
//modal
setTimeout(()=>{
    $(".modal").fadeIn();
}, 5000)
$(document).click(function (e) { 
    e.preventDefault();
    //console.log(e.target.closest)
    if(!e.target.closest(".modal-content")){
        $(".modal").fadeOut();
    }
    
});

///////////////////////////////////////////////////////////////
//cart

$('.cart').click(function (e) { 
    e.preventDefault();
    //$(".cart-pull-out").slideToggle();
    $(".cart-pull-out").fadeIn();
    
});

$('.close-cart').click(function (e) { 
    e.preventDefault();
    //$(".cart-pull-out").slideToggle();
    $(".cart-pull-out").fadeOut();
});


/* $(document).on("click", function (e) {
    const target = $(e.target).closest(".cart-pull-out").length
    const closeCart  = $(e.target).closest(".close-cart").length
    if(!target && !closeCart){
        $(".cart-pull-out").fadeOut();
    }
}); */
///////////////////////////////////////////////////////////////
//render products
const renderFeaturedProducts = (products) =>{
    //products.filter((item) => item.category.includes("feature")
    products.forEach((item) => {
        if(item.category.includes("feature")){
            $(".render-featured-products").append(`
                <div class="item">
                    <div class="item-img">
                        <img class="img-main" src=${item.imageMain} alt="">
                        <img class="img-hover" src=${item.imageHover} alt="">
                        <div class="hover-to-buy-icons">
                            <div class="buy-icon">
                                <ul >
                                    <li class="add-cart-li"><i data-id=${item.id} class="add-to-cart fas fa-shopping-bag"></i></li>
                                    <li><i data-id=${item.id} class="add-heart far fa-heart"></i></li>
                                    
                                </ul>
                            </div>
                            <div class="review">
                                <span class="quick-view flex j-center a-center">
                                    QUICK VIEW
                                </span>
                            </div>
                        </div>   
                    </div>
                    <div class="item-content flex j-center a-center">
                        <ul>
                            <li class="use-for">${item.useFor}</li>
                            <li class="name"> <div class="over-flow-name">${item.name}</div></li>
                            <li class="price">$${item.price.toFixed(2)}</li>
                            <li>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            `);
        }
        
    });
};

const renderPopularProducts = (products) =>{
    //products.filter((item) => item.category.includes("feature")
    products.forEach((item) => {
        if(item.category.includes("popular")){
            $(".list-item").append(`
                <div class="popular-item flex a-center">
                    <div class="popular-product-img">
                        <a href="">
                            <img class="img-main" src=${item.imageMain} alt="">
                            <img class="img-hover" src=${item.imageHover} alt="">
                        </a>
                    </div>
                    <div class="content">
                        <ul>
                            <li class="popular-name">${item.name}</li>
                            <li><span>$<span>${item.price.toFixed(2)}</li>
                            <li>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </li>
                        </ul>                                         
                    </div>
                </div>
            `);
        }
        
    });
};

const renderSaleProducts = (products) =>{
    //products.filter((item) => item.category.includes("feature")
    products.forEach((item) => {
        if(item.category.includes("sale")){
            $(".list-sale-items").append(`
                <div class="sale-item flex a-center">
                    <div class="sale-item-img">
                        <a href="">
                            <img class="img-main" src=${item.imageMain} alt="">
                            <img class="img-hover" src=${item.imageHover} alt="">
                        </a>
                    </div>
                    <div class="content">
                        <ul>
                            
                            <li class="name"><a href=""> ${item.name}</a> </li>
                            <li class="price"><span>$</span>${item.price.toFixed(2)}</li>
                            <li>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            `);
        }
        
    });
};

const renderLatestProducts = (products) =>{
    //products.filter((item) => item.category.includes("feature")
    products.forEach((item) => {
        if(item.category.includes("lastest")){
            $(".list-lastest-items").append(`
                <div class="sale-item flex a-center">
                    <div class="sale-item-img">
                        <a href="">
                            <img class="img-main" src=${item.imageMain} alt="">
                            <img class="img-hover" src=${item.imageHover} alt="">
                        </a>
                    </div>
                    <div class="content">
                        <ul>
                            
                            <li class="name"><a href=""> ${item.name}</a> </li>
                            <li class="price"><span>$</span>${item.price.toFixed(2)}</li>
                            <li>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            `);
        }
        
    });
};

const renderBestProducts = (products) =>{
    //products.filter((item) => item.category.includes("feature")
    products.forEach((item) => {
        if(item.category.includes("best")){
            $(".list-best-items").append(`
                <div class="sale-item flex a-center">
                    <div class="sale-item-img">
                        <a href="">
                            <img class="img-main" src=${item.imageMain} alt="">
                            <img class="img-hover" src=${item.imageHover} alt="">
                        </a>
                    </div>
                    <div class="content">
                        <ul>
                            
                            <li class="name"><a href=""> ${item.name}</a> </li>
                            <li class="price"><span>$</span>${item.price.toFixed(2)}</li>
                            <li>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            `);
        }
        
    });
};

const renderCart = (cart) =>{
    if(!cart.length){
        $('.cart-list').append(`
            <div style = "opacity: 0.3; height: 200px; display: flex; align-items: center; justify-content: center">
            <h4>No Products in the cart.<h4>
            <\div>
        `)
        $('.cart-checkout').addClass("cart-checkout-disable")
        $('.sub-total').addClass("sub-total-disable")
        return;
    }
    $('.cart-checkout').removeClass("cart-checkout-disable")
    $('.sub-total').removeClass("sub-total-disable")
    cart.forEach(item =>{
    $(".cart-list").append(`
        <div class="products-in-cart flex j-between a-center">                    
            <div class="item-info flex">
                <a href=""><img src="${item.imageMain}" alt=""></a>
                <div class="item-detail">
                    <a href=""><div class="hover-name over-flow-name">${item.name}</div></a>
                    <span><span class="quantity">${item.quantity}</span>x$${item.price.toFixed(2)}</span>
                </div>                       
            </div>
            <div class="delete-item flex a-center j-center">
                <i class="fas fa-times"></i>
            </div>
        </div>
        <div class="division-line"></div>
    `)
    
    const total = cart.reduce((acc, val) => acc + val.price * val.quantity, 0)
    $(".total-f").text(`${total.toFixed(2)}`);
  });
}

//render num of item and total in cart
const renderNoOfItemAndTotal = ()=>{
   //render no of items
    const itemNos = cart.reduce((acc, val) => acc + val.quantity, 0)
    $(".item-nos").text(`${itemNos}`)
    //$(".item-nos").text(cart.length)

  //render total 
  const total = cart.reduce((acc, val) => acc + val.price * val.quantity, 0)
  $(".cart-price").text(`$${total.toFixed(2)}`);
}
//reset list
const resetProducts = () =>{
 $('.list').empty();
}
//reset cart
const resetCart = () =>{
 $('.cart-list').empty();
}


//add to cart
$(document).on("click", ".add-to-cart", function () {
    //console.log("clickkkkk")
    const id = $(this).data("id")
    //console.log(id);
    const existInCart = cart.findIndex(val => val.id === id)
    const item = products.find(val => val.id === id)
    if(!item){
        return
    }
    if(existInCart === -1){
        item.quantity = 1
        cart.push(item)
    }else{
        cart[existInCart].quantity = item.quantity + 1;
    }
    
    //render num of item and total in cart
    renderNoOfItemAndTotal();

    resetCart()
    renderCart(cart)
  
});

$(document).on("click", ".delete-item", function () {
  const id = $(this).data("id")
  const existInCart = cart.findIndex(val => val.id === id) 
  cart.splice(existInCart, 1)

  renderNoOfItemAndTotal();
  resetCart();
  renderCart(cart);
})
//initial render cart
renderCart(cart);

renderFeaturedProducts(products);
renderPopularProducts(products);
renderSaleProducts(products);
renderLatestProducts(products);
renderBestProducts(products);