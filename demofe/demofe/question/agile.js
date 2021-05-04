function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};



 
// create questions here
var questions = [
    new Question("Phẩm chất nào không nằm trong 7 phẩm chất quan trọng mà Product Owner cần có?", ["Có kỹ năng của một Tester", "Biết cách thu thập yêu cầu để chuyển tầm nhìn sản phẩm thành một Product Backlog tốt","Có tầm nhìn và kiến thức rõ ràng về sản phẩm", "Biết cách quản lý thành công kỳ vọng của các bên liên quan và đôi khi là mâu thuẫn về độ ưu tiên"], "Có tầm nhìn và kiến thức rõ ràng về sản phẩm"),
    new Question("Cách tiếp cận tầm nhìn sản phẩm sử dụng kỹ thuật gì?", ["5X", "5S", "5Y", "v"], "5X"),
    new Question("Phương án nào không phải lợi ích khi xác định mục tiêu của Sprint?", ["Hỗ trợ giao tiếp giữa các phòng ban trong công ty", "Nhận thông tin phản hồi","Tạo sự tập trung và hỗ trợ nhóm tốt hơn từ khách hàng", "Thuận tiện khi phân tích phản hồi"], "Hỗ trợ giao tiếp giữa các phòng ban trong công ty"),
    new Question("Phương án nào không phải ưu điểm của phương pháp lá bài lập kế hoạch ?", ["Thu được nhiều ý kiến đóng góp của các chuyên gia", "Thu được ý kiến đóng góp của khách hàng", "Các nghiên cứu chỉ ra ước lượng trung bình và thảo luận nhóm sẽ cho kết quả tốt hơn", " Hội thoại giữa các thành viên đưa đến kết quả ước lượng chính xác hơn"], "Các nghiên cứu chỉ ra ước lượng trung bình và thảo luận nhóm sẽ cho kết quả tốt hơn"),
    new Question("Sự khác nhau giữa mô hình truyền thống (thác nước) và mô hình tiếp cận tăng trưởng (Scrum) là gì?", ["Khả năng thành công dự án khi áp dụng mô hình thác nước là cao và khả năng thành công dự án khi áp dụng mô hình Scrum là thấp", "Trong mô hình truyền thống (thác nước), quá trình phát triển được chia thành các Sprint. Trong mô hình Scrum, quá trình phát triển không được chia thành các Sprint", "Trong mô hình thác nước, sản phẩm của khách hàng được xác định ở giai đoạn cuối. Trong mô hình Scrum, sản phẩm được chuyển giao cho khách hàng theo từng Sprint", "Scrum Master là một vị trí quan trọng trong dự án theo mô hình thác nước. Trong mô hình Scrum không có vị trí Scrum Master"], "Scrum Master là một vị trí quan trọng trong dự án theo mô hình thác nước. Trong mô hình Scrum không có vị trí Scrum Master"),
    new Question("Phím E là phím tắt của công cụ nào sau đây?", ["Hand tool", "Rotate tool","Move tool", "Scale tool"], "Rotate tool"),
    new Question("Phím tắt nào sau đây được dùng để đổi tên đối tượng nhanh?", ["F2", "F","Cmd", "Enter"], "Cmd"),
    new Question("Phím R là phím tắt của công cụ nào sau đây?", ["Hand tool", "Rotate tool","Move tool", "Scale tool"], "Scale Tool"),
    new Question("Ngôn ngữ nào không được sử dụng trong Unity?", ["Java script", "C#","PHP", "Boo"], "Boo"),
    new Question("Phím Q là phím tắt của công cụ nào sau đây?", ["Hand tool", "Rotate tool","Move tool", "Scale tool"], "Hand Tool"),
    new Question("Những điều khiển nào sau đây thuộc về loại List Control?", ["Bắt đầu Sprint mới","Bàn giao sản phẩm", "Kết thúc Sprintt","Ngay từ đầu dự án khi họ cài đặt môi trường kiểm thử tạm thời"], "Ngay từ đầu dự án khi họ cài đặt môi trường kiểm thử tạm thời"),
    new Question("Đối với tổ chức cơ sở hạ tầng kiểm thử, chúng ta nên gặp gỡ thành viên của nhóm kỹ thuật cài đặt môi trường kiểm thử tạm thời ở giai đoạn nào?", ["get", "post","push", "move"], "get"),
    new Question("Dịnh nghĩa nhóm Scrum?", ["Là một nhóm liên chức năng gồm Product Owner và Development Team (Nhóm Phát triển).", "Là một nhóm liên chức năng gồm QA, Scrum Master và Development Team (Nhóm Phát triển).","Là một nhóm liên chức năng gồm Development Team (Nhóm Phát triển).", "Là một nhóm liên chức năng gồm Product Owner, Scrum Master và Development Team (Nhóm Phát triển)"], "Là một nhóm liên chức năng gồm Product Owner, Scrum Master và Development Team (Nhóm Phát triển)")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();