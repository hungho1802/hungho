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
    new Question("Thuộc tính nào để thay đổi màu nền của Form??", ["Color", "BgColor","BackgroundColor", "BackColor"], "BackColor"),
    new Question("Để kích thước của form mở rộng đầy màn hình khi chạy chương trình thì cần thiết lập giá trị nào cho thuộc tính WindowState?", ["Maximized", "Normal", "Minimized", "MinMax"], "Normal"),
    new Question("Để hiện cửa sổ Toolbox người dùng chọn thao tác nào?", ["Tools", "Project Toolbox","Build Toolbox", "View Toolbox"], "Project Toolbox"),
    new Question("Ngôn ngữ lập trình nào dưới đây là ngôn ngữ lập trình bậc thấp?", ["Pascal", "Assembly", "Visual Basic", " C#"], "Pascal"),
    new Question("Ngôn ngữ lập trình nào tập trung vào đối tượng, mỗi đối tượng đều có thuộc tính và phương thức của chính nó", ["Ngôn ngữ máy", "Ngôn ngữ lập trình cấu trúc", "Ngôn ngữ Assembly", "Ngôn ngữ lập trình hướng đối tượng"], "Ngôn ngữ lập trình hướng đối tượng"),
    new Question("Thành phần nào trong máy tính chịu trách nhiệm thực hiện tính toán và đưa ra quyết định?", ["Khối số học và lôgic", "Khối xuất","Khối nhớ", "Khối xử lý trung tâm"], "Khối xử lý trung tâm"),
    new Question("Để thiết kế giao diện của ứng dụng, người dùng chọn đối tượng nào?", ["Interface", "Module","Windows Form", "Class"], "Interface"),
    new Question("Để máy tính hiểu các ngôn ngữ lập trình bậc cao thì cần phải có chương trình nào?", ["Chương trình dịch", "Chương trình tự động hóa","Chương trình robot", "Chương trình máy"], "Chương trình dịch"),
    new Question("Ngôn ngữ nào không được sử dụng trong Unity?", ["Java script", "C#","PHP", "Boo"], "Boo"),
    new Question("Để nội dung của Label được căn chỉnh ở giữa và đều trên dòng thì giá trị của TextAlign được thiết lập là:", ["BottomCenter", "MiddleCenter","TopLeft", "TopCenter"], "TopCenter"),
    new Question("Bất lợi của AJAX là gì?", ["Có thể hiển thị lịch sử truy cập nhưng tối đa hiển thị là 10 bản ghi", "Phải sử dụng nhiều đoạn kịch bản PHP","Không hiển thị lịch sử truy cập", "Phải sử dụng nhiều doạn kịch bản JavaScript"], "Phải sử dụng nhiều doạn kịch bản JavaScript"),
    new Question("Dịch vụ nào được MobileMe cung cấp?", ["get", "post","push", "move"], "get"),
    new Question("Để tạo mới một Scene ta vào menu nào sau đây?", ["GameObject", "Edit","File", "IBM"], "Assets")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();