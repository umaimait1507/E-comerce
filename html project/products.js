/* js/script.js - shared behaviour for whole site */

/* PRODUCTS DATA
   For the product.html detail page we keep a productsData map.
   Each product id is like "clothes1", "bag3", "shoes10", "jewellery4", "accessory7"
*/
const productsData = [
  /* Clothes (10) */
   {id:'clothes1', category:'Clothes', name:'Casual Shirt', price:35, image:'https://previews.123rf.com/images/vitalily73/vitalily732002/vitalily73200200526/140223637-men-s-dark-green-t-shirt-and-blue-jeans-isolated-on-white-background-casual-clothing.jpg', desc:'Comfortable everyday shirt.'},
  {id:'clothes2', category:'Clothes', name:'Summer Dress', price:55, image:'https://png.pngtree.com/png-vector/20240918/ourmid/pngtree-boho-dress-isolated-on-white-transparent-background-png-image_13863190.png', desc:'Light & airy summer dress.'},
  {id:'clothes3', category:'Clothes', name:'Jeans', price:60, image:'images/clothes3.jpg', desc:'Classic denim jeans.'},
  {id:'clothes4', category:'Clothes', name:'Jacket', price:80, image:'data:image/jpeg;base64,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" alt="Product 1">', desc:'Warm casual jacket.'},
  {id:'clothes5', category:'Clothes', name:'T-shirt', price:25, image:'images/clothes5.jpg', desc:'Basic cotton tee.'},
  {id:'clothes6', category:'Clothes', name:'Hoodie', price:45, image:'images/clothes6.jpg', desc:'Comfortable hoodie.'},
  {id:'clothes7', category:'Clothes', name:'Skirt', price:50, image:'images/clothes7.jpg', desc:'Stylish skirt.'},
  {id:'clothes8', category:'Clothes', name:'Sweater', price:55, image:'images/clothes8.jpg', desc:'Warm knit sweater.'},
  {id:'clothes9', category:'Clothes', name:'Blouse', price:40, image:'images/clothes9.jpg', desc:'Chic blouse.'},
  {id:'clothes10', category:'Clothes', name:'Formal Shirt', price:65, image:'images/clothes10.jpg', desc:'Smart formal shirt.'},

  /* Bags (10) */
  {id:'bag1', category:'Bags', name:'Leather Backpack', price:120, image:'https://www.rogue-industries.com/cdn/shop/products/ImportedLeatherBackpack_Page_2_1024x.jpg?v=1678224059=', desc:'Durable daily backpack.'},
  {id:'bag2', category:'Bags', name:'Handbag', price:80, image:'images/bag2.jpg', desc:'Elegant handbag.'},
  {id:'bag3', category:'Bags', name:'Messenger Bag', price:90, image:'images/bag3.jpg', desc:'Practical messenger bag.'},
  {id:'bag4', category:'Bags', name:'Travel Duffel', price:150, image:'images/bag4.jpg', desc:'Spacious duffel.'},
  {id:'bag5', category:'Bags', name:'Clutch Bag', price:60, image:'images/bag5.jpg', desc:'Evening clutch.'},
  {id:'bag6', category:'Bags', name:'Shopping Tote', price:40, image:'images/bag6.jpg', desc:'Eco tote bag.'},
  {id:'bag7', category:'Bags', name:'Crossbody Bag', price:70, image:'images/bag7.jpg', desc:'Hands-free crossbody.'},
  {id:'bag8', category:'Bags', name:'Bucket Bag', price:85, image:'images/bag8.jpg', desc:'Trendy bucket bag.'},
  {id:'bag9', category:'Bags', name:'Satchel', price:95, image:'images/bag9.jpg', desc:'Classic satchel.'},
  {id:'bag10', category:'Bags', name:'Mini Backpack', price:50, image:'images/bag10.jpg', desc:'Compact mini pack.'},

  /* Shoes (10) */
  {id:'shoes1', category:'Shoes', name:'Running Shoes', price:90, image:'images/shoes1.jpg', desc:'Lightweight running shoes.'},
  {id:'shoes2', category:'Shoes', name:'Sneakers', price:85, image:'images/shoes2.jpg', desc:'Casual sneakers.'},
  {id:'shoes3', category:'Shoes', name:'Formal Shoes', price:120, image:'images/shoes3.jpg', desc:'Smart formal shoes.'},
  {id:'shoes4', category:'Shoes', name:'Boots', price:150, image:'images/shoes4.jpg', desc:'Sturdy boots.'},
  {id:'shoes5', category:'Shoes', name:'Sandals', price:50, image:'images/shoes5.jpg', desc:'Comfortable sandals.'},
  {id:'shoes6', category:'Shoes', name:'Loafers', price:95, image:'images/shoes6.jpg', desc:'Classic loafers.'},
  {id:'shoes7', category:'Shoes', name:'Heels', price:110, image:'images/shoes7.jpg', desc:'Elegant heels.'},
  {id:'shoes8', category:'Shoes', name:'Flats', price:60, image:'images/shoes8.jpg', desc:'Comfortable flats.'},
  {id:'shoes9', category:'Shoes', name:'Slip-ons', price:70, image:'images/shoes9.jpg', desc:'Easy slip-on shoes.'},
  {id:'shoes10', category:'Shoes', name:'Sports Sneakers', price:100, image:'images/shoes10.jpg', desc:'Performance sneakers.'},

  /* Jewellery (10) */
  {id:'jewellery1', category:'Jewellery', name:'Gold Necklace', price:200, image:'images/jewellery1.jpg', desc:'Elegant gold necklace.'},
  {id:'jewellery2', category:'Jewellery', name:'Silver Bracelet', price:90, image:'images/jewellery2.jpg', desc:'Sterling bracelet.'},
  {id:'jewellery3', category:'Jewellery', name:'Diamond Ring', price:350, image:'images/jewellery3.jpg', desc:'Sparkling diamond ring.'},
  {id:'jewellery4', category:'Jewellery', name:'Pearl Earrings', price:120, image:'images/jewellery4.jpg', desc:'Classic pearls.'},
  {id:'jewellery5', category:'Jewellery', name:'Charm Bracelet', price:80, image:'images/jewellery5.jpg', desc:'Cute charm bracelet.'},
  {id:'jewellery6', category:'Jewellery', name:'Wedding Ring', price:400, image:'images/jewellery6.jpg', desc:'Elegant wedding ring.'},
  {id:'jewellery7', category:'Jewellery', name:'Stud Earrings', price:70, image:'images/jewellery7.jpg', desc:'Minimal studs.'},
  {id:'jewellery8', category:'Jewellery', name:'Bangle Set', price:110, image:'images/jewellery8.jpg', desc:'Traditional bangles.'},
  {id:'jewellery9', category:'Jewellery', name:'Choker Necklace', price:150, image:'images/jewellery9.jpg', desc:'Trendy choker.'},
  {id:'jewellery10', category:'Jewellery', name:'Gold Earrings', price:180, image:'images/jewellery10.jpg', desc:'Gold earrings.'},

  /* Accessories (10) */
  {id:'accessory1', category:'Accessories', name:'Leather Wallet', price:45, image:'images/accessory1.jpg', desc:'Slim leather wallet.'},
  {id:'accessory2', category:'Accessories', name:'Watch', price:140, image:'images/accessory2.jpg', desc:'Modern wristwatch.'},
  {id:'accessory3', category:'Accessories', name:'Sunglasses', price:60, image:'images/accessory3.jpg', desc:'UV-protect sunglasses.'},
  {id:'accessory4', category:'Accessories', name:'Scarf', price:35, image:'images/accessory4.jpg', desc:'Soft scarf.'},
  {id:'accessory5', category:'Accessories', name:'Hat', price:30, image:'images/accessory5.jpg', desc:'Stylish hat.'},
  {id:'accessory6', category:'Accessories', name:'Beaded Bracelet', price:25, image:'images/accessory6.jpg', desc:'Handmade beads.'},
  {id:'accessory7', category:'Accessories', name:'Neck Scarf', price:40, image:'images/accessory7.jpg', desc:'Silk neck scarf.'},
  {id:'accessory8', category:'Accessories', name:'Backpack Keychain', price:20, image:'images/accessory8.jpg', desc:'Cute keychain.'},
  {id:'accessory9', category:'Accessories', name:'Wallet Chain', price:15, image:'images/accessory9.jpg', desc:'Metal wallet chain.'},
  {id:'accessory10', category:'Accessories', name:'Leather Belt', price:50, image:'images/accessory10.jpg', desc:'Durable leather belt.'}
];

/* Utility: get product by id */
function getProductById(id){
  return productsData.find(p => p.id === id);
}

/* --- DARK MODE --- */
(function(){
  const body = document.body;
  const saved = localStorage.getItem('site-theme');
  if(saved === 'dark') body.classList.add('dark');

  document.addEventListener('click', e => {
    if(e.target && e.target.id === 'darkModeToggle'){
      body.classList.toggle('dark');
      localStorage.setItem('site-theme', body.classList.contains('dark') ? 'dark' : 'light');
    }
  });
})();

/* --- HERO SLIDER (index.html) --- */
(function(){
  const slides = document.querySelectorAll('.slide');
  if(!slides || slides.length === 0) return;
  let cur = 0;
  slides[cur].classList.add('active');
  setInterval(() => {
    slides[cur].classList.remove('active');
    cur = (cur + 1) % slides.length;
    slides[cur].classList.add('active');
  }, 5000);
})();

/* --- ADD TO CART --- */
function getCart(){
  try{ return JSON.parse(localStorage.getItem('cart')||'[]'); } catch(e){ return []; }
}
function saveCart(cart){ localStorage.setItem('cart', JSON.stringify(cart)); updateCartCount(); }

function addToCart(productId, qty=1){
  const prod = getProductById(productId);
  if(!prod) return alert('Product not found');
  const cart = getCart();
  const existing = cart.find(i => i.id === productId);
  if(existing){ existing.qty += qty; }
  else{ cart.push({id:productId, name:prod.name, price:prod.price, image:prod.image, qty}); }
  saveCart(cart);
  alert(`${prod.name} added to cart`);
}

/* wire add-buttons on pages */
document.addEventListener('DOMContentLoaded', () => {
  // Add-to-cart buttons on product listings - buttons must have data-id attribute
  document.querySelectorAll('[data-add-to-cart]').forEach(btn => {
    btn.addEventListener('click', e => {
      const id = btn.getAttribute('data-id');
      addToCart(id, 1);
    });
  });

  updateCartCount();
  renderCategoryIfNeeded();
  renderProductDetailIfNeeded();
  renderCartPageIfNeeded();
});

/* update cart count in navbar (elements with id cart-count) */
function updateCartCount(){
  const countEls = document.querySelectorAll('#cart-count');
  const cart = getCart();
  const total = cart.reduce((s,i)=> s + Number(i.qty||0), 0);
  countEls.forEach(el=> el.textContent = total);
}

/* --- RENDER product.html if present --- */
function renderProductDetailIfNeeded(){
  if(!document.querySelector('#product-detail-root')) return;
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  if(!id){ document.querySelector('#product-detail-root').innerHTML = '<p>Product id missing</p>'; return; }
  const prod = getProductById(id);
  if(!prod){ document.querySelector('#product-detail-root').innerHTML = '<p>Product not found</p>'; return; }

  const html = `
    <div class="product-detail container" style="display:grid;grid-template-columns:1fr 360px;gap:20px;padding:20px 0">
      <div>
        <img src="${prod.image}" alt="${prod.name}" style="width:100%;border-radius:12px;object-fit:cover;height:480px">
      </div>
      <div style="background:#fff;padding:18px;border-radius:12px;box-shadow:0 6px 18px rgba(16,24,40,0.06)">
        <h1 style="margin-top:0">${prod.name}</h1>
        <p style="color:#64748b;margin:6px 0">${prod.desc}</p>
        <p style="font-weight:800;color:#f97316;font-size:1.2rem;margin:10px 0">$${prod.price}</p>
        <div style="display:flex;gap:8px;margin-top:10px">
          <button class="btn" id="buy-now">Buy Now</button>
          <button class="btn" data-id="${prod.id}" id="addToCartBtn">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
  document.querySelector('#product-detail-root').innerHTML = html;
  document.getElementById('addToCartBtn').addEventListener('click',()=>addToCart(prod.id,1));
  document.getElementById('buy-now').addEventListener('click',()=>{
    addToCart(prod.id,1);
    location.href = 'cart.html';
  });
}

/* --- RENDER categories listing (products pages) --- */
function renderCategoryIfNeeded(){
  // pages with data-category attribute on an element with id="category-root"
  const root = document.querySelector('#category-root');
  if(!root) return;
  const category = root.getAttribute('data-category');
  if(!category) return;
  const items = productsData.filter(p => p.category.toLowerCase() === category.toLowerCase());
  const html = items.map(p => `
    <article class="product-card">
      <div class="product-media"><img src="${p.image}" alt="${p.name}"></div>
      <div class="product-body">
        <div>
          <h3>${p.name}</h3>
          <p class="price">$${p.price}</p>
        </div>
        <div class="product-actions">
          <a class="btn" href="product.html?id=${p.id}">View</a>
          <button data-add-to-cart data-id="${p.id}">Add</button>
        </div>
      </div>
    </article>
  `).join('');
  root.innerHTML = `<div class="products-grid">${html}</div>`;
  // attach handlers for add buttons (they have data-add-to-cart attr)
  document.querySelectorAll('[data-add-to-cart]').forEach(btn=>{
    btn.addEventListener('click',()=> addToCart(btn.getAttribute('data-id'),1));
  });
}

/* --- CART PAGE RENDER / actions --- */
function renderCartPageIfNeeded(){
  const cartRoot = document.querySelector('#cart-root');
  if(!cartRoot) return;
  let cart = getCart();
  if(cart.length === 0){
    cartRoot.innerHTML = '<p>Your cart is empty.</p>';
    updateCartCount();
    return;
  }
  const rows = cart.map(item=> `
    <tr data-id="${item.id}">
      <td style="display:flex;gap:8px;align-items:center">
       
        <div style="text-align:left"><strong>${item.name}</strong></div>
      </td>
      <td>$${item.price}</td>
      <td><input type="number" min="1" value="${item.qty}" data-qty="${item.id}" style="width:70px;padding:6px;border-radius:6px;border:1px solid #ddd"></td>
      <td>$${(item.price*item.qty).toFixed(2)}</td>
      <td><button data-remove="${item.id}">Remove</button></td>
    </tr>
  `).join('');
  const subtotal = cart.reduce((s,i)=> s + i.price*i.qty, 0);
  cartRoot.innerHTML = `
    <div style="overflow:auto">
      <table class="cart-table" style="width:100%">
        <thead><tr><th>Product</th><th>Price</th><th>Qty</th><th>Subtotal</th><th></th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    <div style="margin-top:12px;text-align:right">
      <p style="font-weight:800">Total: $${subtotal.toFixed(2)}</p>
      <div style="display:flex;gap:8px;justify-content:flex-end">
        <button id="checkoutBtn" class="btn">Checkout</button>
        <button id="clearCartBtn" class="btn">Clear Cart</button>
      </div>
    </div>
  `;

  // qty change handlers
  document.querySelectorAll('input[data-qty]').forEach(inp=>{
    inp.addEventListener('change', ()=>{
      const id = inp.getAttribute('data-qty');
      let val = parseInt(inp.value) || 1;
      let cart = getCart();
      const item = cart.find(i=>i.id===id);
      if(item){ item.qty = val; saveCart(cart); renderCartPageIfNeeded(); }
    });
  });

  // remove handlers
  document.querySelectorAll('[data-remove]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const id = btn.getAttribute('data-remove');
      let cart = getCart().filter(i=>i.id!==id);
      saveCart(cart);
      renderCartPageIfNeeded();
    });
  });

  document.getElementById('clearCartBtn').addEventListener('click', ()=>{
    if(confirm('Clear cart?')){ saveCart([]); renderCartPageIfNeeded(); }
  });
  document.getElementById('checkoutBtn').addEventListener('click', ()=>{
    alert('Checkout placeholder — integrate payment/checkout here');
  });

  updateCartCount();
  
}
