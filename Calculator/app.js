const clearButtn = document.getElementById('clear-button');
const resultButttn = document.getElementById('result')
const deleteButtn = document.getElementById('delete-button');
const multiButtn = document.getElementById('multiply-button');
const  addButtn= document.getElementById('add-button');
const subButtn = document.getElementById('sub-button');
const decimalButtn = document.getElementById('decimal-button');
const equalButtn = document.getElementById('equal-button');
const numButtn = document.querySelectorAll('.number');
const divide = document.getElementById('divide-button')
// variables
let result = '';
let operation = '';
let priviousOperand = 0;



// function to append
const appnedNum=(num)=>{
        if(num === '.' && result.includes('.')){
            return;
        }
        result += num;
        resultButttn.innerText = result;
        updateDis()
}

numButtn.forEach(buttn=>{
    buttn.addEventListener('click', ()=>{
        appnedNum(buttn.innerText);
        
    })
})
decimalButtn.addEventListener('click',()=>{
    appnedNum('.');
})
    
// update display 
const updateDis = ()=>{
    if(operation){
        resultButttn.innerText = `${priviousOperand} ${operation} ${result}`

    }
    else{
        resultButttn.innerText = result;
    }
}



// function to select operator

const selectOpera = (operator)=>{
    if(result === '') return;
    if(operation !== '' &&  priviousOperand !== ''){
        calculateRes();
    }
    operation = operator;
    priviousOperand = result;
    result = '';
    updateDis();
}

// fun to cal

const calculateRes = (cal)=>{
    let resultEval ;
    const pre = parseFloat(priviousOperand);
    const current = parseFloat(result);

    if(isNaN(pre) || isNaN(current)) return;

    switch (operation) {
        case '+':
            resultEval = pre + current;
            break;
            case '-':
            resultEval = pre - current;
            break;
            case '*':
            resultEval = pre * current;
            break;
            case '/':
            resultEval = pre / current;
            break;
    
        default:
            return;
    }
    result = resultEval.toString();
    operation = '';
    priviousOperand = '';
}

// clear display

const clearDis = ()=>{
    result='';
    priviousOperand=''
    operation = '';
    updateDis();
}


decimalButtn.addEventListener('click',()=>appnedNum('.'))
addButtn.addEventListener('click',()=> selectOpera('+'))
subButtn.addEventListener('click',()=>selectOpera('-'))
multiButtn.addEventListener('click',()=> selectOpera('*'))
divide.addEventListener('click',()=>selectOpera('/'))
equalButtn.addEventListener('click',()=>{
    if(result==='')return;
    calculateRes();
    updateDis();

})
clearButtn.addEventListener('click',clearDis);


const deleteLast = () => {
    if (result !== '') {
        result = result.slice(0, -1);
    } else if (operation !== '') {
        operation = '';
    } else if (priviousOperand !== '') {
        priviousOperand = priviousOperand.toString().slice(0, -1);
    }
    updateDis();
};

deleteButtn.addEventListener('click',deleteLast);


