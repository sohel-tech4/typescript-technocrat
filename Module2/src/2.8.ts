{
    // Promise

    const creatPromise2 = ():Promise<string> =>{
        return new Promise<string>((reslove, resject)=>{
            const data : string = "data paici"
            if(data){
                reslove(data)
            }
            else{
                resject("data reject")
            }
        })
    }


    // Calling create promise function
    const showData = async ():Promise<string> =>{
        const data : string = await creatPromise2()
        return data
    }

    showData()
}

