function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Show the home section by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});

document.addEventListener('DOMContentLoaded', function() {
    const yearSelect = document.getElementById('yearSelect');
    const dateSelect = document.getElementById('dateSelect');
    const currentYear = new Date().getFullYear();

    // Populate years (current year and next 10 years)
    for (let i = 0; i <= 10; i++) {
        const yearOption = document.createElement('option');
        yearOption.value = currentYear + i;
        yearOption.text = currentYear + i;
        yearSelect.appendChild(yearOption);
    }

    // Populate dates (1 to 31)
    for (let i = 1; i <= 31; i++) {
        const dateOption = document.createElement('option');
        dateOption.value = i;
        dateOption.text = i;
        dateSelect.appendChild(dateOption);
    }

    // Update dates based on selected month and year
    yearSelect.addEventListener('change', updateDates);
    document.getElementById('monthSelect').addEventListener('change', updateDates);

    function updateDates() {
        const selectedYear = parseInt(yearSelect.value);
        const selectedMonth = parseInt(document.getElementById('monthSelect').value);
        const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();

        // Clear existing date options
        dateSelect.innerHTML = '';

        // Populate date options based on selected month and year
        for (let i = 1; i <= daysInMonth; i++) {
            const dateOption = document.createElement('option');
            dateOption.value = i;
            dateOption.text = i;
            dateSelect.appendChild(dateOption);
        }
    }
});

function validateForm() {
    let isValid = true;
    const alertContainer = document.getElementById('alertContainer');
    alertContainer.innerHTML = '';

    const fields = [
        'firstName',
        'lastName',
        'email',
        'phone',
        'serviceSelect',
        'expertSelect',
        'yearSelect',
        'monthSelect',
        'dateSelect',
        'timeSelect'
    ];

    fields.forEach(id => {
        const element = document.getElementById(id);
        if (!element.value) {
            isValid = false;
        }
    });

    if (!isValid) {
        const alert = document.createElement('div');
        alert.className = 'alert alert-primary';
        alert.role = 'alert';
        alert.innerText = 'Please fill in all the fields.';
        alertContainer.appendChild(alert);
    } else {
        alert('Appointment booked successfully!');
    }
}

function openAppointment1(serviceName) {
    // Show the appointment section
    showSection('appointment');

    // Preselect the service in the appointment form
    const serviceInput = document.getElementById('serviceSelect');
    Array.from(serviceInput.options).forEach(option => {
        if (option.value === serviceName) {
            option.selected = true;
        }
    });
}

function openAppointment2(expertName) {
    // Show the appointment section
    showSection('appointment');

    // Preselect the service in the appointment form
    const expertInput = document.getElementById('expertSelect');
    Array.from(expertInput.options).forEach(option => {
        if (option.value === expertName) {
            option.selected = true;
        }
    });
}