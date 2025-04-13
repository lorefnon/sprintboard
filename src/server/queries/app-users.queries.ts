/** Types generated for queries found in "src/server/queries/app-users.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type NumberOrString = number | string;

export type NumberOrStringArray = (NumberOrString)[];

/** 'FindAll' parameters type */
export type IFindAllParams = void;

/** 'FindAll' return type */
export interface IFindAllResult {
  email: string;
  id: string;
  name: string;
}

/** 'FindAll' query type */
export interface IFindAllQuery {
  params: IFindAllParams;
  result: IFindAllResult;
}

const findAllIR: any = {"usedParamSet":{},"params":[],"statement":"select * from app_user"};

/**
 * Query generated from SQL:
 * ```
 * select * from app_user
 * ```
 */
export const findAll = new PreparedQuery<IFindAllParams,IFindAllResult>(findAllIR);


/** 'FindTaskAssignee' parameters type */
export interface IFindTaskAssigneeParams {
  taskIds: NumberOrStringArray;
}

/** 'FindTaskAssignee' return type */
export interface IFindTaskAssigneeResult {
  email: string;
  id: string;
  name: string;
  task_id: string;
}

/** 'FindTaskAssignee' query type */
export interface IFindTaskAssigneeQuery {
  params: IFindTaskAssigneeParams;
  result: IFindTaskAssigneeResult;
}

const findTaskAssigneeIR: any = {"usedParamSet":{"taskIds":true},"params":[{"name":"taskIds","required":true,"transform":{"type":"scalar"},"locs":[{"a":155,"b":163}]}],"statement":"select app_user.*, task_assignee.task_id\nfrom task_assignee\n    join app_user on app_user.id = task_assignee.assignee_id\nwhere task_assignee.task_id = ANY(:taskIds!)"};

/**
 * Query generated from SQL:
 * ```
 * select app_user.*, task_assignee.task_id
 * from task_assignee
 *     join app_user on app_user.id = task_assignee.assignee_id
 * where task_assignee.task_id = ANY(:taskIds!)
 * ```
 */
export const findTaskAssignee = new PreparedQuery<IFindTaskAssigneeParams,IFindTaskAssigneeResult>(findTaskAssigneeIR);


/** 'InsertOne' parameters type */
export interface IInsertOneParams {
  email: string;
  name: string;
}

/** 'InsertOne' return type */
export interface IInsertOneResult {
  email: string;
  id: string;
  name: string;
}

/** 'InsertOne' query type */
export interface IInsertOneQuery {
  params: IInsertOneParams;
  result: IInsertOneResult;
}

const insertOneIR: any = {"usedParamSet":{"name":true,"email":true},"params":[{"name":"name","required":true,"transform":{"type":"scalar"},"locs":[{"a":43,"b":48}]},{"name":"email","required":true,"transform":{"type":"scalar"},"locs":[{"a":51,"b":57}]}],"statement":"insert into app_user (name, email)\nvalues (:name!, :email!)\nreturning *"};

/**
 * Query generated from SQL:
 * ```
 * insert into app_user (name, email)
 * values (:name!, :email!)
 * returning *
 * ```
 */
export const insertOne = new PreparedQuery<IInsertOneParams,IInsertOneResult>(insertOneIR);


