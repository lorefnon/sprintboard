/* @name findAll */
select *
from task
order by create_ts desc
limit :limit!
offset :offset!;

/* @name findTaskPrerequisites */
select task.*
from task_dependency
    join task
        on task.id = task_dependency.parent_id
where task_dependency.child_id = :taskId!;

/* @name findAllInSprint */
select task.*
from sprint_task
    join task
        on task.id = sprint_task.task_id
where sprint_task.sprint_id = :sprintId!;

/* @name insertOne */
insert into task (title, expected_end_ts)
values (:title!, :expectedEndTS)
returning *;

/* @name assignToSprint */
insert into sprint_task (sprint_id, task_id)
values (:sprintId!, :taskId!);

/* @name start */
update task set start_ts = now(), update_ts = now()
where id = :taskId!;

/* @name complete */
update task set end_ts = now(), update_ts = now()
where id = :taskId!;

/* @name deleteOne */
delete from task where id = :taskId!;
