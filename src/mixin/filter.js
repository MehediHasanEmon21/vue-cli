export default {

    filters: {

            cutText(value){
                return value.slice(0,70)+'....'
            },
        
            makeUpper(value){
                return value.toUpperCase()
            }
        }

}