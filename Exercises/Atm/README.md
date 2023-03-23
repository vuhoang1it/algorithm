#atm
* Problem:  
    Vietnamese currency include cash with denominations:
    - 100
    - 200
    - 500
    - 1000
    - 2000
    - 5000
    - 10000
    - 20000
    - 50000
    - 100000
    - 200000
    - 500000

    Let there be an atm contains notes of all denominations, assuming infinite amount of notes for each denomination.  
    When an user request withdrawal for some amount of money, the atm will returns a number of notes such that total amount is equal to the requested amount.  
    Preferably, the atm will return the smallest amount of notes possible.

    * For example:
        - The requested amount is 5000, the atm can return:
            + 1 5000 note                   (total of 1 note)
            + 2 2000 notes and 1 1000 note  (total of 3 note)
            + 2 2000 notes and 2 500 notes  (total of 4 note)
            + 1 2000 notes and 3 1000 notes (total of 4 note)
            + 5 1000 notes                  (total of 5 note)
            + ...  
        - In this case, the atm will return 1 5000 note as that is the least amount of notes possible.

* Requirement:
1.  Write a function that will take an integer input n, represent the request withdrawal amount.  
    The function will return an array of integer, representing the notes returned by the atm.  
    If the request amount cannot be withdraw, return an empty array.  
    - Example:  
        + n = 3000    =>  output = [1000, 2000]  
        + n = 4000    =>  output = [2000, 2000]  
        + n = 20001   =>  output = [] // does not have solution

2.  Assuming the atm only have 5 notes of each denomination, write a function with the same specifications as above.

3.  bonus question:  
    Let assume the currency include some other denomination with different start number, for example denominations that start with 7 (700, 7000, ...).  
    Does the function still work properly (assuming the function is not brute force)?  
    Is there anyway other than brute force approach to solve this case?

* Navigate:
    - [Problem (vie)](README.vie.md)
    - [Start Coding (C#)](CSharp/atm)
    - [Start Coding (Java)](Java/atm)
    - [Start Coding (JS)](Js/atm)