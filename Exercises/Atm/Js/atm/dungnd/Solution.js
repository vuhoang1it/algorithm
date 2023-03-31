function atmSolution(n) {
    const denominations = [500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];
    const result = [];
  
    for (let i = 0; i < denominations.length; i++) {
      const denomination = denominations[i];
      while (n >= denomination) {
        n -= denomination;
        result.push(denomination);
      }
    }
    
    return result;
  }
  


function atmWithLimitSolution(n) {

    // mệnh giá
    const denominations = [500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];

    //số tiền còn lại
    const notesLeft = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
    const result = [];
  
    for (let i = 0; i < denominations.length; i++) {
      const denomination = denominations[i];
      while (n >= denomination && notesLeft[i] > 0) {
        n -= denomination;
        result.push(denomination);
        notesLeft[i]--;
      }
    }
  
    if (n > 0) {
      return "Không đủ tiền trong ATM để trả lại";
    }
  
    return result;
  }
  
  

module.exports = {
    atmSolution: atmSolution,
    atmWithLimitSolution: atmWithLimitSolution
}
