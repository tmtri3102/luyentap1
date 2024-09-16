// BAI 1
function chiahet() {
	let so1 = document.getElementById("a");
	let so2 = document.getElementById("b");
	let result = document.getElementById("result");
	if (so1.value % so2.value == 0) {
		result.innerHTML = "a chia het cho b";
	} else result.innerHTML = "a khong chia het cho b";
}

// BAI 2
function lop10() {
	let tuoi = document.getElementById("tuoi");
	let result2 = document.getElementById("result2");
	if (tuoi.value <= 15) {
		result2.innerHTML = "Chua du tuoi hoc lop 10";
	} else {
		result2.innerHTML = "Da du tuoi hoc lop 10";
	}
}

// BAI 3
function sosanh() {
	let so = document.getElementById("so");
	let ketqua = document.getElementById("ketqua");
	if (so > 0) {
		ketqua.innerHTML = "So nay duong";
	} else if (so < 0) {
		ketqua.innerHTML = "So nay am";
	} else ketqua.innerHTML = "So nay bang 0";
}

// BAI 4
function maxNum() {
	let a3 = document.getElementById("a3");
	let b3 = document.getElementById("b3");
	let c3 = document.getElementById("c3");
	let result3 = document.getElementById("result3");
	max = a3.value;
	if (b3.value > max) max = b3.value;
	if (c3.value > max) max = c3.value;
	result3.innerHTML = "So lon nhat la: " + max;
}

// BAI 5
function tinhdiem() {
	let testScore = document.getElementById("test");
	let midtermScore = document.getElementById("midterm");
	let finalScore = document.getElementById("final");
	let result4 = document.getElementById("result4");
	let totalScore =
		testScore.value * 0.3 + midtermScore.value * 0.2 + finalScore.value * 0.4;
	if (totalScore >= 90) {
		result4.innerHTML = `Diem trung binh la:  ${totalScore} va hoc luc Xuat sac`;
	} else if (totalScore >= 75) {
		result4.innerHTML = `Diem trung binh la:  ${totalScore} va hoc luc tot`;
	} else if (totalScore >= 60) {
		result4.innerHTML = `Diem trung binh la:  ${totalScore} va hoc luc trung binh`;
	} else {
		result4.innerHTML = `Diem trung binh la:  ${totalScore} va hoc luc Yeu`;
	}
}

// BAI 6
function hoahong() {
	let sales = document.getElementById("hoahong");
	let ketqua2 = document.getElementById("ketqua2");
	if (sales.value > 100000) {
		ketqua2.innerHTML = `Hoa hong cua ban = ${sales.value * 0.1}`;
	} else if (sales.value >= 50000) {
		ketqua2.innerHTML = `Hoa hong cua ban = ${sales.value * 0.07}`;
	} else ketqua2.innerHTML = `Hoa hong cua ban = ${sales.value * 0.05}`;
	console.log(sales.value);
}

// BAI 7
function calculateBill() {
	let minutes = document.getElementById("minutes").value;
	let baseFee = document.getElementById("baseFee").value;
	let perMinute = document.getElementById("perMinute").value;

	let totalFee;
	if (minutes <= 100) {
		totalFee = baseFee;
	} else {
		totalFee = baseFee + (minutes - 100) * perMinute;
	}

	document.getElementById("result7").innerText =
		"Total Bill: " + totalFee + " currency units";
}
