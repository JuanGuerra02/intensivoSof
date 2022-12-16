//conexion entre los metodos POST/GET etc.. de Springboot al front  (Bakend->Front)
class locator {
    constructor(){

    }
    async save(cliente){
        let result = null;

        console.log(JSON.stringify(cliente))
        try {
            let response = await fetch('http://localhost:8080/api/Cliente/save',
                     {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify(cliente)
                    });
          
          result = await response.json();
        } catch (error) {
            console.log(error)
        }
        return result;
    }

    async update(cliente){
        let result = null;

        try {
            let response = await fetch('http://localhost:8080/api/Cliente/update',
                     {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify(cliente)
                    });
          
          result = await response.json();
        } catch (error) {
            console.log(error)
        }
        return result;
    }


    async delet(cliente){
        let result = null;

        try {
            let response = await fetch('http://localhost:8080/api/Cliente/delete',
                     {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify(cliente)
                    });
          
          result = await response.json();
        } catch (error) {
            console.log(error)
        }
        return result;
    }


    async getAll(){
        let result = null;    
        try {
            let response = await fetch('http://localhost:8080/api/Cliente/selectall', {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body:null 
              });
              
               result = await response.json();
        } catch (error) {
            console.error(error);
        }
        return result;
     }
}




 