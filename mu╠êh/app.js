document.addEventListener("DOMContentLoaded", function(){
       var ctx = document.getElementById('myChart');
var mychart = new CharacterData(ctx, {
    type: 'bar',
    data: {
        labels: ['red', 'blue'],
        datasets: [{
        label: '# of Votes',
        data: [12, 19, 2]
    }]
},
Options: {

}
    
});
});