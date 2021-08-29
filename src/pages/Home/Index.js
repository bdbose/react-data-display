import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.scss';

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const getData = async () => {
    const res = await axios(
      'https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json',
    );
    setData(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    if (page > 1 && 50 >= page) {
      setPage(page);
    } else {
      setPage(1);
    }
  }, [page]);
  useEffect(() => {
    getData();
  }, []);
  const searchData = (e) => {
    setPage(1);
    if (e === '') {
      return getData();
    }
    const res = data.filter((ele) => {
      return (
        ele.last_name.toLowerCase().includes(e) ||
        ele.first_name.toLowerCase().includes(e)
      );
    });
    // console.log(res);
    setData(res);
  };
  const sort = (e) => {
    const res = data.sort((a, b) => {
      return a.age - b.age;
    });
    console.log(res);
    setData(res);
  };
  return (
    <div className='home-wrapper'>
      <div className='search-wrapper'>
        <input
          placeholder='Search'
          onChange={(e) => searchData(e.target.value)}
        />
      </div>
      <div className='header'>
        <div
          onClick={() => {
            sort('first_name');
          }}>
          First Name
        </div>
        <div>Last Name</div>
        <div>Age</div>
        <div>Email</div>
        <div>Website</div>
      </div>

      {data.slice(0 + 10 * (page - 1), 10 + 10 * (page - 1)).map((i) => {
        return <Row key={i.id} {...i} />;
      })}
      <div className='paging-btns'>
        {page > 1 && (
          <button
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
              }
            }}>
            {'<'}
          </button>
        )}
        <div>{page}</div>
        {page <= parseInt(data.length / 10) && (
          <button
            onClick={() => {
              if (page <= parseInt(data.length / 10)) {
                setPage(page + 1);
              }
            }}>
            {'>'}
          </button>
        )}
      </div>
      <center>Total items: {data.length}</center>
    </div>
  );
};

const Row = ({
  first_name,
  last_name,
  age,
  city,
  state,
  id,
  web,
  zip,
  email,
  company_name,
}) => {
  return (
    <div
      className='row-wrapper'
      onClick={(e) => {
        window.location.href = '/users/' + id;
      }}>
      <div>{first_name}</div>
      <div>{last_name}</div>
      <div>{age}</div>
      <div>{email}</div>
      <div>
        <a href={web}>{web}</a>
      </div>
    </div>
  );
};

export default Home;
