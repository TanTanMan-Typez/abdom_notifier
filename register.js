//main variables
var first_name;
var last_name;
var email;
var phone_number;
var password;
var medicare_number;
var medicare_irn;
var medicare_expiry_date;

//extra variables
var edited_medicare_number = "";
var edited_phone_number = "";
var edited_medicare_expiry_date = "";
var check_ticked = false;

//create account function
function create()
{
    //set variable values
    first_name = document.getElementById("first_name").value;
    last_name = document.getElementById("last_name").value;
    email = document.getElementById("email").value;
    phone_number = document.getElementById("phone_number").value;
    password = document.getElementById("password").value;
    medicare_number = document.getElementById("medicare_number").value;
    medicare_irn = document.getElementById("medicare_irn").value;
    medicare_expiry_date = document.getElementById("medicare_expiry_date").value;

    //check if values are valid
    if (document.getElementById("checkbox").checked == true) {
        if (first_name != "" && first_name.includes(" ") == false && first_name.includes(0) == false && first_name.includes(1) == false && first_name.includes(2) == false && first_name.includes(3) == false && first_name.includes(4) == false && first_name.includes(5) == false && first_name.includes(6) == false && first_name.includes(7) == false && first_name.includes(8) == false && first_name.includes(9) == false)
        {
            localStorage.setItem("first_name", first_name);
            if (last_name != "" && last_name.includes(0) == false && last_name.includes(1) == false && last_name.includes(2) == false && last_name.includes(3) == false && last_name.includes(4) == false && last_name.includes(5) == false && last_name.includes(6) == false && last_name.includes(7) == false && first_name.includes(8) == false && first_name.includes(9) == false)
            {
                localStorage.setItem("last_name", last_name);
                if (email.includes("@") == true && email.includes(".") == true)
                {
                    localStorage.setItem("email", email);
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
                        if (medicare_number.length == 10 && medicare_number.includes("e") == false && medicare_number.includes("E") == false && medicare_number.includes(".") == false && medicare_number.includes("+") == false && medicare_number.includes("-") == false)
                        {
                            medicare_number.toString();
                            edited_medicare_number = medicare_number.charAt(0);
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
                            if (medicare_irn != "" && medicare_irn <= 4 && medicare_number.includes("e") == false && medicare_number.includes("E") == false && medicare_number.includes(".") == false && medicare_number.includes("+") == false && medicare_number.includes("-") == false)
                            {
                                localStorage.setItem("medicare_irn", medicare_irn);
                                if (medicare_expiry_date != "" && medicare_expiry_date.charAt(0) == 2 && medicare_expiry_date.charAt(1) == 0)
                                {
                                    medicare_expiry_date.toString();
                                    edited_medicare_expiry_date = medicare_expiry_date.charAt(5);
                                    edited_medicare_expiry_date = edited_medicare_expiry_date + medicare_expiry_date.charAt(6);
                                    edited_medicare_expiry_date = edited_medicare_expiry_date + "/";
                                    edited_medicare_expiry_date = edited_medicare_expiry_date + medicare_expiry_date.charAt(2);
                                    edited_medicare_expiry_date = edited_medicare_expiry_date + medicare_expiry_date.charAt(3);
                                    localStorage.setItem("medicare_expiry_date", edited_medicare_expiry_date);
                                    if (password.length >= 6) {
                                        localStorage.setItem("password", password);
                                        window.location.href = "../Home Page/home.html";
                                    } else {
                                        document.getElementById("password").style.backgroundColor = "rgba(255, 0, 0, 0.9)";
                                        alert("Password must be at least 6 characters long");
                                    };
                                } else {
                                    document.getElementById("medicare_expiry_date").style.backgroundColor = "rgba(255, 0, 0, 0.9)";
                                    alert("Medicare Card Expiry Date can not be empty and must be later than the hyear '2000'");
                                };
                            } else {
                                document.getElementById("medicare_irn").style.backgroundColor = "rgba(255, 0, 0, 0.9)";
                                alert("Medicare IRN can not be empty, must be lower than 5 and can not contain the following; 'e', 'E', '.', '+', '-'");
                            };
                        } else {
                           document.getElementById("medicare_number").style.backgroundColor = "rgba(255, 0, 0, 0.9)";
                            alert("Medicare number can not be empty, must be 10 numbers long and can not contain the following; 'e', 'E', '.', '+', '-'");
                        };
                    } else {
                        document.getElementById("phone_number").style.backgroundColor = "rgba(255, 0, 0, 0.9)";
                        alert("Phone number can not be empty, must be 10 numbers long, must begin with 0 and can not contain the following; 'e', 'E', '.', '+', '-'")
                    };
                } else {
                    document.getElementById("email").style.backgroundColor = "rgba(255, 0, 0, 0.9)";
                    alert("Email can not be empty and must include the following; '@', '.'");
                };
            } else {
                document.getElementById("last_name").style.backgroundColor = "rgba(255, 0, 0, 0.9)";
                alert("Last name can not be empty and can not contain any numbers");
            };
        } else {
            document.getElementById("first_name").style.backgroundColor = "rgba(255, 0, 0, 0.9)";
            alert("First name can not be empty and can not contain any numbers or spaces");
        };
    } else {
        alert("Please accept to the terms and conditions");
    };
};

//set input's background color back to white
function editted()
{
    document.getElementById("first_name").style.backgroundColor = "rgba(255, 255, 255, 1)";
    document.getElementById("last_name").style.backgroundColor = "rgba(255, 255, 255, 1)";
    document.getElementById("email").style.backgroundColor = "rgba(255, 255, 255, 1)";
    document.getElementById("phone_number").style.backgroundColor = "rgba(255, 255, 255, 1)";
    document.getElementById("medicare_number").style.backgroundColor = "rgba(255, 255, 255, 1)";
    document.getElementById("medicare_irn").style.backgroundColor = "rgba(255, 255, 255, 1)";
    document.getElementById("medicare_expiry_date").style.backgroundColor = "rgba(255, 255, 255, 1)";
    document.getElementById("password").style.backgroundColor = "rgba(255, 255, 255, 1)";
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