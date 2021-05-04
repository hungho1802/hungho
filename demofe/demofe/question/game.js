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
    new Question("Đâu không phải là đặc điểm của Unity??", ["Lighting", "Rendering","Assets", "Physics"], "Assets"),
    new Question("Để hiển thị mọi thông tin về đối tượng đang làm việc một cách chi tiết, kể cả những Components được đính kèm và những thuộc tính của nó ta sử dụng mục nào sau đây??", ["Inspector", "Project", "Hierachy", "Game"], "Hierachy"),
    new Question("Thanh công cụ nào sau đây điều khiển việc bố trí giao diện màn hình?", ["Control Object", "TestGame","Layout", "Layers"], "Control Object"),
    new Question("Trên thanh công cụ Control Object, công cụ nào cho phép di chuyển đến một khu vực nào đó trong Scene bằng cách kéo thả chuột?", ["Rotate tool", "Hand tool", "Scale tool", " Move tool"], "Scale tool"),
    new Question("Networking không cung cấp tính năng nào sau đây?", ["Physics", "Realtime Networking", "State Synchronization", "Remote Procedure Call"], "State Synchronization"),
    new Question("Phím E là phím tắt của công cụ nào sau đây?", ["Hand tool", "Rotate tool","Move tool", "Scale tool"], "Rotate tool"),
    new Question("Phím tắt nào sau đây được dùng để đổi tên đối tượng nhanh?", ["F2", "F","Cmd", "Enter"], "Cmd"),
    new Question("Phím R là phím tắt của công cụ nào sau đây?", ["Hand tool", "Rotate tool","Move tool", "Scale tool"], "Scale Tool"),
    new Question("Ngôn ngữ nào không được sử dụng trong Unity?", ["Java script", "C#","PHP", "Boo"], "Boo"),
    new Question("Phím Q là phím tắt của công cụ nào sau đây?", ["Hand tool", "Rotate tool","Move tool", "Scale tool"], "Hand Tool"),
    new Question("Bất lợi của AJAX là gì?", ["Có thể hiển thị lịch sử truy cập nhưng tối đa hiển thị là 10 bản ghi", "Phải sử dụng nhiều đoạn kịch bản PHP","Không hiển thị lịch sử truy cập", "Phải sử dụng nhiều doạn kịch bản JavaScript"], "Phải sử dụng nhiều doạn kịch bản JavaScript"),
    new Question("Dịch vụ nào được MobileMe cung cấp?", ["get", "post","push", "move"], "get"),
    new Question("Để tạo mới một Scene ta vào menu nào sau đây?", ["GameObject", "Edit","File", "IBM"], "Assets")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();