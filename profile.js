//variables
var first_name;
var last_name;
var current_password;
var new_password;
var email;
var phone_number;
var medicare_number;
var medicare_irn;
var medicare_expiry_date;

//extra variables
var check_ticked = false;
var edited_phone_number;
var edited_medicare_number;
var edited_medicare_expiry_date;

//redirect back to home page
function back()
{
    window.location.href = "../Home Page/home.html";
}

//update the profile details
function update()
{
    //set the variables
    first_name = document.getElementById("first_name").value;
    last_name = document.getElementById("last_name").value;
    current_password = document.getElementById("current_password").value;
    new_password = document.getElementById("new_password").value;
    email = document.getElementById("email").value;
    phone_number = document.getElementById("phone_number").value;
    medicare_number = document.getElementById("medicare_number").value;
    medicare_irn = document.getElementById("medicare_irn").value;
    medicare_expiry_date = document.getElementById("medicare_card_expiry_date").value;
    console.log(medicare_expiry_date);

    //check if valid
    if (document.getElementById("checkbox").checked == true)
    {
        if (current_password == localStorage.getItem("password"))
        {
            if (first_name != "")
            {
                if (first_name.includes(0) == false && first_name.includes(1) == false && first_name.includes(2) == false && first_name.includes(3) == false && first_name.includes(4) == false && first_name.includes(5) == false && first_name.includes(6) == false && first_name.includes(7) == false && first_name.includes(8) == false && first_name.includes(9) == false)
                {
                    localStorage.setItem("first_name", first_name);
                } else {
                    alert("First name can not be empty and can not contain any numbers or spaces");
                    document.getElementById("first_name").style.backgroundColor = "rgba(255, 0, 0, 0.9)"
                }
            }
            if (last_name != "")
            {
                if (last_name.includes(0) == false && last_name.includes(1) == false && last_name.includes(2) == false && last_name.includes(3) == false && last_name.includes(4) == false && last_name.includes(5) == false && last_name.includes(6) == false && last_name.includes(7) == false && last_name.includes(8) == false && last_name.includes(9) == false)
                {
                    localStorage.setItem("last_name", last_name);
                } else {
                    alert("Last name can not be empty and can not contain any numbers or spaces");
                    document.getElementById("last_name").style.backgroundColor = "rgba(255, 0, 0, 0.9)"
                }
            }
            if (email != "")
            {
                if (email.includes("@") == true && email.includes(".") == true)
                {
                    localStorage.setItem("email", email);
                } else {
                    alert("Email can not be empty and must include the following; '@', '.'");
                    document.getElementById("email").style.backgroundColor = "rgba(255, 0, 0, 0.9)"
                }
            }
            if (current_password != "")
            {
                if (current_password.length >= 6)
                {
                    localStorage.setItem("password", current_password);
                } else {
                    alert("Password must be at least 6 characters long");
                    document.getElementById("current_password").style.backgroundColor = "rgba(255, 0, 0, 0.9)"
                }
            }
            if (phone_number != "")
            {
                if (phone_number.charAt(0) == 0 && phone_number.length == 10 && phone_number.includes("e") == false && phone_number.includes("E") == false && phone_number.includes(".") == false && phone_number.includes("+") == false && phone_number.includes("-") == false)
                {
                    phone_number.toString();
                    edited_phone_number = phone_number.charAt(0);
                    edited_phone_number = edited_phone_number + phone_number.charAt(1);
                    edited_phone_number = edited_phone_number + phone_number.charAt(2);
                    edited_phone_number = edited_phone_number + phone_number.charAt(3);
                    edited_phone_number = edited_phone_number + " ";
                    edited_phone_number = edited_phone_number + phone_number.charAt(4);
                    edited_phone_number = edited_phone_number + phone_number.charAt(5);
                    edited_phone_number = edited_phone_number + phone_number.charAt(6);
                    edited_phone_number = edited_phone_number + " ";
                    edited_phone_number = edited_phone_number + phone_number.charAt(7);
                    edited_phone_number = edited_phone_number + phone_number.charAt(8);
                    edited_phone_number = edited_phone_number + phone_number.charAt(9);
                    localStorage.setItem("phone_number", edited_phone_number);
                } else {
                    document.getElementById("phone_number").style.backgroundColor = "rgba(255, 0, 0, 0.9)";
                    alert("Phone number can not be empty, must be 10 numbers long, must begin with 0 and can not contain the following; 'e', 'E', '.', '+', '-'");
                }
            }
            if (medicare_number != "")
            {
                if (medicare_number.length == 10 && medicare_number.includes("e") == false && medicare_number.includes("E") == false && medicare_number.includes(".") == false && medicare_number.includes("+") == false && medicare_number.includes("-") == false)
                {
                    medicare_number.toString();edited_medicare_number = medicare_number.charAt(0);
                    edited_medicare_number = edited_medicare_number + medicare_number.charAt(1);
                    edited_medicare_number = edited_medicare_number + medicare_number.charAt(2);
                    edited_medicare_number = edited_medicare_number + medicare_number.charAt(3);
                    edited_medicare_number = edited_medicare_number + medicare_number.charAt(4);
                    edited_medicare_number = edited_medicare_number + " ";
                    edited_medicare_number = edited_medicare_number + medicare_number.charAt(5);
                    edited_medicare_number = edited_medicare_number + medicare_number.charAt(6);
                    edited_medicare_number = edited_medicare_number + medicare_number.charAt(7);
                    edited_medicare_number = edited_medicare_number + medicare_number.charAt(8);
                    edited_medicare_number = edited_medicare_number + " ";
                    edited_medicare_number = edited_medicare_number + medicare_number.charAt(9);
                    localStorage.setItem("medicare_number", edited_medicare_number);
                } else {
                    document.getElementById("medicare_number").style.backgroundColor = "rgba(255, 0, 0, 0.9)";
                    alert("Medicare number can not be empty, must be 10 numbers long and can not contain the following; 'e', 'E', '.', '+', '-'");
                }
            }
            if (medicare_irn != "")
            {
                if (medicare_irn <= 4 && medicare_number.includes("e") == false && medicare_number.includes("E") == false && medicare_number.includes(".") == false && medicare_number.includes("+") == false && medicare_number.includes("-") == false)
                {
                    localStorage.setItem("medicare_irn", medicare_irn);
                } else {
                    document.getElementById("medicare_irn").style.backgroundColor = "rgba(255, 0, 0, 0.9)";
                    alert("Medicare IRN can not be empty, must be lower than 5 and can not contain the following; 'e', 'E', '.', '+', '-'");
                }
            }
            if (medicare_expiry_date != "")
            {
                if (medicare_expiry_date.charAt(0) == 2 && medicare_expiry_date.charAt(1) == 0)
                {
                    medicare_expiry_date.toString();
                    edited_medicare_expiry_date = medicare_expiry_date.charAt(5);
                    edited_medicare_expiry_date = edited_medicare_expiry_date + medicare_expiry_date.charAt(6);
                    edited_medicare_expiry_date = edited_medicare_expiry_date + "/";
                    edited_medicare_expiry_date = edited_medicare_expiry_date + medicare_expiry_date.charAt(2);
                    edited_medicare_expiry_date = edited_medicare_expiry_date + medicare_expiry_date.charAt(3);
                    localStorage.setItem("medicare_expiry_date", edited_medicare_expiry_date);
                    window.location.href = "../Home Page/home.html";
                }
            } else {
                alert("Medicare Card Expiry Date can not be empty and must be later than the hyear '2000'");
            }
        } else {
            alert("Incorrect Password");
            document.getElementById("current_password").style.backgroundColor = "rgba(255, 0, 0, 0.9)";
        }
    } else {
        alert("Please accept the Terms & Conditions");
    }
}

//tick checkbox when label is clicked
function tickbox()
{
    if (check_ticked == false)
    {
        check_ticked = true;
        document.getElementById("checkbox").checked = true;
    } else {
        check_ticked = false;
        document.getElementById("checkbox").checked = false;
    }
}

//change check_ticked value when the checkbox is clicked
function checked()
{
    check_ticked = document.getElementById("checkbox").checked;
    console.log(check_ticked);
}

//set input's background color back to white
function editted()
{
    document.getElementById("first_name").style.backgroundColor = "rgba(255, 255, 255, 1)";
    document.getElementById("last_name").style.backgroundColor = "rgba(255, 255, 255, 1)";
    document.getElementById("email").style.backgroundColor = "rgba(255, 255, 255, 1)";
    document.getElementById("phone_number").style.backgroundColor = "rgba(255, 255, 255, 1)";
    document.getElementById("medicare_number").style.backgroundColor = "rgba(255, 255, 255, 1)";
    document.getElementById("medicare_irn").style.backgroundColor = "rgba(255, 255, 255, 1)";
    document.getElementById("current_password").style.backgroundColor = "rgba(255, 255, 255, 1)";
    document.getElementById("new_password").style.backgroundColor = "rgba(255, 255, 255, 1)";
}