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
    new Question("Có mấy cách sử dụng css cho web??", ["Có 3 cách: inline, embedded và linked", "Có 4 cách: inline, embedded, linked và css riêng","Có 1 cách: inliner", "Có 2 cách: inline và embedded"], "Có 4 cách: inline, embedded, linked và css riêng"),
    new Question("Thẻ dòng (inline) có thể chứa thẻ khối (block)?", ["Đúng", "Sai", "Minimized", "MinMax"], "Đúng"),
    new Question("Để viết chú thích trong các file css người sử dụng có thể sử dụng cách nào dưới đây", ["-- chú thích--", "// chú thích","-- chú thích ", "/* chú thích */"], "-- chú thích--"),
    new Question("Nội dung của trang web nằm trong thẻ nào?", ["Thẻ body", "Thẻ Head", "Thẻ Style", " Thẻ Script"], "Thẻ body"),
    new Question("Ngôn ngữ lập trình nào tập trung vào đối tượng, mỗi đối tượng đều có thuộc tính và phương thức của chính nó", ["Ngôn ngữ máy", "Ngôn ngữ lập trình cấu trúc", "Ngôn ngữ Assembly", "Ngôn ngữ lập trình hướng đối tượng"], "Ngôn ngữ lập trình hướng đối tượng"),
    new Question("Phạm vi áp dụng cho kiểu tạo CSS dạng Linked style?", ["Áp dụng chỉ 1 trang", "Áp dụng tối đa 5 trang","Áp dụng tối đa 10 trang", "Áp dụng tối đa 9 trang"], "Áp dụng tối đa 10 trang"),
    new Question("Để thiết kế giao diện của ứng dụng, người dùng chọn đối tượng nào?", ["Interface", "Module","Windows Form", "Class"], "Interface"),
    new Question("Để máy tính hiểu các ngôn ngữ lập trình bậc cao thì cần phải có chương trình nào?", ["Chương trình dịch", "Chương trình tự động hóa","Chương trình robot", "Chương trình máy"], "Chương trình dịch"),
    new Question("Thuộc tính text-transform bao gồm bao nhiêu giá trị?", ["5 giá trị: capitalize, inherit, lowercase, none, uppercase", "3 giá trị: capitalize, lowercase, uppercase","4 giá trị: capitalize, uppercase, lowercase, none", "6 giá trị: capitalize, inherit, lowercase, none, uppercase, small-caps"], "6 giá trị: capitalize, inherit, lowercase, none, uppercase, small-caps"),
    new Question("Để nội dung của Label được căn chỉnh ở giữa và đều trên dòng thì giá trị của TextAlign được thiết lập là:", ["BottomCenter", "MiddleCenter","TopLeft", "TopCenter"], "TopCenter"),
    new Question("Trong thuộc tính font-weight, có thể định nghĩa được độ dày (độ đậm) của font chữ lên giá trị tối đa là bao nhiêu?", ["90", "100","1000", "10"], "100"),
    new Question("Dịch vụ nào được MobileMe cung cấp?", ["get", "post","push", "move"], "get"),
    new Question("Đâu không phải là đặc điểm của Unity??", ["Lighting", "Rendering","Assets", "Physics"], "Assets"),
    new Question("Để hiển thị mọi thông tin về đối tượng đang làm việc một cách chi tiết, kể cả những Components được đính kèm và những thuộc tính của nó ta sử dụng mục nào sau đây??", ["Inspector", "Project", "Hierachy", "Game"], "Hierachy"),
    new Question("Thanh công cụ nào sau đây điều khiển việc bố trí giao diện màn hình?", ["Control Object", "TestGame","Layout", "Layers"], "Control Object"),
    new Question("Trên thanh công cụ Control Object, công cụ nào cho phép di chuyển đến một khu vực nào đó trong Scene bằng cách kéo thả chuột?", ["Rotate tool", "Hand tool", "Scale tool", " Move tool"], "Scale tool"),
    new Question("Networking không cung cấp tính năng nào sau đây?", ["Physics", "Realtime Networking", "State Synchronization", "Remote Procedure Call"], "State Synchronization"),
    new Question("Phím E là phím tắt của công cụ nào sau đây?", ["Hand tool", "Rotate tool","Move tool", "Scale tool"], "Rotate tool"),
    new Question("Để thiết lập khoảng cách giữa hai hộp (box) có thể sử dụng thuộc tính nào?", ["height", "padding","float và display", "float và margin"], "float và margin")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();