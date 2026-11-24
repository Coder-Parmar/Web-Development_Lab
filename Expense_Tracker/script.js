
let expenses = [];

function addExpense() {
    let name = document.getElementById("name").value.trim();
    let amount = Number(document.getElementById("amount").value);
    let category = document.getElementById("category").value;

    if (name === "" || document.getElementById("amount").value === "") {
        alert("Please fill all fields!");
        return;
    }

    if (!Number.isFinite(amount) || amount <= 0) {
        alert("Please enter a valid amount!");
        return;
    }

    let expense = {
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(expense);

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";

    displayExpenses();
}

function displayExpenses() {
    let list = document.getElementById("expenseList");
    let filter = document.getElementById("filter").value;

    list.innerHTML = "";

    let total = 0;

    expenses.forEach(function(expense, index) {

        total += expense.amount;

        if (filter === "All" || filter === expense.category) {

            let div = document.createElement("div");
            div.className = "expense";

            div.innerHTML = `
                <div>
                    <strong>${expense.name}</strong><br>
                    ₹${expense.amount}<br>
                    ${expense.category}
                </div>

                <button onclick="deleteExpense(${index})">
                    Delete
                </button>
            `;

            list.appendChild(div);
        }
    });

    document.getElementById("total").innerText = total.toFixed(2);
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    displayExpenses();
}
