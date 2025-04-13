/** Types generated for queries found in "src/server/queries/tags.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type NumberOrString = number | string;

export type NumberOrStringArray = (NumberOrString)[];

/** 'FindMany' parameters type */
export interface IFindManyParams {
  sprintIds?: NumberOrStringArray | null | void;
  taskIds?: NumberOrStringArray | null | void;
}

/** 'FindMany' return type */
export interface IFindManyResult {
  id: string;
  name: string;
  sprint_id: string;
  tag_id: string;
}

/** 'FindMany' query type */
export interface IFindManyQuery {
  params: IFindManyParams;
  result: IFindManyResult;
}

const findManyIR: any = {"usedParamSet":{"sprintIds":true,"taskIds":true},"params":[{"name":"sprintIds","required":false,"transform":{"type":"scalar"},"locs":[{"a":97,"b":106},{"a":262,"b":271},{"a":311,"b":320}]},{"name":"taskIds","required":false,"transform":{"type":"scalar"},"locs":[{"a":195,"b":202},{"a":333,"b":340},{"a":376,"b":383}]}],"statement":"select tag.*, sprint_tag.sprint_id, task_tag.tag_id\nfrom tag\n    left join sprint_tag on\n        :sprintIds::bigint[] is not null and sprint_tag.tag_id = tag.id\n    left join task_tag on\n        :taskIds::bigint[] is not null and task_tag.tag_id = tag.id\nwhere (:sprintIds is null or sprint_tag.sprint_id = ANY(:sprintIds))\n    and (:taskIds is null or task_tag.task_id = ANY(:taskIds))"};

/**
 * Query generated from SQL:
 * ```
 * select tag.*, sprint_tag.sprint_id, task_tag.tag_id
 * from tag
 *     left join sprint_tag on
 *         :sprintIds::bigint[] is not null and sprint_tag.tag_id = tag.id
 *     left join task_tag on
 *         :taskIds::bigint[] is not null and task_tag.tag_id = tag.id
 * where (:sprintIds is null or sprint_tag.sprint_id = ANY(:sprintIds))
 *     and (:taskIds is null or task_tag.task_id = ANY(:taskIds))
 * ```
 */
export const findMany = new PreparedQuery<IFindManyParams,IFindManyResult>(findManyIR);


/** 'InsertOne' parameters type */
export interface IInsertOneParams {
  name: string;
}

/** 'InsertOne' return type */
export interface IInsertOneResult {
  id: string;
  name: string;
}

/** 'InsertOne' query type */
export interface IInsertOneQuery {
  params: IInsertOneParams;
  result: IInsertOneResult;
}

const insertOneIR: any = {"usedParamSet":{"name":true},"params":[{"name":"name","required":true,"transform":{"type":"scalar"},"locs":[{"a":31,"b":36}]}],"statement":"insert into tag (name)\nvalues (:name!)\nreturning *"};

/**
 * Query generated from SQL:
 * ```
 * insert into tag (name)
 * values (:name!)
 * returning *
 * ```
 */
export const insertOne = new PreparedQuery<IInsertOneParams,IInsertOneResult>(insertOneIR);


