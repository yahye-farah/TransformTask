import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Form() {
  const [name, setName] = useState('');
  const [items, setItems] = useState<string[]>([]);
  const [next, setNext] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleItems = (e: React.ChangeEvent<HTMLInputElement>) => {
    const items = e.target.value.split(',');
    setItems(items);
  };

  const handleClick = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.API}/transformation`, {
        name,
        items: items.map((item) => item.trim()).filter((item) => item !== ''),
      });
      setSuccess(true);
      setError('');
      setItems([]);
      setName('');
      setNext(false);
    } catch (error: any) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className={styles.form}>
      {!success && (
        <form>
          <div className={styles.inputItem}>
            <label htmlFor="" className={styles.label}>
              Name
            </label>
            <input
              value={name}
              type="text"
              placeholder="Name"
              className={styles.input}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.inputItem}>
            <label htmlFor="" className={styles.label}>
              Items
            </label>
            <input
              value={items.join(',')}
              type="text"
              placeholder="Items: foo, bar"
              className={styles.input}
              onChange={handleItems}
            />
          </div>
          {error && <span className={styles.error}>{error}</span>}
        </form>
      )}
      {success && (
        <div className={styles.success}>
          <h1>The transform has been created successfuly</h1>
        </div>
      )}
      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={(e) => {
            handleClick(e);
          }}
          disabled={name === '' && items.length === 0}
        >
          Transform
        </button>
        <Link href={'/transform'}>
          <button className={styles.button} disabled={next}>
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
