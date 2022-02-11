const ITEMS_REQUEST = 'ITEMS_REQUEST' ;
//const ITEMS_REQUEST_SUCCESS = 'ITEMS_REQUEST_SUCCESS' ;


export function itemsRequest() {
        console.log("Hiiiiiiii")
        
     /*   return {
        type: ITEMS_REQUEST,
        payload
        }
        */
        return (dispatch) => {
            setTimeout(() => {
              // Yay! Can invoke sync or async actions with `dispatch`
              dispatch(itemsRequestSuccess());
          //    dispatch(reset());
            }, 1000);
          };
}


 function itemsRequestSuccess() {
    let payload= {
        appName: 'React App',
        desc: 'change by action',
    }
    return {
        type: ITEMS_REQUEST,
        payload
        }
   }

 