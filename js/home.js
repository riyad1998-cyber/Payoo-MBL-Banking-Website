const validPin = 2178; 
const transactionData = []
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

//functions to toggle buttons
function handleBtnToggle (id){
    const formBtn = document.getElementsByClassName('form-Btn')
    for(const btn of formBtn){
        btn.classList.remove('border-[#0874f2]','bg-[#0874f20d]');
     btn.classList.add('border-gray-300');
    }
    document.getElementById(id).classList.remove('border-gray-300')

    document.getElementById(id).classList.add('border-[#0874f2]','bg-[#0874f20d]')
}

//Add Money Feature
document.getElementById('add-money-button').addEventListener('click',function(e){
    e.preventDefault();
    const bank = getInputValue('bank');
    const accountNumber = document.getElementById('account-number').value;
    const amount = getInputValueNumber('add-amount');

    if (amount<= 0){
        alert('Invalid Amount');
        return;
    }

    const pin = getInputValueNumber ('pin-number');
    const availableBalance = getInnerText('available-balance');
    const newAvailableBalance = amount + availableBalance;
    setInnerText(newAvailableBalance);

    const data = {
        name: "Add money",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data);

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

    if(withdrawAmount <= 0 || withdrawAmount > availableBalance){
        alert('Invalid Amount');
        return;
    }

    const updatedBalance = availableBalance - withdrawAmount;
    setInnerText(updatedBalance);

    const data = {
        name: "Cash Out",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data);
})



document.getElementById('transactions-button').addEventListener('click',function(){
    handleToggle('transactions-parent');
    handleBtnToggle('transactions-button');

    const transactionsContainer = document.getElementById('transaction-container');
    transactionsContainer.innerHTML = '';
    for(const data of transactionData ){
        const div = document.createElement('div')
        div.innerHTML = `
        <div class=" bg-white rounded-xl p-3 flex justify-between items-center mb-2">
            <div class="flex items-center mt-3">
                <div class=" p-3 rounded-full bg-[#F4F5F7]">
                    <img class="mx-auto" src="./assets/wallet1.png" alt="">
                </div>
                <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        `
       transactionsContainer.appendChild(div);
    }
})


// Toggling Feature

document.getElementById('add-money-btn').addEventListener('click', function(){
    handleToggle ('add-money-parent');
    handleBtnToggle ('add-money-btn');

})

document.getElementById('cashout-btn').addEventListener('click', function(){

     handleToggle('cash-out-parent');
    handleBtnToggle ('cashout-btn');
})

document.getElementById('transfer-button').addEventListener('click', function(){

     handleToggle('transfer-money-parent');
     handleBtnToggle ('transfer-button');
})

document.getElementById('bonus-button').addEventListener('click', function(){

    handleToggle('get-bonus-parent');
  handleBtnToggle ('bonus-button');
})
document.getElementById('pay-bill-button').addEventListener('click', function(){

    handleToggle('pay-bill-parent');
  handleBtnToggle ('pay-bill-button');
})
document.getElementById('transactions-button').addEventListener('click', function(){

    handleToggle('transactions-parent');
  handleBtnToggle ('transactions-button');
})