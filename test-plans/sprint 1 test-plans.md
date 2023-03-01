Test plan


Introduction:-This test plan outlines the steps for testing the Login Page of an application. The purpose of this test plan is to ensure that the Login Page meets the requirements and works as expected.


Test objectives:-The objectives of this test plan are to ensure the following:

1. Login Page is accessible and functions as expected
1. Login Page has all required fields and is user-friendly
1. User credentials are securely stored
1. Login Page has validations for incorrect credentials


Test scope:-This test plan covers testing of the Login Page, which includes functionality testing, UI testing, security testing, and performance testing.


Test Environment:-The environment for testing the Login Page includes the following:

1. Operating System: Windows 10,mac,Linux,Mobile,etc..,
1. Browser: Google Chrome etc..,
1. Database: Mysql


Test strategy:-The test strategy for testing the Login Page is as follows:

1. Functionality Testing: The functionality of the Login Page will be tested by ensuring that all the required fields are present and are functioning as


Test Items:-

1. Test that the user is able to input their username and password into the designated fields.
1. Test that the user is able to click the login button and be redirected to the home page.
1. Test that the user is able to reset their password if they have forgotten it.
1. Test that the user is able to click the remember me checkbox and be remembered for future logins.
1. Test that the user is able to navigate away from the login page and return to it without losing their input information.
1. Test that the user is able to click the forgot password link and be redirected to the page for resetting their password.
1. Test that the user is able to view a message when a login attempt is unsuccessful.
1. Test that the user is able to view a message when a login attempt is successful.
1. Test that the user is able to view the terms of service and privacy policy when clicking the appropriate links.
1. Test that the user is able to view the help and support page when clicking the appropriate link.


Features to be Tested:-

1. Login authentication: Test the ability to successfully log in to the system with valid credentials.
1. User account creation: Test the ability to create a new user account and validate the user information is stored successfully.
1. Password reset: Test the ability to reset a password for a user account.
1. User interface: Test the user interface of the login page for usability and aesthetics.
1. Security features: Test for any security vulnerabilities associated with the login page, such as MYSQL injection and cross-site scripting.
1. Data validation: Test the ability of the login page to validate user input, including passwords and usernames, to ensure they meet the system requirements.
1. Error handling: Test the ability of the login page to handle errors gracefully, such as invalid usernames, passwords, and other invalid inputs.
1. Browser compatibility: Test the ability of the login page to function correctly across multiple browsers.


Approach:-

1. Test the Login page with valid credentials:
1. Enter valid username and valid password
1. Click on the login button
1. Verify that user is logged in successfully


\2. Test the Login page with invalid credentials:

1. Enter invalid username and invalid password
1. Click on the login button
1. Verify that login fails and an error message is displayed


\3. Test the Login page with empty credentials:

1. Leave username and password fields empty
1. Click on the login button
1. Verify that login fails and an error message is displayed


\4. Test the Login page with special character credentials:

1. Enter the username and password with special characters
1. Click on the login button
1. Verify that login fails and an error message is displayed


\5. Test the Login page with incorrect CAPTCHA:

1. Enter valid username and valid password
1. Enter incorrect CAPTCHA value
1. Click on the login button
1. Verify that login fails and an error message is displayed


\6. Test the Login page with maximum length credentials:


Pass/Fail Criteria:

- The login page should display correctly on all supported browsers.
- The login page should be able to accept and process valid login         credentials.
- The login page should reject invalid login credentials.
- The login page should be secure, with no unencrypted data being sent.
- The login page should redirect to the correct page upon successful login.
- The login page should display an error message if the credentials are incorrect.
- The login page should log out any user that has been inactive for a specified period of time.
- The login page should not allow users to access other parts of the website without being logged in.


Testing Task:-

1. Objective:


The objective of this test plan is to ensure that the login page of the application is working correctly and that all features are working as expected.


1. Scope:


This test plan covers the functional testing of the login page of the application. This includes validating the user credentials, validating the usability of the page and checking for any security vulnerabilities.


1. Test Environment:


The test environment for this test plan is the staging environment of the application.


1. Test Cases:


The following test cases will be executed for the login page:


- Validate that the user is able to login with correct credentials
- Validate that the user is not able to login with incorrect credentials
- Validate that the user is able to reset the password
- Validate that the user is able to register with valid credentials
- Validate that the user is not able to register with invalid credentials
- Check for any security vulnerabilities
- Check for any usability issues


\5. Test Data:


Test data will be provided by the development team.


\6. Expected Results:


The expected results are that the user is able to login with correct credentials


Responsibilities:-


1. Test Scenario: Test the functionality of the Login page


- Test Objective: Ensure that the Login page functions correctly and meets the expected requirements


- Test Environment: The test environment should include the appropriate web browser and the necessary hardware/software for testing


- Test Data: Provide a valid user ID and password to test the Login page


- Expected Result: Verify that the user is able to login successfully and access the desired page


\2. Test Scenario: Test the accuracy of the input fields


- Test Objective: Ensure that the input fields are accurate and do not accept invalid data


- Test Environment: The test environment should include the appropriate web browser and the necessary hardware/software for testing


- Test Data: Enter a valid user ID and password and then enter an invalid user ID and/or password


- Expected Result: Verify that the user is unable to login with an invalid user ID and/or password


\3. Test Scenario: Test the security of the Login page


- Test Objective: Ensure that the Login page is secure and any attempt to access the page without valid credentials is blocked


Schedule:-

class LoginTest(unittest.TestCase):


@classmethod

def setUpClass(cls):

cls.driver = webdriver.Chrome()

cls.driver.implicitly\_wait(10)

cls.driver.maximize\_window()


\# navigate to the application home page

cls.driver.get("http://www.example.com/login/")


def test\_login\_title(self):

\# get the title of the page

self.assertEqual("Login Page", self.driver.title)


def test\_login(self):

\# get the username textbox

self.username = self.driver.find\_element\_by\_name("username")


\# get the password textbox

self.password = self.driver.find\_element\_by\_name("password")


\# enter username

self.username.send\_keys("test")


\# enter password

self.password.send\_keys("test123")


\# click on the Sign In
