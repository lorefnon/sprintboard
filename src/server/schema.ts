/**
 * Executable schema generated by Grats (https://grats.capt.dev)
 * Do not manually edit. Regenerate by running `npx grats`.
 */
import { tasks as sprintTasksResolver, allSprints as queryAllSprintsResolver, latestSprint as queryLatestSprintResolver, sprintsByTags as querySprintsByTagsResolver, assignTaskToSprint as mutationAssignTaskToSprintResolver, completeTask as mutationCompleteTaskResolver, createSprint as mutationCreateSprintResolver, createTask as mutationCreateTaskResolver, startTask as mutationStartTaskResolver } from "./resolvers.js";
import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLScalarType, GraphQLString, GraphQLInt, GraphQLInputObjectType, GraphQLBoolean } from "graphql";
export function getSchema(): GraphQLSchema {
    const DateType: GraphQLScalarType = new GraphQLScalarType({
        name: "Date"
    });
    const TaskType: GraphQLObjectType = new GraphQLObjectType({
        name: "Task",
        fields() {
            return {
                createTs: {
                    name: "createTs",
                    type: DateType
                },
                endTs: {
                    name: "endTs",
                    type: DateType
                },
                expectedEndTs: {
                    name: "expectedEndTs",
                    type: DateType
                },
                id: {
                    name: "id",
                    type: GraphQLString
                },
                startTs: {
                    name: "startTs",
                    type: DateType
                },
                title: {
                    name: "title",
                    type: GraphQLString
                },
                updateTs: {
                    name: "updateTs",
                    type: DateType
                }
            };
        }
    });
    const PageType: GraphQLObjectType = new GraphQLObjectType({
        name: "Page",
        fields() {
            return {
                num: {
                    name: "num",
                    type: GraphQLInt
                },
                size: {
                    name: "size",
                    type: GraphQLInt
                },
                total: {
                    name: "total",
                    type: GraphQLString
                }
            };
        }
    });
    const TasksPageType: GraphQLObjectType = new GraphQLObjectType({
        name: "TasksPage",
        fields() {
            return {
                items: {
                    name: "items",
                    type: new GraphQLList(new GraphQLNonNull(TaskType))
                },
                page: {
                    name: "page",
                    type: PageType
                }
            };
        }
    });
    const SprintType: GraphQLObjectType = new GraphQLObjectType({
        name: "Sprint",
        fields() {
            return {
                createTs: {
                    name: "createTs",
                    type: DateType
                },
                id: {
                    name: "id",
                    type: GraphQLString
                },
                startTs: {
                    name: "startTs",
                    type: DateType
                },
                tasks: {
                    name: "tasks",
                    type: TasksPageType,
                    resolve(source) {
                        return sprintTasksResolver(source);
                    }
                },
                title: {
                    name: "title",
                    type: GraphQLString
                },
                updateTs: {
                    name: "updateTs",
                    type: DateType
                }
            };
        }
    });
    const SprintsPageType: GraphQLObjectType = new GraphQLObjectType({
        name: "SprintsPage",
        fields() {
            return {
                items: {
                    name: "items",
                    type: new GraphQLList(new GraphQLNonNull(SprintType))
                },
                page: {
                    name: "page",
                    type: PageType
                }
            };
        }
    });
    const PageInputType: GraphQLInputObjectType = new GraphQLInputObjectType({
        name: "PageInput",
        fields() {
            return {
                num: {
                    name: "num",
                    type: GraphQLInt
                },
                size: {
                    name: "size",
                    type: GraphQLInt
                }
            };
        }
    });
    const QueryType: GraphQLObjectType = new GraphQLObjectType({
        name: "Query",
        fields() {
            return {
                allSprints: {
                    name: "allSprints",
                    type: SprintsPageType,
                    args: {
                        page: {
                            type: new GraphQLNonNull(PageInputType)
                        }
                    },
                    resolve(_source, args) {
                        return queryAllSprintsResolver(args.page);
                    }
                },
                latestSprint: {
                    name: "latestSprint",
                    type: SprintType,
                    resolve() {
                        return queryLatestSprintResolver();
                    }
                },
                sprintsByTags: {
                    name: "sprintsByTags",
                    type: SprintsPageType,
                    args: {
                        page: {
                            type: new GraphQLNonNull(PageInputType)
                        },
                        tags: {
                            type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLString)))
                        }
                    },
                    resolve(_source, args) {
                        return querySprintsByTagsResolver(args.tags, args.page);
                    }
                }
            };
        }
    });
    const ResultType: GraphQLObjectType = new GraphQLObjectType({
        name: "Result",
        fields() {
            return {
                success: {
                    name: "success",
                    type: GraphQLBoolean
                }
            };
        }
    });
    const SprintInputType: GraphQLInputObjectType = new GraphQLInputObjectType({
        name: "SprintInput",
        fields() {
            return {
                startTS: {
                    name: "startTS",
                    type: new GraphQLNonNull(DateType)
                },
                title: {
                    name: "title",
                    type: new GraphQLNonNull(GraphQLString)
                }
            };
        }
    });
    const TaskInputType: GraphQLInputObjectType = new GraphQLInputObjectType({
        name: "TaskInput",
        fields() {
            return {
                expectedEndTs: {
                    name: "expectedEndTs",
                    type: DateType
                },
                title: {
                    name: "title",
                    type: new GraphQLNonNull(GraphQLString)
                }
            };
        }
    });
    const MutationType: GraphQLObjectType = new GraphQLObjectType({
        name: "Mutation",
        fields() {
            return {
                assignTaskToSprint: {
                    name: "assignTaskToSprint",
                    type: ResultType,
                    args: {
                        sprintId: {
                            type: new GraphQLNonNull(GraphQLString)
                        },
                        taskId: {
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },
                    resolve(_source, args) {
                        return mutationAssignTaskToSprintResolver(args.taskId, args.sprintId);
                    }
                },
                completeTask: {
                    name: "completeTask",
                    type: ResultType,
                    args: {
                        taskId: {
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },
                    resolve(_source, args) {
                        return mutationCompleteTaskResolver(args.taskId);
                    }
                },
                createSprint: {
                    name: "createSprint",
                    type: SprintType,
                    args: {
                        sprint: {
                            type: new GraphQLNonNull(SprintInputType)
                        }
                    },
                    resolve(_source, args) {
                        return mutationCreateSprintResolver(args.sprint);
                    }
                },
                createTask: {
                    name: "createTask",
                    type: TaskType,
                    args: {
                        task: {
                            type: new GraphQLNonNull(TaskInputType)
                        }
                    },
                    resolve(_source, args) {
                        return mutationCreateTaskResolver(args.task);
                    }
                },
                startTask: {
                    name: "startTask",
                    type: ResultType,
                    args: {
                        taskId: {
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },
                    resolve(_source, args) {
                        return mutationStartTaskResolver(args.taskId);
                    }
                }
            };
        }
    });
    const SprintFiltersInputType: GraphQLInputObjectType = new GraphQLInputObjectType({
        name: "SprintFiltersInput",
        fields() {
            return {
                tags: {
                    name: "tags",
                    type: new GraphQLList(new GraphQLNonNull(GraphQLString))
                }
            };
        }
    });
    return new GraphQLSchema({
        query: QueryType,
        mutation: MutationType,
        types: [DateType, PageInputType, SprintFiltersInputType, SprintInputType, TaskInputType, MutationType, PageType, QueryType, ResultType, SprintType, SprintsPageType, TaskType, TasksPageType]
    });
}
