# team-project-mega-minds
# HealthClub Membership Management system

## Team Name: Mega Minds
- Raghav Sharma  (016706716)
- Aishwarya Lodhi(015960412)
- Srinisha Prabhakaran (16176914)
- Rishabh Gupta (010013666)

## Areas of contributions:
1. Raghav Sharma
- Setup initial project architecture
- API's: Enroll into classes, Employee add members, Members views logs, Employee login, Integrating checkin / checkout, Members dashboard.
- UI Pages: Training Log view, Enrolled class, Member profile page, Dashboards for members.
- Other: Integration and database

2. Aishwarya Lodhi
- Initial project setup
- Setup initial project architecture
- API's: Create traning logs, employee adding memberships, employee adding classes, employee adding non-members, fetch data for members filter, 
- UI: View class page, employee login page, add classes for employees, employee add membership, login page for members, dashboard page for employee, 
- Integrate view of frontend & backend, 
- Documentation

3. Srinisha Prabhakaran
- Initial setup of project
- UI: Home page, login page, Add training logs page, logout, 
- API's: Member login, Member view classes, profile page of member, logout, add classes by employees, view class for members, 
- Postman api testing
- Documentation
- Deployment

4. Rishabh Gupta
- Diagrams: Deployment diagram, Class diagram, Component Diagram, Use case diagram, Sequence diagram, AWS Architecture diagram
- Database setup
- Setup aws rds
- API's: View member classes, member checkout, dashboard in employee profile, view members and filter members, view employee dashboards
- Unit testing
- Documentation

## Tech-Stack:
- Frontend: React Js
- Backend: Express + Node Js
- Database: AWS RDS (MySQL)
- Backend Deployment: AWS Ec2
- Frontend Deployment: AWS S3

## Steps to run the application on your local:
1. Clone the repository and go to project root
2. For backend, go to BE via: cd BE
3. Install requried node_modules in BE: npm install
4. Run backend: npm run start
5. For frontend, go to FE via: cd FE
6. Install required node_modules in FE: npm install
7. Run frontend: npm start

## Scrum Meetings Schedule:
2 weeks sprint

### GitHub Repo
https://github.com/gopinathsjsu/team-project-mega-minds 

### Project Board
https://docs.google.com/spreadsheets/d/1nTLIjw4CrDyYIR36EPpHVn1wR7-VXQ5maRttM-k3yYQ/edit?usp=sharing

### Project Journal
https://docs.google.com/spreadsheets/d/1nTLIjw4CrDyYIR36EPpHVn1wR7-VXQ5maRttM-k3yYQ/edit?usp=sharing

## Diagrams: 
Deployment Diagram: The Relative Relationship of how these components are Deployed
![Deployment Diagram](./images/deployment_diagram.png)

AWS Architecture Diagram
![AWS Architecture Diagram](./images/aws_architecture.png)

Component Diagram: Software Components and their Public Interfaces
![Component Diagram](./images/component_diagram.png)

Use Case Diagram:
![Use Case Diagram](./images/use_case_diagram.png)

Sequence Diagram:
![Sequence Diagram](./images/seq_diag.png)

BurnDown Chart:
![BurnDown Chart](./images/burndown_chart.png)

## XP Values & Practices:
1. Communication
2. Feedback
3. Simplicity
4. Pair Programming

## Design Decisions:
We built our application with Atomic Design, as it creates and maintains effective design systems for digital products.
We chose to use MERN stack to develop the application because of its scalable, flexible and real time web application building capabilities. Further we used AWS RDS relational database for our datastore, and deployed our frontend application via AWS S3 and CDN which enables easy and fast access to the user across different locations. For backend, we deployed using AWS EC2 and Elastic Load Balancer.

## Feature Set:
1. Member: 
- A member can log into the member account
- A member can view all the available gym classes in different locations
- A member can enroll into any gym class available
- A member can view all the gym classes they have enrolled into
- A member can add workout logs of their time spent in the gym
- A member can view the workout logs of their time spent in the gym

2. Employee: 
- An employee can log into the employee account
- An employee can view all the members
- An employee can also filter the members based on their name
- An employee can create a class for the members
- An employee can view all the upcoming classes in all the locations
- An employee can approve the request of a non-member, hence making them a member
- An employee can view the user logs / metrics of workout of each member on the dashboard

3. Non-member:
- A non-member can view the home page
- A non-member can view the memberships available
- A non-member can send request to join the gym

## AWS Services
### AWS EC2
![AWS EC2](./images/ec2.png)

### AWS RDS
![AWS RDS](./images/aws_rds.png)

### AWS S3
![AWS S3](./images/aws_s3.png)

### AWS Autoscaling Group
![AWS Autoscaling Group](./images/autoscaling_group.png)

### AWS Load Balancer
![AWS Load Balancer](./images/load_balancer.png)

### AWS CloudFront Distribution
![AWS CloudFront Distribution](./images/cloudfront_distribution.png)

## UI Screenshots
### Member Home Page
![Member Home Page](./images/home_page.png)

### Classes Available To Enroll
![Classes Available To Enroll](./images/available_classes.png)

### Member Currently Enrolled Classes
![Member Currently Enrolled Classes](./images/enrolled_classes.png)

### Member Profile Page
![Member Profile Page](./images/profile_page.png)

### Member Training Logs
![Member Training Logs](./images/profile_page.png)

### Employee Add Member
![Employee Add Member](./images/add_member.png)

### Employee Create Class
![Employee Create Class](./images/create_class.png)

### Employee Dashboard Check In / Out
![Employee Dashboard Check In / Out](./images/default_dashboard.png)

### Employee View Upcoming Classes
![Employee View Upcoming Classes](./images/upcoming_classes.png)

### Employee View User Logs Analytics
![Employee View User Logs Analytics](./images/user_logs_analytics.png)

### Employee View All Members
![Employee View All Members](./images/view_members.png)
