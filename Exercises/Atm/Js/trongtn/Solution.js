//first request 
const arrMoney1 = [
    100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000,
];

function atmSolution1(n)
{
    // TODO
    if (n > 100) {
    let i = arrMoney1.length - 1;
    let sub = n;
    let result = [];
    while (sub !== 0) {
        if (arrMoney1[i] <= sub) {
        sub = sub - arrMoney1[i];
        result.push(arrMoney1[i]);
        i = arrMoney1.length - 1;
        } else if (sub < 100) {
        return [];
        }
        i--;
    }
    return result;
    }else {
        return []
    }
}

//second request
const arrMoney2 = [
    {
      money: 100,
      amount: 5,
    },
    {
      money: 200,
      amount: 5,
    },
    {
      money: 500,
      amount: 5,
    },
    {
      money: 1000,
      amount: 5,
    },
    {
      money: 2000,
      amount: 5,
    },
    {
      money: 5000,
      amount: 5,
    },
    {
      money: 10000,
      amount: 5,
    },
    {
      money: 20000,
      amount: 5,
    },
    {
      money: 50000,
      amount: 5,
    },
    {
      money: 100000,
      amount: 5,
    },
    {
      money: 200000,
      amount: 5,
    },
    {
      money: 500000,
      amount: 5,
    },
  ];

function atmSolution2(n)
{
    // TODO
    if (n > 100) {
        let result = [];
        let i = arrMoney2.length - 1;
        let sub = n;
        while (sub !== 0) {
          if (arrMoney2[i].money <= sub && arrMoney2[i].amount > 0) {
            sub = sub - arrMoney2[i].money;
            result.push(arrMoney2[i].money);
            arrMoney2[i].amount--;
            i = i + 1;
          } else if (i === 0 || sub < 100) {
            return [];
          }
          i--;
        }
        return result;
      } else {
        return [];
      }
}