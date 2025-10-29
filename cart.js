// ============================================
// SISTEMA DE CARRITO DE COMPRAS K-GAME
// ============================================

const CART_KEY = "kgame_cart";

// Obtener el carrito desde localStorage
function getCart() {
  try {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error("Error al obtener carrito:", error);
    return [];
  }
}

// Guardar el carrito en localStorage
function saveCart(cart) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
  } catch (error) {
    console.error("Error al guardar carrito:", error);
  }
}

// Actualizar el contador del carrito en el header
function updateCartCount() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartCountElements = document.querySelectorAll(
    ".cart-count, #cartCount"
  );
  cartCountElements.forEach((el) => {
    if (el) {
      el.textContent = totalItems;
      el.style.display = totalItems > 0 ? "inline" : "none";
    }
  });
}

// Función principal: Agregar juego al carrito
function addToCart(gameIdOrObject) {
  let game;

  // Si recibimos un string (ID), buscamos el juego
  if (typeof gameIdOrObject === "string") {
    game = getGameById(gameIdOrObject);
  } else {
    // Si ya es un objeto, lo usamos directamente
    game = gameIdOrObject;
  }

  if (!game || !game.id) {
    console.error("Juego no encontrado:", gameIdOrObject);
    showNotificationCart("⚠️ Error al agregar el juego");
    return;
  }

  const cart = getCart();
  const existingItem = cart.find((item) => item.id === game.id);

  if (existingItem) {
    existingItem.quantity += 1;
    showNotificationCart(
      `✅ ${game.title} (x${existingItem.quantity}) en el carrito`
    );
  } else {
    cart.push({
      id: game.id,
      title: game.title,
      price: game.price,
      image: game.image,
      quantity: 1,
    });
    showNotificationCart(`✅ ${game.title} agregado al carrito`);
  }

  saveCart(cart);

  // Actualizar vista del carrito si está abierto
  renderCartItems();
}

// Eliminar juego del carrito
function removeFromCart(gameId) {
  let cart = getCart();
  const removedItem = cart.find((item) => item.id === gameId);
  cart = cart.filter((item) => item.id !== gameId);
  saveCart(cart);

  if (removedItem) {
    showNotificationCart(`🗑️ ${removedItem.title} eliminado del carrito`);
  }

  renderCartItems();
}

// Actualizar cantidad en el carrito
function updateQuantity(gameId, newQuantity) {
  const cart = getCart();
  const item = cart.find((item) => item.id === gameId);

  if (item) {
    if (newQuantity <= 0) {
      removeFromCart(gameId);
    } else {
      item.quantity = newQuantity;
      saveCart(cart);
      renderCartItems();
    }
  }
}

// Vaciar todo el carrito
function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateCartCount();
  renderCartItems();
}

// Calcular el total del carrito
function getCartTotal() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

// Notificación personalizada para el carrito
function showNotificationCart(message) {
  // Remover notificación anterior si existe
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  const notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 30px;
    background: linear-gradient(135deg, #1c9aea, #00d4ff);
    color: #000;
    padding: 15px 25px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(28, 154, 234, 0.6);
    z-index: 10000;
    animation: slideInRight 0.4s ease;
    font-weight: bold;
    max-width: 300px;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideInRight 0.4s ease reverse";
    setTimeout(() => notification.remove(), 400);
  }, 3000);
}

// Renderizar items del carrito
function renderCartItems() {
  const cartItemsContainer = document.getElementById("cartItems");
  const cartTotalElement = document.getElementById("cartTotal");

  if (!cartItemsContainer) return;

  const cart = getCart();

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <p style="color: #ccc; font-size: 1.1rem; margin-top: 10px;">Tu carrito está vacío</p>
        <p style="color: #999; font-size: 0.9rem; margin-top: 10px;">¡Agrega algunos juegos increíbles!</p>
      </div>
    `;
    if (cartTotalElement) {
      cartTotalElement.textContent = "$0.00";
    }
    return;
  }

  cartItemsContainer.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}" class="cart-item-image" />
      <div class="cart-item-info">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
        <div class="cart-item-controls">
          <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${
        item.quantity - 1
      })">-</button>
          <span class="cart-item-quantity">${item.quantity}</span>
          <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${
        item.quantity + 1
      })">+</button>
          <button class="btn-remove-item" onclick="removeFromCart('${
            item.id
          }')">Eliminar</button>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  const total = getCartTotal();
  if (cartTotalElement) {
    cartTotalElement.textContent = "$" + total.toFixed(2);
  }
}

// Setup del panel del carrito
function setupCartPanel() {
  const cartPanel = document.getElementById("cartPanel");
  const cartToggle = document.getElementById("cartToggle");
  const closeCart = document.getElementById("closeCart");

  if (!cartPanel) return;

  if (cartToggle) {
    cartToggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      cartPanel.classList.add("active");
      renderCartItems();
    });
  }

  if (closeCart) {
    closeCart.addEventListener("click", () => {
      cartPanel.classList.remove("active");
    });
  }

  // Cerrar al hacer click fuera del panel
  document.addEventListener("click", (e) => {
    if (cartPanel.classList.contains("active")) {
      if (
        !cartPanel.contains(e.target) &&
        !cartToggle?.contains(e.target) &&
        !e.target.classList.contains("btn-add-cart") &&
        !e.target.classList.contains("btn-add-to-cart-large")
      ) {
        cartPanel.classList.remove("active");
      }
    }
  });
}

// Setup del checkout
function setupCheckout() {
  const btnCheckout = document.getElementById("btnCheckout");

  if (btnCheckout) {
    btnCheckout.addEventListener("click", () => {
      const cart = getCart();
      if (cart.length === 0) {
        showNotificationCart("⚠️ Tu carrito está vacío");
        return;
      }

      const total = getCartTotal();
      const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

      if (
        confirm(
          `🎮 ¿Confirmar compra en K-Game?\n\n📦 Total de juegos: ${itemCount}\n💰 Total a pagar: $${total.toFixed(
            2
          )}\n\n¿Proceder con la compra?`
        )
      ) {
        showNotificationCart(
          "✅ ¡Compra exitosa! Gracias por tu compra en K-Game 🎮"
        );
        clearCart();

        const cartPanel = document.getElementById("cartPanel");
        if (cartPanel) {
          setTimeout(() => {
            cartPanel.classList.remove("active");
          }, 1500);
        }
      }
    });
  }
}

// Setup del botón vaciar carrito
function setupClearCart() {
  const btnClearCart = document.getElementById("btnClearCart");

  if (btnClearCart) {
    btnClearCart.addEventListener("click", () => {
      const cart = getCart();
      if (cart.length === 0) {
        showNotificationCart("⚠️ El carrito ya está vacío");
        return;
      }

      if (
        confirm(
          "🗑️ ¿Estás seguro de que quieres vaciar tu carrito?\n\nEsta acción no se puede deshacer."
        )
      ) {
        clearCart();
        showNotificationCart("🗑️ Carrito vaciado correctamente");
      }
    });
  }
}

// Inicialización automática del carrito
function initCart() {
  updateCartCount();
  setupCartPanel();
  setupCheckout();
  setupClearCart();

  console.log("🛒 Sistema de carrito inicializado");
}

// Auto-inicializar cuando el DOM esté listo
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCart);
} else {
  initCart();
}
