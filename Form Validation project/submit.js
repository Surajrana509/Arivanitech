
function validateForm() {

    document.getElementById('firstNameError').innerText = '';
    document.getElementById('lastNameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('ageError').innerText = '';


    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;

    let isValid = false;

    if (firstname === '') {
        document.getElementById('firstNameError').innerText = 'First Name is required.';
        isValid = false;
        return false;
    } else if (!/^(?!\s*$)[A-Za-zÀ-ÖØ-ÿ' -]+$/.test(firstname)) {
        document.getElementById('firstNameError').innerText = 'Please enter a valid first name.';
        isValid = false;
        return false;
    }

    else if (lastname === '') {
        document.getElementById('lastNameError').innerText = 'Last name is required.';
        isValid = false;
        return false;
    } else if (!/^(?!\s*$)[A-Za-zÀ-ÖØ-ÿ' -]+$/.test(lastname)) {
        document.getElementById('lastNameError').innerText = 'Please enter a valid first name.';
        isValid = false;
        return false;
    }

    else if (age === '') {
        document.getElementById('ageError').innerText = 'Age is required.';
        isValid = false;
        return false;
    } else if (!/(^(?:[1-9][0-9]?|1[01][0-9]|120)$)+$/.test(age)) {
        document.getElementById('ageError').innerText = 'Please enter a valid age.';
        isValid = false;
        return false;
    }


    else if (email === '') {
        document.getElementById('emailError').innerText = 'Email is required.';
        isValid = false;
        return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        isValid = false;
        return false;
    }


    else if (isValid) {

        document.getElementById('successMessage').innerText = 'Form submitted successfully!';
        return true;
    } else {
        return false;
    }
}