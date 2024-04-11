const mockTaskData = [
    {
        id: 1,
        isCompleted: true,
        title: "Graphics design for client",
        time: "13:59 PM",
        date: "2024-09-24",
        priority: "low",
        percentage: 50,
        subTasks: [
            {
                isDone: true,
                title: "setup adobe work space"
            },
            {
                isDone: false,
                title: "make the layout of the app"
            },
        ]
    },
    {
        id: 2,
        isCompleted: false,
        title: "Build a task management app",
        time: "11:00 AM",
        date: "2024-06-01",
        priority: "meduim",
        percentage: 100,
        subTasks: [
            {
                isDone: true,
                title: "work on the langing page"
            },
            {
                isDone: true,
                title: "Design the app logo"
            },
        ]
    },
    {
        id: 3,
        isCompleted: true,
        title: "Brainstorm on a name for an app",
        time: "11:00 AM",
        date: "2024-04-12",
        priority: "high",
        percentage: 0,
        subTasks: [
            {
                isDone: false,
                title: "have a meeting with stakeholders"
            },
            {
                isDone: false,
                title: "List all available names"
            },
            {
                isDone: false,
                title: "List all shortlisted names"
            },
            {
                isDone: false,
                title: "Choose a name from the shortlisted name list"
            },
        ]
    },
]

export default mockTaskData;