// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    Date: any,
    Int: number,
    String: string,
    Boolean: boolean,
}

export interface Mutation {
    assignTaskToSprint: (Result | null)
    completeTask: (Result | null)
    createSprint: (Sprint | null)
    createTask: (Task | null)
    startTask: (Result | null)
    __typename: 'Mutation'
}

export interface Page {
    num: (Scalars['Int'] | null)
    size: (Scalars['Int'] | null)
    total: (Scalars['String'] | null)
    __typename: 'Page'
}

export interface Query {
    allSprints: (SprintsPage | null)
    latestSprint: (Sprint | null)
    sprintsByTags: (SprintsPage | null)
    __typename: 'Query'
}

export interface Result {
    success: (Scalars['Boolean'] | null)
    __typename: 'Result'
}

export interface Sprint {
    createTs: (Scalars['Date'] | null)
    id: (Scalars['String'] | null)
    startTs: (Scalars['Date'] | null)
    tasks: (TasksPage | null)
    title: (Scalars['String'] | null)
    updateTs: (Scalars['Date'] | null)
    __typename: 'Sprint'
}

export interface SprintsPage {
    items: (Sprint[] | null)
    page: (Page | null)
    __typename: 'SprintsPage'
}

export interface Task {
    createTs: (Scalars['Date'] | null)
    endTs: (Scalars['Date'] | null)
    expectedEndTs: (Scalars['Date'] | null)
    id: (Scalars['String'] | null)
    startTs: (Scalars['Date'] | null)
    title: (Scalars['String'] | null)
    updateTs: (Scalars['Date'] | null)
    __typename: 'Task'
}

export interface TasksPage {
    items: (Task[] | null)
    page: (Page | null)
    __typename: 'TasksPage'
}

export interface PageInput {num?: (Scalars['Int'] | null),size?: (Scalars['Int'] | null)}

export interface SprintFiltersInput {tags?: (Scalars['String'][] | null)}

export interface SprintInput {startTS: Scalars['Date'],title: Scalars['String']}

export interface TaskInput {expectedEndTs?: (Scalars['Date'] | null),title: Scalars['String']}

export interface MutationGenqlSelection{
    assignTaskToSprint?: (ResultGenqlSelection & { __args: {sprintId: Scalars['String'], taskId: Scalars['String']} })
    completeTask?: (ResultGenqlSelection & { __args: {taskId: Scalars['String']} })
    createSprint?: (SprintGenqlSelection & { __args: {sprint: SprintInput} })
    createTask?: (TaskGenqlSelection & { __args: {task: TaskInput} })
    startTask?: (ResultGenqlSelection & { __args: {taskId: Scalars['String']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PageGenqlSelection{
    num?: boolean | number
    size?: boolean | number
    total?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryGenqlSelection{
    allSprints?: (SprintsPageGenqlSelection & { __args: {page: PageInput} })
    latestSprint?: SprintGenqlSelection
    sprintsByTags?: (SprintsPageGenqlSelection & { __args: {page: PageInput, tags: Scalars['String'][]} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ResultGenqlSelection{
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SprintGenqlSelection{
    createTs?: boolean | number
    id?: boolean | number
    startTs?: boolean | number
    tasks?: TasksPageGenqlSelection
    title?: boolean | number
    updateTs?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SprintsPageGenqlSelection{
    items?: SprintGenqlSelection
    page?: PageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TaskGenqlSelection{
    createTs?: boolean | number
    endTs?: boolean | number
    expectedEndTs?: boolean | number
    id?: boolean | number
    startTs?: boolean | number
    title?: boolean | number
    updateTs?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TasksPageGenqlSelection{
    items?: TaskGenqlSelection
    page?: PageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    


    const Page_possibleTypes: string[] = ['Page']
    export const isPage = (obj?: { __typename?: any } | null): obj is Page => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPage"')
      return Page_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const Result_possibleTypes: string[] = ['Result']
    export const isResult = (obj?: { __typename?: any } | null): obj is Result => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isResult"')
      return Result_possibleTypes.includes(obj.__typename)
    }
    


    const Sprint_possibleTypes: string[] = ['Sprint']
    export const isSprint = (obj?: { __typename?: any } | null): obj is Sprint => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSprint"')
      return Sprint_possibleTypes.includes(obj.__typename)
    }
    


    const SprintsPage_possibleTypes: string[] = ['SprintsPage']
    export const isSprintsPage = (obj?: { __typename?: any } | null): obj is SprintsPage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSprintsPage"')
      return SprintsPage_possibleTypes.includes(obj.__typename)
    }
    


    const Task_possibleTypes: string[] = ['Task']
    export const isTask = (obj?: { __typename?: any } | null): obj is Task => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTask"')
      return Task_possibleTypes.includes(obj.__typename)
    }
    


    const TasksPage_possibleTypes: string[] = ['TasksPage']
    export const isTasksPage = (obj?: { __typename?: any } | null): obj is TasksPage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTasksPage"')
      return TasksPage_possibleTypes.includes(obj.__typename)
    }
    