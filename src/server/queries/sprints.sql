/* @name findAll */
select *
from sprint
order by start_ts desc
limit :limit!
offset :offset!;

/* @name findLatest */
select *
from sprint
order by start_ts desc
limit 1;

/* @name countAll */
select count(*)
from sprint;

/* @name countByEachTag */
select tag.id, tag.name, count(distinct sprint.id)::text as count
from sprint
    join sprint_tag
        on sprint_tag.sprint_id = sprint.id
    join tag
        on tag.id = sprint_tag.tag_id
            and tag.name in (:tags)
group by tag.id, tag.name;

/*
@name countByTags
@param tags -> (...)
*/
select count(distinct sprint.id)::text as count
from sprint
    join sprint_tag
        on sprint_tag.sprint_id = sprint.id
    join tag
        on tag.id = sprint_tag.tag_id
            and tag.name in (:tags);

/*
@name findAllByTags
@param tags -> (...)
*/
select sprint.*
from sprint
    join sprint_tag
        on sprint_tag.sprint_id = sprint.id
    join tag
        on tag.id = sprint_tag.tag_id
            and tag.name in (:tags)
order by start_ts desc
limit :limit!
offset :offset!;

/* @name insertOne */
insert into sprint (title, start_ts)
values (:title!, :startTS!)
returning *;

/* @name setTitle */
update sprint set title = :title! where id = :sprintId!;

/* @name deleteOne */
delete from sprint where id = :sprintId!;