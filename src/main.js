// Khai Báo biến lobal
// GrabCar
const GRAB_CAR_1 = 8000;
const GRAB_CAR_2 = 7500;
const GRAB_CAR_3 = 7000;
const GRAB_CAR_WAIT = 2000;

// GrabSUV
const GRAB_SUV_1 = 9000;
const GRAB_SUV_2 = 8500;
const GRAB_SUV_3 = 8000;
const GRAB_SUV_WAIT = 3000;

// GrabBlack
const GRAB_BLACK_1 = 10000;
const GRAB_BLACK_2 = 9500;
const GRAB_BLACK_3 = 9000;
const GRAB_BLACK_WAIT = 3500;

let total = 0;

// Chọn loại xe
function getType() {
    const grabCar = document.getElementById('grabX');
    const grabSUV = document.getElementById('grabSUV');
    const grabBlack = document.getElementById('grabBlack');
    let type= '';

    if (grabCar.checked) {
        type = 'GRAB_CAR';
    } else if (grabSUV.checked) {
        type = 'GRAB_SUV';
    } else if (grabBlack.checked) {
        type = 'GRAB_BLACK';
    }
 
    return type;
}

// Tính tiền theo km 
function payment_1(km, price_1) {
    return km * price_1;
}

// Tính tiền theo km 
function payment_2(km, price_1, price_2) {
    return 1 * price_1 + (km - 1) * price_2;
    
}

// Tính tiền theo km
function payment_3(km, price_1, price_2, price_3) {
    return 1 * price_1 + (18 * price_2) + (km - 19) * price_3;
    
}

// Tính tiền chờ
function paymentWait(time, priceWait) {
    let paymentWait = 0;
    if (time >=  3) {
        paymentWait = Math.floor(time/3) * priceWait;
    }
    return paymentWait;
    
}

// Tính tổng tiền
function paymentTypeCar(km,time, price_1, price_2, price_3, priceWait) {
    if (0 <= km && km <= 1) {   
        total = payment_1(km, price_1) + paymentWait(time, priceWait);
         
        
    } else if (1 < km && km <= 19) {
        total = payment_2(km,price_1,price_2) + paymentWait(time, priceWait);
        
    } else if (19 < km) {
        
        total = payment_3(km, price_1, price_2, price_3) + paymentWait(time, priceWait);
    }
}

// Xử lý sự kiện click
function handlePayment() {  
    const type = getType();

    const km = document.getElementById('txt-km').value*1;
    const time = document.getElementById('txt-thoiGianCho').value*1;

    switch (type) {
        case 'GRAB_CAR':
            paymentTypeCar(km,time, GRAB_CAR_1, GRAB_CAR_2, GRAB_CAR_3, GRAB_CAR_WAIT);
            break;
        
        case 'GRAB_SUV':
            paymentTypeCar(km,time, GRAB_SUV_1, GRAB_SUV_2, GRAB_SUV_3, GRAB_SUV_WAIT);
            break;

        case 'GRAB_BLACK':
            paymentTypeCar(km,time, GRAB_BLACK_1, GRAB_BLACK_2, GRAB_BLACK_3, GRAB_BLACK_WAIT);
            break;

        default:
            alert('Vui lòng chọn loại xe');
            break;
    }
    document.getElementById('xuatTien').innerHTML = total;
    document.getElementById('divThanhTien').style.display = "block";
}

// Xử lý sự kiện click in hóa đơn
function handlePrint() {
    
}