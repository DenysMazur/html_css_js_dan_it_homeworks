const efficiencyOfPeople = [5];
const backlog = [5];
const deadLine = new Date(2021, 5, 16, 17, 0, 0);

toCountTimings(efficiencyOfPeople, backlog, deadLine);


function toCountTimings(efficiency, backlogArg, timing) {
  const workingHours = 8;
  const nonWorkinHours = 16;
  const secondsAndMinuts = 60;
  const hoursInDay = 24;
  const startingWork = 9;
  const finishWork = 17;
  const sunday = 0;
  const saturday = 6;
  const peopleCanDoStoriesInWorkingDay = toCountStoryPoints(efficiency);
  const peopleCanDoStoriesInOneHour = peopleCanDoStoriesInWorkingDay / workingHours;
  const backlogStories = toCountStoryPoints(backlogArg);
  const workingHoursBeforeDeadline = getBusinessHoursCount(timing);
  const haveToDoStorieFromBacklogInOneHour = backlogStories / workingHoursBeforeDeadline;
  if (peopleCanDoStoriesInOneHour < haveToDoStorieFromBacklogInOneHour) {
    const differenceInProductivityInOneHour = haveToDoStorieFromBacklogInOneHour / peopleCanDoStoriesInOneHour;
    let totalDiffernceInHours = workingHoursBeforeDeadline * differenceInProductivityInOneHour - workingHoursBeforeDeadline;
    const totalDifferenceMinutes = Math.round((totalDiffernceInHours.toFixed(2) - Math.trunc(totalDiffernceInHours)) * secondsAndMinuts);
    totalDiffernceInHours = Math.trunc(totalDiffernceInHours);
    return console.log(`Команде разработчиков придется потратить дополнительно ${totalDiffernceInHours} рабочих часов ${totalDifferenceMinutes} минут после дедлайна, чтобы выполнить все задачи в беклоге`);
  } else {
    const daysNeedForFinishedWork = backlogStories / peopleCanDoStoriesInWorkingDay;
    const deffirenceDaysBeforeDeadline = workingHoursBeforeDeadline / workingHours - daysNeedForFinishedWork;
    return console.log(`Все задачи будут успешно выполнены за ${deffirenceDaysBeforeDeadline.toFixed(1)} рабочих дней до наступления дедлайна!`)

  }

  function toCountStoryPoints(arrayOfStories) {
    let result = 0;
    arrayOfStories.forEach(element => result += element);
    return result;
  }

  function getBusinessHoursCount(timingObject) {
    if (timingObject.getDay() === saturday || timingObject.getDay() === sunday) {
      return console.log("Deadline date is incorrect as set on Weekends. Change it in customizations");
    }

    if (timingObject.getHours() > finishWork || timingObject.getHours() < startingWork) {
      return console.log("Deadline time is incorrect as set on non working hours. Change it in customizations");
    }
    let today = new Date();
    let todayYear = today.getFullYear();
    let todayMonth = today.getMonth();
    let todyaDate = today.getDate();
    let todayHour = today.getHours();
    let todayMinutes = today.getMinutes();

    if (todayMinutes < secondsAndMinuts / 2) {
      today = new Date(todayYear, todayMonth, todyaDate, todayHour, 0, 0);
    } else {
      today = new Date(todayYear, todayMonth, todyaDate, todayHour + 1, 0, 0);
    }

    if (today.getHours() >= finishWork || today.getHours() < startingWork) {
      today.setDate(today.getDate() + 1);
      today.setHours(startingWork);
    }

    let countHours = 0;
    if ((timingObject - today) / (secondsAndMinuts * secondsAndMinuts * hoursInDay * 1000) < 0) {
      return console.log("Deadline time is over");
    } else if ((timingObject - today) / (secondsAndMinuts * secondsAndMinuts * hoursInDay * 1000) * hoursInDay <= workingHours) {
      countHours = (timingObject - today) / (secondsAndMinuts * secondsAndMinuts * hoursInDay * 1000) * hoursInDay;
      return countHours;
    } else {
      while ((timingObject - today) / (secondsAndMinuts * secondsAndMinuts * hoursInDay * 1000) >= 1) {
        let dayOfWeek = today.getDay();
        if (!((dayOfWeek == saturday) || (dayOfWeek == sunday)))
          countHours += workingHours;
        today.setDate(today.getDate() + 1);
      }

      if ((timingObject - today) / (secondsAndMinuts * secondsAndMinuts * hoursInDay * 1000) * hoursInDay <= workingHours) {
        countHours = countHours + (timingObject - today) / (secondsAndMinuts * secondsAndMinuts * hoursInDay * 1000) * hoursInDay;
        return countHours;
      } else {
        countHours = countHours + (timingObject - today) / (secondsAndMinuts * secondsAndMinuts * hoursInDay * 1000) * hoursInDay - nonWorkinHours;
        return countHours;
      }
    }
  }
}