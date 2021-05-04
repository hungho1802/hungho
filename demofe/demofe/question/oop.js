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
    new Question("Cho đoạn code sau:class A{public A(int x){}}class B extends A { }public class test{public static void main (String args []){A a = new B();System.out.println(\"complete\");}}Kết quả chạy chương trình như thế nào?", ["Lỗi khi chạy chương trình", "Lỗi biên dịch","Chương trình chạy mà không hiển thị gì trên cửa sổ kết quả", "Hiển thị \'complete\'"], "Hiển thị \'complete\'"),
    new Question("Bao nhiêu đối tượng của một lớp được sinh ra trong một chương trình?", ["Một đối tượng ứng với một hàm tạo", "Bao nhiêu tùy ý tùy theo yêu cầu của chương trình", "Một đối tượng ứng với phương thức main()", "Một đối tượng ứng với một lớp"], "Một đối tượng ứng với phương thức main()"),
    new Question("Phương án nào không phải lợi ích khi xác định mục tiêu của Sprint?", ["Hỗ trợ giao tiếp giữa các phòng ban trong công ty", "Nhận thông tin phản hồi","Tạo sự tập trung và hỗ trợ nhóm tốt hơn từ khách hàng", "Thuận tiện khi phân tích phản hồi"], "Hỗ trợ giao tiếp giữa các phòng ban trong công ty"),
    new Question("Phương án nào không phải ưu điểm của phương pháp lá bài lập kế hoạch ?", ["Thu được nhiều ý kiến đóng góp của các chuyên gia", "Thu được ý kiến đóng góp của khách hàng", "Các nghiên cứu chỉ ra ước lượng trung bình và thảo luận nhóm sẽ cho kết quả tốt hơn", " Hội thoại giữa các thành viên đưa đến kết quả ước lượng chính xác hơn"], "Các nghiên cứu chỉ ra ước lượng trung bình và thảo luận nhóm sẽ cho kết quả tốt hơn"),
    new Question("Nội dung của trang web nằm trong thẻ nào?", ["Thẻ body", "Thẻ Head", "Thẻ Style", " Thẻ Script"], "Thẻ body"),
    new Question("Ngôn ngữ lập trình nào tập trung vào đối tượng, mỗi đối tượng đều có thuộc tính và phương thức của chính nó", ["Ngôn ngữ máy", "Ngôn ngữ lập trình cấu trúc", "Ngôn ngữ Assembly", "Ngôn ngữ lập trình hướng đối tượng"], "Ngôn ngữ lập trình hướng đối tượng"),
    new Question("Phạm vi áp dụng cho kiểu tạo CSS dạng Linked style?", ["Áp dụng chỉ 1 trang", "Áp dụng tối đa 5 trang","Áp dụng tối đa 10 trang", "Áp dụng tối đa 9 trang"], "Áp dụng tối đa 10 trang"),
    new Question("Để thiết kế giao diện của ứng dụng, người dùng chọn đối tượng nào?", ["Interface", "Module","Windows Form", "Class"], "Interface"),
    new Question("Phím Q là phím tắt của công cụ nào sau đây?", ["Hand tool", "Rotate tool","Move tool", "Scale tool"], "Hand Tool"),
    new Question("Những điều khiển nào sau đây thuộc về loại List Control?", ["DropDownList, ListBox, RadioButtonList, CheckBoxList, BulletedList", "ComboboxList, ListBox, HyperLinkList, CheckBoxList, BulletedList","DropdownList, ButtonList , RadioButtonList, CheckBoxList, ListBox", "ComboboxList, ListBox, RadioButtonList, CheckBoxList, BulletedList"], "DropdownList, ButtonList , RadioButtonList, CheckBoxList, ListBox"),
    new Question("Dịch vụ nào được MobileMe cung cấp?", ["get", "post","push", "move"], "get"),
    new Question("Đâu không phải là đặc điểm của Unity??", ["Lighting", "Rendering","Assets", "Physics"], "Assets"),
    new Question("Để hiển thị mọi thông tin về đối tượng đang làm việc một cách chi tiết, kể cả những Components được đính kèm và những thuộc tính của nó ta sử dụng mục nào sau đây??", ["Inspector", "Project", "Hierachy", "Game"], "Hierachy"),
    new Question("Thanh công cụ nào sau đây điều khiển việc bố trí giao diện màn hình?", ["Control Object", "TestGame","Layout", "Layers"], "Control Object"),
    new Question("Trên thanh công cụ Control Object, công cụ nào cho phép di chuyển đến một khu vực nào đó trong Scene bằng cách kéo thả chuột?", ["Rotate tool", "Hand tool", "Scale tool", " Move tool"], "Scale tool"),
    new Question("Networking không cung cấp tính năng nào sau đây?", ["Physics", "Realtime Networking", "State Synchronization", "Remote Procedure Call"], "State Synchronization"),
    new Question("Phím E là phím tắt của công cụ nào sau đây?", ["Hand tool", "Rotate tool","Move tool", "Scale tool"], "Rotate tool"),
    new Question("Để che dấu các kí tự nhập vào một text box bạn gán giá trị cho thuộc tính TextMode bằng giá trị nào dưới đây?", ["Password", "Hidden","Mask", "Các phương án đều sai"], "Mask")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();