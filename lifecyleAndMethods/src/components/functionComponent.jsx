import React, { useEffect, useState } from 'react';

const Paper = () => {
  const [todoId, setTodoId] = useState(1);
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((response) => response.json())
      .then((data) => setTodo(data));

    console.log('Veri Çekildi');
  }, [todoId]);

  return (
    <div>
      <p>{todoId}</p>
      <br />
      <p>{JSON.stringify(todo)}</p>
      <button
        onClick={() => {
          setTodoId(todoId + 1);
        }}
      >
        Arttır
      </button>
    </div>
  );
};

export default Paper;

/*
useEffect:
Amacı: componentDidMount | componentDidUpdate | componentWillUnmount methodları yerine kullanılır

Yazım Şekli:
 1-   useEffect(() => {}); > comp. her render olduğunda
 2-   useEffect(() => {},[]); > comp. ilk oluştuğunda çalışır
 3-   useEffect(() => {},[state]); > bağımlılık(state) her değiştiğinde çalışır ve comp. ilk geldiğinde
 4-   useEffect(() => { return () => {} },[]) > comp. ekrandan gittiğinde çalışır


 >KULLANIMLAR:

  //  her render oludğunda çalışır
  useEffect(() => {
    console.log('Component Render Oldu');
  });

  // // coponent ilk oluştuğunda çalışır
  useEffect(() => {
    console.log('Component Did Mount Çalıştı');
  }, []);

  //  componentın içerisindeki state her değiştiğinde çalışır
  useEffect(() => {
    console.log('Component Did Update Çalıştı ' + count);
  }, [count]);

  //   comp. ekrandan gittiğinde çalışır
  useEffect(() => {
    console.log('Component oluştu');
    return () => {
      console.log('Component will unmount gitti');
    };
  }, []);

 */
