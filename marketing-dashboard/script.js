document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            if (page) {
                window.location.href = page;
            }
        });
    });

    // Initialize charts based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';
    
    if (currentPage === 'dashboard.html' || currentPage === '' || currentPage === 'index.html') {
        initDashboardCharts();
    } else if (currentPage === 'ecommerce.html') {
        initEcommerceCharts();
    } else if (currentPage === 'crm.html') {
        initCRMCharts();
    }
});

function initDashboardCharts() {
    // Revenue Chart
    if (document.getElementById('revenueChart')) {
        const revenueChart = new Chart(document.getElementById('revenueChart').getContext('2d'), {
            type: 'bar',
            data: {
                labels: Array.from({length: 30}, (_, i) => i + 1),
                datasets: [
                    {
                        label: 'Revenue',
                        data: Array.from({length: 30}, () => Math.floor(Math.random() * 1000) + 200),
                        backgroundColor: '#4a90e2',
                        borderColor: '#4a90e2',
                        borderWidth: 1
                    },
                    {
                        label: 'Target',
                        data: Array.from({length: 30}, () => Math.floor(Math.random() * 300) + 700),
                        backgroundColor: '#2ecc71',
                        borderColor: '#2ecc71',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 1500
                    }
                }
            }
        });
    }
    
    // Visitor Chart
    if (document.getElementById('visitorChart')) {
        const visitorChart = new Chart(document.getElementById('visitorChart').getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [
                    {
                        label: 'New Customers',
                        data: [50, 60, 45, 80, 60, 75, 40],
                        borderColor: '#e74c3c',
                        tension: 0.4,
                        fill: false
                    },
                    {
                        label: 'Loyal Customers',
                        data: [70, 90, 85, 60, 75, 65, 80],
                        borderColor: '#9b59b6',
                        tension: 0.4,
                        fill: false
                    },
                    {
                        label: 'Unique Customers',
                        data: [40, 70, 90, 50, 80, 90, 70],
                        borderColor: '#2ecc71',
                        tension: 0.4,
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    
    // Target Chart
    if (document.getElementById('targetChart')) {
        const targetChart = new Chart(document.getElementById('targetChart').getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['A', 'B', 'C', 'D', 'E'],
                datasets: [
                    {
                        label: 'Actual (units)',
                        data: [250, 600, 450, 300, 200],
                        backgroundColor: '#f39c12',
                        barPercentage: 0.6
                    },
                    {
                        type: 'line',
                        label: 'Target (units)',
                        data: [300, 400, 350, 250, 400],
                        borderColor: '#3498db',
                        fill: false,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 700
                    }
                }
            }
        });
    }
    
    // Satisfaction Chart
    if (document.getElementById('satisfactionChart')) {
        const satisfactionChart = new Chart(document.getElementById('satisfactionChart').getContext('2d'), {
            type: 'pie',
            data: {
                labels: ['Satisfied', 'Unsatisfied'],
                datasets: [{
                    data: [65, 35],
                    backgroundColor: ['#3498db', '#e74c3c'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right'
                    }
                }
            }
        });
    }
}

function initEcommerceCharts() {
    // Sales Analytics Chart
    if (document.getElementById('salesAnalyticsChart')) {
        const salesAnalyticsChart = new Chart(document.getElementById('salesAnalyticsChart').getContext('2d'), {
            type: 'line',
            data: {
                labels: Array.from({length: 12}, (_, i) => `Week ${i+1}`),
                datasets: [
                    {
                        label: 'Income',
                        data: [300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850],
                        borderColor: 'rgba(255, 255, 255, 0.7)',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Sales',
                        data: [100, 300, 200, 100, 150, 250, 300, 200, 100, 200, 300, 400],
                        borderColor: '#f39c12',
                        backgroundColor: 'transparent',
                        fill: false,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
    
    // Product Sales Chart
    if (document.getElementById('productSalesChart')) {
        const productSalesChart = new Chart(document.getElementById('productSalesChart').getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Sales',
                    data: [30, 40, 35, 50, 49, 60, 90],
                    backgroundColor: '#9d65c9',
                    borderWidth: 0,
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
}

function initCRMCharts() {
    // Monthly Sales Chart
    if (document.getElementById('monthlySalesChart')) {
        const monthlySalesChart = new Chart(document.getElementById('monthlySalesChart').getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Product A',
                        data: [120, 150, 80, 70, 60, 50, 40, 90, 60, 70, 80, 120],
                        backgroundColor: '#3498db',
                        stack: 'Stack 0'
                    },
                    {
                        label: 'Product B',
                        data: [20, 30, 20, 15, 20, 15, 10, 20, 15, 20, 30, 40],
                        backgroundColor: '#9b59b6',
                        stack: 'Stack 0'
                    },
                    {
                        label: 'Product C',
                        data: [10, 15, 5, 5, 10, 5, 5, 10, 5, 10, 15, 20],
                        backgroundColor: '#2ecc71',
                        stack: 'Stack 0'
                    },
                    {
                        label: 'Product D',
                        data: [5, 10, 5, 2, 5, 2, 2, 5, 2, 5, 10, 15],
                        backgroundColor: '#34495e',
                        stack: 'Stack 0'
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        stacked: true
                    },
                    y: {
                        stacked: true,
                        beginAtZero: true
                    }
                }
            }
        });
    }
    
    // Deal Revenue Chart
    if (document.getElementById('dealRevenueChart')) {
        const dealRevenueChart = new Chart(document.getElementById('dealRevenueChart').getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['Completed', 'Remaining'],
                datasets: [{
                    data: [70, 30],
                    backgroundColor: ['#3498db', '#ecf0f1'],
                    borderWidth: 0,
                    cutout: '80%'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                }
            }
        });
    }
}