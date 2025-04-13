/* @name findMany */
select tag.*, sprint_tag.sprint_id, task_tag.tag_id
from tag
    left join sprint_tag on
        :sprintIds::bigint[] is not null and sprint_tag.tag_id = tag.id
    left join task_tag on
        :taskIds::bigint[] is not null and task_tag.tag_id = tag.id
where (:sprintIds is null or sprint_tag.sprint_id = ANY(:sprintIds))
    and (:taskIds is null or task_tag.task_id = ANY(:taskIds));

/* @name insertOne */
insert into tag (name)
values (:name!)
returning *;
