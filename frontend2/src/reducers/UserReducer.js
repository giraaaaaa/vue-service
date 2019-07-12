const initalState = {
    categories : [
        {id:'Apple', name: '애플'},
        {id:'Google', name: '구글'},
        {id:'MicroSoft', name: '마이크로소프트'}
    ]

}

const getUser = response =>{
    const repos = [];
    const itemLength = response.data.length;
    for(let i = 0; i< itemLength; i++){
        const item = response.data[i];
        repos.push({
            name: item.name,
            description : item.discription,
            url: item.html_url
        })
    }
    return repos;
}
const initalState = {
    user: undefined,
    repost:undefined,
    error:false
}
export default ()=> initalState;