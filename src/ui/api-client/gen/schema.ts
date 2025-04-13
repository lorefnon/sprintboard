// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    Date: any,
    String: string,
    Int: number,
    Boolean: boolean,
}

export interface AppUser {
    email: (Scalars['String'] | null)
    id: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    __typename: 'AppUser'
}

export interface AppUsersPage {
    items: (AppUser[] | null)
    __typename: 'AppUsersPage'
}

export interface Mutation {
    addAssignee: (Result | null)
    assignTagToSprint: (Result | null)
    assignTagToTask: (Result | null)
    assignTaskToSprint: (Result | null)
    completeTask: (Result | null)
    createAppUser: (AppUser | null)
    createSprint: (Sprint | null)
    createTag: (Tag | null)
    createTask: (Task | null)
    removeAssignee: (Result | null)
    removeSprintTag: (Result | null)
    removeTaskTag: (Result | null)
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
    latestSprint: (Sprint | null)
    sprints: (SprintsPage | null)
    tags: (TagsPage | null)
    tasks: (TasksPage | null)
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
    tags: (TagsPage | null)
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

export interface Tag {
    id: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    __typename: 'Tag'
}

export interface TagsPage {
    items: (Tag[] | null)
    __typename: 'TagsPage'
}

export interface Task {
    assignees: (AppUsersPage | null)
    createTs: (Scalars['Date'] | null)
    endTs: (Scalars['Date'] | null)
    expectedEndTs: (Scalars['Date'] | null)
    id: (Scalars['String'] | null)
    startTs: (Scalars['Date'] | null)
    tags: (TagsPage | null)
    title: (Scalars['String'] | null)
    updateTs: (Scalars['Date'] | null)
    __typename: 'Task'
}

export interface TasksPage {
    items: (Task[] | null)
    page: (Page | null)
    __typename: 'TasksPage'
}

export interface AppUserInput {email: Scalars['String'],name: Scalars['String']}

export interface PageInput {num?: (Scalars['Int'] | null),size?: (Scalars['Int'] | null)}

export interface SprintFiltersInput {tagIds?: (Scalars['String'][] | null)}

export interface SprintInput {startTS: Scalars['Date'],title: Scalars['String']}

export interface TagInput {name: Scalars['String']}

export interface TaskFiltersInput {assigneeIds?: (Scalars['String'][] | null),sprintId?: (Scalars['String'] | null),tagIds?: (Scalars['String'][] | null)}

export interface TaskInput {expectedEndTs?: (Scalars['Date'] | null),title: Scalars['String']}

export interface AppUserGenqlSelection{
    email?: boolean | number
    id?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AppUsersPageGenqlSelection{
    items?: AppUserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationGenqlSelection{
    addAssignee?: (ResultGenqlSelection & { __args: {assigneeId: Scalars['String'], taskId: Scalars['String']} })
    assignTagToSprint?: (ResultGenqlSelection & { __args: {sprintId: Scalars['String'], tagId: Scalars['String']} })
    assignTagToTask?: (ResultGenqlSelection & { __args: {tagId: Scalars['String'], taskId: Scalars['String']} })
    assignTaskToSprint?: (ResultGenqlSelection & { __args: {sprintId: Scalars['String'], taskId: Scalars['String']} })
    completeTask?: (ResultGenqlSelection & { __args: {taskId: Scalars['String']} })
    createAppUser?: (AppUserGenqlSelection & { __args: {appUser: AppUserInput} })
    createSprint?: (SprintGenqlSelection & { __args: {sprint: SprintInput} })
    createTag?: (TagGenqlSelection & { __args: {tag: TagInput} })
    createTask?: (TaskGenqlSelection & { __args: {task: TaskInput} })
    removeAssignee?: (ResultGenqlSelection & { __args: {assigneeId: Scalars['String'], taskId: Scalars['String']} })
    removeSprintTag?: (ResultGenqlSelection & { __args: {sprintId: Scalars['String'], tagId: Scalars['String']} })
    removeTaskTag?: (ResultGenqlSelection & { __args: {tagId: Scalars['String'], taskId: Scalars['String']} })
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
    latestSprint?: SprintGenqlSelection
    sprints?: (SprintsPageGenqlSelection & { __args: {filters: SprintFiltersInput, page: PageInput} })
    tags?: TagsPageGenqlSelection
    tasks?: (TasksPageGenqlSelection & { __args: {filters: TaskFiltersInput, page: PageInput} })
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
    tags?: TagsPageGenqlSelection
    tasks?: (TasksPageGenqlSelection & { __args: {page: PageInput} })
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

export interface TagGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TagsPageGenqlSelection{
    items?: TagGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TaskGenqlSelection{
    assignees?: AppUsersPageGenqlSelection
    createTs?: boolean | number
    endTs?: boolean | number
    expectedEndTs?: boolean | number
    id?: boolean | number
    startTs?: boolean | number
    tags?: TagsPageGenqlSelection
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


    const AppUser_possibleTypes: string[] = ['AppUser']
    export const isAppUser = (obj?: { __typename?: any } | null): obj is AppUser => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAppUser"')
      return AppUser_possibleTypes.includes(obj.__typename)
    }
    


    const AppUsersPage_possibleTypes: string[] = ['AppUsersPage']
    export const isAppUsersPage = (obj?: { __typename?: any } | null): obj is AppUsersPage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAppUsersPage"')
      return AppUsersPage_possibleTypes.includes(obj.__typename)
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
    


    const Tag_possibleTypes: string[] = ['Tag']
    export const isTag = (obj?: { __typename?: any } | null): obj is Tag => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTag"')
      return Tag_possibleTypes.includes(obj.__typename)
    }
    


    const TagsPage_possibleTypes: string[] = ['TagsPage']
    export const isTagsPage = (obj?: { __typename?: any } | null): obj is TagsPage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTagsPage"')
      return TagsPage_possibleTypes.includes(obj.__typename)
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
    