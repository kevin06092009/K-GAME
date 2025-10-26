// ============================================
// SISTEMA DE CARRITO DE COMPRAS K-GAME
// ============================================

// Clase para gestionar el carrito
class Cart {
  constructor() {
    this.items = this.loadCart();
    this.listeners = [];
  }

  // Cargar carrito desde localStorage
  loadCart() {
    const savedCart = localStorage.getItem("kgame_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  }

  // Guardar carrito en localStorage
  saveCart() {
    localStorage.setItem("kgame_cart", JSON.stringify(this.items));
    this.notifyListeners();
  }

  // Agregar producto al carrito
  addItem(game, quantity = 1) {
    const existingItem = this.items.find((item) => item.id === game.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        id: game.id,
        title: game.title,
        price: game.price,
        image: game.image,
        quantity: quantity,
      });
    }

    this.saveCart();
    this.showNotification(`${game.title} agregado al carrito`);
  }

  // Actualizar cantidad de un producto
  updateQuantity(id, quantity) {
    const item = this.items.find((item) => item.id === id);

    if (item) {
      if (quantity <= 0) {
        this.removeItem(id);
      } else {
        item.quantity = quantity;
        this.saveCart();
      }
    }
  }

  // Eliminar producto del carrito
  removeItem(id) {
    const index = this.items.findIndex((item) => item.id === id);

    if (index !== -1) {
      const removedItem = this.items[index];
      this.items.splice(index, 1);
      this.saveCart();
      this.showNotification(`${removedItem.title} eliminado del carrito`);
    }
  }

  // Vaciar carrito
  clearCart() {
    this.items = [];
    this.saveCart();
    this.showNotification("Carrito vaciado");
  }

  // Calcular total del carrito
  getTotal() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  // Obtener número total de productos
  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  // Agregar listener para cambios en el carrito
  addListener(callback) {
    this.listeners.push(callback);
  }

  // Notificar a todos los listeners
  notifyListeners() {
    this.listeners.forEach((callback) => callback(this));
  }

  // Mostrar notificación
  showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = "slideInRight 0.4s ease reverse";
      setTimeout(() => notification.remove(), 400);
    }, 3000);
  }
}

// Crear instancia global del carrito
const cart = new Cart();

// Función para inicializar el carrito en la página
function initCart() {
  // Actualizar contador del carrito
  updateCartCount();

  // Configurar botón del carrito
  const cartToggle = document.getElementById("cartToggle");
  const cartPanel = document.getElementById("cartPanel");
  const closeCart = document.getElementById("closeCart");

  if (cartToggle && cartPanel) {
    cartToggle.addEventListener("click", () => {
      cartPanel.classList.add("active");
      renderCartItems();
    });
  }

  if (closeCart && cartPanel) {
    closeCart.addEventListener("click", () => {
      cartPanel.classList.remove("active");
    });
  }

  // Cerrar carrito al hacer clic fuera
  document.addEventListener("click", (e) => {
    if (
      cartPanel &&
      cartPanel.classList.contains("active") &&
      !cartPanel.contains(e.target) &&
      !cartToggle.contains(e.target)
    ) {
      cartPanel.classList.remove("active");
    }
  });

  // Configurar botón de vaciar carrito
  const btnClearCart = document.getElementById("btnClearCart");
  if (btnClearCart) {
    btnClearCart.addEventListener("click", () => {
      if (confirm("¿Estás seguro de que quieres vaciar el carrito?")) {
        cart.clearCart();
        renderCartItems();
      }
    });
  }

  // Configurar botón de checkout
  const btnCheckout = document.getElementById("btnCheckout");
  if (btnCheckout) {
    btnCheckout.addEventListener("click", () => {
      if (cart.items.length === 0) {
        cart.showNotification("Tu carrito está vacío");
        return;
      }

      // Aquí iría la lógica de checkout
      cart.showNotification("Procesando pedido...");

      // Simulación de proceso de checkout
      setTimeout(() => {
        cart.showNotification("¡Pedido realizado con éxito!");
        cart.clearCart();
        renderCartItems();

        // Cerrar panel del carrito
        if (cartPanel) {
          cartPanel.classList.remove("active");
        }
      }, 2000);
    });
  }

  // Agregar listener para actualizar la UI cuando cambie el carrito
  cart.addListener(() => {
    updateCartCount();
    renderCartItems();
  });
}

// Función para actualizar el contador del carrito
function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  if (cartCount) {
    const count = cart.getItemCount();
    cartCount.textContent = count;
    cartCount.style.display = count > 0 ? "inline-block" : "none";
  }
}

// Función para renderizar los items del carrito
function renderCartItems() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  if (!cartItems) return;

  if (cart.items.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <h3>Tu carrito está vacío</h3>
        <p>Agrega algunos juegos para comenzar</p>
      </div>
    `;
  } else {
    cartItems.innerHTML = cart.items
      .map(
        (item) => `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.image}" alt="${item.title}" class="cart-item-image">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-price">$${item.price.toFixed(2)}</div>
          <div class="cart-item-controls">
            <button class="quantity-btn decrease-quantity" data-id="${
              item.id
            }">-</button>
            <span class="cart-item-quantity">${item.quantity}</span>
            <button class="quantity-btn increase-quantity" data-id="${
              item.id
            }">+</button>
            <button class="btn-remove-item" data-id="${
              item.id
            }">Eliminar</button>
          </div>
        </div>
      </div>
    `
      )
      .join("");

    // Agregar eventos a los botones de cantidad
    document.querySelectorAll(".decrease-quantity").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const item = cart.items.find((item) => item.id === id);
        if (item) {
          cart.updateQuantity(id, item.quantity - 1);
        }
      });
    });

    document.querySelectorAll(".increase-quantity").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const item = cart.items.find((item) => item.id === id);
        if (item) {
          cart.updateQuantity(id, item.quantity + 1);
        }
      });
    });

    // Agregar eventos a los botones de eliminar
    document.querySelectorAll(".btn-remove-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        cart.removeItem(id);
      });
    });
  }

  // Actualizar total
  if (cartTotal) {
    cartTotal.textContent = `$${cart.getTotal().toFixed(2)}`;
  }
}

// Función para agregar un juego al carrito (usada en tienda.html y game.html)
function addToCart(gameId) {
  const game = getGameById(gameId);
  if (game) {
    cart.addItem(game);
  }
}

// Inicializar el carrito cuando el DOM esté listo
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCart);
} else {
  initCart();
}
