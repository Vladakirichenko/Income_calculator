// Incomes

const incomeSalary = document.getElementById('income-salary'),
      incomeFreelance = document.getElementById('income-freelance'),
      incomeExtra1 = document.getElementById('income-extra-1'),
      incomeExtra2 = document.getElementById('income-extra-2');

// Outcomes

const costsFlat = document.getElementById('costs-flat'),
      costsHouseServices = document.getElementById('costs-house-services'),
      costsTransport = document.getElementById('costs-transport'),
      costsCredit = document.getElementById('costs-credit');

// Total 

const totalMonthInput = document.getElementById('total-month'),
      totalDayInput = document.getElementById('total-day'),
      totalYearInput = document.getElementById('total-year');

let totalMonth, totalDay, totalYear;

// Money Box

const moneyBoxRange = document.getElementById('money-box-range'),
      accumulationInput = document.getElementById('accumulation'),
      spend = document.getElementById('spend');

const totalPrecentEl = document.getElementById('total-precents');


let accumulation = 0;
let totalPrecents = 0;


const inputs = document.querySelectorAll('.input');

for (let input of inputs) {
    input.addEventListener('input', () => {
        countingAvaibleMoney();
        calcPrecent()
    })
}

const strToNum = str => str.value ? parseInt(str.value) : 0;

const countingAvaibleMoney = () => {
    const totalPerMonth = strToNum(incomeSalary) + strToNum(incomeFreelance) + strToNum(incomeExtra1) + strToNum(incomeExtra2);

    const totalCoasts = strToNum(costsFlat) + strToNum(costsHouseServices) + strToNum(costsTransport) + strToNum(costsCredit);

    totalMonth = totalPerMonth - totalCoasts;
    totalMonthInput.value = totalMonth;
}

moneyBoxRange.addEventListener('input', e => {
    totalPrecents = e.target.value;
    totalPrecentEl.innerHTML = totalPrecents;
    calcPrecent();
})

const calcPrecent = () => {
    accumulation = ((totalMonth * totalPrecents) / 100).toFixed();
    accumulationInput.value = accumulation;

    spend.value = totalMonth - accumulation;

    totalDay = (spend.value / 30).toFixed();
    totalDayInput.value = totalDay;

    totalYear = accumulation * 12;
    totalYearInput.value = totalYear;
}
