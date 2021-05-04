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
    new Question("Công ty nào đã mua lại Sun microsystem?", ["IBM", "Apple","Google", "Yahoo"], "Apple"),
    new Question("Kiểu nào không phải là kiểu nguyên thủy của Java?", ["Byte", "Double", "String", "Boolean"], "Byte"),
    new Question("Lệnh nào được sử dụng để nhập ký tự từ bàn phím?", ["System.in.reading()", "System.in.read()","System.out.reading()", "System.out.read()"], "System.out.read()"),
    new Question("Chọn 2 giá trị chấp nhận được cho x?1. byte2. long3. char4. float5. short6. long", ["1 và 3", "2 và 4", "3 và 5", "4 và 6"], "1 và 3"),
    new Question("Hãy cho biết giá trị được hiển thị trên màn hình console sau khi thực hiện đoạn code sau: int x = 10; for( x = 1; x \u003c= 5; x++) { System.out.print(x + \",\"); } System.out.println(x);", ["108017", "108014", "10,10,10,10,10,10", "10,11,12,13,14,15"], "10,10,10,10,10,10"),
    new Question("Kết quả nào được hiển thị trên màn hình sau khi chạy đoạn lệnh sau:String strA = new String(\"Roasted \");String strB = new String(\"Acorns \");strA = strB;System.out.print ( strA );System.out.println( strB );?", ["Roasted Roasted", "Acorns Roasted","Acorns Acorns", "Roasted Acorns"], "Roasted Acorns"),
    new Question("Từ khóa nào được sử dụng để tạo mới đối tượng?", ["finalize", "new()","this", "sync"], "finalize"),
    new Question("Từ khóa nào giúp cho chúng ta có thể tham chiếu tới lớp và rất tiện lợi khi cần truy cập các biến và phương thức trong lớp?", ["finalize", "new()","this", "sync"], "this"),
    new Question("Khai báo mảng 2 chiều như sau:int[][] items = { {0, 1, 3, 4}, {4, 3, 99, 0, 7 }, {3, 2} } ;Lệnh nào dùng để thay thế giá trị 99 bằng giá trị 77?", ["items[2][1] = 77;", "items[2][3] = 77;","items[1][2] = 77;", "items[ 99 ] = 77;"], "items[2][1] = 77;"),
    new Question("Cho đoạn code sau:class Test{static class C{static int i1;}public static void main(String a[]){System.out.println(Test.C.i1);}}Hãy cho biết kết quả sau khi biên dịch và chạy chương trình?", ["Lỗi khi chạy chương trình", "Lỗi biên dịch","1", "0"], "1"),
    new Question("square numbers được định nghĩa như sau:square(1) = 1square(N) = square(N-1) + 2N -1Theo định nghĩa đó, square(3) được tính như thế nào?", ["square(3) = square(2) + square(1)", "square(3) = square(2) + 2*3 -1","square(3) = square(2) - 2*3 +1", "square(3) = square(3) + 2*3 -1"], "square(3) = square(3) + 2*3 -1")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();