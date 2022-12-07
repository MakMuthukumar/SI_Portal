$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/D:/Automation/Projects/SalesIntel/src/test/resources/Features/New_UI_View/TC_01_Login_Page_Validation.feature");
formatter.feature({
  "name": "Validate application login Page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate SalesIntel application Launching application",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the url",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.launch_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate SalesIntel application Login Screen Content",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Validate Login Page Title is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Validate_Page_Title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Email Field is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Email_Field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Password Field is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Validate_Password_Field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Remember Me Checkbox is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Validate_Remember_Me()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Forgot Password Link is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Validate_Forgot_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate FAQ Link is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Validate_FAQ()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Login Button is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Validate_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate SalesIntel application Tapping only Login Button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Click On Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Error Text when Tried with Invalid Username and Invalid Password",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Validate_InvalidUsername_InvalidPassword_Field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Error Text when Tried with Invalid Password and Invalid Username",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Validate_InvalidPassword_InvalidUsername_Field()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate SalesIntel application Login with Invalid Username and Valid Password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter Invalid Username",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.i_enter_invalid_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Valid Password",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_the_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Error Text when Tried with Invalid Username and Valid Password",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Validate_InvalidUsername_validPassword_Field()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate SalesIntel application Login with Valid Username and Invalid Password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Clear the Text in Username Field",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.i_Clear_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clear the Text in Password Field",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_clear_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Valid Username",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_the_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Invalid Password",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_invalid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate SalesIntel application Login with Invalid Username and Invalid Password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Clear the Text in Username Field",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.i_Clear_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clear the Text in Password Field",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_clear_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Invalid Username",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_invalid_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Invalid Password",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_invalid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Error Text when Tried with Invalid Username and Valid Password",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Validate_InvalidUsername_validPassword_Field()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate SalesIntel application Forget Password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Click on Forget Password",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_Forgot_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Forget Email Address Field is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_verify_Forget_Email_Field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Forget Email Address",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.i_enter_the_Forget_Email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Reset Password Button is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_verify_Forget_Reset_Email_Field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Reset Password Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_Resert_Password_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate SalesIntel application Remember Me",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Click on Remember Me",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_Remember_Me()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate SalesIntel application Valid User Username and Valid Password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Click on Remember Me",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_Remember_Me()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clear the Text in Username Field",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_Clear_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clear the Text in Password Field",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_clear_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Valid Username",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_the_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Valid Password",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_the_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Logout",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Click On Setting Options",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_click_welcome_Logout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Logout Options",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_click_Logout()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});