"use strict";

const app = new Vue({
    el: '#app',
    data: {
        projects: [],
        dark_mode: false
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
            name: "Java smart post app",
            link: "https://gitlab.com/MalouisMuted/Timotei",
            description: "Post office application. Written with Java. Used XML-file reading libraries, GUI with JavaFX, Javascript API. Used with SQL-databases."
        });
        this.projects.push({
            name: "CSV file reader",
            link: "https://gitlab.com/MalouisMuted/CSV_file_reader",
            description: "Program to find certain names and some data from them. Used pointers, linked lists and file I/O. Written with C."
        });
        this.projects.push({
            name: "Run length encoding/decoding",
            link: "https://gitlab.com/MalouisMuted/run_length_encoding_decoding",
            description: "CLI-operable encoding and decoding for text files. Written with C."
        });
        this.projects.push({
            name: "News API thingy majingy",
            link: "https://gitlab.com/MalouisMuted/www-harkka",
            description: "Done with Express.js. Uses Docker. Uses NewsAPI for fetching news articles. Vue.js is used for front end controlling."
        });
    },
    methods: {
        switch_lights: function() {
            this.dark_mode = !this.dark_mode;
            if (this.dark_mode) {
                document.querySelector('body').classList.add('dark');
                document.querySelector('body').classList.remove('light');
            } else {
                document.querySelector('body').classList.add('light');
                document.querySelector('body').classList.remove('dark');
            }
        }
    }
})