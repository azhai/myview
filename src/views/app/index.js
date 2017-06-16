import template from './template.html'
import './style.css'

export default {
    template: template,
    components: {
    },
    data () {
        return {
            my_cols: [{
                "type": "selection",
                "width": 60,
                "align": "center"
            }],
            my_rows: []
        }
    },
    methods: {
        read_data () {
            this.axios.get("./api/data.json").then(response => {
                this.my_cols = response.data.cols;
                this.my_rows = response.data.rows;
            })
        }
    },
    mounted () {
        this.read_data();
    }
}