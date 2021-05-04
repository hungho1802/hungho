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
    new Question("Trong Dreamweaver CS4 muốn  liên kết bên ngoài website, người dùng sử dụng loại liên kết nào?", ["Liên kết tương đối", "Liên kết tuyệt đối","Liên kết tới Email", "Liên kết tới GitHub"], "Liên kết tương đối"),
    new Question("Để xem và thay đổi định dạng hiện tại của một đối tượng (text/image), bạn nên sử dụng", ["Property Inspector", "Insert bar", "Tag Inspector", "File panel"], "Tag Inspector"),
    new Question("Chức năng nào sau đây không phải là một trong những chức năng chính của các công cụ hỗ trợ thiết kế web", ["Hỗ trợ chỉnh sửa ảnh", "Hỗ trợ quản lý site và FTP","Cung cấp môi trường soạn thảo và code", "Cung cấp tính năng thiết kế giao diện và định dạng trang web"], "Cung cấp môi trường soạn thảo và code"),
    new Question("Trên thanh công cụ Control Object, công cụ nào cho phép di chuyển đến một khu vực nào đó trong Scene bằng cách kéo thả chuột?", ["Rotate tool", "Hand tool", "Scale tool", " Move tool"], "Scale tool"),
    new Question("Networking không cung cấp tính năng nào sau đây?", ["Physics", "Realtime Networking", "State Synchronization", "Remote Procedure Call"], "State Synchronization"),
    new Question("Chương trình hoạt động bằng cách dịch mã HTML thành trang Web là", ["Trình duyệt", "Hệ điều hành","Protocol", "Phần mềm tiện ích"], "Protocol"),
    new Question("Để thêm các ký tự đặc biệt vào trang web, trên menu/thanh Insert, bạn cần chọn mục nào", ["Conment", "HTML/Special characters","HTML/Text Object", "Image"], "HTML/Special characters"),
    new Question("Bước nào sau đây không phải là một bước chính trong quá trình thiết kế web", ["Thiết kế", "Tìm template","Bảo trì", "Kiểm thử"], "Thiết kế"),
    new Question("WYSIWYG là viết tắt của", ["Không gì cả", "Tên của một chương trình","ways you see into Web yellow green", "what you see is what you get"], "what you see is what you get"),
    new Question("Mã mầu trong các trang HTML gồm 6 kí tự và đứng trước là dấu thăng (#) sử dụng hệ cơ số nào?", ["Hệ nhị phân", "Hệ thập lục phân (Hecxa)","Hệ thập phân", "Hệ BCD nén"], "Hệ thập lục phân (Hecxa)"),
    new Question("Giao thức nào là giao thức truyền tải siêu văn bản được dùng giữa Web client và Web server", ["TCP/IP", "WWW","HTTP", "FTP"], "HTTP"),
    new Question("Thông thường tiêu chuẩn Internet cho việc đặt tên trang chủ, hay trang đầu tiên mà người dùng truy  cập vào website sẽ là", ["index.html", "home.html","Bất kì tên nào", "default.html"], "index.html"),
    new Question("HTM L bao gồm mấy nhóm thẻ:", ["1", "4","5", "7"], "4"),
    new Question("Cách đặt Css nào mà chỉ áp dụng được cho một thẻ một lần và không thể tái sử dụng  lại", ["internal style (style nội bộ trong file HTML)", "external style (style lưu ở một file riêng)","inline style (Style nội tuyến trong thẻ HTML)", "Heading style inline style (Style nội tuyến trong thẻ HTML)"], "inline style (Style nội tuyến trong thẻ HTML)")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();