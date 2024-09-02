function appendValue(value) {
    if(isNaN(value) && value!='+' && value!='-' && value!='.' && value!='*' && value!='/' && value!='off' && value!='M+' && value!='M-' )
    {
        alert('Invalid Value..');
        return
    }
    document.getElementById('display').value += value;
}


function clearDisplay() {
    document.getElementById('display').value = '';
}


function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error'; 
    }
}

