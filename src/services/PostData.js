export function PostData(type,userData){

    let BaseUrl = 'http://alpha-api.littlescribe.com/';

    return new Promise((resolve,reject) =>{
        fetch(BaseUrl+type,{
            method:'POST',
            body: JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((responseJson) => {
            resolve(responseJson);
        })
        .then((error) => {
            reject(error);
        });
    });
}