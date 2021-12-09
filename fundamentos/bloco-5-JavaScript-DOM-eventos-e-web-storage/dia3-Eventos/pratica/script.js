function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDay(){
      let getDaysList = document.querySelector('#days');

      for(let cont = 0; cont < dezDaysList.length; cont+=1){
          let day = dezDaysList[cont];
          let dayLi = document.createElement('li');

      if(day == 24 || day == 31){
          dayLi.className = 'day holiday';
          dayLi.innerHTML = day;
          getDaysList.appendChild(dayLi);
      }
      if(day == 4 || day == 11 || day == 18){
        dayLi.className = 'day friday';
        dayLi.innerHTML = day;
        getDaysList.appendChild(dayLi);
      }
      if(day == 25){
        dayLi.className = 'day holiday and friday';
        dayLi.innerHTML = day;
        getDaysList.appendChild(dayLi);
      }
      else{
        dayLi.className = 'day';
        dayLi.innerHTML = day;
        getDaysList.appendChild(dayLi);
      }
    }
    
  }

  createDay();

  function Holiday(feriados){
      let buttonContainer = document.querySelector('.buttons-container');
      let botao = document.createElement('button');
      let IDbotao = 'btn-holiday';

      botao.innerHTML = feriados;
      botao.id = IDbotao;
      buttonContainer.appendChild(botao);

  }

  Holiday();
  
  // Escreva seu código abaixo.