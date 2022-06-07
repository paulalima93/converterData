converterData = () =>{
  var teamRef = db.ref('equipes/');
  teamRef.on('value', (data)=> {
    var teamList = data.val();
   // console.log(teamList);

    for(var team in teamList){
      if(teamList[team]['foiPressionado']=== true){

        var mili = teamList[team]['quandoPressionou'] 
        var date = new Date(mili);
        var nome = team

        console.log(nome + ' => '+date.getDate()+
        "/"+(date.getMonth()+1)+
        "/"+date.getFullYear()+
        " "+date.getHours()+
        ":"+date.getMinutes()+
        ":"+date.getSeconds()) ;
      }
    }
        

  })

}
