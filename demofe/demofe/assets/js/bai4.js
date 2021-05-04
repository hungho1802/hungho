var app = angular.module("dangnhap", []);
app.controller("frmdn", myfunc);

function myfunc($scope) {
    $scope.dn = function() {
        var u = $scope.user;
        var p = $scope.pass;
        var tc = false;
        var motsv;
        for (var i = 0; i < listsv.length; i++) {
            motsv = listsv[i];
            if (u == motsv.username && p == motsv.password) {
                tc = true;
                break;
            }
        }
        if (tc) {
            sessionStorage.setItem("username", motsv.username);
            sessionStorage.setItem("hoten", motsv.fullname);
            sessionStorage.setItem("username", motsv.email);
            document.location = "quizz.html"

        }
    }
}