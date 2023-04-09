import React, { useEffect, useRef, useState } from 'react';

const Filter = () => {
  // gelen ve değiştirmediğimiz veri
  const [users, setUsers] = useState(null);
  // filtrelenen öğeleri aktardığımız dizi
  const [filtredUsers, setFiltredUser] = useState(null);

  //   inputun referansını alma işlemi
  const searchRef = useRef('');

  //   comp. ilk oluştuğunda http isteği atar
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFiltredUser(data);
      });
  }, []);

  //   gelen veriyi input içeriğine göre filtreleme
  const handleFilter = () => {
    let inputState = searchRef.current.value.toLowerCase();

    const filtred = users.filter((user) =>
      user.name.toLowerCase().includes(inputState)
    );

    setFiltredUser(filtred);
  };

  if (filtredUsers === null) return 'YÜKLENİYOR....';

  return (
    <div className="filter-area">
      <h1>Kullanıcılar</h1>
      <input ref={searchRef} type="text" onChange={handleFilter} />
      <ul>
        {filtredUsers.map((user) => (
          <li key={user.id}>
            İsim:{user.name} | Tel:{user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
