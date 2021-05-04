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
    new Question("PHP là?", ["Trình duyệt web của máy chủ", "Cơ sở dữ liệu của máy chủ","Ngôn ngữ phía máy chủ", "Tất cả đáp án đều sai"], "Trình duyệt web của máy chủ"),
    new Question("Cú pháp khai báo cho hằng số nào sau đây là đúng", ["define(MAX, 30)", "Tất cả đáp án đều sa", "MAX = 30", "max = 30"], "MAX = 30"),
    new Question("Để viết chú thích nhiều dòng cho câu lệnh PHP cần sử dụng kí tự nào?", ["/* */", "/","//", "# #"], "# #"),
    new Question("Trường hợp nào dưới đây cần sử dụng phương thức POST thay vì GET?", ["Có yêu cầu xem trang viết dữ liệu lên máy chủ cơ sở dữ liệu", "Tất cả đáp án đều sai","Cần truyền hơn 4MB dữ liệu", "Muốn truyền tham số vào URL"], "Cần truyền hơn 4MB dữ liệu"), 
    new Question("Cú pháp khai báo và gán giá trị cho biến nào sau đây là đúng", ["Tất cả đáp án đều sai", "$a = 1", "a = 1", "$a == 1"], "$a == 1"),
    new Question("Kết quả nào được hiển thị trên màn hình sau khi chạy đoạn lệnh sau:String strA = new String(\"Roasted \");String strB = new String(\"Acorns \");strA = strB;System.out.print ( strA );System.out.println( strB );?", ["Roasted Roasted", "Acorns Roasted","Acorns Acorns", "Roasted Acorns"], "Roasted Acorns"),
    new Question("Từ khóa nào được sử dụng để tạo mới đối tượng?", ["finalize", "new()","this", "sync"], "finalize"),
    new Question("Trong phpMyAdmin, để xóa dữ liệu của một bảng thì nhấn nút nào dưới đây", ["Delete", "Drop","Tất cả đáp án đều sai", "Empty"], "Empty"),
    new Question("Khai báo mảng 2 chiều như sau:int[][] items = { {0, 1, 3, 4}, {4, 3, 99, 0, 7 }, {3, 2} } ;Lệnh nào dùng để thay thế giá trị 99 bằng giá trị 77?", ["items[2][1] = 77;", "items[2][3] = 77;","items[1][2] = 77;", "items[ 99 ] = 77;"], "items[2][1] = 77;"),
    new Question("Cho đoạn code sau:class Test{static class C{static int i1;}public static void main(String a[]){System.out.println(Test.C.i1);}}Hãy cho biết kết quả sau khi biên dịch và chạy chương trình?", ["Lỗi khi chạy chương trình", "Lỗi biên dịch","1", "0"], "1"),
    new Question(" Tầng model của mô hình MVC chứa những gì", ["Các file PHP biểu thị dữ liệu của ứng dụng", "Các file PHP thể hiện giao tiếp với người dùng", "Các file HTML thể hiện giao diện của ứng dụng","Các file PHP thể hiện tương tác với người dùng"], "Các file HTML thể hiện giao diện của ứng dụng")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();