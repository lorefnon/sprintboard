/** Types generated for queries found in "src/server/queries/sprints.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type DateOrString = Date | string;

export type NumberOrString = number | string;

export type NumberOrStringArray = (NumberOrString)[];

export type stringArray = (string)[];

/** 'FindMany' parameters type */
export interface IFindManyParams {
  limit: NumberOrString;
  offset: NumberOrString;
  tagIds?: NumberOrStringArray | null | void;
}

/** 'FindMany' return type */
export interface IFindManyResult {
  create_ts: Date;
  id: string;
  start_ts: Date;
  title: string;
  update_ts: Date;
}

/** 'FindMany' query type */
export interface IFindManyQuery {
  params: IFindManyParams;
  result: IFindManyResult;
}

const findManyIR: any = {"usedParamSet":{"tagIds":true,"limit":true,"offset":true},"params":[{"name":"tagIds","required":false,"transform":{"type":"scalar"},"locs":[{"a":73,"b":79},{"a":159,"b":165},{"a":202,"b":208}]},{"name":"limit","required":true,"transform":{"type":"scalar"},"locs":[{"a":241,"b":247}]},{"name":"offset","required":true,"transform":{"type":"scalar"},"locs":[{"a":256,"b":263}]}],"statement":"select distinct sprint.*\nfrom sprint\n    left join sprint_tag\n        on :tagIds::bigint[] is not null\n            and sprint_tag.sprint_id = sprint.id\nwhere (:tagIds is null or sprint_tag.tag_id = ANY(:tagIds))\norder by start_ts desc\nlimit :limit!\noffset :offset!"};

/**
 * Query generated from SQL:
 * ```
 * select distinct sprint.*
 * from sprint
 *     left join sprint_tag
 *         on :tagIds::bigint[] is not null
 *             and sprint_tag.sprint_id = sprint.id
 * where (:tagIds is null or sprint_tag.tag_id = ANY(:tagIds))
 * order by start_ts desc
 * limit :limit!
 * offset :offset!
 * ```
 */
export const findMany = new PreparedQuery<IFindManyParams,IFindManyResult>(findManyIR);


/** 'FindLatest' parameters type */
export type IFindLatestParams = void;

/** 'FindLatest' return type */
export interface IFindLatestResult {
  create_ts: Date;
  id: string;
  start_ts: Date;
  title: string;
  update_ts: Date;
}

/** 'FindLatest' query type */
export interface IFindLatestQuery {
  params: IFindLatestParams;
  result: IFindLatestResult;
}

const findLatestIR: any = {"usedParamSet":{},"params":[],"statement":"select *\nfrom sprint\norder by start_ts desc\nlimit 1"};

/**
 * Query generated from SQL:
 * ```
 * select *
 * from sprint
 * order by start_ts desc
 * limit 1
 * ```
 */
export const findLatest = new PreparedQuery<IFindLatestParams,IFindLatestResult>(findLatestIR);


/** 'FindCount' parameters type */
export interface IFindCountParams {
  tagIds?: NumberOrStringArray | null | void;
}

/** 'FindCount' return type */
export interface IFindCountResult {
  count: string | null;
}

/** 'FindCount' query type */
export interface IFindCountQuery {
  params: IFindCountParams;
  result: IFindCountResult;
}

const findCountIR: any = {"usedParamSet":{"tagIds":true},"params":[{"name":"tagIds","required":false,"transform":{"type":"scalar"},"locs":[{"a":81,"b":87},{"a":167,"b":173},{"a":210,"b":216}]}],"statement":"select count(distinct sprint.id)\nfrom sprint\n    left join sprint_tag\n        on :tagIds::bigint[] is not null\n            and sprint_tag.sprint_id = sprint.id\nwhere (:tagIds is null or sprint_tag.tag_id = ANY(:tagIds))"};

/**
 * Query generated from SQL:
 * ```
 * select count(distinct sprint.id)
 * from sprint
 *     left join sprint_tag
 *         on :tagIds::bigint[] is not null
 *             and sprint_tag.sprint_id = sprint.id
 * where (:tagIds is null or sprint_tag.tag_id = ANY(:tagIds))
 * ```
 */
export const findCount = new PreparedQuery<IFindCountParams,IFindCountResult>(findCountIR);


/** 'FindTagWiseCounts' parameters type */
export interface IFindTagWiseCountsParams {
  tags?: stringArray | null | void;
}

/** 'FindTagWiseCounts' return type */
export interface IFindTagWiseCountsResult {
  count: string | null;
  id: string;
  name: string;
}

/** 'FindTagWiseCounts' query type */
export interface IFindTagWiseCountsQuery {
  params: IFindTagWiseCountsParams;
  result: IFindTagWiseCountsResult;
}

const findTagWiseCountsIR: any = {"usedParamSet":{"tags":true},"params":[{"name":"tags","required":false,"transform":{"type":"scalar"},"locs":[{"a":224,"b":228}]}],"statement":"select tag.id, tag.name, count(distinct sprint.id)::text as count\nfrom sprint\n    join sprint_tag\n        on sprint_tag.sprint_id = sprint.id\n    join tag\n        on tag.id = sprint_tag.tag_id\n            and tag.name = ANY(:tags::text[])\ngroup by tag.id, tag.name"};

/**
 * Query generated from SQL:
 * ```
 * select tag.id, tag.name, count(distinct sprint.id)::text as count
 * from sprint
 *     join sprint_tag
 *         on sprint_tag.sprint_id = sprint.id
 *     join tag
 *         on tag.id = sprint_tag.tag_id
 *             and tag.name = ANY(:tags::text[])
 * group by tag.id, tag.name
 * ```
 */
export const findTagWiseCounts = new PreparedQuery<IFindTagWiseCountsParams,IFindTagWiseCountsResult>(findTagWiseCountsIR);


/** 'InsertOne' parameters type */
export interface IInsertOneParams {
  startTS: DateOrString;
  title: string;
}

/** 'InsertOne' return type */
export interface IInsertOneResult {
  create_ts: Date;
  id: string;
  start_ts: Date;
  title: string;
  update_ts: Date;
}

/** 'InsertOne' query type */
export interface IInsertOneQuery {
  params: IInsertOneParams;
  result: IInsertOneResult;
}

const insertOneIR: any = {"usedParamSet":{"title":true,"startTS":true},"params":[{"name":"title","required":true,"transform":{"type":"scalar"},"locs":[{"a":45,"b":51}]},{"name":"startTS","required":true,"transform":{"type":"scalar"},"locs":[{"a":54,"b":62}]}],"statement":"insert into sprint (title, start_ts)\nvalues (:title!, :startTS!)\nreturning *"};

/**
 * Query generated from SQL:
 * ```
 * insert into sprint (title, start_ts)
 * values (:title!, :startTS!)
 * returning *
 * ```
 */
export const insertOne = new PreparedQuery<IInsertOneParams,IInsertOneResult>(insertOneIR);


/** 'SetTitle' parameters type */
export interface ISetTitleParams {
  sprintId: NumberOrString;
  title: string;
}

/** 'SetTitle' return type */
export type ISetTitleResult = void;

/** 'SetTitle' query type */
export interface ISetTitleQuery {
  params: ISetTitleParams;
  result: ISetTitleResult;
}

const setTitleIR: any = {"usedParamSet":{"title":true,"sprintId":true},"params":[{"name":"title","required":true,"transform":{"type":"scalar"},"locs":[{"a":26,"b":32}]},{"name":"sprintId","required":true,"transform":{"type":"scalar"},"locs":[{"a":45,"b":54}]}],"statement":"update sprint set title = :title! where id = :sprintId!"};

/**
 * Query generated from SQL:
 * ```
 * update sprint set title = :title! where id = :sprintId!
 * ```
 */
export const setTitle = new PreparedQuery<ISetTitleParams,ISetTitleResult>(setTitleIR);


/** 'DeleteOne' parameters type */
export interface IDeleteOneParams {
  sprintId: NumberOrString;
}

/** 'DeleteOne' return type */
export type IDeleteOneResult = void;

/** 'DeleteOne' query type */
export interface IDeleteOneQuery {
  params: IDeleteOneParams;
  result: IDeleteOneResult;
}

const deleteOneIR: any = {"usedParamSet":{"sprintId":true},"params":[{"name":"sprintId","required":true,"transform":{"type":"scalar"},"locs":[{"a":30,"b":39}]}],"statement":"delete from sprint where id = :sprintId!"};

/**
 * Query generated from SQL:
 * ```
 * delete from sprint where id = :sprintId!
 * ```
 */
export const deleteOne = new PreparedQuery<IDeleteOneParams,IDeleteOneResult>(deleteOneIR);


/** 'AssignTag' parameters type */
export interface IAssignTagParams {
  sprintId: NumberOrString;
  tagId: NumberOrString;
}

/** 'AssignTag' return type */
export type IAssignTagResult = void;

/** 'AssignTag' query type */
export interface IAssignTagQuery {
  params: IAssignTagParams;
  result: IAssignTagResult;
}

const assignTagIR: any = {"usedParamSet":{"sprintId":true,"tagId":true},"params":[{"name":"sprintId","required":true,"transform":{"type":"scalar"},"locs":[{"a":51,"b":60}]},{"name":"tagId","required":true,"transform":{"type":"scalar"},"locs":[{"a":63,"b":69}]}],"statement":"insert into sprint_tag (sprint_id, tag_id)\nvalues (:sprintId!, :tagId!)\non conflict (sprint_id, tag_id)\ndo nothing"};

/**
 * Query generated from SQL:
 * ```
 * insert into sprint_tag (sprint_id, tag_id)
 * values (:sprintId!, :tagId!)
 * on conflict (sprint_id, tag_id)
 * do nothing
 * ```
 */
export const assignTag = new PreparedQuery<IAssignTagParams,IAssignTagResult>(assignTagIR);


/** 'RemoveTag' parameters type */
export interface IRemoveTagParams {
  sprintId: NumberOrString;
  tagId: NumberOrString;
}

/** 'RemoveTag' return type */
export type IRemoveTagResult = void;

/** 'RemoveTag' query type */
export interface IRemoveTagQuery {
  params: IRemoveTagParams;
  result: IRemoveTagResult;
}

const removeTagIR: any = {"usedParamSet":{"sprintId":true,"tagId":true},"params":[{"name":"sprintId","required":true,"transform":{"type":"scalar"},"locs":[{"a":41,"b":50}]},{"name":"tagId","required":true,"transform":{"type":"scalar"},"locs":[{"a":65,"b":71}]}],"statement":"delete from sprint_tag\nwhere sprint_id = :sprintId! and tag_id = :tagId!"};

/**
 * Query generated from SQL:
 * ```
 * delete from sprint_tag
 * where sprint_id = :sprintId! and tag_id = :tagId!
 * ```
 */
export const removeTag = new PreparedQuery<IRemoveTagParams,IRemoveTagResult>(removeTagIR);


