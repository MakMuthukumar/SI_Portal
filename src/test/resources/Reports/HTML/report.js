$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:TC_01_Login_Page_Validation.feature");
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
formatter.uri("file:TC_02_Search_By_Contact_Name.feature");
formatter.feature({
  "name": "Validate Search By Contact Name",
  "description": "",
  "keyword": "Feature"
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
  "name": "To validate application Search Page Content is displayed",
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
  "name": "Click on Contact Radio Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Click_Contact_Radio_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Contact Name is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_verify_Contact_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Clear Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Contact Name Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_Contact_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify First Name is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_verify_FirstName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Last Name is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_verify_LastName()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Search without Firstname and LastName",
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
  "name": "Click on Search Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Search by FirstName and LastName using Integer Value",
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
  "name": "Click on Contact Name Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_Contact_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the First Name with Integer Value",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_the_FirstName_with_Integer_Value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Last Name with Integer Value",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_the_LastName_with_Integer_Value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Error Message is displayed When search with FirstName and LastName only Integer",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_verify_ContactSearchwithinteger()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Search by Valid FirstName and LastName",
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
  "name": "Clear the Text in First Name Field",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.i_clear_the_FirstName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clear the Text in Last Name Field",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_clear_the_LastName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the First Name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_the_FirstName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Last Name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_the_LastName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Search Result",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Validate_Search_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clear the Text in First Name Field",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.i_clear_the_FirstName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clear the Text in Last Name Field",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_clear_the_LastName()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application add multiple contact into New Contact List",
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
  "name": "Click On Clear Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Contact Name Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_Contact_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the First Name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_the_FirstName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Search Result",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Validate_Search_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Multiple contact to Add Contact List",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_select_multiple_Contacts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Append Contact details into the List",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_append_multiple_Contacts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Add all to List",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_add_all_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Create New Contact List",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_create_new_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter New Contact List",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.i_enter_the_contact_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Create New Contact List Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_create_new_list_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Contact into the Contact List",
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
  "name": "Click On List Tab",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_List_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Preview Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Select_Preview_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application add multiple contact into Existing Contact List",
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
  "name": "Click On SalesIntel Tab",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_SalesIntel_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Clear Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Contact Name Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_Contact_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the First Name to search",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_the_FirstName_to_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Contact Search Result",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Validate_Contact_Search_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Multiple contact to Add Contact List",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_select_multiple_Contacts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Append Contact details into the List",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_append_multiple_Contacts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Add all to List",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_add_all_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Add all Contact to Existing List",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Add_all_Contact_Existing_List()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Contact List Drop Down Option",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Contact_List_Drop_Down()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Add Contact List Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Add_list_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Delete Contact List",
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
  "name": "Click On List Tab",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_List_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Delete Contact List",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Delete_Contact_List()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Delete Contact List",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_delete_contact_list()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Reveal Contact1 Search by Valid FirstName and LastName",
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
  "name": "Click On SalesIntel Tab",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Click_SalesIntel_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clear the Text in First Name Field",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_clear_the_FirstName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clear the Text in Last Name Field",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_clear_the_LastName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Search First Name1",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_the_FirstName1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Search Last Name1",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_the_LastName1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Contact Search1",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Contact_search1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the Total Reveal Count",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_get_Total_Reveal_Count()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Reveal Contact2 Search by Valid FirstName and LastName",
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
  "name": "Clear the Text in First Name Field",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.i_clear_the_FirstName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clear the Text in Last Name Field",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_clear_the_LastName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Search First Name2",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_the_FirstName2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Search Last Name2",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_the_LastName2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Contact Search2",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Contact_search2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the Total Reveal Count",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_get_Total_Reveal_Count()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Reveal Contact3 Search by Valid FirstName and LastName",
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
  "name": "Clear the Text in First Name Field",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.i_clear_the_FirstName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clear the Text in Last Name Field",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_clear_the_LastName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Search First Name3",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_the_FirstName3()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Search Last Name3",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_the_LastName3()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Contact Search3",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Contact_search3()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the Total Reveal Count",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_get_Total_Reveal_Count()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Reveal Contact4 Search by Valid FirstName and LastName",
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
  "name": "Clear the Text in First Name Field",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.i_clear_the_FirstName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clear the Text in Last Name Field",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_clear_the_LastName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Search First Name4",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_the_FirstName4()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Search Last Name4",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_the_LastName4()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Contact Search4",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Contact_search4()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the Total Reveal Count",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_get_Total_Reveal_Count()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Reveal Contact5 Search by Valid FirstName and LastName",
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
  "name": "Clear the Text in First Name Field",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.i_clear_the_FirstName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clear the Text in Last Name Field",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_clear_the_LastName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Search First Name5",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_the_FirstName5()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Search Last Name5",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_the_LastName5()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Contact Search5",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Contact_search5()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the Total Reveal Count",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_get_Total_Reveal_Count()"
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
formatter.uri("file:TC_03_Search_By_Company.feature");
formatter.feature({
  "name": "Validate Search By Company",
  "description": "",
  "keyword": "Feature"
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
  "name": "To validate application Search without Company Name",
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
  "name": "Click on Company Radio Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Click_Company_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Search by Valid Company Name",
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
  "name": "Click On Clear Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Company",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_company_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Valid Company Name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_the_company_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Company Search Result",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Validate_Company_Search_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application add multiple Company into New Company List",
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
  "name": "Click On Clear Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Company",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_company_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Valid Company Name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_the_company_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Company Search Result",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Validate_Company_Search_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Multiple Company to Add Company List",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_select_multiple_Company()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Append Company details into the List",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_append_multiple_Company()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Add all to List",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_add_all_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Create New Company List",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_create_new_Company_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter New Company List",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.i_enter_the_company_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Create New Company List Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_create_new_Company_list_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application add multiple Company into Existing Company List",
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
  "name": "Click On SalesIntel Tab",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Click_SalesIntel_Tab()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca _ngcontent-cbf-c73\u003d\"\" href\u003d\"javascript:void(0);\" class\u003d\"nav-link active\" id\u003d\"\"\u003e...\u003c/a\u003e is not clickable at point (85, 105). Other element would receive the click: \u003cmodal-container role\u003d\"dialog\" tabindex\u003d\"-1\" class\u003d\"modal fade show\" style\u003d\"display: block;\" aria-modal\u003d\"true\"\u003e...\u003c/modal-container\u003e\n  (Session info: chrome\u003d107.0.5304.123)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-T5IACJ8\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.1.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.123, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\Asus\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59131}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 30d5f5db3fa00e273d9aaff2a9919122\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:577)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy25.click(Unknown Source)\r\n\tat org.base.Global.clickButton(Global.java:77)\r\n\tat org.stepdefinition.Steps.I_Click_SalesIntel_Tab(Steps.java:2498)\r\n\tat ???.Click On SalesIntel Tab(file:TC_03_Search_By_Company.feature:53)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click On Clear Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click On Company",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_company_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter Valid Company Name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_the_company_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Validate Company Search Result",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Validate_Company_Search_Result()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select Multiple Company to Add Company List",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_select_multiple_Company()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Append Company details into the List",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_append_multiple_Company()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click On Add all to List",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_add_all_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click On Add Existing Company List",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_add_Existing_Company_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Company List Drop Down Option",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Company_List_Drop_Down()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click On Add Company List Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Add_Company_list_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Delete Company List",
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
  "name": "Click On List Tab",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_List_Tab()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cspan joyridestep\u003d\"step1\" text\u003d\"With Lists you can create lists of companies or contacts, have them analyzed and use them in your searches.\" class\u003d\"p-2\"\u003e...\u003c/span\u003e is not clickable at point (613, 103). Other element would receive the click: \u003cdiv class\u003d\"modal-header\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d107.0.5304.123)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-T5IACJ8\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.1.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.123, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\Asus\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59131}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 30d5f5db3fa00e273d9aaff2a9919122\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:577)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy25.click(Unknown Source)\r\n\tat org.base.Global.clickButton(Global.java:77)\r\n\tat org.stepdefinition.Steps.I_Click_List_Tab(Steps.java:2491)\r\n\tat ???.Click On List Tab(file:TC_03_Search_By_Company.feature:71)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Delete Company List",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Delete_Company_List()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click On Delete Company List",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_delete_company_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", null);
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
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cspan _ngcontent-cbf-c161\u003d\"\" dropdowntoggle\u003d\"\" class\u003d\"welcome-anchor-color text-decoration-none\" aria-haspopup\u003d\"true\"\u003e...\u003c/span\u003e is not clickable at point (1426, 37). Other element would receive the click: \u003cmodal-container role\u003d\"dialog\" tabindex\u003d\"-1\" class\u003d\"modal fade show\" style\u003d\"display: block;\" aria-modal\u003d\"true\"\u003e...\u003c/modal-container\u003e\n  (Session info: chrome\u003d107.0.5304.123)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-T5IACJ8\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.1.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.123, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\Asus\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59131}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 30d5f5db3fa00e273d9aaff2a9919122\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:577)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy25.click(Unknown Source)\r\n\tat org.base.Global.clickButton(Global.java:77)\r\n\tat org.stepdefinition.Steps.I_click_welcome_Logout(Steps.java:2607)\r\n\tat ???.Click On Setting Options(file:TC_03_Search_By_Company.feature:77)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click On Logout Options",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_click_Logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:TC_04_Contact_Sort_List.feature");
formatter.feature({
  "name": "Validate Contact by Sort Option",
  "description": "",
  "keyword": "Feature"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@type\u003d\u0027password\u0027]\"}\n  (Session info: chrome\u003d107.0.5304.123)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-T5IACJ8\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.1.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.123, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\Asus\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59131}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 30d5f5db3fa00e273d9aaff2a9919122\n*** Element info: {Using\u003dxpath, value\u003d//input[@type\u003d\u0027password\u0027]}\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy25.sendKeys(Unknown Source)\r\n\tat org.base.Global.enterData(Global.java:73)\r\n\tat org.stepdefinition.Steps.i_enter_the_password(Steps.java:87)\r\n\tat ???.Enter Valid Password(file:TC_04_Contact_Sort_List.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click On Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application to Sort the Contact Details by Name",
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
  "name": "Click on Contact Radio Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Click_Contact_Radio_Button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput type\u003d\"radio\" class\u003d\"form-check-input form-check-color-primary ng-valid ng-dirty ng-touched\"\u003e is not clickable at point (234, 657). Other element would receive the click: \u003cmodal-container role\u003d\"dialog\" tabindex\u003d\"-1\" class\u003d\"modal fade show\" style\u003d\"display: block;\" aria-modal\u003d\"true\"\u003e...\u003c/modal-container\u003e\n  (Session info: chrome\u003d107.0.5304.123)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-T5IACJ8\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.1.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.123, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\Asus\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59131}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 30d5f5db3fa00e273d9aaff2a9919122\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:577)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy25.click(Unknown Source)\r\n\tat org.base.Global.clickButton(Global.java:77)\r\n\tat org.stepdefinition.Steps.I_Click_Contact_Radio_Button(Steps.java:109)\r\n\tat ???.Click on Contact Radio Button(file:TC_04_Contact_Sort_List.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click On Sort Icon For Display Contact based on Contact Name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Sort_Icon_Name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click On Sort Icon For Display Contact based on Contact Name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Sort_Icon_Name()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application to Sort the Contact Details by Job",
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
  "name": "Click On Clear Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton type\u003d\"button\" class\u003d\"btn btn-outline-danger btn-clear px-3\"\u003e...\u003c/button\u003e is not clickable at point (70, 692). Other element would receive the click: \u003cmodal-container role\u003d\"dialog\" tabindex\u003d\"-1\" class\u003d\"modal fade show\" style\u003d\"display: block;\" aria-modal\u003d\"true\"\u003e...\u003c/modal-container\u003e\n  (Session info: chrome\u003d107.0.5304.123)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-T5IACJ8\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.1.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.123, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\Asus\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59131}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 30d5f5db3fa00e273d9aaff2a9919122\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:577)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy25.click(Unknown Source)\r\n\tat org.base.Global.clickButton(Global.java:77)\r\n\tat org.stepdefinition.Steps.I_Click_clear_Button(Steps.java:2424)\r\n\tat ???.Click On Clear Button(file:TC_04_Contact_Sort_List.feature:20)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click On Sort Icon For Display Contact based on Job Title",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Sort_Icon_Job()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click On Sort Icon For Display Contact based on Job Title",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Sort_Icon_Job()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application to Sort the Contact Details by Job Level",
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
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton type\u003d\"submit\" class\u003d\"btn btn-primary btn-search\"\u003e...\u003c/button\u003e is not clickable at point (211, 692). Other element would receive the click: \u003cmodal-container role\u003d\"dialog\" tabindex\u003d\"-1\" class\u003d\"modal fade show\" style\u003d\"display: block;\" aria-modal\u003d\"true\"\u003e...\u003c/modal-container\u003e\n  (Session info: chrome\u003d107.0.5304.123)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-T5IACJ8\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.1.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.123, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\Asus\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59131}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 30d5f5db3fa00e273d9aaff2a9919122\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:577)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy25.click(Unknown Source)\r\n\tat org.base.Global.clickButton(Global.java:77)\r\n\tat org.stepdefinition.Steps.I_Click_Search_Button(Steps.java:180)\r\n\tat ???.Click on Search Button(file:TC_04_Contact_Sort_List.feature:30)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click On Sort Icon For Display Contact based on Job Level",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Sort_Icon_Level()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click On Sort Icon For Display Contact based on Job Level",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Sort_Icon_Level()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded6.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application to Sort the Contact Details by Dept",
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
  "name": "Click On Clear Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton type\u003d\"button\" class\u003d\"btn btn-outline-danger btn-clear px-3\"\u003e...\u003c/button\u003e is not clickable at point (70, 692). Other element would receive the click: \u003cmodal-container role\u003d\"dialog\" tabindex\u003d\"-1\" class\u003d\"modal fade show\" style\u003d\"display: block;\" aria-modal\u003d\"true\"\u003e...\u003c/modal-container\u003e\n  (Session info: chrome\u003d107.0.5304.123)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-T5IACJ8\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.1.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.123, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\Asus\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59131}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 30d5f5db3fa00e273d9aaff2a9919122\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:577)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy25.click(Unknown Source)\r\n\tat org.base.Global.clickButton(Global.java:77)\r\n\tat org.stepdefinition.Steps.I_Click_clear_Button(Steps.java:2424)\r\n\tat ???.Click On Clear Button(file:TC_04_Contact_Sort_List.feature:36)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click On Sort Icon For Display Contact based on Dept",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Sort_Icon_Dept()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click On Sort Icon For Display Contact based on Dept",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Sort_Icon_Dept()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded7.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application to Sort the Contact Details by Comp",
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
  "name": "Click On Clear Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton type\u003d\"button\" class\u003d\"btn btn-outline-danger btn-clear px-3\"\u003e...\u003c/button\u003e is not clickable at point (70, 692). Other element would receive the click: \u003cmodal-container role\u003d\"dialog\" tabindex\u003d\"-1\" class\u003d\"modal fade show\" style\u003d\"display: block;\" aria-modal\u003d\"true\"\u003e...\u003c/modal-container\u003e\n  (Session info: chrome\u003d107.0.5304.123)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-T5IACJ8\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.1.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.123, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\Asus\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59131}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 30d5f5db3fa00e273d9aaff2a9919122\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:577)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy25.click(Unknown Source)\r\n\tat org.base.Global.clickButton(Global.java:77)\r\n\tat org.stepdefinition.Steps.I_Click_clear_Button(Steps.java:2424)\r\n\tat ???.Click On Clear Button(file:TC_04_Contact_Sort_List.feature:44)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click On Sort Icon For Display Contact based on Comp",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Sort_Icon_Comp()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click On Sort Icon For Display Contact based on Comp",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Sort_Icon_Comp()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded8.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application to Sort the Contact Details by Location",
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
  "name": "Click On Clear Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton type\u003d\"button\" class\u003d\"btn btn-outline-danger btn-clear px-3\"\u003e...\u003c/button\u003e is not clickable at point (70, 692). Other element would receive the click: \u003cmodal-container role\u003d\"dialog\" tabindex\u003d\"-1\" class\u003d\"modal fade show\" style\u003d\"display: block;\" aria-modal\u003d\"true\"\u003e...\u003c/modal-container\u003e\n  (Session info: chrome\u003d107.0.5304.123)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-T5IACJ8\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.1.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.123, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\Asus\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59131}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 30d5f5db3fa00e273d9aaff2a9919122\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:577)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy25.click(Unknown Source)\r\n\tat org.base.Global.clickButton(Global.java:77)\r\n\tat org.stepdefinition.Steps.I_Click_clear_Button(Steps.java:2424)\r\n\tat ???.Click On Clear Button(file:TC_04_Contact_Sort_List.feature:52)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click On Sort Icon For Display Contact based on Location",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Sort_Icon_Location()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click On Sort Icon For Display Contact based on Location",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Sort_Icon_Location()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded9.png", null);
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
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cspan _ngcontent-cbf-c161\u003d\"\" dropdowntoggle\u003d\"\" class\u003d\"welcome-anchor-color text-decoration-none\" aria-haspopup\u003d\"true\"\u003e...\u003c/span\u003e is not clickable at point (1426, 37). Other element would receive the click: \u003cmodal-container role\u003d\"dialog\" tabindex\u003d\"-1\" class\u003d\"modal fade show\" style\u003d\"display: block;\" aria-modal\u003d\"true\"\u003e...\u003c/modal-container\u003e\n  (Session info: chrome\u003d107.0.5304.123)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-T5IACJ8\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.1.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.123, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\Asus\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59131}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 30d5f5db3fa00e273d9aaff2a9919122\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:577)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy25.click(Unknown Source)\r\n\tat org.base.Global.clickButton(Global.java:77)\r\n\tat org.stepdefinition.Steps.I_click_welcome_Logout(Steps.java:2607)\r\n\tat ???.Click On Setting Options(file:TC_04_Contact_Sort_List.feature:60)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click On Logout Options",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_click_Logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded10.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:TC_05_Company_Sort_List.feature");
formatter.feature({
  "name": "Validate Contact by Sort Option",
  "description": "",
  "keyword": "Feature"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@type\u003d\u0027password\u0027]\"}\n  (Session info: chrome\u003d107.0.5304.123)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-T5IACJ8\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.1.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.123, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\Asus\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59131}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 30d5f5db3fa00e273d9aaff2a9919122\n*** Element info: {Using\u003dxpath, value\u003d//input[@type\u003d\u0027password\u0027]}\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy25.sendKeys(Unknown Source)\r\n\tat org.base.Global.enterData(Global.java:73)\r\n\tat org.stepdefinition.Steps.i_enter_the_password(Steps.java:87)\r\n\tat ???.Enter Valid Password(file:TC_05_Company_Sort_List.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click On Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded11.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application to Sort the Contact Details by Name",
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
  "name": "Click on Company Radio Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Click_Company_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Sort Icon For Display Contact based on Contact Name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Sort_Icon_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Sort Icon For Display Contact based on Contact Name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Sort_Icon_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application to Sort the Contact Details by Job",
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
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Sort Icon For Display Contact based on Job Title",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Sort_Icon_Job()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Sort Icon For Display Contact based on Job Title",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Sort_Icon_Job()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application to Sort the Contact Details by Job Level",
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
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Sort Icon For Display Contact based on Job Level",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Sort_Icon_Level()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Sort Icon For Display Contact based on Job Level",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Sort_Icon_Level()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application to Sort the Contact Details by Dept",
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
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Sort Icon For Display Contact based on Dept",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Sort_Icon_Dept()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Sort Icon For Display Contact based on Dept",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Sort_Icon_Dept()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application to Sort the Contact Details by Comp",
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
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Sort Icon For Display Contact based on Comp",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Sort_Icon_Comp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Sort Icon For Display Contact based on Comp",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Sort_Icon_Comp()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application to Sort the Contact Details by Location",
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
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Sort Icon For Display Contact based on Location",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Sort_Icon_Location()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Sort Icon For Display Contact based on Location",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Sort_Icon_Location()"
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
formatter.uri("file:TC_06_ROD_Contact.feature");
formatter.feature({
  "name": "Validate RoD Contacts Verification",
  "description": "",
  "keyword": "Feature"
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
  "name": "Enter Universal Valid Username",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_the_Universal_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Universal Valid Password",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_the_Universal_password()"
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
  "name": "To validate application Search Contact for ROD",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@Reg"
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
  "name": "Click on Contact Radio Button for Universal User",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Click_Contact_Radio_Button_Universal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Contact Name is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_verify_Contact_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Contact Name Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_Contact_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify First Name is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_verify_FirstName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Last Name is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_verify_LastName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Universal First Name",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.i_enter_the_Unviersal_FirstName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Universal Last Name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_the_Universal_LastName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Searched Contact",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Contact_Universal_search()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application \"Request Verification\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@Reg"
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
  "name": "Verify Request Verification Button is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_verify_Request_Verification_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Request Verification Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Request_Verification()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application for Validate \"Requested Verification\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@Reg"
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
  "name": "Verify Requested Verification Status",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_verify_Request_Verification_Status_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Contact Requested in ROD Section",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@Reg"
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
  "name": "Verify RoD Tab is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_verify_RoD_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On RoD Tab",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_RoD()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Requested ROD is Displayed in ROD tab",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_verify_Requested_ROD_In_ROD_Tab()"
});
formatter.result({
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
formatter.uri("file:TC_07_Search_By_Job_Department.feature");
formatter.feature({
  "name": "Validate Search By Job Department",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate SalesIntel application login Valid User Username and Valid Password",
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
  "name": "To validate application Search By Job Department section contents",
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
  "name": "Verify Role Section is displayed",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_verify_Role_Section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Job Department is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_verify_Job_Department()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Search without Job Department Filter",
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
  "name": "Click on Search Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Search by Finance Job Department Filter",
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
  "name": "Click On Clear Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Job Department Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_JobDepartment_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Finance Department Filter",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Click_Finance_Department_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check Finance Department in Search Result",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_Finance_Department_In_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Search by HR Job Department Filter",
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
  "name": "Click On Clear Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Job Department Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_JobDepartment_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on HR Department Filter",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Click_HR_Department_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check HR Department in Search Result",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_Hr_Department_In_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Search by IT Job Department Filter",
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
  "name": "Click On Clear Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Job Department Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_JobDepartment_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on IT Department Filter",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Click_IT_Department_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check IT Department in Search Result",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_IT_Department_In_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Search by Legal Job Department Filter",
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
  "name": "Click On Clear Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Job Department Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_JobDepartment_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Legal Department Filter",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Click_Legal_Department_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check Legal Department in Search Result",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_Legal_Department_In_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Search by Marketing Job Department Filter",
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
  "name": "Click On Clear Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Job Department Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_JobDepartment_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Marketing Department Filter",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Click_Marketing_Department_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check Marketing Department in Search Result",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_Marketing_Department_In_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Search by Operations Job Department Filter",
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
  "name": "Click On Clear Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Job Department Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_JobDepartment_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Operations Department Filter",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Click_Operations_Department_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check Operations Department in Search Result",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_Operations_Department_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Search by Procurement Job Department Filter",
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
  "name": "Click On Clear Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Job Department Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_JobDepartment_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Procurement Department Filter",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Click_Procurement_Department_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check Procurement Department in Search Result",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_Procurement_Department_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Search by R\u0026D Job Department Filter",
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
  "name": "Click On Clear Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Job Department Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_JobDepartment_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on R\u0026D Department Filter",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Click_RnD_Department_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check R\u0026D Department in Search Result",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_RnD_Department_In_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Search by Sales Job Department Filter",
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
  "name": "Click On Clear Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Job Department Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_JobDepartment_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Sales Department Filter",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Click_Sales_Department_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check Sales Department in Search Result",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_Sales_Department_In_Search_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Search by Cross Functional Job Department Filter",
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
  "name": "Click On Clear Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Job Department Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_JobDepartment_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Cross Functional Department Filter",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Click_Cross_Functional_Department_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check Cross Functional Department in Search Result",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_Cross_Functional_Department_In_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:TC_08_Search_By_Job_Level.feature");
formatter.feature({
  "name": "Validate Search By Job Level",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate application Job Level is displayed",
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
  "name": "Click On Clear Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Job Level Filter is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_verify_Job_Level_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Search by Board Member Job Level Filter",
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
  "name": "Click On Job Level Filter",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_Job_Level_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Board Member Job Level Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Board_Member_Job_Level_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check Board Member Job Level in Result",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_BoardMember_Job_Level_In_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Search by C-level Executive Job Level Filter",
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
  "name": "Click On Clear Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Job Level Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Job_Level_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On C-Level Executive Job Level Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Clevel_Executive_Job_Level_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check C-level Executive Job level in Result",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Check_Clevel_Executive_Job_Level_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Search by Voice Presidents Job Level Filter",
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
  "name": "Click On Clear Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Job Level Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Job_Level_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Vice Presidents Job Level Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Voice_Precident_Job_Level_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check Vice Presidents Job level in Result",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Check_Vice_President_Job_Level_IN_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Search by Directors Job Level Filter",
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
  "name": "Click On Clear Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Job Level Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Job_Level_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Directors Job Level Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Directors_Job_Level_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check Directors Job level in Result",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Check_Directors_Job_Level_IN_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Search by Managers Job Level Filter",
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
  "name": "Click On Clear Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Job Level Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Job_Level_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Managers Job Level Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Managers_Job_Level_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check Managers Job level in Result",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Check_Managers_Job_Level_IN_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Search by Key Influencers Job Level Filter",
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
  "name": "Click On Clear Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Job Level Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Job_Level_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Key Influencers Job Level Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Key_Influencers_Job_Level_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check Key Influencers Job level in Result",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Check_Key_Influencers_Job_Level_IN_Result()"
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
formatter.uri("file:TC_09_Search_By_Job_Title.feature");
formatter.feature({
  "name": "Validate Search By Job Title",
  "description": "",
  "keyword": "Feature"
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
  "name": "To validate application Search By Job Title Filter",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@Reg"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Verify Role Section is displayed",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_verify_Role_Section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Title filter is Displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Verify_Title_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Title Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Title_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Title in Title filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Enter_Job_Title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check searched title is displayed in Search Result",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_Title_In_Result()"
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
formatter.uri("file:TC_10_Search_By_Contact_Email.feature");
formatter.feature({
  "name": "Validate Search By Contact Email",
  "description": "",
  "keyword": "Feature"
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
  "name": "To validate application Search by Invalid Email Address",
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
  "name": "Click on Contact Email Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Click_Contact_Email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Invalid Contact Email Address",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.i_enter_the_invalid_Contact_Email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Error Message is displayed When search with Invalid Email Address",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_verify_ContactSearchwithinvalidEmail()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate application Search by Valid Contact Email Address",
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
  "name": "Click On Clear Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Contact Email Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Contact_Email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Contact Email Address",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_enter_the_Contact_Email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Searched Contact",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Searched_Contact()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check email in Search Result",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_Email_In_Result()"
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
formatter.uri("file:TC_11_Search_By_Location.feature");
formatter.feature({
  "name": "Validate Search by Location",
  "description": "",
  "keyword": "Feature"
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
  "name": "Enter Valid Username",
  "keyword": "When "
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
  "keyword": "Then "
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
  "name": "To validate Search by States in USA Location",
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
  "name": "Verify Location filter is Displayed",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Verify_Location_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Location Tab",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Click_Location_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on State Combobox",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Click_State_Combobox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Data in State Combobox",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_enter_the_Data_State_Combobox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check CA for California State in Search Result",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_California_In_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate Search by Zip Code in USA Location",
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
  "name": "Click On Clear Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Location filter is Displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Verify_Location_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Location Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Location_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Zip code under USA",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Zip_Code_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Zip Code in the text field",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Enter_Zip_Code()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate Search by Metro Areas in USA Location",
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
  "name": "Click On Clear Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Location filter is Displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Verify_Location_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Location Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Location_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Metro Areas under USA",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Metro_Area_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Metro Areas Text Field",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_on_Metro_Area_Text_Field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Albany GA Metro Area",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Enter_Albany_GA_Metro_Area()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate Search by Non-USA Location",
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
  "name": "Click On Clear Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Location filter is Displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Verify_Location_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Location Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Location_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Non USA Radio Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_on_Non_USA_Radio_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Country Input Box",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Country_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Non USA Country Name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Enter_Non_USA_Country_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check Country in Location in Search Result",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_Country_Location_In_Result()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[contains(text(),\u0027Spain\u0027)]\"}\n  (Session info: chrome\u003d107.0.5304.123)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-T5IACJ8\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.1.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.123, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\Asus\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59131}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 30d5f5db3fa00e273d9aaff2a9919122\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(),\u0027Spain\u0027)]}\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.stepdefinition.Steps.I_Check_Country_Location_In_Result(Steps.java:947)\r\n\tat ???.Check Country in Location in Search Result(file:TC_11_Search_By_Location.feature:51)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded12.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate Search by Global Location",
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
  "name": "Click On Clear Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Location filter is Displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Verify_Location_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Location Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Location_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Global Radio Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_on_Global_Radio_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Country Input Box",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Country_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Global Country Name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Enter_Global_Country_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check Global Country in Location in Search Result",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_Global_Country_Location_In_Result()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[contains(text(),\u0027Canada\u0027)]\"}\n  (Session info: chrome\u003d107.0.5304.123)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-T5IACJ8\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.1.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.123, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\Asus\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59131}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 30d5f5db3fa00e273d9aaff2a9919122\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(),\u0027Canada\u0027)]}\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.stepdefinition.Steps.I_Check_Global_Country_Location_In_Result(Steps.java:955)\r\n\tat ???.Check Global Country in Location in Search Result(file:TC_11_Search_By_Location.feature:63)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded13.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Logout the application",
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
  "keyword": "Then "
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
formatter.uri("file:TC_12_Search_By_Keywords.feature");
formatter.feature({
  "name": "To validate search by Keywords",
  "description": "",
  "keyword": "Feature"
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
  "name": "Enter Valid Username",
  "keyword": "When "
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
  "keyword": "Then "
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
  "name": "To validate Search by Keywords",
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
  "name": "Click on Keywords Filter",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_On_Keywords_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Keywords Input box",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Keywords_Input_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Keyword",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Enter_Keyword_In_Input_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Logout the application",
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
  "keyword": "Then "
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
formatter.uri("file:TC_13_Search_By_Industry.feature");
formatter.feature({
  "name": "To validate Search by Industry",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Open Application",
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
  "keyword": "When "
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
  "name": "Enter Valid Username",
  "keyword": "When "
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
  "keyword": "Then "
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
  "name": "To Validate search by Any of Industry Names Filter where Selected All",
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
  "name": "Click on Industry Filter",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_On_Industry_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Select All Check Box",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Select_All_Check_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the First Contact in Search Result",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Searched_Contact()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate search by Any Of Industry Names Filter where a single Industry is selected",
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
  "name": "Click On Clear Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Industry Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Industry_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Industry Name Input box",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Industry_Name_Input_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Industry Name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Enter_Industry_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Particular Industry",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Particular_Industry()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the First Contact in Search Result",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Searched_Contact()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check the Industry in Search Result",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_Industry_In_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate search by None Of Industry Names Filter Where Selected All",
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
  "name": "Click On Clear Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Industry Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Industry_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on None of Page",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_None_Of_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Select All Check Box",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Select_All_Check_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the First Contact in Search Result",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Searched_Contact()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate search by None Of Industry Names Filter Where single Industry is selected",
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
  "name": "Click On Clear Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Industry Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Industry_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on None of Page",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_None_Of_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Industry Name Input box",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Industry_Name_Input_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Industry Name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Enter_Industry_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Particular Industry",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Particular_Industry()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the First Contact in Search Result",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Searched_Contact()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate search by NAICS Codes in Industry Filter",
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
  "name": "Click On Clear Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Industry Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Industry_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on NAICS or SIC Code page",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_NAICSorSIC_Code_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "CLick on NAICS Code input box",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_NAICS_Code_Input_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter NAICS Code",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Enter_NAICS_Code()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the First Contact in Search Result",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Searched_Contact()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check Industry for NAICS code in Search Result",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_Industry_For_NAICS_In_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate search by SIC Codes in Industry Filter",
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
  "name": "Click On Clear Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Industry Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Industry_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on NAICS or SIC Code page",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_NAICSorSIC_Code_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on SIC Radio button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_SIC_Code_Radio_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "CLick on NAICS Code input box",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_NAICS_Code_Input_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter SIC Code",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Enter_SIC_Code()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the First Contact in Search Result",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Searched_Contact()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check Industry for SIC code in Search Result",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_Industry_For_SIC_In_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Logout the application",
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
  "keyword": "Then "
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
formatter.uri("file:TC_14_Search_By_Revenue.feature");
formatter.feature({
  "name": "To validate Search by Revenue",
  "description": "",
  "keyword": "Feature"
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
  "name": "Enter Valid Username",
  "keyword": "When "
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
  "keyword": "Then "
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
  "name": "To Validate search by Million Revenue Filter",
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
  "name": "Click on Revenue Filter",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_On_Revenue_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Minimum Revenue",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Enter_Minimum_Revenue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Maximum Revenue",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Enter_Maximum_Revenue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the First Contact in Search Result",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Searched_Contact()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the Revenue in Search Result",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_Revenue_In_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Logout the application",
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
  "keyword": "Then "
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
formatter.uri("file:TC_15_Search_By_Employees_or_Size.feature");
formatter.feature({
  "name": "To validate Search by Employees or Size",
  "description": "",
  "keyword": "Feature"
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
  "name": "Enter Valid Username",
  "keyword": "When "
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
  "keyword": "Then "
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
  "name": "To Validate Employees or Size Filter",
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
  "name": "Click on Employee Size Filter",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_On_Employee_Size_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Minimum Employee Size",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Enter_Minimum_Employee_Size()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Maximum Employee Size",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Enter_Maximum_Employee_Size()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the First Contact in Search Result",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Searched_Contact()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the Employee Size in Search Result",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_Employee_Size_In_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Logout the application",
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
  "keyword": "Then "
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
formatter.uri("file:TC_16_Search_By_Technographic_Filter.feature");
formatter.feature({
  "name": "To validate Search by Technographics",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Open Website",
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
  "keyword": "When "
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
  "name": "Enter Valid Username",
  "keyword": "When "
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
  "keyword": "Then "
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
  "name": "To validate Search by Any Products in Technographics filter",
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
  "name": "Validate TECHNOGRAPHICS is displayed",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Check_Technographics()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Products Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Producet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Technographic product text box",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Product_Text_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the product name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Enter_The_Product_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Company Radio Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Company_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on company name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Company_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on All in Company detail page",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_All()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check Any technographic product in Company detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_Any_Product_In_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate Search by All Products in Technographics filter",
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
  "name": "Click on SalesIntel Logo",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_On_SalesIntel_Logo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Clear Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate TECHNOGRAPHICS is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Check_Technographics()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Products Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Producet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on All Button in Products",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_All_Button_In_Products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Technographic product text box",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Product_Text_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the product name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Enter_The_Product_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on company name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Company_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on All in Company detail page",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_All()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check All technographic products in Company detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_All_Products_In_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate Search by None Products in Technographics filter",
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
  "name": "Click on SalesIntel Logo",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_On_SalesIntel_Logo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Clear Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate TECHNOGRAPHICS is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Check_Technographics()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Products Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Producet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on None Button in Products",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_None_Button_In_Products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Technographic product text box",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Product_Text_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the product name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Enter_The_Product_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on company name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Company_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on All in Company detail page",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_All()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check None of the technographic product is displayed in Company detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_None_Products_In_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate Search by Any Provider in Technographics filter",
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
  "name": "Click on SalesIntel Logo",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_On_SalesIntel_Logo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Clear Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate TECHNOGRAPHICS is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Check_Technographics()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Provider Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Provider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Technographic Provider text box",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Provider_Text_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Provider name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Enter_The_Provider_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on company name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Company_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on All in Company detail page",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_All()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check Any technographic Provider in Company detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_Any_Provider_In_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate Search by All Provider in Technographics filter",
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
  "name": "Click on SalesIntel Logo",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_On_SalesIntel_Logo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Clear Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate TECHNOGRAPHICS is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Check_Technographics()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Provider Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Provider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on All Button in Provider",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_All_Button_In_Provider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Technographic Provider text box",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Provider_Text_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Provider name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Enter_The_Provider_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on company name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Company_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on All in Company detail page",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_All()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check All technographic Providers in Company detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_All_Providers_In_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate Search by None Provider in Technographics filter",
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
  "name": "Click on SalesIntel Logo",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_On_SalesIntel_Logo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Clear Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate TECHNOGRAPHICS is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Check_Technographics()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Provider Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Provider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on None Button in Provider",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_None_Button_In_Providers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Technographic Provider text box",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Provider_Text_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Provider name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Enter_The_Provider_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on company name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Company_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on All in Company detail page",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_All()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check None of the technographic Provider is displayed in Company detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_None_Providers_In_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate Select All Checkbox where Search by Any Provide in Technographics filter",
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
  "name": "Click on SalesIntel Logo",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_On_SalesIntel_Logo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Clear Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate TECHNOGRAPHICS is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Check_Technographics()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Categories Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Categories()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select All Check box for Categories",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_SelectALL_CheckBox_In_Categories()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on company name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Company_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on All in Company detail page",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_All()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check Any technographic Category in Company detail page to Validate Select ALL",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_Any_Categories_In_Company_Detail_To_Validate_Select_ALL()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate Search by Any Provide in Technographics filter",
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
  "name": "Click on SalesIntel Logo",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_On_SalesIntel_Logo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Clear Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate TECHNOGRAPHICS is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Check_Technographics()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Categories Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Categories()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Category name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Enter_The_Category_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on company name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Company_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on All in Company detail page",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_All()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check Any technographic Category in Company detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_Any_Category_In_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate Search by All Provide in Technographics filter",
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
  "name": "Click on SalesIntel Logo",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_On_SalesIntel_Logo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Clear Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate TECHNOGRAPHICS is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Check_Technographics()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Categories Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Categories()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on All Button in Category",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_All_Button_In_Category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Category name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Enter_The_Category_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on company name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Company_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on All in Company detail page",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_All()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check All technographic Category in Company detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_All_Category_In_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate Search by None Provide in Technographics filter",
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
  "name": "Click on SalesIntel Logo",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_On_SalesIntel_Logo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Clear Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate TECHNOGRAPHICS is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Check_Technographics()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Categories Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Categories()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on None Button in Category",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_None_Button_In_Category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Category name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Enter_The_Category_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on company name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Company_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on All in Company detail page",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_All()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check None of the technographic Category is displayed in Company detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_None_Category_In_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Logout the application",
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
  "keyword": "Then "
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
formatter.uri("file:TC_17_Search_By_INTENT.feature");
formatter.feature({
  "name": "To validate Search by INTENT",
  "description": "",
  "keyword": "Feature"
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
  "name": "Enter Valid Username",
  "keyword": "When "
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
  "keyword": "Then "
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
  "name": "To validate Search by Topics",
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
  "name": "Check INTENT is displayed",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Check_Intent()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Topics",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Topics()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Netflix Topic",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Select_Netflix_Topic()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check Searched Topic in Search Result",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_Netflix_Topic_In_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate Search by Score Threshold",
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
  "name": "Click On Clear Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Topics",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Topics()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Netflix Topic",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Select_Netflix_Topic()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check INTENT is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Check_Intent()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Score Threshold Filter",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Score_Threshold_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Minimum Score as 86",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Select_Score_Threshold()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check Searched Topic in Search Result",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Check_Netflix_Topic_In_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check Score in Result",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Check_Score_In_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate Search by Topic Threshold",
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
  "name": "Click On Clear Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_Click_clear_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Do Not Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_do_not_save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Topics",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Topics()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Netflix Topic",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Select_Netflix_Topic()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Hulu Topic",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Select_Hulu_Topic()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Topic Threshold",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_On_Topic_Threshold_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Minimum Topic Threshold",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Select_Topic_Threshold()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check Search result for Topic Threshold",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Check_Topic_Threshold_In_Result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Logout the application",
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
  "keyword": "Then "
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