/* @name findAll */
select * from app_user;

/* @name findTaskAssignee */
select app_user.*, task_assignee.task_id
from task_assignee
    join app_user on app_user.id = task_assignee.assignee_id
where task_assignee.task_id = ANY(:taskIds!);

/* @name insertOne */
insert into app_user (name, email)
values (:name!, :email!)
returning *;
