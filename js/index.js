let total = 0;

function handleClikbtn(target){
    const selectedItemContainer = document.getElementById("selected-items");
    const itemName = target.parentNode.childNodes[1].innerText;
    const ol = document.createElement("ol");
    ol.innerText = itemName;
    selectedItemContainer.appendChild(ol)
    

    const price = target.parentNode.childNodes[3].innerText.split(" ")[0];

    total = parseInt(total) + parseInt(price);

    document.getElementById("total").innerText = total ;

    
}

document.addEventListener('DOMContentLoaded', function (){
    const minTotal = 200;
})

const validCoupons = {
    "SELL200": 0.2, 
    
  };
  
  
  function applyCoupon() {
    const couponInput = document.getElementById("couponCode").value;
    const discountApplied = validCoupons[couponInput];
  
    if (discountApplied) {
      
      const total = parseFloat(document.getElementById("total").innerText);
      const discountedAmount = total* (1 - discountApplied);
  
      
      document.getElementById("total").innerText = discountedAmount.toFixed(2);
  
     
      alert("Coupon applied successfully!");
    } else {
      alert("Invalid coupon code. Please try again.");
    }
  }
  
  
  document.getElementById("applyCoupon").addEventListener("click", applyCoupon);
  