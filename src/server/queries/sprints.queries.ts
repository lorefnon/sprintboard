/** Types generated for queries found in "src/server/queries/sprints.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type DateOrString = Date | string;

export type NumberOrString = number | string;

/** 'FindAll' parameters type */
export interface IFindAllParams {
  limit: NumberOrString;
  offset: NumberOrString;
}

/** 'FindAll' return type */
export interface IFindAllResult {
  create_ts: Date;
  id: string;
  start_ts: Date;
  title: string;
  update_ts: Date;
}

/** 'FindAll' query type */
export interface IFindAllQuery {
  params: IFindAllParams;
  result: IFindAllResult;
}

const findAllIR: any = {"usedParamSet":{"limit":true,"offset":true},"params":[{"name":"limit","required":true,"transform":{"type":"scalar"},"locs":[{"a":50,"b":56}]},{"name":"offset","required":true,"transform":{"type":"scalar"},"locs":[{"a":65,"b":72}]}],"statement":"select *\nfrom sprint\norder by start_ts desc\nlimit :limit!\noffset :offset!"};

/**
 * Query generated from SQL:
 * ```
 * select *
 * from sprint
 * order by start_ts desc
 * limit :limit!
 * offset :offset!
 * ```
 */
export const findAll = new PreparedQuery<IFindAllParams,IFindAllResult>(findAllIR);


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


/** 'CountAll' parameters type */
export type ICountAllParams = void;

/** 'CountAll' return type */
export interface ICountAllResult {
  count: string | null;
}

/** 'CountAll' query type */
export interface ICountAllQuery {
  params: ICountAllParams;
  result: ICountAllResult;
}

const countAllIR: any = {"usedParamSet":{},"params":[],"statement":"select count(*)\nfrom sprint"};

/**
 * Query generated from SQL:
 * ```
 * select count(*)
 * from sprint
 * ```
 */
export const countAll = new PreparedQuery<ICountAllParams,ICountAllResult>(countAllIR);


/** 'CountByEachTag' parameters type */
export interface ICountByEachTagParams {
  tags?: string | null | void;
}

/** 'CountByEachTag' return type */
export interface ICountByEachTagResult {
  count: string | null;
  id: string;
  name: string;
}

/** 'CountByEachTag' query type */
export interface ICountByEachTagQuery {
  params: ICountByEachTagParams;
  result: ICountByEachTagResult;
}

const countByEachTagIR: any = {"usedParamSet":{"tags":true},"params":[{"name":"tags","required":false,"transform":{"type":"scalar"},"locs":[{"a":222,"b":226}]}],"statement":"select tag.id, tag.name, count(distinct sprint.id)::text as count\nfrom sprint\n    join sprint_tag\n        on sprint_tag.sprint_id = sprint.id\n    join tag\n        on tag.id = sprint_tag.tag_id\n            and tag.name in (:tags)\ngroup by tag.id, tag.name"};

/**
 * Query generated from SQL:
 * ```
 * select tag.id, tag.name, count(distinct sprint.id)::text as count
 * from sprint
 *     join sprint_tag
 *         on sprint_tag.sprint_id = sprint.id
 *     join tag
 *         on tag.id = sprint_tag.tag_id
 *             and tag.name in (:tags)
 * group by tag.id, tag.name
 * ```
 */
export const countByEachTag = new PreparedQuery<ICountByEachTagParams,ICountByEachTagResult>(countByEachTagIR);


/** 'CountByTags' parameters type */
export interface ICountByTagsParams {
  tags: readonly (string | null | void)[];
}

/** 'CountByTags' return type */
export interface ICountByTagsResult {
  count: string | null;
}

/** 'CountByTags' query type */
export interface ICountByTagsQuery {
  params: ICountByTagsParams;
  result: ICountByTagsResult;
}

const countByTagsIR: any = {"usedParamSet":{"tags":true},"params":[{"name":"tags","required":false,"transform":{"type":"array_spread"},"locs":[{"a":204,"b":208}]}],"statement":"select count(distinct sprint.id)::text as count\nfrom sprint\n    join sprint_tag\n        on sprint_tag.sprint_id = sprint.id\n    join tag\n        on tag.id = sprint_tag.tag_id\n            and tag.name in (:tags)"};

/**
 * Query generated from SQL:
 * ```
 * select count(distinct sprint.id)::text as count
 * from sprint
 *     join sprint_tag
 *         on sprint_tag.sprint_id = sprint.id
 *     join tag
 *         on tag.id = sprint_tag.tag_id
 *             and tag.name in (:tags)
 * ```
 */
export const countByTags = new PreparedQuery<ICountByTagsParams,ICountByTagsResult>(countByTagsIR);


/** 'FindAllByTags' parameters type */
export interface IFindAllByTagsParams {
  limit: NumberOrString;
  offset: NumberOrString;
  tags: readonly (string | null | void)[];
}

/** 'FindAllByTags' return type */
export interface IFindAllByTagsResult {
  create_ts: Date;
  id: string;
  start_ts: Date;
  title: string;
  update_ts: Date;
}

/** 'FindAllByTags' query type */
export interface IFindAllByTagsQuery {
  params: IFindAllByTagsParams;
  result: IFindAllByTagsResult;
}

const findAllByTagsIR: any = {"usedParamSet":{"tags":true,"limit":true,"offset":true},"params":[{"name":"tags","required":false,"transform":{"type":"array_spread"},"locs":[{"a":172,"b":176}]},{"name":"limit","required":true,"transform":{"type":"scalar"},"locs":[{"a":208,"b":214}]},{"name":"offset","required":true,"transform":{"type":"scalar"},"locs":[{"a":223,"b":230}]}],"statement":"select sprint.*\nfrom sprint\n    join sprint_tag\n        on sprint_tag.sprint_id = sprint.id\n    join tag\n        on tag.id = sprint_tag.tag_id\n            and tag.name in (:tags)\norder by start_ts desc\nlimit :limit!\noffset :offset!"};

/**
 * Query generated from SQL:
 * ```
 * select sprint.*
 * from sprint
 *     join sprint_tag
 *         on sprint_tag.sprint_id = sprint.id
 *     join tag
 *         on tag.id = sprint_tag.tag_id
 *             and tag.name in (:tags)
 * order by start_ts desc
 * limit :limit!
 * offset :offset!
 * ```
 */
export const findAllByTags = new PreparedQuery<IFindAllByTagsParams,IFindAllByTagsResult>(findAllByTagsIR);


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


