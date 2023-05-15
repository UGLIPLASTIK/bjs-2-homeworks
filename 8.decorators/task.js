//Задача № 1
function cachingDecoratorNew(func) {
  
}

//Задача № 2

function debounceDecorator(func, delay){
  let timeOutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;
  function wrapper(...args){
    if(wrapper.count === 0){
    wrapper.count += 1;
    return func(...args);
    }
    wrapper.allCount += 1;
    console.log('удалили текущий таймаут')
    clearTimeout(timeOutId);
    console.log('создаем таймаут');
    timeOutId = setTimeout(() => {
    timeOutId = null;
    console.log(func(...args));
    console.log('вызвали колбек');
    console.log(wrapper.allCount)
    wrapper.count += 1;
    }, delay);
  }
  return wrapper;
}

