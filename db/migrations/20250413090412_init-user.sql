-- migrate:up
create table app_user (
    id bigserial not null primary key,
    name text not null,
    email text not null unique
);

create table task_assignee (
    task_id bigint not null,
    assignee_id bigint not null,

    constraint fk_task_assignee__task_id
        foreign key (task_id)
            references task (id)
                on update cascade
                on delete cascade,

    constraint fk_task_assignee__assignee_id
        foreign key (assignee_id)
            references app_user (id)
                on update cascade
                on delete cascade
);

-- migrate:down
drop table task_assignee;

drop table app_user;

