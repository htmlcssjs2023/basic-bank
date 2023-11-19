// handle deposit button event

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
   
    const depositTotal = document.getElementById("deposit-total");
    const previusDepositText = depositTotal.innerText;
    const previusDepositAmount = parseFloat(previusDepositText);

    const newDepositTotal = previusDepositAmount + newDepositAmount;
  
    depositTotal.innerText = newDepositTotal;

    // balance function 

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceText);

    const newBalanceTotal = previousBalance + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    // Clear the deposit input Field;
    depositInput.value = "";
  });


  document.getElementById('withdraw-button').addEventListener('click',function(){
    // console.log('clicked withdraw');

    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawText = withdrawInput.value;
    const newwithdrawAmount = parseFloat(newWithdrawText);

    const totalWithdraw = document.getElementById('withdraw-total');
    const previousWithdrawText = totalWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);


    const newWithdrawTotalBalance = previousWithdrawAmount + newwithdrawAmount;

    totalWithdraw.innerText = newWithdrawTotalBalance;

    const totalBalance = document.getElementById('balance-total');
    const needBlance = totalBalance.innerText;
    const currentBalance = parseFloat(needBlance);

   const blance = currentBalance - newwithdrawAmount ;
   totalBalance.innerText = blance;


    withdrawInput.value = '';
    
    
  })
