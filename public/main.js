let vm = new Vue({
    el: "#app",
    data: {
        id: "",
        brandName: "",
        itemNo: "",
        url: "",
        response: "",
        endpoint: "https://localhost:5000/api/minibrand/",
        error: {
            isVisible: false,
            message: "Nothing matches your input in our database."
        }
    },
    methods: {
        searchBrandName: function() {
            let path = "brandName/";
            let brandName = this.brandName;
            this.getMiniBrand(path, brandName);  
            
            this.brandName = "";
            this.error.isVisible = false;
        },
        searchItemNo: function() {
            let path = "itemNo/";
            let itemNo = this.itemNo;
            this.getMiniBrand(path, itemNo);
            
            this.itemNo = "";
            this.error.isVisible = false;
        },
        searchId: function() {
            let path = "id/";
            let id = this.id;
            this.getMiniBrand(path, id);
            
            this.id = "";
            this.error.isVisible = false;
        },
        getMiniBrand: function(path, parameter) {
            axios({
                method: "GET",
                "url": this.endpoint + path + parameter
            }).then(result => {
                this.response = result.data;
            }, error => {
                this.error.message = `${parameter} isn\'t in our database.`;
                this.error.isVisible = true;
            });
        }
    }
});