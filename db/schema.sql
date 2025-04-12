SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.schema_migrations (
    version character varying(128) NOT NULL
);


--
-- Name: sprint; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sprint (
    id bigint NOT NULL,
    title text NOT NULL,
    start_ts timestamp with time zone NOT NULL,
    create_ts timestamp with time zone DEFAULT now() NOT NULL,
    update_ts timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: sprint_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sprint_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sprint_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sprint_id_seq OWNED BY public.sprint.id;


--
-- Name: sprint_tag; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sprint_tag (
    sprint_id bigint NOT NULL,
    tag_id bigint NOT NULL
);


--
-- Name: sprint_task; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sprint_task (
    sprint_id bigint NOT NULL,
    task_id bigint NOT NULL
);


--
-- Name: tag; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tag (
    id bigint NOT NULL,
    name text NOT NULL
);


--
-- Name: tag_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tag_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tag_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tag_id_seq OWNED BY public.tag.id;


--
-- Name: task; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.task (
    id bigint NOT NULL,
    title text NOT NULL,
    start_ts timestamp with time zone,
    end_ts timestamp with time zone,
    expected_end_ts timestamp with time zone,
    create_ts timestamp with time zone DEFAULT now() NOT NULL,
    update_ts timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: task_dependency; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.task_dependency (
    parent_id bigint NOT NULL,
    child_id bigint NOT NULL
);


--
-- Name: task_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.task_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: task_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.task_id_seq OWNED BY public.task.id;


--
-- Name: task_tag; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.task_tag (
    task_id bigint NOT NULL,
    tag_id bigint NOT NULL
);


--
-- Name: sprint id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sprint ALTER COLUMN id SET DEFAULT nextval('public.sprint_id_seq'::regclass);


--
-- Name: tag id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tag ALTER COLUMN id SET DEFAULT nextval('public.tag_id_seq'::regclass);


--
-- Name: task id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.task ALTER COLUMN id SET DEFAULT nextval('public.task_id_seq'::regclass);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: sprint sprint_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sprint
    ADD CONSTRAINT sprint_pkey PRIMARY KEY (id);


--
-- Name: tag tag_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tag
    ADD CONSTRAINT tag_pkey PRIMARY KEY (id);


--
-- Name: task task_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT task_pkey PRIMARY KEY (id);


--
-- Name: sprint_tag fk_sprint_tag__sprint_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sprint_tag
    ADD CONSTRAINT fk_sprint_tag__sprint_id FOREIGN KEY (sprint_id) REFERENCES public.sprint(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: sprint_tag fk_sprint_tag__tag_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sprint_tag
    ADD CONSTRAINT fk_sprint_tag__tag_id FOREIGN KEY (tag_id) REFERENCES public.tag(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: sprint_task fk_sprint_task__sprint_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sprint_task
    ADD CONSTRAINT fk_sprint_task__sprint_id FOREIGN KEY (sprint_id) REFERENCES public.sprint(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: sprint_task fk_sprint_task__task_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sprint_task
    ADD CONSTRAINT fk_sprint_task__task_id FOREIGN KEY (task_id) REFERENCES public.task(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: task_dependency fk_task_dependency__child_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.task_dependency
    ADD CONSTRAINT fk_task_dependency__child_id FOREIGN KEY (child_id) REFERENCES public.task(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: task_dependency fk_task_dependency__parent_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.task_dependency
    ADD CONSTRAINT fk_task_dependency__parent_id FOREIGN KEY (parent_id) REFERENCES public.task(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: task_tag fk_task_tag__tag_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.task_tag
    ADD CONSTRAINT fk_task_tag__tag_id FOREIGN KEY (tag_id) REFERENCES public.tag(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: task_tag fk_task_tag__task_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.task_tag
    ADD CONSTRAINT fk_task_tag__task_id FOREIGN KEY (task_id) REFERENCES public.task(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--


--
-- Dbmate schema migrations
--

INSERT INTO public.schema_migrations (version) VALUES
    ('20250412174323'),
    ('20250412183249'),
    ('20250412183252');
