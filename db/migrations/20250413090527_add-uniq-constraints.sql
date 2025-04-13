-- migrate:up
create unique index idx_uq_task_dependency__parent_id__child_id
on task_dependency (parent_id, child_id);

alter table task_dependency
add constraint uq_task_dependency__parent_id__child_id
unique using index idx_uq_task_dependency__parent_id__child_id;

create unique index idx_uq_sprint_task__sprint_id__task_id
on sprint_task (sprint_id, task_id);

alter table sprint_task
add constraint uq_sprint_task__sprint_id__task_id
unique using index idx_uq_sprint_task__sprint_id__task_id;

create unique index idx_uq_task_assignee__task_id__assignee_id
on task_assignee (task_id, assignee_id);

alter table task_assignee
add constraint uq_task_assignee__task_id__assignee_id
unique using index idx_uq_task_assignee__task_id__assignee_id;

-- migrate:down
alter table task_assignee drop constraint uq_task_assignee__task_id__assignee_id;

alter table sprint_task drop constraint uq_sprint_task__sprint_id__task_id;

alter table task_dependency drop constraint uq_task_dependency__parent_id__child_id;

-- drop index idx_uq_task_dependency__parent_id__child_id;

-- drop index idx_uq_sprint_task__sprint_id__task_id;

-- drop index idx_uq_task_assignee__task_id__assignee_id;
