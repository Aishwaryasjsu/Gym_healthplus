select * from healthclub.gymclasses;

insert into gymclasses values(1,'Aerobic','JohnP','2023-05-07 06:45:05','2023-05-07 07:45:05','pass','Fremont',current_timestamp(),current_timestamp());
insert into gymclasses values(2,'Yoga','Tim','2023-05-07 09:45:05','2023-05-07 10:45:05','Fremont',current_timestamp(),current_timestamp());
insert into gymclasses values(3,'Body Pump','Sandy','2023-05-07 08:45:05','2023-05-07 09:45:05','Fremont',current_timestamp(),current_timestamp());
insert into gymclasses values(4,'Zumba','Tella','2023-05-07 18:45:05','2023-05-07 19:45:05','Fremont',current_timestamp(),current_timestamp());
insert into gymclasses values(5,'Cycling','Tella','2023-05-07 19:45:05','2023-05-07 20:45:05','Fremont',current_timestamp(),current_timestamp());

Select * from healthclub.memberships;

insert into memberships values(1, 'Gold Membership', 'Quaterly', '100', 'Access to all facilities and classes', current_timestamp(),current_timestamp());
insert into memberships values(2, 'Silver Membership', 'Monthly', '50', 'Access to gym only', current_timestamp(),current_timestamp());
insert into memberships values(3, 'Platium Membership', 'Monthly', '200', 'Access to all facilities and classes and personal trainer', current_timestamp(),current_timestamp());
insert into memberships values(4, 'Bronze Membership', 'Quaterly', '50', 'Access to pool only', current_timestamp(),current_timestamp());
insert into memberships values(5, 'Free Trail', 'Monthly', '0', 'Access to 2 basic classes', current_timestamp(),current_timestamp());

