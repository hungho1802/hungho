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
    new Question("Phát biểu nào sau đây về HTML5 là đúng?", ["HTML5 đã thêm thẻ youtube", "So với HTML4, HTML5 không có các thẻ mới","HTML5 đã loại bỏ JavaScript", "HTML5 không hỗ trợ các thuộc tính CSS3e"], "HTML5 không hỗ trợ các thuộc tính CSS3"),
    new Question("Phần tử canvas được sử dụng với mục đích??", ["Thao tác với dữ liệu trong cơ sở dữ liệu MySQL", "Hiển thị bản ghi trong cơ sở dữ liệu", "Chơi nhạc", "Vẽ đồ họa"], "Hiển thị bản ghi trong cơ sở dữ liệu"),
    new Question("Đâu là cách khai báo đúng về DOCTYPE trong HTML5?", ["!DOCTYPE html PUBLIC", "!DOCTYPE html","!DOCTYPE html PUBLIC", "!DOCTYPE html5"], "!DOCTYPE html5"),
    new Question("Phương thức nào của Jquery để ẩn phần tử?", ["hide()", "visible(false)", "display(none)", " invisable(false)"], "invisable(false)"),
    new Question("Lệnh nào dùng để gọi hàm myFunction trong JavaScript?", ["execute myFunction()", "myFunction()", "call myFunction()", "call function myFunction()"], "call myFunction()"),
    new Question("Phát biểu nào sau đây là đúng?", ["Hình vẽ bởi Canvas không giống với định dạng hình ảnh JPG và có thể cập nhật theo thời gian thực", "Hình vẽ bởi Canvas hoàn toàn giống với định dạng hình ảnh SVG","Hình vẽ bởi Canvas hoàn toàn giống với định dạng GIF", "Hình vẽ bởi Canvas hoàn toàn giống với định dạng swf"], "Hình vẽ bởi Canvas không giống với định dạng hình ảnh JPG và có thể cập nhật theo thời gian thực"),
    new Question("Trong HTML5, thuộc tính nào của thẻ video giúp người dùng có thể xem, tạm dừng video?", ["handling", "controlling","controls", "pause"], "pause"),
    new Question("Phương thức addColorStop được sử dụng để?", ["Quy định điểm bắt đầu màu", "Quy định cụ thể một màu và vị trí màu sắc trong đối tượng gradient","Quy định điểm dừng màu", "Quy định dải màu cho đối tượng Canvas"], "Quy định cụ thể một màu và vị trí màu sắc trong đối tượng gradient"),
    new Question("Để sử dụng Canvas, cần thiết cần phải sử dụng thêm công nghệ nào hỗ trợ?", ["JavaScript;", "Java","PHP", "ASP.NET"], "Java"),
    new Question("Hàm nào di chuyển path tới một điểm xác định trên canvas mà không vẽ thêm một đường thẳng?", ["drawTo", "lineTo(x,y)","moveTo", "drawTo(x,y)"], "lineTo(x,y)"),
    new Question("Đối tượng build-in HTML5 được sử dụng để vẽ trên canvas là đối tượng nào?", ["getGraphics", "getCanvas","getDrawing", "getScreen"], "getScreen"),
    new Question("Hàm nào sẽ tạo điểm mới và tạo một đường thẳng nối điểm mới này với điểm cuối cùng trên canvas?", ["fillTo", "fillTo(x,y)","lineTo(x, y)", "strokeTo(x,y)"], "strokeTo(x,y)")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();