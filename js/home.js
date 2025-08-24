const validPin = 2178; 
//Add Money Feature
document.getElementById('add-money-button').addEventListener('click',function(e){
    e.preventDefault();
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const amount = parseInt(document.getElementById('add-amount').value);

    const pin = parseInt(document.getElementById('pin-number').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    const newAvailableBalance = amount + availableBalance;
    document.getElementById('available-balance').innerText =newAvailableBalance;

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
    const withdrawAmount = parseInt(document.getElementById('withdraw-amount').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const updatedBalance = availableBalance - withdrawAmount;
    document.getElementById('available-balance').innerText = updatedBalance;
})


// Toggling Feature

document.getElementById('add-money-btn').addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'block';
})
document.getElementById('cashout-btn').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('cash-out-parent').style.display = 'block';
    
})
