-- migrate:up
create table tag (
    id bigserial not null primary key,
    name text not null
);

create table sprint_tag (
    sprint_id bigint not null,
    tag_id bigint not null,

    constraint fk_sprint_tag__sprint_id
        foreign key (sprint_id)
            references sprint(id)
                on delete cascade
                on update cascade,

    constraint fk_sprint_tag__tag_id
        foreign key (tag_id)
            references tag(id)
                on delete cascade
                on update cascade
);

create table task_tag (
    task_id bigint not null,
    tag_id bigint not null,

    constraint fk_task_tag__task_id
        foreign key (task_id)
            references task(id)
                on delete cascade
                on update cascade,

    constraint fk_task_tag__tag_id
        foreign key (tag_id)
            references tag(id)
                on delete cascade
                on update cascade
);

-- migrate:down
drop table sprint_tag;
drop table task_tag;
drop table tag;
