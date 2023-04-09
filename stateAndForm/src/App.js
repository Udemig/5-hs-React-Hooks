import { useState } from 'react';

function App() {
  // const [değer, ayarlayacakFonk.] = useState(başlangıç değeri)

  const [sayac, setSayac] = useState({ sayi: 0, tema: 'Açık' });

  const [form, setForm] = useState({ name: '', surname: '', password: '' });

  const [users, setUsers] = useState([]);

  const [data, setData] = useState([]);

  // sayacı azaltmak için kullandık
  const azaltSayac = () => {
    setSayac({ ...sayac, sayi: sayac.sayi - 1 });

    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  // formu yönetme
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.surname || !form.password) {
      alert('formu doldur');
      return;
    }

    setUsers([...users, form]);
    setForm({ name: '', surname: '', password: '' });
  };

  return (
    <div>
      {/* Sayac */}
      <button onClick={azaltSayac}>Azalt</button>
      <span>
        | {sayac.sayi} | {sayac.tema} |
      </span>
      <button>Artır</button>
      <br />
      <hr />
      {/* Forum */}

      <form onSubmit={handleSubmit}>
        <label>Kullanıcı Adı: </label>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          type="text"
        />
        <br />
        <label>Soyadı: </label>
        <input
          value={form.surname}
          onChange={(e) => setForm({ ...form, surname: e.target.value })}
          type="text"
        />
        <br />
        <label>Şifre: </label>
        <input
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          type="password"
        />
        <br />
        <button>Gönder</button>
      </form>
      <br />

      {/* terneray operator ile koşullu renderlama */}
      {users.length > 0
        ? users.map((user) => <p>{user.name + user.surname}</p>)
        : 'Kullanıcı Bulunamadı'}

      <br />

      {/* && ile koşullu renderlama */}
      {data.length > 0 && data.map((data) => <p>{data.title}</p>)}
    </div>
  );
}

export default App;

// sayacı artırma işlemi
// const artiSayac = () => {
//   setSayac((eskiSayac) => eskiSayac + 1);
//   setSayac((eskiSayac) => eskiSayac + 1);
// };

// inputun verisini yönetme
// const handleChange = (e) => {
//   // setName(e.target.value);
// };
