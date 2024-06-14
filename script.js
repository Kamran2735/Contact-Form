document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Clear previous errors
    document.getElementById('firstNameError').innerText = '';
    document.getElementById('lastNameError').innerText = '';
    document.getElementById('addressError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('additionalInfoError').innerText = '';
    document.getElementById('formSuccess').innerText = '';

    // First name validation
    const firstName = document.getElementById('firstName').value;
    if (firstName.trim() === '') {
        document.getElementById('firstNameError').innerText = 'First name is required.';
        isValid = false;
    }

    // Last name validation
    const lastName = document.getElementById('lastName').value;
    if (lastName.trim() === '') {
        document.getElementById('lastNameError').innerText = 'Last name is required.';
        isValid = false;
    }

    // Address validation
    const address = document.getElementById('address').value;
    if (address.trim() === '') {
        document.getElementById('addressError').innerText = 'Address is required.';
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
        document.getElementById('emailError').innerText = 'Email is required.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email format.';
        isValid = false;
    }

    // Phone validation
    const phone = document.getElementById('phone').value;
    const phonePattern = /^\d{8}$|^\d{11}$/; // Pattern for 8 or 11 digits
    if (phone.trim() === '') {
        document.getElementById('phoneError').innerText = 'Phone is required.';
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').innerText = 'Phone must be 8 or 11 digits.';
        isValid = false;
    }

    // Additional information validation
    const additionalInfo = document.getElementById('additionalInfo').value;
    if (additionalInfo.trim() === '') {
        document.getElementById('additionalInfoError').innerText = 'Additional information is required.';
        isValid = false;
    }

    // If form is valid
    if (isValid) {
        document.getElementById('formSuccess').innerText = 'Form submitted successfully!';
    }
});
