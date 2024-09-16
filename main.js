// BAI 1
function converter() {
	let doC = document.getElementById("doC");
	let result = document.getElementById("result");
	doF = (doC.value * 9) / 5 + 32;
	result.innerHTML = `${doC.value} do C bang ${doF} do F`;
}

// BAI 2
function unitConverter() {
	let met = document.getElementById("met");
	let result2 = document.getElementById("result2");
	feet = met.value * 3.2808;
	result2.innerHTML = `${met.value}m bang ${feet}ft`;
}

// BAI 3
function dientich() {
	let canh = document.getElementById("canh");
	let result3 = document.getElementById("result3");
	dientich = canh.value * canh.value;
	result3.innerHTML = `Dien tich hinh vuong = ${dientich}m2`;
}

// BAI 4
function dientichChunhat() {
	let a = document.getElementById("a");
	let b = document.getElementById("b");
	let result4 = document.getElementById("result4");
	dientichChunhat = a.value * b.value;
	result4.innerHTML = `Dien tich hinh chu nhat = ${dientichChunhat}m2`;
}

// BAI 5
function tamgiacVuong() {
	let a1 = document.getElementById("a1");
	let b1 = document.getElementById("b1");
	let result5 = document.getElementById("result5");
	tamgiacVuong = (a1.value * b1.value) / 2;
	result5.innerHTML = `Dien tich tam giac vuong = ${tamgiacVuong}m2`;
}

// BAI 6
function bac1() {
	let a2 = document.getElementById("a2");
	let b2 = document.getElementById("b2");
	let result6 = document.getElementById("result6");
	if (a2.value == 0) {
		if (b2.value == 0) {
			result6.innerHTML = "Phuong trinh co vo so nghiem";
		} else {
			result6.innerHTML = "Phuong trinh khong hop le";
		}
	} else {
		solution = -b2.value / a2.value;
		result6.innerHTML = `x = ${solution}`;
	}
}

// BAI 7
function bac2() {
	let a3 = document.getElementById("a3").value;
	let b3 = document.getElementById("b3").value;
	let c3 = document.getElementById("c3").value;
	let result7 = document.getElementById("result7");
	let discriminant = b3 * b3 - 4 * a3 * c3; // b^2 - 4ac

	if (a3 == 0) {
		if (b3 == 0) {
			if (c3 == 0) {
				result7.innerHTML = "Phuong trinh co vo so nghiem";
			} else {
				result7.innerHTML = "Phuong trinh khong hop le";
			}
		} else {
			// ax^2 + bx +c = bx + c
			solution = -c3 / b3;
			result7.innerHTML = `x = ${solution}`;
		}
	} else {
		if (discriminant > 0) {
			solution1 = (-b3 + Math.sqrt(discriminant)) / (2 * a3);
			solution2 = (-b3 - Math.sqrt(discriminant)) / (2 * a3);
		} else if ((discriminant = 0)) {
			solution = -b3 / (2 * a3);
		} else {
			result7.innerHTML = "Phuong trinh khong co nghiem";
		}
	}
}

// BAI 8
function age() {
	let age = document.getElementById("age").value;
	let result8 = document.getElementById("result8");
	if (age < 120 && age > 0) {
		result8.innerHTML = "Ban la nguoi";
	} else {
		result8.innerHTML = "Ban khong la nguoi";
	}
}

// BAI 9
function tamgiac() {
	let a4 = document.getElementById("a4").value;
	let b4 = document.getElementById("b4").value;
	let c4 = document.getElementById("c4").value;
	let result9 = document.getElementById("result9");
	if (a4 > 0 && b4 > 0 && c4 > 0) {
		if (a4 + b4 > c4 && b4 + c4 > a4 && a4 + c4 > b4) {
			result9.innerHTML = "Day la tam giac";
		} else {
			result9.innerHTML = "Day khong phai la tam giac";
		}
	} else {
		result9.innerHTML = "Nhap sai";
	}
}

// BAI 10
function giaDien() {
	let kWh = +document.getElementById("kWh").value;
	let rate1 = 2000;
	let rate2 = 3000;
	let rate3 = 5000;
	let result10 = document.getElementById("result10");

	let total =
		kWh <= 50
			? kWh * rate1
			: kWh <= 100
			? 50 * rate1 + (kWh - 50) * rate2
			: 100 * rate2 + (kWh - 100) * rate3;

	result10.innerText = `Tổng tiền: ${total} VNĐ`;
}

// BAI 11
function calculateTax() {
	let income = +document.getElementById("income").value;
	let tax = 0;
	let result11 = document.getElementById("result11");
	console.log(result11);
	// Duoi 5 trieu ko dong thue
	if (income <= 5000000) {
		tax = 0;
		result11.innerHTML = `Thuế phải nộp: ${tax}VNĐ`;
	} else if (income <= 10000000) {
		// Tu 10tr
		tax = (income - 5000000) * 0.05;
		result11.innerHTML = `Thuế phải nộp: ${tax}VNĐ`;
	} else if (income <= 18000000) {
		// Tu 18tr
		tax = (income - 10000000) * 0.1 + 250000;
		result11.innerHTML = `Thuế phải nộp: ${tax}VNĐ`;
	} else {
		tax = (income - 18000000) * 0.15 + 1300000;
		result11.innerHTML = `Thuế phải nộp: ${tax}VNĐ`;
	}
}

// BAI 12
function calculateInterest() {
	// Lấy giá trị từ các trường nhập liệu
	let principal = +document.getElementById("principal").value;
	let months = +document.getElementById("months").value;
	let interestRate = +document.getElementById("interestRate").value / 100;
	let result12 = document.getElementById("result12");
	console.log(principal, months, interestRate);
	// Tính lãi suất kép
	let finalAmount = principal * Math.pow(1 + interestRate, months);
	console.log(finalAmount);
	// Hiển thị kết quả
	let interest = finalAmount - principal;
	console.log(interest);
	result12.innerHTML = `Số tiền sau lãi: ${finalAmount} VNĐ với lãi suất: ${interest} VNĐ`;
}
