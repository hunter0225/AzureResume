window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})
const functionApiUrl = 'https://func-resume-hscott.azurewebsites.net/api/GetResumeCounter?code=kB5GD2n-lfW-QvhcX4lrE0NfgrTleQDNe0DuuaHH1_V0AzFu39DtPQ==';
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}