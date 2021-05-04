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
    new Question("Câu lệnh nào dưới đây được sử dụng để thay đổi cấu trúc của một bảng trong cơ sở dữ liệu?", ["REPAIR TABLE …", "CHANGE TABLE …","REDO TABLE …", "ALTER TABLE …"], "ALTER TABLE …"),
    new Question("Câu lệnh SQL nào dưới đây để thêm một ràng buộc trong đó cột MaKH là duy nhất?", ["ALTER TABLE Khach_Hang ADD CONSTRAINT Khach_Hang_UNQ_MaKH UNIQUE (MaKH);", "ALTER TABLE Khach_Hang UNIQUE (MaKH);", "ALTER TABLE Khach_Hang INSERT CONSTRAINT Khach_Hang_UNQ_MaKH UNIQUE (MaKH);", "ALTER TABLE Khach_Hang NEW CONSTRAINT Khach_Hang_UNQ_MaKH UNIQUE (MaKH);"], "ALTER TABLE Khach_Hang NEW CONSTRAINT Khach_Hang_UNQ_MaKH UNIQUE (MaKH);"),
    new Question("Câu lệnh SQL nào dưới đây để xóa bảng Khach_Hang khỏi cơ sở dữ liệu?", ["DROP TABLE Khach_Hang CASCADE CONSTRAINTS;", "DROP TABLE Khach_Hang IGNORE CONSTRAINTS;","TRUNCATE TABLE Khach_Hang IGNORE CONSTRAINTS;", "ERASE TABLE Khach_Hang CASCADE CONSTRAINTS;"], "DROP TABLE Khach_Hang IGNORE CONSTRAINTS;"),
    new Question("Trên thanh công cụ Control Object, công cụ nào cho phép di chuyển đến một khu vực nào đó trong Scene bằng cách kéo thả chuột?", ["Rotate tool", "Hand tool", "Scale tool", " Move tool"], "Scale tool"),
    new Question("Networking không cung cấp tính năng nào sau đây?", ["Physics", "Realtime Networking", "State Synchronization", "Remote Procedure Call"], "State Synchronization"),
    new Question("Chương trình hoạt động bằng cách dịch mã HTML thành trang Web là", ["Trình duyệt", "Hệ điều hành","Protocol", "Phần mềm tiện ích"], "Protocol"),
    new Question("Để thêm các ký tự đặc biệt vào trang web, trên menu/thanh Insert, bạn cần chọn mục nào", ["Conment", "HTML/Special characters","HTML/Text Object", "Image"], "HTML/Special characters"),
    new Question("Quan hệ 1-1 là gì?", ["Một tập thực thể này liên kết với một tập thực thể kia, và ngược lại", "Một thực thể của tập thực thể này liên kết với nhiều thực thể của tập thực thể kia, và ngược lại","Một thực thể của tập này chỉ liên kết với một thực thể của tập kia, và ngược lại", "Kiểm thử"], "Một thực thể của tập này chỉ liên kết với một thực thể của tập kia, và ngược lại"),
    new Question("Những thông tin được nhập từ bàn phím là dữ liệu gì?", ["Dữ liệu dạng âm thanh", "Dữ liệu dạng hình ảnh","Dữ liệu dạng ký hiệu", "Dữ liệu dạng ký tự, ký số"], "Dữ liệu dạng ký hiệu"),
    new Question(" Chọn đáp án ĐÚNG điền vào chỗ trống Khi không khai báo điểm bắt đầu cho một giao dịch, SQL Server coi ________ và tự động COMMIT câu lệnh lên Server. Nếu câu lệnh gây lỗi sẽ tự động ROLLBACK ĐÚNG hay SAI?", ["Từng câu lệnh riêng lẻ là một giao dịch", "Toàn bộ mã kịch bản là một giao dịch","Từng câu lệnh riêng lẻ là một giao dịch", "Tất cả đáp án đều sai"], "Từng câu lệnh riêng lẻ là một giao dịch"),
    new Question("Thứ tự thiết kế cơ sở dữ liệu quan hệ nào dưới đây là đúng?", ["Thiết kế mức khái niệm, thiết kế mức vật lý, thiết kế mức logic", "Thiết kế mức vật lý, thiết kế mức khái niệm, thiết kế mức logic","Thiết kế mức khái niệm, thiết kế mức logic, thiết kế mức vật lý", "Thiết kế mức vật lý, thiết kế mức logic, thiết kế mức khái niệm"], "Thiết kế mức vật lý, thiết kế mức logic, thiết kế mức khái niệm"),
    new Question("Phát biểu nào dưới đây là đúng với hệ quản trị cơ sở dữ liệu MySQL?", ["Một hệ quản trị dữ liệu dạng file, không thể cho nhiều người cùng truy xuất", "Một hệ quản trị cơ sở dữ liệu cỡ nhỏ, chủ yếu dùng cho mục đích cá nhân","Một hệ quản trị cơ sở dữ liệu của hãng Microsoft", "Một hệ quản trị cơ sở liệu mã nguồn mở rất được ưa chuộng"], "Một hệ quản trị cơ sở dữ liệu của hãng Microsoft"),
    new Question("Hệ quản trị cơ sở dữ liệu phổ biến nhất hiện nay là gì?:", ["Hệ quản trị cơ sở dữ liệu hướng đối tượng", "Hệ quản trị cơ sở dữ liệu mạng","Hệ quản trị cơ sở dữ liệu quan hệ", "Hệ quản trị cơ sở dữ liệu phân cấp"], "Hệ quản trị cơ sở dữ liệu phân cấp"),
    new Question("Các lỗi cú pháp nào sau đây thường gặp khi thực thi câu lệnh SQL", ["Quên hoặc lựa chọn sai CSDL", "Viết sai tên bảng hoặc tên cột","Viết sai từ khóa", "Bỏ sót dấu đóng ngoặc với một chuỗi ký tự"], "Bỏ sót dấu đóng ngoặc với một chuỗi ký tự")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();