document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const monthSelect = document.getElementById('month');
    const yearSelect = document.getElementById('year');
    const amountInput = document.getElementById('amount');
    const expenseChart = document.getElementById('expense-chart');

    let selectedMonth;
    let selectedYear;
    let myChart;

    // Generate year options dynamically
    for (let year = 2020; year <= 2040; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }

    // Initialize the expenses object with new categories
    const expenses = {
        January: { Housing: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        February: { Housing: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        March: { Housing: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        April: { Housing: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        May: { Housing: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        June: { Housing: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        July: { Housing: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        August: { Housing: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        September: { Housing: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        October: { Housing: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        November: { Housing: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        December: { Housing: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 }
    };

});
