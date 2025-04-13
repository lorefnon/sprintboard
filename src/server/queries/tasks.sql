/* @name findMany */
select distinct task.*
from task
    left join sprint_task
        on :sprintId::bigint is not null and sprint_task.task_id = task.id
    left join task_tag
        on :tagIds::bigint[] is not null
            and task_tag.task_id = task.id
    left join task_assignee
        on :assigneeIds::bigint[] is not null
            and task_assignee.task_id = task.id
where
    (:sprintId is null or sprint_task.sprint_id = :sprintId)
        and (:tagIds is null or task_tag.tag_id = ANY(:tagIds))
        and (:assigneeIds is null or task_assignee.assignee_id = ANY(:assigneeIds))
order by create_ts desc
limit :limit!
offset :offset!;

/* @name findCount */
select count(distinct task.id)
from task
    left join sprint_task
        on :sprintId::bigint is not null and sprint_task.task_id = task.id
    left join task_tag
        on :tagIds::bigint[] is not null
            and task_tag.task_id = task.id
where
    (:sprintId is null or sprint_task.sprint_id = :sprintId)
        and (:tagIds is null or task_tag.tag_id = ANY(:tagIds));

/* @name findTaskPrerequisites */
select task.*
from task_dependency
    join task
        on task.id = task_dependency.parent_id
where task_dependency.child_id = :taskId!;

/* @name insertOne */
insert into task (title, expected_end_ts)
values (:title!, :expectedEndTS)
returning *;

/* @name assignToSprint */
insert into sprint_task (sprint_id, task_id)
values (:sprintId!, :taskId!)
on conflict (sprint_id, task_id)
do nothing;

/* @name removeFromSprint */
delete from sprint_task
where sprint_id = :sprintId! and task_id = :taskId!;

/* @name assignTag */
insert into task_tag (task_id, tag_id)
values (:taskId!, :tagId!)
on conflict (task_id, tag_id)
do nothing;

/* @name removeTag */
delete from task_tag
where task_id = :taskId! and tag_id = :tagId!;

/* @name addAssignee */
insert into task_assignee (task_id, assignee_id)
values (:taskId!, :assigneeId!)
on conflict (task_id, assignee_id)
do nothing;

/* @name removeAssignee */
delete from task_assignee
where task_id = :taskId! and assignee_id = :assigneeId!;

/* @name start */
update task set start_ts = now(), update_ts = now()
where id = :taskId!;

/* @name complete */
update task set end_ts = now(), update_ts = now()
where id = :taskId!;

/* @name deleteOne */
delete from task where id = :taskId!;
