let cal = document.getElementById("cal");
let price = document.getElementById('product_price').value;
let save = document.getElementById('save').value;
let term = document.getElementById('term').value;

cal.addEventListener("click", function calculate() {
    let price = document.getElementById('product_price').value;
    let save = document.getElementById('save').value;
    let term = document.getElementById('term').value;
    if (save) {
        if (!isNaN(price / save)) {
            let cal_term = document.getElementById('cal_term');
            document.getElementById('cal_term').innerHTML = price / save;
            console.log(price / save);
        }
        else {
            alert("잘못된 입력입니다.");
        }

    }
    else {
        document.getElementById('cal_term').innerHTML = 0;
    }

    if (term) {
        if (!isNaN(price / term)) {
            let cal_price = document.getElementById('cal_price');
            document.getElementById('cal_price').innerHTML = price / term;
            console.log(price / term);
        }
        else {
            alert("잘못된 입력입니다.");
        }

    }
    else {
        document.getElementById('cal_price').innerHTML = 0;
    }
})