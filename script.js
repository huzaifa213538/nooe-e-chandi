/* =====================================
   NOORE-E-CHANDI ORDER SYSTEM SCRIPT
   Handles:
   - Product selection
   - Modal popup
   - UPI payment link
   - Customer form validation
   - Order confirmation
===================================== */


/* ========= SETTINGS ========= */

const UPI_ID = "9821201453@ptyes";
const BUSINESS_NAME = "Noore-e-Chandi";


/* ========= GLOBAL VARIABLES ========= */

let selectedProductName = "";
let selectedProductPrice = 0;


/* ========= GET MODAL ELEMENTS ========= */

const modal = document.getElementById("orderModal");
const productText = document.getElementById("selectedProduct");
const upiButton = document.getElementById("upiButton");
const orderForm = document.getElementById("orderForm");


/* ========= OPEN ORDER MODAL ========= */

function openOrder(productName, price) {

    selectedProductName = productName;
    selectedProductPrice = price;

    modal.style.display = "flex";

    productText.innerHTML =
        `<strong>Product:</strong> ${productName} <br>
         <strong>Amount:</strong> ₹${price}`;

    const upiLink =
        `upi://pay?pa=${UPI_ID}&pn=${BUSINESS_NAME}&am=${price}&cu=INR`;

    upiButton.href = upiLink;
}


/* ========= CLOSE MODAL ========= */

function closeModal() {

    modal.style.display = "none";

}


/* ========= CLOSE MODAL ON OUTSIDE CLICK ========= */

window.onclick = function (event) {

    if (event.target === modal) {

        modal.style.display = "none";

    }

};


/* ========= FORM SUBMISSION ========= */

orderForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = orderForm.querySelector("input[type='text']").value.trim();
    const email = orderForm.querySelector("input[type='email']").value.trim();
    const phone = orderForm.querySelector("input[type='tel']").value.trim();
    const address = orderForm.querySelector("textarea").value.trim();


    /* VALIDATION */

    if (!name || !email || !phone || !address) {

        alert("Please fill all details before confirming order.");

        return;

    }


    /* SUCCESS MESSAGE */

    alert(
        "Thank you " +
        name +
        "! Your order for " +
        selectedProductName +
        " has been received.\n\nWe will confirm shortly."
    );


    /* OPTIONAL: SAVE ORDER LOCALLY */

    const orderData = {

        product: selectedProductName,
        price: selectedProductPrice,
        customerName: name,
        email: email,
        phone: phone,
        address: address,
        date: new Date().toLocaleString()

    };

    console.log("New Order:", orderData);


    /* RESET FORM */

    orderForm.reset();

    closeModal();

});


/* ========= FUTURE EMAILJS SUPPORT READY ========= */
/*
Uncomment later when EmailJS added

emailjs.send("service_id","template_id",{
    customer_name:name,
    customer_email:email,
    product:selectedProductName,
    price:selectedProductPrice
});
*/


/* ========= FUTURE FIREBASE SUPPORT READY ========= */
/*
Example Firestore save structure

addDoc(collection(db,"orders"),{
    name,
    email,
    phone,
    address,
    product:selectedProductName,
    price:selectedProductPrice,
    createdAt:serverTimestamp()
});
*/
 
