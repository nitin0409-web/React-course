import "./checkout-header.css";
import "./CheckoutPage.css";

export function CheckoutPage() {
  return (
    <>
      <title>Checkout</title>

      <div classname="checkout-header">
        <div classname="header-content">
          <div classname="checkout-header-left-section">
            <a href="/">
              <img classname="logo" src="images/logo.png" />
              <img classname="mobile-logo" src="images/mobile-logo.png" />
            </a>
          </div>

          <div classname="checkout-header-middle-section">
            Checkout (
            <a classname="return-to-home-link" href="/">
              3 items
            </a>
            )
          </div>

          <div classname="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div classname="checkout-page">
        <div classname="page-title">Review your order</div>

        <div classname="checkout-grid">
          <div classname="order-summary">
            <div classname="cart-item-container">
              <div classname="delivery-date">
                Delivery date: Tuesday, June 21
              </div>

              <div classname="cart-item-details-grid">
                <img
                  classname="product-image"
                  src="images/products/athletic-cotton-socks-6-pairs.jpg"
                />

                <div classname="cart-item-details">
                  <div classname="product-name">
                    Black and Gray Athletic Cotton Socks - 6 Pairs
                  </div>
                  <div classname="product-price">$10.90</div>
                  <div classname="product-quantity">
                    <span>
                      Quantity: <span classname="quantity-label">2</span>
                    </span>
                    <span classname="update-quantity-link link-primary">
                      Update
                    </span>
                    <span classname="delete-quantity-link link-primary">
                      Delete
                    </span>
                  </div>
                </div>

                <div classname="delivery-options">
                  <div classname="delivery-options-title">
                    Choose a delivery option:
                  </div>
                  <div classname="delivery-option">
                    <input
                      type="radio"
                      checked
                      classname="delivery-option-input"
                      name="delivery-option-1"
                    />
                    <div>
                      <div classname="delivery-option-date">
                        Tuesday, June 21
                      </div>
                      <div classname="delivery-option-price">FREE Shipping</div>
                    </div>
                  </div>
                  <div classname="delivery-option">
                    <input
                      type="radio"
                      classname="delivery-option-input"
                      name="delivery-option-1"
                    />
                    <div>
                      <div classname="delivery-option-date">
                        Wednesday, June 15
                      </div>
                      <div classname="delivery-option-price">
                        $4.99 - Shipping
                      </div>
                    </div>
                  </div>
                  <div classname="delivery-option">
                    <input
                      type="radio"
                      classname="delivery-option-input"
                      name="delivery-option-1"
                    />
                    <div>
                      <div classname="delivery-option-date">
                        Monday, June 13
                      </div>
                      <div classname="delivery-option-price">
                        $9.99 - Shipping
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div classname="cart-item-container">
              <div classname="delivery-date">
                Delivery date: Wednesday, June 15
              </div>

              <div classname="cart-item-details-grid">
                <img
                  classname="product-image"
                  src="images/products/intermediate-composite-basketball.jpg"
                />

                <div classname="cart-item-details">
                  <div classname="product-name">
                    Intermediate Size Basketball
                  </div>
                  <div classname="product-price">$20.95</div>
                  <div classname="product-quantity">
                    <span>
                      Quantity: <span classname="quantity-label">1</span>
                    </span>
                    <span classname="update-quantity-link link-primary">
                      Update
                    </span>
                    <span classname="delete-quantity-link link-primary">
                      Delete
                    </span>
                  </div>
                </div>

                <div classname="delivery-options">
                  <div classname="delivery-options-title">
                    Choose a delivery option:
                  </div>

                  <div classname="delivery-option">
                    <input
                      type="radio"
                      classname="delivery-option-input"
                      name="delivery-option-2"
                    />
                    <div>
                      <div classname="delivery-option-date">
                        Tuesday, June 21
                      </div>
                      <div classname="delivery-option-price">FREE Shipping</div>
                    </div>
                  </div>
                  <div classname="delivery-option">
                    <input
                      type="radio"
                      checked
                      classname="delivery-option-input"
                      name="delivery-option-2"
                    />
                    <div>
                      <div classname="delivery-option-date">
                        Wednesday, June 15
                      </div>
                      <div classname="delivery-option-price">
                        $4.99 - Shipping
                      </div>
                    </div>
                  </div>
                  <div classname="delivery-option">
                    <input
                      type="radio"
                      classname="delivery-option-input"
                      name="delivery-option-2"
                    />
                    <div>
                      <div classname="delivery-option-date">
                        Monday, June 13
                      </div>
                      <div classname="delivery-option-price">
                        $9.99 - Shipping
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div classname="payment-summary">
            <div classname="payment-summary-title">Payment Summary</div>

            <div classname="payment-summary-row">
              <div>Items (3):</div>
              <div classname="payment-summary-money">$42.75</div>
            </div>

            <div classname="payment-summary-row">
              <div>Shipping &amp; handling:</div>
              <div classname="payment-summary-money">$4.99</div>
            </div>

            <div classname="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
              <div classname="payment-summary-money">$47.74</div>
            </div>

            <div classname="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div classname="payment-summary-money">$4.77</div>
            </div>

            <div classname="payment-summary-row total-row">
              <div>Order total:</div>
              <div classname="payment-summary-money">$52.51</div>
            </div>

            <button classname="place-order-button button-primary">
              Place your order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
