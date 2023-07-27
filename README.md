# Leave Mangement System
The Online Leave Management System is a web-based application designed to facilitate efficient leave management within an organization. This system allows employees to submit leave requests, and the system streamlines the approval and rejection process for the HR department and supervisors. It also provides features such as notifications, leave cancellation, approval of leaves, and load balancing for optimal performance.

## Features
Employee Dashboard
* Employees can log in to their accounts and view their leave balances, past leave history, and upcoming holidays.
* They can apply for leave by submitting a new leave request, specifying the type of leave (sick, vacation, personal, etc.), start date, end date, and reason.

Leave Approval Workflow
* Once an employee applies for leave, the designated supervisor or manager will receive a notification for approval.
* The supervisor can view the leave details and approve or reject the request accordingly.
* If the request is rejected, the employee will be notified with the reason for rejection.

Notifications
* The system will generate automatic notifications for employees upon the approval or rejection of their leave requests.
* Supervisors will also receive notifications when a leave request is submitted by their team members.

Leave Cancellation
* Employees can cancel their leave requests before the start date if the plans change.
* Supervisors will be notified of the cancellation, and the leave balance will be adjusted accordingly.

Load Balancer
* The system will be designed with load balancing capabilities to ensure optimal performance and scalability, even during peak usage periods.


## Clone the repository from GitHub:
git clone https://github.com/NikitMasane/Leave_mangement_system.git
Install the required dependencies for the frontend and backend.

clone this repo 
then open the .env file copy the link of mongo db connection url 
download the mongo db extension in vscode 
click the leaf icon of mongo db on left side and click on connect with string 
enter the string you copied from env file and press enter

how to run 
run cmd in folder leave management system and run command yarn start
this will run the database

now run the cmd in client folder and run yarn start
this will start development server

ready to go!


## Usage
* Employees should access the application using their credentials and navigate to the leave management section to request new leaves.
* Supervisors or managers will receive notifications of pending leave requests and can approve or reject them from their dashboard.
* The system will automatically send notifications to employees about the status of their leave requests.
* Employees can also cancel their leave requests if necessary.



