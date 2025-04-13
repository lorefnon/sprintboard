/* @name findMany */
select distinct sprint.*
from sprint
    left join sprint_tag
        on :tagIds::bigint[] is not null
            and sprint_tag.sprint_id = sprint.id
where (:tagIds is null or sprint_tag.tag_id = ANY(:tagIds))
order by start_ts desc
limit :limit!
offset :offset!;

/* @name findLatest */
select *
from sprint
order by start_ts desc
limit 1;

/* @name findCount */
select count(distinct sprint.id)
from sprint
    left join sprint_tag
        on :tagIds::bigint[] is not null
            and sprint_tag.sprint_id = sprint.id
where (:tagIds is null or sprint_tag.tag_id = ANY(:tagIds));

/* @name findTagWiseCounts */
select tag.id, tag.name, count(distinct sprint.id)::text as count
from sprint
    join sprint_tag
        on sprint_tag.sprint_id = sprint.id
    join tag
        on tag.id = sprint_tag.tag_id
            and tag.name = ANY(:tags::text[])
group by tag.id, tag.name;

/* @name insertOne */
insert into sprint (title, start_ts)
values (:title!, :startTS!)
returning *;

/* @name setTitle */
update sprint set title = :title! where id = :sprintId!;

/* @name deleteOne */
delete from sprint where id = :sprintId!;

/* @name assignTag */
insert into sprint_tag (sprint_id, tag_id)
values (:sprintId!, :tagId!)
on conflict (sprint_id, tag_id)
do nothing;

/* @name removeTag */
delete from sprint_tag
where sprint_id = :sprintId! and tag_id = :tagId!;
