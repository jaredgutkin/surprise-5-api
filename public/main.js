let vm = new Vue({
    el: "#app",
    data: {
        itemNo: "",
        itemName: "",
        brandName: "",
        rarity: "",
        specialFeature: "",
        exclusive: "",
        seriesNo: "",
        response: "",
        endpoint: "https://surprise-5-api.vercel.app/api/minibrand/",
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
        // searchRarity: function() {
        //     let path = "rarity/";
        //     let rarity = this.rarity;
        //     this.getMiniBrand(path, rarity);
            
        //     this.rarity = "";
        //     this.error.isVisible = false;
        // },
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