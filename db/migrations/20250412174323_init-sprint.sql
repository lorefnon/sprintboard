-- migrate:up
create table sprint (
    id bigserial not null primary key,
    title text not null,
    start_ts timestamp with time zone not null,
    create_ts timestamp with time zone not null default now(),
    update_ts timestamp with time zone not null default now()
);

-- migrate:down
drop table sprint;
