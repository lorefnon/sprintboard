/** Types generated for queries found in "src/server/queries/tasks.sql" */
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
  end_ts: Date | null;
  expected_end_ts: Date | null;
  id: string;
  start_ts: Date | null;
  title: string;
  update_ts: Date;
}

/** 'FindAll' query type */
export interface IFindAllQuery {
  params: IFindAllParams;
  result: IFindAllResult;
}

const findAllIR: any = {"usedParamSet":{"limit":true,"offset":true},"params":[{"name":"limit","required":true,"transform":{"type":"scalar"},"locs":[{"a":49,"b":55}]},{"name":"offset","required":true,"transform":{"type":"scalar"},"locs":[{"a":64,"b":71}]}],"statement":"select *\nfrom task\norder by create_ts desc\nlimit :limit!\noffset :offset!"};

/**
 * Query generated from SQL:
 * ```
 * select *
 * from task
 * order by create_ts desc
 * limit :limit!
 * offset :offset!
 * ```
 */
export const findAll = new PreparedQuery<IFindAllParams,IFindAllResult>(findAllIR);


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


/** 'FindAllInSprint' parameters type */
export interface IFindAllInSprintParams {
  sprintId: NumberOrString;
}

/** 'FindAllInSprint' return type */
export interface IFindAllInSprintResult {
  create_ts: Date;
  end_ts: Date | null;
  expected_end_ts: Date | null;
  id: string;
  start_ts: Date | null;
  title: string;
  update_ts: Date;
}

/** 'FindAllInSprint' query type */
export interface IFindAllInSprintQuery {
  params: IFindAllInSprintParams;
  result: IFindAllInSprintResult;
}

const findAllInSprintIR: any = {"usedParamSet":{"sprintId":true},"params":[{"name":"sprintId","required":true,"transform":{"type":"scalar"},"locs":[{"a":116,"b":125}]}],"statement":"select task.*\nfrom sprint_task\n    join task\n        on task.id = sprint_task.task_id\nwhere sprint_task.sprint_id = :sprintId!"};

/**
 * Query generated from SQL:
 * ```
 * select task.*
 * from sprint_task
 *     join task
 *         on task.id = sprint_task.task_id
 * where sprint_task.sprint_id = :sprintId!
 * ```
 */
export const findAllInSprint = new PreparedQuery<IFindAllInSprintParams,IFindAllInSprintResult>(findAllInSprintIR);


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

const assignToSprintIR: any = {"usedParamSet":{"sprintId":true,"taskId":true},"params":[{"name":"sprintId","required":true,"transform":{"type":"scalar"},"locs":[{"a":53,"b":62}]},{"name":"taskId","required":true,"transform":{"type":"scalar"},"locs":[{"a":65,"b":72}]}],"statement":"insert into sprint_task (sprint_id, task_id)\nvalues (:sprintId!, :taskId!)"};

/**
 * Query generated from SQL:
 * ```
 * insert into sprint_task (sprint_id, task_id)
 * values (:sprintId!, :taskId!)
 * ```
 */
export const assignToSprint = new PreparedQuery<IAssignToSprintParams,IAssignToSprintResult>(assignToSprintIR);


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


