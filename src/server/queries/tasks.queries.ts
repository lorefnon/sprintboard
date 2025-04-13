/** Types generated for queries found in "src/server/queries/tasks.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type DateOrString = Date | string;

export type NumberOrString = number | string;

export type NumberOrStringArray = (NumberOrString)[];

/** 'FindMany' parameters type */
export interface IFindManyParams {
  assigneeIds?: NumberOrStringArray | null | void;
  limit: NumberOrString;
  offset: NumberOrString;
  sprintId?: NumberOrString | null | void;
  tagIds?: NumberOrStringArray | null | void;
}

/** 'FindMany' return type */
export interface IFindManyResult {
  create_ts: Date;
  end_ts: Date | null;
  expected_end_ts: Date | null;
  id: string;
  start_ts: Date | null;
  title: string;
  update_ts: Date;
}

/** 'FindMany' query type */
export interface IFindManyQuery {
  params: IFindManyParams;
  result: IFindManyResult;
}

const findManyIR: any = {"usedParamSet":{"sprintId":true,"tagIds":true,"assigneeIds":true,"limit":true,"offset":true},"params":[{"name":"sprintId","required":false,"transform":{"type":"scalar"},"locs":[{"a":70,"b":78},{"a":374,"b":382},{"a":419,"b":427}]},{"name":"tagIds","required":false,"transform":{"type":"scalar"},"locs":[{"a":168,"b":174},{"a":443,"b":449},{"a":484,"b":490}]},{"name":"assigneeIds","required":false,"transform":{"type":"scalar"},"locs":[{"a":280,"b":291},{"a":507,"b":518},{"a":563,"b":574}]},{"name":"limit","required":true,"transform":{"type":"scalar"},"locs":[{"a":608,"b":614}]},{"name":"offset","required":true,"transform":{"type":"scalar"},"locs":[{"a":623,"b":630}]}],"statement":"select distinct task.*\nfrom task\n    left join sprint_task\n        on :sprintId::bigint is not null and sprint_task.task_id = task.id\n    left join task_tag\n        on :tagIds::bigint[] is not null\n            and task_tag.task_id = task.id\n    left join task_assignee\n        on :assigneeIds::bigint[] is not null\n            and task_assignee.task_id = task.id\nwhere\n    (:sprintId is null or sprint_task.sprint_id = :sprintId)\n        and (:tagIds is null or task_tag.tag_id = ANY(:tagIds))\n        and (:assigneeIds is null or task_assignee.assignee_id = ANY(:assigneeIds))\norder by create_ts desc\nlimit :limit!\noffset :offset!"};

/**
 * Query generated from SQL:
 * ```
 * select distinct task.*
 * from task
 *     left join sprint_task
 *         on :sprintId::bigint is not null and sprint_task.task_id = task.id
 *     left join task_tag
 *         on :tagIds::bigint[] is not null
 *             and task_tag.task_id = task.id
 *     left join task_assignee
 *         on :assigneeIds::bigint[] is not null
 *             and task_assignee.task_id = task.id
 * where
 *     (:sprintId is null or sprint_task.sprint_id = :sprintId)
 *         and (:tagIds is null or task_tag.tag_id = ANY(:tagIds))
 *         and (:assigneeIds is null or task_assignee.assignee_id = ANY(:assigneeIds))
 * order by create_ts desc
 * limit :limit!
 * offset :offset!
 * ```
 */
export const findMany = new PreparedQuery<IFindManyParams,IFindManyResult>(findManyIR);


/** 'FindCount' parameters type */
export interface IFindCountParams {
  sprintId?: NumberOrString | null | void;
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

const findCountIR: any = {"usedParamSet":{"sprintId":true,"tagIds":true},"params":[{"name":"sprintId","required":false,"transform":{"type":"scalar"},"locs":[{"a":78,"b":86},{"a":260,"b":268},{"a":305,"b":313}]},{"name":"tagIds","required":false,"transform":{"type":"scalar"},"locs":[{"a":176,"b":182},{"a":329,"b":335},{"a":370,"b":376}]}],"statement":"select count(distinct task.id)\nfrom task\n    left join sprint_task\n        on :sprintId::bigint is not null and sprint_task.task_id = task.id\n    left join task_tag\n        on :tagIds::bigint[] is not null\n            and task_tag.task_id = task.id\nwhere\n    (:sprintId is null or sprint_task.sprint_id = :sprintId)\n        and (:tagIds is null or task_tag.tag_id = ANY(:tagIds))"};

/**
 * Query generated from SQL:
 * ```
 * select count(distinct task.id)
 * from task
 *     left join sprint_task
 *         on :sprintId::bigint is not null and sprint_task.task_id = task.id
 *     left join task_tag
 *         on :tagIds::bigint[] is not null
 *             and task_tag.task_id = task.id
 * where
 *     (:sprintId is null or sprint_task.sprint_id = :sprintId)
 *         and (:tagIds is null or task_tag.tag_id = ANY(:tagIds))
 * ```
 */
export const findCount = new PreparedQuery<IFindCountParams,IFindCountResult>(findCountIR);


/** 'FindTaskPrerequisites' parameters type */
export interface IFindTaskPrerequisitesParams {
  taskId: NumberOrString;
}

/** 'FindTaskPrerequisites' return type */
export interface IFindTaskPrerequisitesResult {
  create_ts: Date;
  end_ts: Date | null;
  expected_end_ts: Date | null;
  id: string;
  start_ts: Date | null;
  title: string;
  update_ts: Date;
}

/** 'FindTaskPrerequisites' query type */
export interface IFindTaskPrerequisitesQuery {
  params: IFindTaskPrerequisitesParams;
  result: IFindTaskPrerequisitesResult;
}

const findTaskPrerequisitesIR: any = {"usedParamSet":{"taskId":true},"params":[{"name":"taskId","required":true,"transform":{"type":"scalar"},"locs":[{"a":129,"b":136}]}],"statement":"select task.*\nfrom task_dependency\n    join task\n        on task.id = task_dependency.parent_id\nwhere task_dependency.child_id = :taskId!"};

/**
 * Query generated from SQL:
 * ```
 * select task.*
 * from task_dependency
 *     join task
 *         on task.id = task_dependency.parent_id
 * where task_dependency.child_id = :taskId!
 * ```
 */
export const findTaskPrerequisites = new PreparedQuery<IFindTaskPrerequisitesParams,IFindTaskPrerequisitesResult>(findTaskPrerequisitesIR);


/** 'InsertOne' parameters type */
export interface IInsertOneParams {
  expectedEndTS?: DateOrString | null | void;
  title: string;
}

/** 'InsertOne' return type */
export interface IInsertOneResult {
  create_ts: Date;
  end_ts: Date | null;
  expected_end_ts: Date | null;
  id: string;
  start_ts: Date | null;
  title: string;
  update_ts: Date;
}

/** 'InsertOne' query type */
export interface IInsertOneQuery {
  params: IInsertOneParams;
  result: IInsertOneResult;
}

const insertOneIR: any = {"usedParamSet":{"title":true,"expectedEndTS":true},"params":[{"name":"title","required":true,"transform":{"type":"scalar"},"locs":[{"a":50,"b":56}]},{"name":"expectedEndTS","required":false,"transform":{"type":"scalar"},"locs":[{"a":59,"b":72}]}],"statement":"insert into task (title, expected_end_ts)\nvalues (:title!, :expectedEndTS)\nreturning *"};

/**
 * Query generated from SQL:
 * ```
 * insert into task (title, expected_end_ts)
 * values (:title!, :expectedEndTS)
 * returning *
 * ```
 */
export const insertOne = new PreparedQuery<IInsertOneParams,IInsertOneResult>(insertOneIR);


/** 'AssignToSprint' parameters type */
export interface IAssignToSprintParams {
  sprintId: NumberOrString;
  taskId: NumberOrString;
}

/** 'AssignToSprint' return type */
export type IAssignToSprintResult = void;

/** 'AssignToSprint' query type */
export interface IAssignToSprintQuery {
  params: IAssignToSprintParams;
  result: IAssignToSprintResult;
}

const assignToSprintIR: any = {"usedParamSet":{"sprintId":true,"taskId":true},"params":[{"name":"sprintId","required":true,"transform":{"type":"scalar"},"locs":[{"a":53,"b":62}]},{"name":"taskId","required":true,"transform":{"type":"scalar"},"locs":[{"a":65,"b":72}]}],"statement":"insert into sprint_task (sprint_id, task_id)\nvalues (:sprintId!, :taskId!)\non conflict (sprint_id, task_id)\ndo nothing"};

/**
 * Query generated from SQL:
 * ```
 * insert into sprint_task (sprint_id, task_id)
 * values (:sprintId!, :taskId!)
 * on conflict (sprint_id, task_id)
 * do nothing
 * ```
 */
export const assignToSprint = new PreparedQuery<IAssignToSprintParams,IAssignToSprintResult>(assignToSprintIR);


/** 'RemoveFromSprint' parameters type */
export interface IRemoveFromSprintParams {
  sprintId: NumberOrString;
  taskId: NumberOrString;
}

/** 'RemoveFromSprint' return type */
export type IRemoveFromSprintResult = void;

/** 'RemoveFromSprint' query type */
export interface IRemoveFromSprintQuery {
  params: IRemoveFromSprintParams;
  result: IRemoveFromSprintResult;
}

const removeFromSprintIR: any = {"usedParamSet":{"sprintId":true,"taskId":true},"params":[{"name":"sprintId","required":true,"transform":{"type":"scalar"},"locs":[{"a":42,"b":51}]},{"name":"taskId","required":true,"transform":{"type":"scalar"},"locs":[{"a":67,"b":74}]}],"statement":"delete from sprint_task\nwhere sprint_id = :sprintId! and task_id = :taskId!"};

/**
 * Query generated from SQL:
 * ```
 * delete from sprint_task
 * where sprint_id = :sprintId! and task_id = :taskId!
 * ```
 */
export const removeFromSprint = new PreparedQuery<IRemoveFromSprintParams,IRemoveFromSprintResult>(removeFromSprintIR);


/** 'AssignTag' parameters type */
export interface IAssignTagParams {
  tagId: NumberOrString;
  taskId: NumberOrString;
}

/** 'AssignTag' return type */
export type IAssignTagResult = void;

/** 'AssignTag' query type */
export interface IAssignTagQuery {
  params: IAssignTagParams;
  result: IAssignTagResult;
}

const assignTagIR: any = {"usedParamSet":{"taskId":true,"tagId":true},"params":[{"name":"taskId","required":true,"transform":{"type":"scalar"},"locs":[{"a":47,"b":54}]},{"name":"tagId","required":true,"transform":{"type":"scalar"},"locs":[{"a":57,"b":63}]}],"statement":"insert into task_tag (task_id, tag_id)\nvalues (:taskId!, :tagId!)\non conflict (task_id, tag_id)\ndo nothing"};

/**
 * Query generated from SQL:
 * ```
 * insert into task_tag (task_id, tag_id)
 * values (:taskId!, :tagId!)
 * on conflict (task_id, tag_id)
 * do nothing
 * ```
 */
export const assignTag = new PreparedQuery<IAssignTagParams,IAssignTagResult>(assignTagIR);


/** 'RemoveTag' parameters type */
export interface IRemoveTagParams {
  tagId: NumberOrString;
  taskId: NumberOrString;
}

/** 'RemoveTag' return type */
export type IRemoveTagResult = void;

/** 'RemoveTag' query type */
export interface IRemoveTagQuery {
  params: IRemoveTagParams;
  result: IRemoveTagResult;
}

const removeTagIR: any = {"usedParamSet":{"taskId":true,"tagId":true},"params":[{"name":"taskId","required":true,"transform":{"type":"scalar"},"locs":[{"a":37,"b":44}]},{"name":"tagId","required":true,"transform":{"type":"scalar"},"locs":[{"a":59,"b":65}]}],"statement":"delete from task_tag\nwhere task_id = :taskId! and tag_id = :tagId!"};

/**
 * Query generated from SQL:
 * ```
 * delete from task_tag
 * where task_id = :taskId! and tag_id = :tagId!
 * ```
 */
export const removeTag = new PreparedQuery<IRemoveTagParams,IRemoveTagResult>(removeTagIR);


/** 'AddAssignee' parameters type */
export interface IAddAssigneeParams {
  assigneeId: NumberOrString;
  taskId: NumberOrString;
}

/** 'AddAssignee' return type */
export type IAddAssigneeResult = void;

/** 'AddAssignee' query type */
export interface IAddAssigneeQuery {
  params: IAddAssigneeParams;
  result: IAddAssigneeResult;
}

const addAssigneeIR: any = {"usedParamSet":{"taskId":true,"assigneeId":true},"params":[{"name":"taskId","required":true,"transform":{"type":"scalar"},"locs":[{"a":57,"b":64}]},{"name":"assigneeId","required":true,"transform":{"type":"scalar"},"locs":[{"a":67,"b":78}]}],"statement":"insert into task_assignee (task_id, assignee_id)\nvalues (:taskId!, :assigneeId!)\non conflict (task_id, assignee_id)\ndo nothing"};

/**
 * Query generated from SQL:
 * ```
 * insert into task_assignee (task_id, assignee_id)
 * values (:taskId!, :assigneeId!)
 * on conflict (task_id, assignee_id)
 * do nothing
 * ```
 */
export const addAssignee = new PreparedQuery<IAddAssigneeParams,IAddAssigneeResult>(addAssigneeIR);


/** 'RemoveAssignee' parameters type */
export interface IRemoveAssigneeParams {
  assigneeId: NumberOrString;
  taskId: NumberOrString;
}

/** 'RemoveAssignee' return type */
export type IRemoveAssigneeResult = void;

/** 'RemoveAssignee' query type */
export interface IRemoveAssigneeQuery {
  params: IRemoveAssigneeParams;
  result: IRemoveAssigneeResult;
}

const removeAssigneeIR: any = {"usedParamSet":{"taskId":true,"assigneeId":true},"params":[{"name":"taskId","required":true,"transform":{"type":"scalar"},"locs":[{"a":42,"b":49}]},{"name":"assigneeId","required":true,"transform":{"type":"scalar"},"locs":[{"a":69,"b":80}]}],"statement":"delete from task_assignee\nwhere task_id = :taskId! and assignee_id = :assigneeId!"};

/**
 * Query generated from SQL:
 * ```
 * delete from task_assignee
 * where task_id = :taskId! and assignee_id = :assigneeId!
 * ```
 */
export const removeAssignee = new PreparedQuery<IRemoveAssigneeParams,IRemoveAssigneeResult>(removeAssigneeIR);


/** 'Start' parameters type */
export interface IStartParams {
  taskId: NumberOrString;
}

/** 'Start' return type */
export type IStartResult = void;

/** 'Start' query type */
export interface IStartQuery {
  params: IStartParams;
  result: IStartResult;
}

const startIR: any = {"usedParamSet":{"taskId":true},"params":[{"name":"taskId","required":true,"transform":{"type":"scalar"},"locs":[{"a":63,"b":70}]}],"statement":"update task set start_ts = now(), update_ts = now()\nwhere id = :taskId!"};

/**
 * Query generated from SQL:
 * ```
 * update task set start_ts = now(), update_ts = now()
 * where id = :taskId!
 * ```
 */
export const start = new PreparedQuery<IStartParams,IStartResult>(startIR);


/** 'Complete' parameters type */
export interface ICompleteParams {
  taskId: NumberOrString;
}

/** 'Complete' return type */
export type ICompleteResult = void;

/** 'Complete' query type */
export interface ICompleteQuery {
  params: ICompleteParams;
  result: ICompleteResult;
}

const completeIR: any = {"usedParamSet":{"taskId":true},"params":[{"name":"taskId","required":true,"transform":{"type":"scalar"},"locs":[{"a":61,"b":68}]}],"statement":"update task set end_ts = now(), update_ts = now()\nwhere id = :taskId!"};

/**
 * Query generated from SQL:
 * ```
 * update task set end_ts = now(), update_ts = now()
 * where id = :taskId!
 * ```
 */
export const complete = new PreparedQuery<ICompleteParams,ICompleteResult>(completeIR);


/** 'DeleteOne' parameters type */
export interface IDeleteOneParams {
  taskId: NumberOrString;
}

/** 'DeleteOne' return type */
export type IDeleteOneResult = void;

/** 'DeleteOne' query type */
export interface IDeleteOneQuery {
  params: IDeleteOneParams;
  result: IDeleteOneResult;
}

const deleteOneIR: any = {"usedParamSet":{"taskId":true},"params":[{"name":"taskId","required":true,"transform":{"type":"scalar"},"locs":[{"a":28,"b":35}]}],"statement":"delete from task where id = :taskId!"};

/**
 * Query generated from SQL:
 * ```
 * delete from task where id = :taskId!
 * ```
 */
export const deleteOne = new PreparedQuery<IDeleteOneParams,IDeleteOneResult>(deleteOneIR);


