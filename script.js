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


    // Load expenses
    function getExpensesFromLocalStorage(month, year) {
        const key = `${month}-${year}`;
        return JSON.parse(localStorage.getItem(key)) || {};
    }

    // Save expenses
    function saveExpensesToLocalStorage(month, year) {
        const key = `${month}-${year}`;
        localStorage.setItem(key, JSON.stringify(expenses[month]));
    }

    // Get selected month & year
    function getSelectedMonthYear() {
        selectedMonth = monthSelect.value;
        selectedYear = yearSelect.value;
    
        if (!selectedMonth || !selectedYear) {
            alert('Month or year not selected');
            return;
        }
    
        if (!expenses[selectedMonth]) {
            expenses[selectedMonth] = { Housing: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 };
        }
    } 

    // Visual data in chart
    function updateChart() {
        getSelectedMonthYear();

        // Update expenses object with the loaded data
        const expenseData = getExpensesFromLocalStorage(selectedMonth, selectedYear);
        Object.assign(expenses[selectedMonth], expenseData);

        const ctx = expenseChart.getContext('2d');

        if (myChart) {
            myChart.destroy();
        }

        myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(expenses[selectedMonth]),
                datasets: [{
                    data: Object.values(expenses[selectedMonth]),
                    backgroundColor: [
                        '#FF6384', // Housing
                        '#4CAF50', // Food
                        '#FFCE56', // Transportation
                        '#36A2EB', // Bills
                        '#FF9F40'  // Miscellaneous
                    ],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                return `${tooltipItem.label}: $${tooltipItem.raw}`;
                            }
                        }
                    }
                }
            }
        });
    }
