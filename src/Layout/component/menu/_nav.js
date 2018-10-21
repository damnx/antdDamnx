export default [
    {
        id: "1",
        icon: "code-o",
        name: "Dashboard",
        route: "/",
        parentId:'0'
    },
    {
        id: "2",
        icon: "code-o",
        name: "Charts",
        parentId:'0',
        children: [
            {
               
                id: "2.1",
                name: "Dashboard",
                route: "/damnx",
                parentId:'2'
            },
            {
                id: "2.2",
                name: "highCharts",
                route: "/ac",
                parentId:'2'
            },
            {
                icon: "area-chart",
                id: "2.3",
                name: "Rechartst",
                route: "/chart/Recharts",
                parentId:'2',
                children: [
                    {
                        id: "2.3.1",
                        name: "highCharts",
                        route: "/bc",
                        parentId:'2.3'
                    },
                    {
                        id: "2.3.2",
                        name: "highCharts",
                        route: "/ez",
                        parentId:'2.3'
                    }
                ]
            }

        ]
    },
    {
        id: "3",
        icon: "code-o",
        name: "Charts",
        parentId:'0',
        children: [
            {
               
                id: "3.1",
                name: "Dashboard",
                route: "/damnx",
                parentId:'3'
            },
            {
                id: "3.2",
                name: "highCharts",
                route: "/ac",
                parentId:'3'
            },
            {
                icon: "area-chart",
                id: "3.3",
                name: "Rechartst",
                route: "/chart/Recharts",
                parentId:'3',
                children: [
                    {
                        id: "3.3.1",
                        name: "highCharts",
                        route: "/bc",
                        parentId:'3.3'
                    },
                    {
                        id: "3.3.2",
                        name: "highCharts",
                        route: "/ez",
                        parentId:'3.3'
                    },
                    {
                        id: "3.3.3",
                        name: "highCharts",
                        route: "/bc",
                        parentId:'3.3'
                    },
                    {
                        id: "3.3.4",
                        name: "highCharts",
                        route: "/ez",
                        parentId:'3.3'
                    },
                    {
                        id: "3.3.5",
                        name: "highCharts",
                        route: "/bc",
                        parentId:'3.3'
                    },
                    {
                        id: "3.3.6",
                        name: "highCharts",
                        route: "/ez",
                        parentId:'3.3'
                    }
                ]
            }

        ]
    }
]