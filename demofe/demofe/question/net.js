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
    new Question("Dịch vụ Amazon Elastic Compute Cloud có chức năng chính là gì?", ["Hỗ trợ lưu trữ web", "Hỗ trợ cập nhật dữ liệu","Hỗ trợ thay đổi kiến trúc mô hình cloud", "Hỗ trợ truy xuất dữ liệu"], "Hỗ trợ thay đổi kiến trúc mô hình cloud"),
    new Question("Phần tử canvas được sử dụng với mục đích??", ["Thao tác với dữ liệu trong cơ sở dữ liệu MySQL", "Hiển thị bản ghi trong cơ sở dữ liệu", "Chơi nhạc", "Vẽ đồ họa"], "Hiển thị bản ghi trong cơ sở dữ liệu"),
    new Question("Câu nào là đúng đối với UDDI?", ["UDDI là cách viết khác của WSDL", "UDDI tương tự như WSDL","UDDI cho phép ghi thông tin về doanh nghiệp và chi tiết sử dụng dịch vụ web.", "UDDI không cho phép ghi thông tin về doanh nghiệp và chi tiết sử dụng dịch vụ web, nó chỉ được thực hiện qua WSDL"], "UDDI không cho phép ghi thông tin về doanh nghiệp và chi tiết sử dụng dịch vụ web, nó chỉ được thực hiện qua WSDL"),
    new Question("Câu nào là đúng đối với WSDL?", ["SDL Cho phép các nhà phát triển ghi thông tin dịch vụ web", "WSDL kết nối trực tiếp với cơ sở dữ liệu SQLite và trả về kết quả cho người dùn", "WSDL là cầu nối giữa người sử dụng với Database", " WSDL không cho phép các nhà phát triển ghi thông tin dịch vụ web"], "WSDL không cho phép các nhà phát triển ghi thông tin dịch vụ web"),
    new Question("WSDL là viết tắt của cụm từ nào?", ["idth Server Description Language", "Width Services Description Language", "Web Services Description Language", "Web Server Description Language"], "Web Services Description Language"),
    new Question("API là viết tắt của cụm từ nào?", ["Application Private Interface", "Application Programming Internet","Application Programming Interface", "Application Public Interface"], "Application Programming Interface"),
    new Question("Câu nào là đúng đối với API?", ["API cho phép các chương trình sử dụng có thể giao tiếp với nhau mà không cần sự tham gia của người dùng", "API bản chất là một webserver","Để giao tiếp các chương trình sử dụng API nhất thiết phải có sự tham gia của người dùng", "API bản chất là một không gian lưu trữ web"], "API cho phép các chương trình sử dụng có thể giao tiếp với nhau mà không cần sự tham gia của người dùng"),
    new Question("Câu nào là đúng đối với SOAP?", ["Sử dụng để mã hóa thông điệp HTML", "Sử dụng để duy trì kết nối internet","Sử dụng để mã hóa thông điệp XML", "Sử dụng để mã hóa CSS"], "Sử dụng để duy trì kết nối internet"),
    new Question("Câu nào là đúng đối với API?", ["API là một file thư viện dạng dll", "API là một file thực thi dạng exe","API không cho phép các nhà phát triển khác sử dụng để phát triển sản phẩm của riêng họ", "API cho phép các nhà phát triển khác sử dụng để phát triển sản phẩm của riêng họ"], "API là một file thư viện dạng dll"),
    new Question("AJAX sử dụng công nghệ nào?", ["Sử dụng các công nghệ GSM, CDMA, CSS", "Chỉ sử dụng duy nhất công nghệ CDMA","Sử dụng các công nghẹ XHTML, CMS, CRM, HTML, CSS", "Chỉ sử dụng duy nhất công nghệ CDMA"], "Sử dụng các công nghẹ XHTML, CMS, CRM, HTML, CSS"),
    new Question("Bất lợi của AJAX là gì?", ["Có thể hiển thị lịch sử truy cập nhưng tối đa hiển thị là 10 bản ghi", "Phải sử dụng nhiều đoạn kịch bản PHP","Không hiển thị lịch sử truy cập", "Phải sử dụng nhiều doạn kịch bản JavaScript"], "Phải sử dụng nhiều doạn kịch bản JavaScript"),
    new Question("Dịch vụ nào được MobileMe cung cấp?", ["get", "post","push", "move"], "get"),
    new Question("Dịch vụ Live Mesh là của công ty nào?", ["Apple", "Yahoo","Microsoft", "IBM"], "Microsoft")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();