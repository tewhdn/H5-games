 function checkPassword() {
            const correctPassword = "12345"; // 设置正确的密码
            const inputPassword = document.getElementById("passwordInput").value;

            if (inputPassword === correctPassword) {
                // 密码正确，显示内容
                document.getElementById("contentWrapper").classList.remove("hidden");
                document.getElementById("passwordPrompt").style.display = "none";
            } else {
                alert("密码错误，请重试！");
            }
        }

        $(document).ready(function(){
            $('#iframe').height($(window).height() - 70);
            $(".nav li").click(function(){
                $(".nav li").removeClass("active");
                $(this).addClass("active");
            });
        });
