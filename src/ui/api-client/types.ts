export default {
    "scalars": [
        0,
        2,
        4,
        11
    ],
    "types": {
        "Date": {},
        "PageInput": {
            "num": [
                2
            ],
            "size": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "Int": {},
        "SprintFiltersInput": {
            "tags": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "String": {},
        "SprintInput": {
            "startTS": [
                0
            ],
            "title": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TaskInput": {
            "expectedEndTs": [
                0
            ],
            "title": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "Mutation": {
            "assignTaskToSprint": [
                10,
                {
                    "sprintId": [
                        4,
                        "String!"
                    ],
                    "taskId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "completeTask": [
                10,
                {
                    "taskId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "createSprint": [
                12,
                {
                    "sprint": [
                        5,
                        "SprintInput!"
                    ]
                }
            ],
            "createTask": [
                14,
                {
                    "task": [
                        6,
                        "TaskInput!"
                    ]
                }
            ],
            "startTask": [
                10,
                {
                    "taskId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                4
            ]
        },
        "Page": {
            "num": [
                2
            ],
            "size": [
                2
            ],
            "total": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "Query": {
            "allSprints": [
                13,
                {
                    "page": [
                        1,
                        "PageInput!"
                    ]
                }
            ],
            "latestSprint": [
                12
            ],
            "sprintsByTags": [
                13,
                {
                    "page": [
                        1,
                        "PageInput!"
                    ],
                    "tags": [
                        4,
                        "[String!]!"
                    ]
                }
            ],
            "__typename": [
                4
            ]
        },
        "Result": {
            "success": [
                11
            ],
            "__typename": [
                4
            ]
        },
        "Boolean": {},
        "Sprint": {
            "createTs": [
                0
            ],
            "id": [
                4
            ],
            "startTs": [
                0
            ],
            "tasks": [
                15
            ],
            "title": [
                4
            ],
            "updateTs": [
                0
            ],
            "__typename": [
                4
            ]
        },
        "SprintsPage": {
            "items": [
                12
            ],
            "page": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "Task": {
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
                4
            ],
            "startTs": [
                0
            ],
            "title": [
                4
            ],
            "updateTs": [
                0
            ],
            "__typename": [
                4
            ]
        },
        "TasksPage": {
            "items": [
                14
            ],
            "page": [
                8
            ],
            "__typename": [
                4
            ]
        }
    }
}