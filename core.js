var app = new Vue({
    el: '#app',
    data: {
        projects: []
    },
    mounted() {
        this.projects.push({
            name: "AVL-tree",
            link: "https://gitlab.com/MalouisMuted/avl-tree",
            description: "Small example of AVL-tree. Written with C."
        });
        this.projects.push({
            name: "Sa Ransurotto",
            link: "https://gitlab.com/MalouisMuted/Sa_Ransurotto",
            description: "Text based adventure game written with Java. Used lots of typical Java concepts such as hash mapping, inheritance and namespace emphasis, interfaces, arraylist manipulation."
        });
        this.projects.push({
            name: "Timotei",
            link: "https://gitlab.com/MalouisMuted/Timotei",
            description: "Post office application. Written with Java. Used XML-file reading libraries, GUI with JavaFX, Javascript API. Used with SQL-databases."
        });
        this.projects.push({
            name: "CSV file reader",
            link: "https://gitlab.com/MalouisMuted/CSV_file_reader",
            description: "Program to find certain names and some data from them. Used pointers, linked lists and file I/O. Written with C."
        });
    },
    methods: {}
})