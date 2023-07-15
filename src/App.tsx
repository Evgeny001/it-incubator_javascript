import React from 'react';
import './App.css';

function App() {
//Есть массив строк, а надо получить массив <li>. Для этого в массив names вызываем метод map, map пробежится по всем
//элементам массива и для каждого элемента вернет JSX-элемент <li> внутри которого будет сидеть значение элемента массива.
//<li>{name}</li> будет столько сколько элементов в массиве. Когда делаем map массива, то обязаны помочь React и
//указать каждому элементу который map key (в нашем случае <li> ). В качестве key лучше использовать id, если id нет,
//то использовать index. Если <li> захотим обернуть другим тегом, то ключ надо перенести в него. Ключ всегда
//находится во внешнем элементе по которому происходит map. Ключ должен быть в самом верхнем элементе который возвращается
//из преобразования после map.
  const names = ['Dimych', 'Sveta', 'Katya','Victor', 'Valera' ]

  const users = [{id: 1, name: 'Dimych'}, {id: 2, name:'Sveta'}, {id: 3, name:'Katya'},{id: 4, name:'Victor'},
    {id: 5, name:'Valera'} ]

  // const liElements = names.map(name => <li>{name}</li>)
  const liElements = users.map(user => <li key={user.id}>{user.name}</li>)
  return (
    <div className="App">
         <ul>
           {liElements}
         </ul>
    </div>
  );
}

export default App;
