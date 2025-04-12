-- migrate:up
create table task (
    id bigserial not null primary key,
    title text not null,
    start_ts timestamp with time zone,
    end_ts timestamp with time zone,
    expected_end_ts timestamp with time zone,
    create_ts timestamp with time zone not null default now(),
    update_ts timestamp with time zone not null default now()
);

create table task_dependency (
    parent_id bigint not null,
    child_id bigint not null,

    constraint fk_task_dependency__parent_id
        foreign key (parent_id)
            references task (id)
                on update cascade
                on delete cascade,

    constraint fk_task_dependency__child_id
        foreign key (child_id)
            references task (id)
                on update cascade
                on delete cascade
);

create table sprint_task (
    sprint_id bigint not null,
    task_id bigint not null,

    constraint fk_sprint_task__sprint_id
        foreign key (sprint_id)
            references sprint (id)
            on update cascade
            on delete cascade,

    constraint fk_sprint_task__task_id
        foreign key (task_id)
            references task (id)
            on update cascade
            on delete cascade
);

-- migrate:down
drop table sprint_task;
drop table task_dependency;
drop table task;