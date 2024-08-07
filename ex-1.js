function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  //console.log(customers);
  for (let i = 0; i < customers.length - 1; i++) {
    for (let j = 0; j < customers.length - 1 - i; j++) {
      if (customers[j] > customers[j + 1]) {
        let temp = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = temp;
      }
    }
  }
  return customers;
}
const customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];
console.log(sortCustomerName(customers));
// ตอบคำถามตรงนี้จ้า
// o(n^2) เพราะเกิดการ loop ซ้อนกัน 2 ชั้น //
