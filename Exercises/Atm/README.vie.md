#atm
* Bài toán:  
    Hệ thống tiền Việt Nam có các mệnh giá sau:
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

    Giả sử có 1 cây atm chứa các tờ tiền mặt với tất cả các mệnh giá trên, mỗi mệnh giá có số lượng tờ không giới hạn.  
    Khi một người dùng yêu cầu rút 1 số tiền nhất định, cây atm sẽ trả lại 1 số tờ tiện mặt sao cho tổng giá trị bằng với số tiền yêu cầu.  
    Cây atm sẽ ưu tiên trả về ít tờ tiền nhất có thể.  

    * Ví dụ:
        - Với số tiền yêu cầu là 5000, cây atm có thể trả về như sau:
            + 1 tờ 5000                 (tổng cộng 1 tờ)
            + 2 tờ 2000 và 1 tờ 1000    (tổng cộng 3 tờ)
            + 2 tờ 2000 và 2 tờ 500     (tổng cộng 4 tờ)
            + 1 tờ 2000 và 3 tờ 1000    (tổng cộng 4 tờ)
            + 5 tờ 1000                 (tổng cộng 5 tờ)
            + ...
        - Trong trường hợp này, cây atm sẽ trả về 1 tờ 5000 vì đây là phương án với số tờ ít nhất có thể.

* Yêu cầu:
1.  Viết 1 hàm nhận vào một số nguyên n, là số tiền yêu cầu rút.  
    Hàm này sẽ trả về một mảng các số nguyên là các tờ tiền được trả về bởi cây atm  
    Nếu số tiền yêu cầu không thể được trả về, hàm sẽ trả về 1 mảng rỗng.  
    - Ví dụ:
        + n = 3000    =>  output = [1000, 2000]
        + n = 4000    =>  output = [2000, 2000]
        + n = 20001   =>  output = [] // không có lời giải

2.  Giả sử trong atm chỉ có 5 tờ cho mỗi mệnh giá, viết 1 hàm với các yêu cầu như trên.

3.  câu hỏi thưởng  
    Giả sử hệ thống tiền có thêm các mệnh giá với số bắt đầu khác, ví dụ các mệnh giá bắt đầu bằng số 7 (700, 7000, ...).  
    Hãy cho biết các hàm trên có còn hoạt động chính xác hay không (nếu như không phải vét cạn)?  
    Hãy cho biết có cách giải nào khác ngoài vét cạn để giải trường hợp này hay không?

* Điều hướng:
    - [Bài làm (C#)](CSharp)
    - [Bài làm (Java)](Java)
    - [Bài làm (JS)](Js)