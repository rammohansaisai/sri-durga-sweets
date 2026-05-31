// PRODUCT CATALOG DATA
const products = [
  // Veg Pickles
  { id: 'veg-mango', name: 'Mango Pickle', category: 'veg', emoji: '🥭', badge: 'Bestseller', prices: { '250g': 100, '500g': 190, '1kg': 360 }, defaultSize: '250g', image: 'images/mango_pickle_user.png', description: 'Traditional Andhra style cut mango pickle made with premium quality mangoes and fresh cold-pressed groundnut oil.' },
  { id: 'veg-tomato', name: 'Tomato Pickle', category: 'veg', emoji: '🍅', badge: '', prices: { '250g': 100, '500g': 190, '1kg': 360 }, defaultSize: '250g', image: 'images/tomato_pickle_user.png', description: 'Tangy and spicy tomato pickle prepared with ripe tomatoes, garlic, tamarind, and hand-ground spices.' },
  { id: 'veg-gongura', name: 'Gongura Pickle', category: 'veg', emoji: '🌿', badge: 'Popular', prices: { '250g': 100, '500g': 190, '1kg': 360 }, defaultSize: '250g', image: 'images/gongura_pickle_user.jpg', description: 'A legendary Andhra specialty made from sorrel leaves, offering a unique tangy and spicy kick.' },
  { id: 'veg-lemon', name: 'Lemon Pickle', category: 'veg', emoji: '🍋', badge: '', prices: { '250g': 100, '500g': 190, '1kg': 360 }, defaultSize: '250g', image: 'images/lemon_pickle_user.jpg', description: 'Cured lemon pieces tossed in dry spices, oil-free and matured naturally for a perfect digestive balance.' },
  { id: 'veg-chilli', name: 'Red Chilli Pickle', category: 'veg', emoji: '🌶️', badge: '', prices: { '250g': 100, '500g': 190, '1kg': 360 }, defaultSize: '250g', image: 'images/red_chilli_pickle_user.png', description: 'Fiery stuffed red chilli pickle made with local Kurnool chillies, mustard seeds, and fenugreek.' },
  { id: 'veg-tamarind', name: 'Tamarind Pickle', category: 'veg', emoji: '🫙', badge: '', prices: { '250g': 100, '500g': 190, '1kg': 360 }, defaultSize: '250g', image: 'images/tamarind_pickle_user.jpg', description: 'Chintapandu tokku, a rich and sour traditional paste, perfectly spiced for a comforting meal.' },
  { id: 'veg-pulihora', name: 'Pulihora Paste', category: 'veg', emoji: '🟡', badge: '', prices: { '250g': 100, '500g': 190, '1kg': 360 }, defaultSize: '250g', image: 'images/pulihora_paste_user.jpg', description: 'Ready-to-mix tamarind paste infused with curry leaves, peanuts, chillies, and mustard for instant tamarind rice.' },
  { id: 'veg-nuvvula-mango', name: 'Nuvvula Mango Pickle', category: 'veg', emoji: '🥭', badge: '', prices: { '250g': 130, '500g': 240, '1kg': 400 }, defaultSize: '250g', image: 'images/nuvvula_mango_pickle_user.jpg', description: 'A nutty variation of the classic mango pickle, featuring rich roasted sesame seed powder.' },
  { id: 'veg-sweet-mango', name: 'Sweet Mango Pickle', category: 'veg', emoji: '🍬', badge: '', prices: { '250g': 110, '500g': 210, '1kg': 400 }, defaultSize: '250g', image: 'images/sweet_mango_pickle_user.jpg', description: 'Sweet and sour grated mango pickle (Bellam Avakaya) prepared with organic jaggery and spices.' },
  { id: 'veg-mango-thokku', name: 'Mango Thokku', category: 'veg', emoji: '🫙', badge: '', prices: { '250g': 110, '500g': 210, '1kg': 400 }, defaultSize: '250g', image: 'images/mango_thokku_user.png', description: 'Grated mango pickle cooked down with authentic spices, perfect with curd rice and breakfast items.' },
  { id: 'veg-mango-chips', name: 'Mango Chips Pickle', category: 'veg', emoji: '🥭', badge: '', prices: { '250g': 100, '500g': 190, '1kg': 360 }, defaultSize: '250g', image: 'images/mango_chips_pickle_user.png', description: 'Avakaya chips - small sliced mango pieces marinated in salt, mustard, and chilli powder.' },
  { id: 'veg-mixed', name: 'Mixed Veg Pickle', category: 'veg', emoji: '🥗', badge: '', prices: { '250g': 100, '500g': 190, '1kg': 360 }, defaultSize: '250g', image: 'images/mixed_veg_pickle_user.jpg', description: 'A flavorful mix of carrots, cauliflower, peas, and green chillies in a spicy mustard oil base.' },

  // Non Veg Pickles
  { id: 'nonveg-chicken', name: 'Chicken Pickle (Boneless)', category: 'nonveg', emoji: '🍗', badge: 'Popular', prices: { '250g': 350, '500g': 650, '1kg': 1100 }, defaultSize: '250g', image: 'images/chicken_pickle_user.png', description: 'Juicy boneless chicken pieces fried and marinated in hand-ground spices and fresh ginger-garlic paste.' },
  { id: 'nonveg-mutton', name: 'Mutton Pickle', category: 'nonveg', emoji: '🍖', badge: 'Premium', prices: { '250g': 600, '500g': 1100, '1kg': 2000 }, defaultSize: '250g', image: 'images/mutton_pickle_user.jpg', description: 'Premium quality tender mutton chunks, slowly cooked and pickling-seasoned to melt in your mouth.' },
  { id: 'nonveg-prawns', name: 'Prawns Pickle', category: 'nonveg', emoji: '🍤', badge: '', prices: { '250g': 500, '500g': 900, '1kg': 1500 }, defaultSize: '250g', image: 'images/prawns_pickle_user.png', description: 'Freshwater prawns cleaned, fried crisp, and combined with rich spices and local cold-pressed oil.' },

  // Podulu
  { id: 'podi-idli', name: 'Idli Karam Podi', category: 'podi', emoji: '🌶️', badge: 'Popular', prices: { '100g': 50, '250g': 95, '500g': 125 }, defaultSize: '100g', image: 'images/idli_karam_podi_user.jpg', description: 'Classic gun powder blend of roasted lentils and red chillies. The perfect companion for hot idlis with ghee.' },
  { id: 'podi-kandi', name: 'Kandi Podi', category: 'podi', emoji: '🫘', badge: '', prices: { '100g': 50, '250g': 95, '500g': 125 }, defaultSize: '100g', image: 'images/kandi_podi_user.png', description: 'Toor dal (kandi pappu) roasted dry and blended with cumin, garlic, and dried red chillies.' },
  { id: 'podi-kobbari', name: 'Kobbari Podi', category: 'podi', emoji: '🥥', badge: '', prices: { '100g': 50, '250g': 95, '500g': 125 }, defaultSize: '100g', image: 'images/kobbari_podi_user.png', description: 'Aromatic dry coconut powder blended with spices and garlic, ideal with plain hot rice.' },
  { id: 'podi-karivepaku', name: 'Karivepaku Podi', category: 'podi', emoji: '🌿', badge: '', prices: { '100g': 50, '250g': 95, '500g': 125 }, defaultSize: '100g', image: 'images/karivepaku_podi_user.jpg', description: 'Nutritious curry leaf spice mix roasted slowly to preserve flavor and vitamins, good for health.' },
  { id: 'podi-pappula', name: 'Pappula Podi', category: 'podi', emoji: '🫘', badge: '', prices: { '100g': 50, '250g': 95, '500g': 125 }, defaultSize: '100g', image: 'images/pappula_podi_user.jpg', description: 'Roasted gram dal powder blended with salt and mild spices, extremely tasty with ghee and rice.' },
  { id: 'podi-nalla', name: 'Nalla Karam Podi', category: 'podi', emoji: '🌶️', badge: '', prices: { '100g': 50, '250g': 95, '500g': 125 }, defaultSize: '100g', image: 'images/nalla_karam_podi_user.jpg', description: 'Dark, spicy karam podi made with whole coriander seeds, black gram, and chillies for a robust taste.' },
  { id: 'podi-vellulli', name: 'Vellulli Karam Podi', category: 'podi', emoji: '🧄', badge: '', prices: { '100g': 50, '250g': 95, '500g': 125 }, defaultSize: '100g', image: 'images/vellulli_karam_podi_user.png', description: 'Garlic-heavy spice powder that adds instant flavor to curries, dosas, and steamed rice.' },
  { id: 'podi-munagaku', name: 'Munagaku Podi', category: 'podi', emoji: '🌾', badge: '', prices: { '100g': 50, '250g': 95, '500g': 125 }, defaultSize: '100g', image: 'images/munagaku_podi_user.png', description: 'Moringa (drumstick leaves) powder blended with traditional spices, combining health benefits and taste.' },
  { id: 'podi-kakarakaya', name: 'Kakarakaya Podi', category: 'podi', emoji: '🥒', badge: '', prices: { '100g': 50, '250g': 95, '500g': 125 }, defaultSize: '100g', image: 'images/kakarakaya_podi_user.jpg', description: 'Crispy fried bitter gourd powder mixed with spices; has a unique sweet, bitter, and spicy flavor profile.' },
  { id: 'podi-chitlam', name: 'Chitlam Podi', category: 'podi', emoji: '🫙', badge: '', prices: { '100g': 50, '250g': 95, '500g': 125 }, defaultSize: '100g', image: 'images/chitlam_podi_user.jpg', description: 'Traditional multi-lentil podi with a rustic texture, prepared according to standard Rayalaseema heritage.' },
  { id: 'podi-buddala', name: 'Buddala Podi', category: 'podi', emoji: '🌾', badge: '', prices: { '100g': 50, '250g': 95, '500g': 125 }, defaultSize: '100g', image: 'images/buddala_podi_user.jpg', description: 'Roasted peanut spice blend (Shenga Podi), adding crunchy richness to breakfast items.' }
];

// STATE MANAGEMENT
let cart = [];
let activeCategory = 'all';
let searchQuery = '';
let currentSort = 'recommended';
let selectedProduct = null;
let selectedSize = '';
let modalQty = 1;

// LOAD CART FROM LOCAL STORAGE
function initCart() {
  const localCart = localStorage.getItem('sd_cart');
  if (localCart) {
    try {
      cart = JSON.parse(localCart);
    } catch (e) {
      cart = [];
    }
  }
  updateCartUI();
}

// SAVE CART TO LOCAL STORAGE
function saveCart() {
  localStorage.setItem('sd_cart', JSON.stringify(cart));
  updateCartUI();
}

// UPDATE CART BADGES AND LIST ELEMENTS
function updateCartUI() {
  const cartCountElements = document.querySelectorAll('.cart-count-badge');
  const cartItemsContainer = document.getElementById('cartItems');
  const cartSubtotalElement = document.getElementById('cartSubtotal');
  const deliveryChargesElement = document.getElementById('deliveryCharges');
  const cartTotalElement = document.getElementById('cartTotal');
  const freeDeliveryProgress = document.getElementById('freeDeliveryProgress');
  const freeDeliveryText = document.getElementById('freeDeliveryText');

  // Total Quantity calculation
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountElements.forEach(el => {
    el.textContent = totalQty;
    // Animate badge
    el.classList.add('pop-badge');
    setTimeout(() => el.classList.remove('pop-badge'), 300);
  });

  // Render items
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart">
        <span class="empty-cart-emoji">🫙</span>
        <p>Your cart is empty</p>
        <button class="btn-primary" onclick="closeCartDrawer(); window.location.hash='#shop'">Start Shopping</button>
      </div>
    `;
    cartSubtotalElement.textContent = '₹0';
    deliveryChargesElement.textContent = '₹0';
    cartTotalElement.textContent = '₹0';
    
    if (freeDeliveryProgress) freeDeliveryProgress.style.width = '0%';
    if (freeDeliveryText) freeDeliveryText.innerHTML = 'Add items to unlock <strong>Free Delivery</strong>';
    return;
  }

  // Calculate Subtotal
  let subtotal = 0;
  cartItemsContainer.innerHTML = cart.map((item, index) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    return `
      <div class="cart-item">
        <div class="cart-item-emoji">${item.emoji}</div>
        <div class="cart-item-details">
          <h4>${item.name}</h4>
          <span class="cart-item-size">${item.size}</span>
          <span class="cart-item-price-each">₹${item.price} each</span>
        </div>
        <div class="cart-item-actions">
          <div class="qty-stepper sm">
            <button onclick="changeCartQty(${index}, -1)">−</button>
            <span>${item.quantity}</span>
            <button onclick="changeCartQty(${index}, 1)">+</button>
          </div>
          <div class="cart-item-total-col">
            <span class="cart-item-total-price">₹${itemTotal}</span>
            <button class="cart-item-remove" onclick="removeFromCart(${index})">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Delivery Calculations (Threshold is ₹499)
  const threshold = 499;
  let deliveryFee = 60;
  
  if (subtotal >= threshold) {
    deliveryFee = 0;
    if (freeDeliveryProgress) freeDeliveryProgress.style.width = '100%';
    if (freeDeliveryText) freeDeliveryText.innerHTML = '🎉 You qualify for <strong>FREE Delivery!</strong>';
  } else {
    const needed = threshold - subtotal;
    const percentage = (subtotal / threshold) * 100;
    if (freeDeliveryProgress) freeDeliveryProgress.style.width = `${percentage}%`;
    if (freeDeliveryText) freeDeliveryText.innerHTML = `Spend <strong>₹${needed}</strong> more for <strong>FREE Delivery</strong>`;
  }

  const grandTotal = subtotal + deliveryFee;
  cartSubtotalElement.textContent = `₹${subtotal}`;
  deliveryChargesElement.textContent = deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`;
  cartTotalElement.textContent = `₹${grandTotal}`;
}

// QUANTITY STEPPER INSIDE DRAWER
window.changeCartQty = function(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
};

// REMOVE FROM CART
window.removeFromCart = function(index) {
  cart.splice(index, 1);
  saveCart();
};

// PRODUCT DETAIL CUSTOMIZATION MODAL FUNCTIONS
window.openQuickView = function(productId) {
  selectedProduct = products.find(p => p.id === productId);
  if (!selectedProduct) return;

  selectedSize = selectedProduct.defaultSize;
  modalQty = 1;

  const modalImg = document.getElementById('modalImage');
  modalImg.src = selectedProduct.image;
  modalImg.alt = selectedProduct.name;

  document.getElementById('modalTitle').textContent = selectedProduct.name;
  document.getElementById('modalDescription').textContent = selectedProduct.description;
  
  // Badge
  const badgeEl = document.getElementById('modalBadge');
  if (selectedProduct.badge) {
    badgeEl.textContent = selectedProduct.badge;
    badgeEl.style.display = 'inline-flex';
  } else {
    badgeEl.style.display = 'none';
  }

  // Sizing radio tabs
  const sizesContainer = document.getElementById('modalSizes');
  sizesContainer.innerHTML = Object.entries(selectedProduct.prices).map(([size, price]) => `
    <label class="size-pill ${size === selectedSize ? 'active' : ''}">
      <input type="radio" name="productSize" value="${size}" ${size === selectedSize ? 'checked' : ''} onchange="selectModalSize('${size}')">
      <span class="size-label">${size}</span>
      <span class="size-price">₹${price}</span>
    </label>
  `).join('');

  updateModalPrice();
  document.getElementById('modalQty').textContent = modalQty;

  const modal = document.getElementById('productModal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeProductModal = function() {
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
  selectedProduct = null;
};

window.selectModalSize = function(size) {
  selectedSize = size;
  const pills = document.querySelectorAll('.size-pill');
  pills.forEach(pill => {
    const radio = pill.querySelector('input');
    if (radio && radio.value === size) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });
  updateModalPrice();
};

function updateModalPrice() {
  if (!selectedProduct) return;
  const price = selectedProduct.prices[selectedSize];
  const total = price * modalQty;
  document.getElementById('modalPrice').textContent = `₹${total}`;
}

window.adjustModalQty = function(delta) {
  modalQty += delta;
  if (modalQty < 1) modalQty = 1;
  document.getElementById('modalQty').textContent = modalQty;
  updateModalPrice();
};

window.addSelectedToCart = function() {
  if (!selectedProduct) return;
  const price = selectedProduct.prices[selectedSize];
  
  // Check if same item & size exists
  const existingItemIndex = cart.findIndex(item => item.id === selectedProduct.id && item.size === selectedSize);
  
  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += modalQty;
  } else {
    cart.push({
      id: selectedProduct.id,
      name: selectedProduct.name,
      emoji: selectedProduct.emoji,
      size: selectedSize,
      price: price,
      quantity: modalQty
    });
  }

  // Animation on button
  const addBtn = document.getElementById('addToCartSubmit');
  const originalText = addBtn.innerHTML;
  addBtn.innerHTML = '✔ Added!';
  addBtn.style.background = 'var(--forest)';
  
  saveCart();

  setTimeout(() => {
    addBtn.innerHTML = originalText;
    addBtn.style.background = '';
    closeProductModal();
    openCartDrawer();
  }, 600);
};

// DRAWER ACTIONS
window.openCartDrawer = function() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  setDrawerStep(1); // Start at cart list
};

window.closeCartDrawer = function() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
};

// DRAWER MULTI-STEP CHECKOUT NAVIGATION
let checkoutStep = 1;
let customerDetails = {};
let pgTimerInterval = null;

window.setDrawerStep = function(step) {
  checkoutStep = step;
  document.querySelectorAll('.drawer-step').forEach(el => el.classList.remove('active'));
  document.getElementById(`step${step}`).classList.add('active');

  const backBtn = document.getElementById('drawerBackBtn');
  if (step > 1 && step < 3) {
    backBtn.style.display = 'block';
  } else {
    backBtn.style.display = 'none';
  }

  const drawerTitle = document.getElementById('drawerTitle');
  if (step === 1) drawerTitle.textContent = 'Your Cart';
  else if (step === 2) drawerTitle.textContent = 'Delivery Address';
  else if (step === 3) drawerTitle.textContent = 'Order Placed';
};

window.drawerBack = function() {
  if (checkoutStep > 1) {
    setDrawerStep(checkoutStep - 1);
  }
};

window.proceedToCheckout = function() {
  if (cart.length === 0) return;
  setDrawerStep(2);
};

// SUBMIT CHECKOUT / OPEN PHONEPE MODAL
window.submitOrderForm = function(e) {
  e.preventDefault();
  
  const name = document.getElementById('checkoutName').value.trim();
  const phone = document.getElementById('checkoutPhone').value.trim();
  const address = document.getElementById('checkoutAddress').value.trim();
  const landmark = document.getElementById('checkoutLandmark').value.trim();
  const city = document.getElementById('checkoutCity').value.trim();
  const pincode = document.getElementById('checkoutPincode').value.trim();

  if (!name || !phone || !address || !city || !pincode) {
    alert('Please fill in all mandatory fields.');
    return;
  }

  // Store details
  customerDetails = { name, phone, address, landmark, city, pincode };

  // Calculate Subtotal & Totals
  let subtotal = 0;
  cart.forEach(item => {
    subtotal += item.price * item.quantity;
  });

  const deliveryFee = subtotal >= 499 ? 0 : 60;
  const grandTotal = subtotal + deliveryFee;

  // Configure UPI ID
  const upiId = 'rammohansai12-1@oksbi';
  const businessName = 'Sri Durga Sweets & Bakery';
  const orderId = 'SD' + Date.now().toString().slice(-6);

  // Generate UPI deep-link and QR code URL
  const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(businessName)}&am=${grandTotal}&cu=INR&tn=${encodeURIComponent('Order ' + orderId)}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=10&data=${encodeURIComponent(upiUrl)}`;

  // Close Cart Drawer
  closeCartDrawer();

  // Open PhonePe Payment Gateway Modal
  const pgModal = document.getElementById('pgModalOverlay');
  if (pgModal) {
    pgModal.classList.add('open');
    document.getElementById('pgTotalAmount').textContent = `₹${grandTotal.toFixed(2)}`;
    document.getElementById('pgQrImage').src = qrCodeUrl;
    document.getElementById('pgQrAnchor').href = upiUrl;
    document.getElementById('pgUtrInput').value = '';
    selectPgMethod('upi');
    startPgTimer();
  }
};

// PHONEPE MODAL FUNCTIONS
window.selectPgMethod = function(method) {
  document.querySelectorAll('.pg-method-item').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.pg-action-section').forEach(el => el.classList.remove('active'));
  
  if (method === 'upi') {
    document.getElementById('method-upi').classList.add('active');
    document.getElementById('pgUpiSection').classList.add('active');
  } else {
    document.getElementById(`method-${method}`).classList.add('active');
    document.getElementById('pgMockSection').classList.add('active');
  }
};

window.closePgModal = function() {
  const pgModal = document.getElementById('pgModalOverlay');
  if (pgModal) pgModal.classList.remove('open');
  if (pgTimerInterval) clearInterval(pgTimerInterval);
};

window.startPgTimer = function() {
  if (pgTimerInterval) clearInterval(pgTimerInterval);
  
  let timeRemaining = 15 * 60; // 15 minutes in seconds
  
  function updateTimerUI() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    const timerText = document.getElementById('pgTimerText');
    const timeoutText = document.getElementById('pgTimeoutText');
    
    if (timerText) timerText.textContent = formattedTime;
    if (timeoutText) timeoutText.textContent = formattedTime;
    
    if (timeRemaining <= 0) {
      clearInterval(pgTimerInterval);
      alert('Payment window has expired. Please try checking out again.');
      closePgModal();
    }
    timeRemaining--;
  }
  
  updateTimerUI();
  pgTimerInterval = setInterval(updateTimerUI, 1000);
};

window.pgCompletePayment = function() {
  const utr = document.getElementById('pgUtrInput').value.trim();
  if (utr && !/^[0-9]{12}$/.test(utr)) {
    alert('Please enter a valid 12-digit UPI Transaction ID (or leave it blank).');
    return;
  }
  
  // Close payment modal
  closePgModal();
  
  // Complete WhatsApp order submission
  completeOrder(utr);
};

// COMPLETE ORDER / SUBMIT TO WHATSAPP
window.completeOrder = function(utr) {
  const { name, phone, address, landmark, city, pincode } = customerDetails;

  // Calculate Subtotal & Totals
  let subtotal = 0;
  let itemsText = '';
  cart.forEach((item, idx) => {
    const total = item.price * item.quantity;
    subtotal += total;
    itemsText += `${idx + 1}. *${item.name}* (${item.size}) x ${item.quantity} - ₹${total}\n`;
  });

  const deliveryFee = subtotal >= 499 ? 0 : 60;
  const grandTotal = subtotal + deliveryFee;

  // Format message text for WhatsApp API
  const message = `*Sri Durga Sweets & Bakery - New Order*
---------------------------------------
*Customer Details:*
👤 Name: ${name}
📞 Phone: ${phone}
📍 Address: ${address}
📍 Landmark: ${landmark ? landmark : 'None'}
🏘️ City/Town: ${city}
📮 Pincode: ${pincode}

*Order Items:*
${itemsText}
---------------------------------------
*Subtotal:* ₹${subtotal}
*Delivery Charges:* ${deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
*Grand Total:* ₹${grandTotal}
---------------------------------------
*Payment Details:*
💰 Status: Paid via UPI (GPay/PhonePe/Paytm)
🔢 UPI Transaction ID (UTR): ${utr ? utr : 'Pending Verification'}

Please confirm the order details!`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=918328319293&text=${encodedMessage}`;

  // Open WhatsApp in new tab
  window.open(whatsappUrl, '_blank');

  // Open Cart Drawer again and show Success step
  openCartDrawer();
  setDrawerStep(3);

  // Clear Cart
  cart = [];
  saveCart();
  
  // Clear Form
  document.getElementById('checkoutForm').reset();
};

// RENDER PRODUCTS
function renderShopProducts() {
  const container = document.getElementById('unifiedProductGrid');
  if (!container) return;

  // Filter products by search and category
  let filtered = products.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products
  if (currentSort === 'low-to-high') {
    filtered.sort((a, b) => {
      const priceA = Object.values(a.prices)[0];
      const priceB = Object.values(b.prices)[0];
      return priceA - priceB;
    });
  } else if (currentSort === 'high-to-low') {
    filtered.sort((a, b) => {
      const priceA = Object.values(a.prices)[0];
      const priceB = Object.values(b.prices)[0];
      return priceB - priceA;
    });
  } else if (currentSort === 'name-a-z') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    // Recommended / default sorting: bestsellers first
    filtered.sort((a, b) => {
      const scoreA = a.badge === 'Bestseller' ? 2 : (a.badge === 'Popular' ? 1 : 0);
      const scoreB = b.badge === 'Bestseller' ? 2 : (b.badge === 'Popular' ? 1 : 0);
      return scoreB - scoreA;
    });
  }

  // Update categories grid labels on homepage dynamically
  updateHomeCategoryCounts();

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-products-found" style="grid-column: 1 / -1; text-align: center; padding: 48px 24px; color: var(--text-muted);">
        <span style="font-size: 48px; display: block; margin-bottom: 12px;">🌶️</span>
        <h3>No products match your search</h3>
        <p style="margin-top: 6px;">Try adjusting your keyword filter or browse another category.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => {
    // Display price range or standard price
    const sizeKeys = Object.keys(p.prices);
    const minPrice = p.prices[sizeKeys[0]];
    const maxPrice = p.prices[sizeKeys[sizeKeys.length - 1]];
    const priceText = sizeKeys.length > 1 ? `₹${minPrice} – ₹${maxPrice}` : `₹${minPrice}`;
    
    const categoryBadge = p.category === 'veg' 
      ? '<span class="product-indicator veg" title="Vegetarian">🟢 Veg</span>' 
      : (p.category === 'nonveg' ? '<span class="product-indicator nonveg" title="Non-Vegetarian">🔴 Non-Veg</span>' : '<span class="product-indicator podi" title="Spice Powder">🌾 Podi</span>');

    return `
      <div class="product-card" onclick="openQuickView('${p.id}')">
        <div class="product-img">
          <img src="${p.image}" alt="${p.name}" class="card-product-image">
          ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
          <div class="product-type-pill">${categoryBadge}</div>
        </div>
        <div class="product-body">
          <h3>${p.name}</h3>
          <div class="product-price">${priceText} <small>Multiple sizes</small></div>
          <button class="add-btn" onclick="event.stopPropagation(); openQuickView('${p.id}')">Select Options</button>
        </div>
      </div>
    `;
  }).join('');
}

// HOME CATEGORY TABS CLICK BINDINGS AND SHOP NAVIGATION
window.setCategoryTab = function(category) {
  activeCategory = category;
  
  // Update class active states
  const tabs = document.querySelectorAll('.shop-tab');
  tabs.forEach(tab => {
    if (tab.dataset.cat === category) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  renderShopProducts();
};

// INITIAL SETUP OF HOME CATEGORY QUANTITY LABELS
function updateHomeCategoryCounts() {
  const counts = { veg: 0, nonveg: 0, podi: 0 };
  products.forEach(p => counts[p.category]++);

  const vegCountEl = document.getElementById('countVeg');
  const nonvegCountEl = document.getElementById('countNonveg');
  const podiCountEl = document.getElementById('countPodi');

  if (vegCountEl) vegCountEl.textContent = counts.veg;
  if (nonvegCountEl) nonvegCountEl.textContent = counts.nonveg;
  if (podiCountEl) podiCountEl.textContent = counts.podi;
}

// TESTIMONIAL SLIDER INTERACTION
let testimonialIndex = 0;
const reviews = [
  { text: "Sri Durga's Mango pickle takes me back to my grandmother's home in Kurnool. The sesame seed recipe (Nuvvula Avakaya) is absolutely top notch!", author: "Venkatesh R.", location: "Kurnool" },
  { text: "Outstanding Chicken Pickle! Packed with spice but still highly flavorful, and no artificial colors. Ordering online via WhatsApp was extremely easy.", author: "Pritha K.", location: "Hyderabad" },
  { text: "My morning idlis are incomplete without their Idli Karam Podi. Adding ghee and this powder is bliss! Highly recommended.", author: "Rajesh S.", location: "Bangalore" },
  { text: "The mutton pickle is premium quality. Very tender meat pieces and spiced just right. The packaging was also neat and leak-proof.", author: "Suresh P.", location: "Chennai" }
];

function initTestimonials() {
  const container = document.getElementById('testimonialsSlider');
  if (!container) return;

  container.innerHTML = `
    <div class="testimonial-slides">
      ${reviews.map((rev, idx) => `
        <div class="testimonial-slide ${idx === 0 ? 'active' : ''}">
          <div class="rating-stars">⭐⭐⭐⭐⭐</div>
          <p class="review-text">"${rev.text}"</p>
          <div class="review-author">
            <strong>${rev.author}</strong>
            <span>Verified Customer • ${rev.location}</span>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="testimonial-controls">
      <button class="slider-btn prev" onclick="moveReview(-1)">❮</button>
      <div class="slider-dots">
        ${reviews.map((_, idx) => `
          <span class="dot ${idx === 0 ? 'active' : ''}" onclick="jumpToReview(${idx})"></span>
        `).join('')}
      </div>
      <button class="slider-btn next" onclick="moveReview(1)">❯</button>
    </div>
  `;
}

window.moveReview = function(direction) {
  testimonialIndex += direction;
  if (testimonialIndex >= reviews.length) testimonialIndex = 0;
  if (testimonialIndex < 0) testimonialIndex = reviews.length - 1;
  updateReviewSlide();
};

window.jumpToReview = function(index) {
  testimonialIndex = index;
  updateReviewSlide();
};

function updateReviewSlide() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.slider-dots .dot');
  
  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === testimonialIndex);
  });
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === testimonialIndex);
  });
}

// AUTO SCROLL TESTIMONIALS
setInterval(() => {
  const slider = document.getElementById('testimonialsSlider');
  if (slider) moveReview(1);
}, 6000);

// FAQ ACCORDION INTERACTIVE BEHAVIOR
window.toggleFaq = function(header) {
  const item = header.parentElement;
  const isActive = item.classList.contains('active');
  
  // Close all other FAQs
  document.querySelectorAll('.faq-item').forEach(el => {
    el.classList.remove('active');
  });

  if (!isActive) {
    item.classList.add('active');
  }
};

// INTERACTIVE STATS ANIMATION ON VIEWPORT SCROLL
function initAnimatedStats() {
  const stats = document.querySelectorAll('.about-stat .num');
  const observerOptions = {
    root: null,
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const rawText = target.textContent;
        // Parse numerical value
        const targetNumber = parseInt(rawText);
        if (!isNaN(targetNumber)) {
          let count = 0;
          const suffix = rawText.replace(/[0-9]/g, ''); // get pluses or letters
          const duration = 1500; // 1.5s
          const steps = 30;
          const stepValue = targetNumber / steps;
          const intervalTime = duration / steps;
          
          const timer = setInterval(() => {
            count += stepValue;
            if (count >= targetNumber) {
              target.textContent = targetNumber + suffix;
              clearInterval(timer);
            } else {
              target.textContent = Math.round(count) + suffix;
            }
          }, intervalTime);
        }
        observer.unobserve(target);
      }
    });
  }, observerOptions);

  stats.forEach(stat => observer.observe(stat));
}

// SETUP EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
  initCart();
  
  // Search inputs
  const searchInput = document.getElementById('shopSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderShopProducts();
    });
  }

  // Sorting selectors
  const sortSelect = document.getElementById('shopSort');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderShopProducts();
    });
  }

  // Testimonials & Stats
  initTestimonials();
  initAnimatedStats();

  // Initial shop render
  renderShopProducts();

  // Scroll spy active tab highlights
  window.addEventListener('scroll', scrollSpy);
});

// SCROLL SPY FUNCTION
function scrollSpy() {
  const sections = ['home', 'shop', 'about', 'contact'];
  const scrollPosition = window.scrollY + 100;

  sections.forEach(secId => {
    const el = document.getElementById(secId);
    if (el) {
      const top = el.offsetTop;
      const height = el.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        document.querySelectorAll('.nav-links a').forEach(a => {
          a.classList.remove('active');
          if (a.getAttribute('href') === `#${secId}` || (secId === 'home' && a.getAttribute('href') === '#')) {
            a.classList.add('active');
          }
        });
      }
    }
  });
}

// MOBILE MENU CONTROLS
window.openMobileMenu = function() {
  document.getElementById('mobileMenu').classList.add('open');
};

window.closeMobileMenu = function() {
  document.getElementById('mobileMenu').classList.remove('open');
};
