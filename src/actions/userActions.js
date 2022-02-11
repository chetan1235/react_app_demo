const USERLIST = 'USERLIST' ;



export function userInfo() {
        console.log("Hiiiiiiii");
       
        
       return (dispatch) => {
        fetch('https://reqres.in/api/users')
        .then(res => res.json())
            .then(
            (result) => {
                dispatch(userdata(result.data));
                
            });
        

        };
    }

 function userdata(data){
      
       return {
           type: USERLIST,
           payload: data,
       };     
 }
    

 