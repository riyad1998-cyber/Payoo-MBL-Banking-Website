const validPin = 2178; 
//Function to get input values

function getInputValueNumber (id){
    const inputField = document.getElementById(id);
    const inputFieldValue =  inputField.value;
    const InputFieldValueNumber = parseInt(inputFieldValue);
    return InputFieldValueNumber;
}

function getInputValue(id){
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    return inputFieldValue;
}

// functions to get unnerText
function getInnerText (id){
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    const elementvalueNumber = parseInt(elementValue);
    return elementvalueNumber;
}

//function to set innerText
function setInnerText (value){
    const availableBalanceElement = document.getElementById('available-balance')
    availableBalanceElement.innerText = value;
}

// fnction to toggle
function handleToggle (id){
    const forms = document.getElementsByClassName('form');
    for(const form of forms){
        form.style.display= 'none';
    }
    document.getElementById(id).style.display = 'block';
}



//Add Money Feature
document.getElementById('add-money-button').addEventListener('click',function(e){
    e.preventDefault();
    const bank = getInputValue('bank');
    const accountNumber = document.getElementById('account-number').value;
    const amount = getInputValueNumber('add-amount');

    const pin = getInputValueNumber ('pin-number');
    const availableBalance = getInnerText('available-balance');
    const newAvailableBalance = amount + availableBalance;
    setInnerText(newAvailableBalance);
    if(accountNumber.length < 11){
    alert('Please put a valid account number');
    return;
    }
    if(pin !== validPin){
        alert('Please Provide Valid Pin Number')
        return;
    }
})

//CashOut Money Feature
document.getElementById('withdeaw-btn').addEventListener('click', function(e){
    e.preventDefault();
    const withdrawAmount = getInputValueNumber('withdraw-amount');
    const availableBalance = getInnerText('available-balance');
    const updatedBalance = availableBalance - withdrawAmount;
    setInnerText(updatedBalance);
})


// Toggling Feature

document.getElementById('add-money-btn').addEventListener('click', function(){
    handleToggle ('add-money-parent')

    const formBtn = document.getElementsByClassName('form-Btn')
    for(const btn of formBtn){
        btn.classList.remove('border-[#0874f2]','bg-[#0874f20d]');
     btn.classList.add('border-gray-300');
    }
    document.getElementById('add-money-btn').classList.remove('border-gray-300')

    document.getElementById('add-money-btn').classList.add('border-[#0874f2]','bg-[#0874f20d]')
})

document.getElementById('cashout-btn').addEventListener('click', function(){

     handleToggle('cash-out-parent')
     const formBtn = document.getElementsByClassName('form-Btn')
    for(const btn of formBtn){
        btn.classList.remove('border-[#0874f2]','bg-[#0874f20d]');
    btn.classList.add('border-gray-300');
    }
    document.getElementById('cashout-btn').classList.remove('border-gray-300')

    document.getElementById('cashout-btn').classList.add('border-[#0874f2]','bg-[#0874f20d]')
})

document.getElementById('transfer-button').addEventListener('click', function(){

     handleToggle('transfer-money-parent')
     const formBtn = document.getElementsByClassName('form-Btn')
    for(const btn of formBtn){
        btn.classList.remove('border-[#0874f2]','bg-[#0874f20d]');
    btn.classList.add('border-gray-300');
    }
    document.getElementById('transfer-button').classList.remove('border-gray-300')

    document.getElementById('transfer-button').classList.add('border-[#0874f2]','bg-[#0874f20d]')
})

document.getElementById('bonus-button').addEventListener('click', function(){

    handleToggle('get-bonus-parent')
    const formBtn = document.getElementsByClassName('form-Btn')
    for(const btn of formBtn){
        btn.classList.remove('border-[#0874f2]','bg-[#0874f20d]');
    btn.classList.add('border-gray-300');
    }
    document.getElementById('bonus-button').classList.remove('border-gray-300')

    document.getElementById('bonus-button').classList.add('border-[#0874f2]','bg-[#0874f20d]')
})