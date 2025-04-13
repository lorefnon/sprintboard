export default {
    "scalars": [
        0,
        2,
        4,
        16
    ],
    "types": {
        "Date": {},
        "AppUserInput": {
            "email": [
                2
            ],
            "name": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "String": {},
        "PageInput": {
            "num": [
                4
            ],
            "size": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "Int": {},
        "SprintFiltersInput": {
            "tagIds": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "SprintInput": {
            "startTS": [
                0
            ],
            "title": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "TagInput": {
            "name": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "TaskFiltersInput": {
            "assigneeIds": [
                2
            ],
            "sprintId": [
                2
            ],
            "tagIds": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "TaskInput": {
            "expectedEndTs": [
                0
            ],
            "title": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "AppUser": {
            "email": [
                2
            ],
            "id": [
                2
            ],
            "name": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "AppUsersPage": {
            "items": [
                10
            ],
            "__typename": [
                2
            ]
        },
        "Mutation": {
            "addAssignee": [
                15,
                {
                    "assigneeId": [
                        2,
                        "String!"
                    ],
                    "taskId": [
                        2,
                        "String!"
                    ]
                }
            ],
            "assignTagToSprint": [
                15,
                {
                    "sprintId": [
                        2,
                        "String!"
                    ],
                    "tagId": [
                        2,
                        "String!"
                    ]
                }
            ],
            "assignTagToTask": [
                15,
                {
                    "tagId": [
                        2,
                        "String!"
                    ],
                    "taskId": [
                        2,
                        "String!"
                    ]
                }
            ],
            "assignTaskToSprint": [
                15,
                {
                    "sprintId": [
                        2,
                        "String!"
                    ],
                    "taskId": [
                        2,
                        "String!"
                    ]
                }
            ],
            "completeTask": [
                15,
                {
                    "taskId": [
                        2,
                        "String!"
                    ]
                }
            ],
            "createAppUser": [
                10,
                {
                    "appUser": [
                        1,
                        "AppUserInput!"
                    ]
                }
            ],
            "createSprint": [
                17,
                {
                    "sprint": [
                        6,
                        "SprintInput!"
                    ]
                }
            ],
            "createTag": [
                19,
                {
                    "tag": [
                        7,
                        "TagInput!"
                    ]
                }
            ],
            "createTask": [
                21,
                {
                    "task": [
                        9,
                        "TaskInput!"
                    ]
                }
            ],
            "removeAssignee": [
                15,
                {
                    "assigneeId": [
                        2,
                        "String!"
                    ],
                    "taskId": [
                        2,
                        "String!"
                    ]
                }
            ],
            "removeSprintTag": [
                15,
                {
                    "sprintId": [
                        2,
                        "String!"
                    ],
                    "tagId": [
                        2,
                        "String!"
                    ]
                }
            ],
            "removeTaskTag": [
                15,
                {
                    "tagId": [
                        2,
                        "String!"
                    ],
                    "taskId": [
                        2,
                        "String!"
                    ]
                }
            ],
            "startTask": [
                15,
                {
                    "taskId": [
                        2,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "Page": {
            "num": [
                4
            ],
            "size": [
                4
            ],
            "total": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Query": {
            "latestSprint": [
                17
            ],
            "sprints": [
                18,
                {
                    "filters": [
                        5,
                        "SprintFiltersInput!"
                    ],
                    "page": [
                        3,
                        "PageInput!"
                    ]
                }
            ],
            "tags": [
                20
            ],
            "tasks": [
                22,
                {
                    "filters": [
                        8,
                        "TaskFiltersInput!"
                    ],
                    "page": [
                        3,
                        "PageInput!"
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "Result": {
            "success": [
                16
            ],
            "__typename": [
                2
            ]
        },
        "Boolean": {},
        "Sprint": {
            "createTs": [
                0
            ],
            "id": [
                2
            ],
            "startTs": [
                0
            ],
            "tags": [
                20
            ],
            "tasks": [
                22,
                {
                    "page": [
                        3,
                        "PageInput!"
                    ]
                }
            ],
            "title": [
                2
            ],
            "updateTs": [
                0
            ],
            "__typename": [
                2
            ]
        },
        "SprintsPage": {
            "items": [
                17
            ],
            "page": [
                13
            ],
            "__typename": [
                2
            ]
        },
        "Tag": {
            "id": [
                2
            ],
            "name": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "TagsPage": {
            "items": [
                19
            ],
            "__typename": [
                2
            ]
        },
        "Task": {
            "assignees": [
                11
            ],
            "createTs": [
                0
            ],
            "endTs": [
                0
            ],
            "expectedEndTs": [
                0
            ],
            "id": [
                2
            ],
            "startTs": [
                0
            ],
            "tags": [
                20
            ],
            "title": [
                2
            ],
            "updateTs": [
                0
            ],
            "__typename": [
                2
            ]
        },
        "TasksPage": {
            "items": [
                21
            ],
            "page": [
                13
            ],
            "__typename": [
                2
            ]
        }
    }
}