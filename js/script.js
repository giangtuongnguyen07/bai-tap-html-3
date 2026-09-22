// LOWLANDS COFFEE - JavaScript hỗ trợ nút "Đặt món"
const cart = [];

const formatVND = (number) =>
    new Intl.NumberFormat("vi-VN").format(number) + "đ";

function renderCart() {
    const cartList = document.getElementById("cartList");
    const cartMessage = document.getElementById("cartMessage");
    const cartTotal = document.getElementById("cartTotal");

    cartList.innerHTML = "";

    if (cart.length === 0) {
        cartMessage.textContent = "Chưa có món nào được chọn.";
        cartTotal.textContent = "0đ";
        return;
    }

    cartMessage.textContent = "Các món bạn vừa chọn:";

    let total = 0;

    cart.forEach((item) => {
        total += item.price;

        const li = document.createElement("li");
        li.textContent = `${item.name} — ${formatVND(item.price)}`;
        cartList.appendChild(li);
    });

    cartTotal.textContent = formatVND(total);
}

document.querySelectorAll(".order-btn").forEach((button) => {
    button.addEventListener("click", () => {
        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        cart.push({ name, price });
        renderCart();

        button.textContent = "Đã thêm ✓";
        setTimeout(() => {
            button.textContent = "Đặt món";
        }, 900);
    });
});

renderCart();
