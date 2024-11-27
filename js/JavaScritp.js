
function checkName() {
    var name = document.getElementById("namemf").value;
    var regex = /^[А-Яа-яЁё]{2,30}$/;

    if (regex.test(name)) {
        document.getElementById("name_Check").style.color = "green";
        document.getElementById("name_Check").innerHTML = "Имя введено корректно :)";
        return true;
    } else {
        document.getElementById("name_Check").style.color = "red";
        document.getElementById("name_Check").innerHTML = "Пожалуйста, используйте только русские буквы, от 2 символов";
        return false;
    }
}


function checkPhone() {
    var phone = document.getElementById("phonemf").value;
    var regex = /^\+?\d{10,15}$/; 

    if (regex.test(phone)) {
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Телефон введен корректно :)";
        return true;
    } else {
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Пожалуйста, введите корректный телефонный номер, в формате +XXXXXXXXXX";
        return false;
    }
}


function checkEmail() {
    var email = document.getElementById("emailmf").value;
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 

    if (regex.test(email)) {
        document.getElementById("email_Check").style.color = "green";
        document.getElementById("email_Check").innerHTML = "Почта введена корректно :)";
        return true;
    } else {
        document.getElementById("email_Check").style.color = "red";
        document.getElementById("email_Check").innerHTML = "Пожалуйста, введите корректный e-mail";
        return false;
    }
}



function checkBlock() {
    var block = document.getElementById("blockmf").value;

    if (block !== "") {
        document.getElementById("block_Check").style.color = "green";
        document.getElementById("block_Check").innerHTML = "Блок выбран корректно :)";
        return true;
    } else {
        document.getElementById("block_Check").style.color = "red";
        document.getElementById("block_Check").innerHTML = "Пожалуйста, выберите блок";
        return false;
    }
}




function Submit(event) {
    event.preventDefault(); 

  
    var isNameValid = checkName();
    var isEmailValid = checkEmail();
    var isPhoneValid = checkPhone();
    var isBlockValid = checkBlock();

    if (isNameValid && isEmailValid && isPhoneValid && isBlockValid) {
        var name = document.getElementById("namemf").value;
        var email = document.getElementById("emailmf").value;
        var phone = document.getElementById("phonemf").value;
        var block = document.getElementById("blockmf").value;

        alert("Имя: " + name + "\n" +
              "Email: " + email + "\n" +
              "Телефон: " + phone + "\n" +
              "Выбранный блок: " + block);

        return true; 
    } else {
      
        alert("Пожалуйста, исправьте ошибки в форме перед отправкой.");
        return false; 
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const mainTitle = document.querySelector(".animatedText");
    const BottomText = document.querySelector(".BottomBarText");

    mainTitle.addEventListener("mouseenter", function () {
        mainTitle.style.color = "blue";
        mainTitle.style.transform = "rotate(10deg)";
        mainTitle.style.fontSize = "40px";
        mainTitle.style.transition = "all 0.5s ease";
    });

    mainTitle.addEventListener("mouseleave", function () {
        mainTitle.style.color = "";
        mainTitle.style.transform = "rotate(0deg)";
        mainTitle.style.fontSize = "32px";
        mainTitle.style.transition = "all 0.5s ease";
    });

   
    BottomText.addEventListener("mouseenter", function () {
        BottomText.style.transform = "scale(1.2)"; 
        BottomText.style.transition = "all 0.5s ease"; 
    });

    BottomText.addEventListener("mouseleave", function () {
        BottomText.style.transform = "scale(1)";
        BottomText.style.transition = "all 0.5s ease";
    });
});