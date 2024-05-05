{

    // এপিআই কল করা
    const getApi = async() =>{
        const resposnse = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await resposnse.json()
        return data
    }
    console.log(getApi())




    const CallingBoys = () : Promise<string> =>{
        return new Promise<string>((reslove, reject)=>{
            const data : string = "something"
            if(data){
                reslove(data)
            } else {
                reject("Data reject")
            }
        })
    }

    const ShowData = async() : Promise<string> =>{
        const data : string = await CallingBoys()
        return data
    }

    console.log(ShowData())



    // For Boolean
    const CallingBoys2 = () : Promise<number> =>{
        return new Promise<number>((reslove, reject)=>{
            const data : number = 25
            if(data){
                reslove(data)
            } else {
                reject("Data reject")
            }
        })
    }

    const ShowData2 = async() : Promise<number> =>{
        const data : number = await CallingBoys2()
        return data
    }

    console.log(ShowData())


        // For Object

    type MyObj = {
        name : string
    }
        const CallingBoys3 = () : Promise<MyObj> =>{
            return new Promise<MyObj>((reslove, reject)=>{
                const data : MyObj = {name: "sohel"}
                if(data){
                    reslove(data)
                } else {
                    reject("Data reject")
                }
            })
        }
    
        const ShowData3 = async() : Promise<MyObj> =>{
            const data : MyObj = await CallingBoys3()
            return data
        }
    
        console.log(ShowData())


    

}

