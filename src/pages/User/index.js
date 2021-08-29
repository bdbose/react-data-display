import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.scss';

const User = (props) => {
  const [data, setData] = useState({});
  const id = props.match.params.id;
  const getData = async () => {
    const res = await axios(
      'https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json',
    );
    const filter_data = res.data.filter((ele) => {
      return ele.id.toString() === id;
    });
    setData(filter_data[0]);
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='user-wrapper'>
      <a href='/' id='back'>
        &#8592;
      </a>
      <hr />
      {Object.keys(data).length !== 0 && (
        <div>
          <h1>
            <img
              alt='svgImg'
              src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzgwODA4MCI+PHBhdGggZD0iTTg2LDE0LjMzMzMzYy0zMS42NjIzMywwIC01Ny4zMzMzMywyNS42NzEgLTU3LjMzMzMzLDU3LjMzMzMzdjcuMTY2Njd2Ni40NjY4Yy00LjExMTU4LDMuOTIwNjUgLTcuMTY2NjcsOC45NjQwOCAtNy4xNjY2NywxNS4wMzMyYzAsOC45MDA3NyA2LjE0NTc4LDE1LjUwMDgxIDEzLjkyNzQxLDE4LjcyODUxYzkuMzI0MDgsMjIuMjg2OTkgMjcuOTk5MjksMzguNjA0ODIgNTAuNTcyNTksMzguNjA0ODJjMjIuNTczMzEsMCA0MS4yNDg1MiwtMTYuMzE3ODMgNTAuNTcyNTksLTM4LjYwNDgyYzcuNzgxNjIsLTMuMjI3NyAxMy45Mjc0MSwtOS44Mjc3NCAxMy45Mjc0MSwtMTguNzI4NTFjMCwtNi4wNjkxMiAtMy4wNTUwOSwtMTEuMTEyNTUgLTcuMTY2NjcsLTE1LjAzMzJ2LTYuNDY2OHYtNy4xNjY2N2MwLC0zMS42NjIzMyAtMjUuNjcxLC01Ny4zMzMzMyAtNTcuMzMzMzMsLTU3LjMzMzMzek01MC4xNjY2Nyw3MS42NjY2N2g3MS42NjY2N2MzLjk1NiwwIDcuMTY2NjcsMy4yMTA2NyA3LjE2NjY3LDcuMTY2Njd2Ny4xNjY2N3YxLjk0NTY0YzAuMDAwMDUsMi41NjYyMyAxLjM3MjEsNC45MzY2MSAzLjU5NzMzLDYuMjE0ODVjMi4xNzYwNywxLjI0OTE2IDMuNTY5MzQsMy40MTM3NCAzLjU2OTM0LDYuMTcyODVjMCwzLjY5MTcgLTIuNjQzMjksNi41NDExIC02LjE3Mjg1LDcuMDI2NjljLTIuNTkzMTgsMC4zNTMxMyAtNC43ODc3MywyLjA5MTYgLTUuNzI0OTMsNC41MzUxNWMtNy4zODc0MSwxOS4yNTEyNSAtMjIuMDgzMzQsMzEuNDM4MTUgLTM4LjI2ODg4LDMxLjQzODE1Yy0xNi4xODU1NSwwIC0zMC44ODE0NywtMTIuMTg2OSAtMzguMjY4ODgsLTMxLjQzODE1Yy0wLjkzNzIsLTIuNDQzNTUgLTMuMTMxNzUsLTQuMTgyMDIgLTUuNzI0OTMsLTQuNTM1MTVjLTMuNTI5NTYsLTAuNDg1NTkgLTYuMTcyODUsLTMuMzM0OTkgLTYuMTcyODUsLTcuMDI2NjljMCwtMi43NTkxMSAxLjM5MzI2LC00LjkyMzY5IDMuNTY5MzQsLTYuMTcyODVjMi4yMjUyMywtMS4yNzgyMyAzLjU5NzI4LC0zLjY0ODYyIDMuNTk3MzMsLTYuMjE0ODV2LTEuOTQ1NjR2LTcuMTY2NjdjMCwtMy45NTYgMy4yMTA2NywtNy4xNjY2NyA3LjE2NjY3LC03LjE2NjY3eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+'
            />
            <span>Name :</span> {data.first_name} {data.last_name}
          </h1>
          <h2>
            <img
              alt='svgImg'
              src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzgwODA4MCI+PHBhdGggZD0iTTg2LDIxLjVjLTM1LjUzNjAzLDAgLTY0LjUsMjguOTYzOTcgLTY0LjUsNjQuNWMwLDM4LjcgMjIuNTIxODEsNzUuMzQ3OTggMjIuNTIxODEsNzUuMzQ3OThsMTIuMjg5NzEsLTcuMzYyNjNjMCwwIC0yMC40NzgxOSwtMzUuMDE4NjggLTIwLjQ3ODE5LC02Ny45ODUzNWMwLC0yNy43ODg2MyAyMi4zNzgwMywtNTAuMTY2NjcgNTAuMTY2NjcsLTUwLjE2NjY3YzI3Ljc4ODY0LDAgNTAuMTY2NjcsMjIuMzc4MDMgNTAuMTY2NjcsNTAuMTY2NjdjMCw0LjA0OTM4IC0zLjExNzI5LDcuMTY2NjcgLTcuMTY2NjcsNy4xNjY2N2MtNC4wNDkzOCwwIC03LjE2NjY3LC0zLjExNzI4IC03LjE2NjY3LC03LjE2NjY3YzAsLTE5LjcwNDg3IC0xNi4xMjg0NywtMzUuODMzMzMgLTM1LjgzMzMzLC0zNS44MzMzM2MtMTkuNzA0ODcsMCAtMzUuODMzMzMsMTYuMTI4NDcgLTM1LjgzMzMzLDM1LjgzMzMzYzAsNDcuNzc3NzggNDYuOTYxMjYsNzAuOTEwODEgNDYuOTYxMjYsNzAuOTEwODFsNi40MTA4MSwtMTIuODIxNjFjMCwwIC0zOS4wMzg3NCwtMTkuODY2OTcgLTM5LjAzODc0LC01OC4wODkxOWMwLC0xMS45NTc0NyA5LjU0MjUzLC0yMS41IDIxLjUsLTIxLjVjMTEuOTU3NDcsMCAyMS41LDkuNTQyNTMgMjEuNSwyMS41YzAsMTEuNzg4OTUgOS43MTEwNSwyMS41IDIxLjUsMjEuNWMxMS43ODg5NSwwIDIxLjUsLTkuNzExMDUgMjEuNSwtMjEuNWMwLC0zNS41MzYwMyAtMjguOTYzOTcsLTY0LjUgLTY0LjUsLTY0LjV6TTc4LjgzMzMzLDc4LjgzMzMzYzAsMTIuMzQyNTkgMy45NTc0MSwyOC4xNTY5NCAxNS4xMzExOCw0MS4zNjIzYzExLjE3Mzc3LDEzLjIwNTM2IDI5Ljc0NTgsMjMuMTM3NyA1Ni41MzU0OCwyMy4xMzc3di0xNC4zMzMzM2MtMjMuMzc2OTksMCAtMzcuMDU0OTYsLTcuOTg0MzMgLTQ1LjU4OTUyLC0xOC4wNzA2NGMtOC41MzQ1NiwtMTAuMDg2MyAtMTEuNzQzODIsLTIyLjkzODYyIC0xMS43NDM4MiwtMzIuMDk2MDN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4='
            />
            <span>Age:</span> {data.age}
          </h2>
          <h2>
            <img
              alt='svgImg'
              src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzgwODA4MCI+PHBhdGggZD0iTTUwLjE2NjY3LDI4LjY2NjY3Yy0xOS43MDQ4NywwIC0zNS44MzMzMywxNi4xMjg0NyAtMzUuODMzMzMsMzUuODMzMzN2NjQuNWMwLDcuODMzNjIgNi40OTk3MiwxNC4zMzMzMyAxNC4zMzMzMywxNC4zMzMzM2g0M2g3MS42NjY2N2M3LjkxOTE3LDAgMTQuMzMzMzMsLTYuNDE0MTcgMTQuMzMzMzMsLTE0LjMzMzMzdi02NC41YzAsLTE5Ljc4NzE3IC0xNi4wNDYxNywtMzUuODMzMzMgLTM1LjgzMzMzLC0zNS44MzMzM3pNNTAuMTY2NjcsNDNjMTEuODc1MTcsMCAyMS41LDkuNjI0ODMgMjEuNSwyMS41djY0LjVoLTQzdi02NC41YzAsLTExLjk1NzQ3IDkuNTQyNTMsLTIxLjUgMjEuNSwtMjEuNXpNNDMsNjQuNXYxNC4zMzMzM2gxNC4zMzMzM3YtMTQuMzMzMzN6TTkzLjE2NjY3LDY0LjVoNDN2MjguNjY2NjdoLTE0LjMzMzMzdi0xNC4zMzMzM2gtMjguNjY2Njd6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4='
            />
            <span>Email:</span> {data.email}
          </h2>
          <h2>
            <img
              alt='svgImg'
              src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzgwODA4MCI+PHBhdGggZD0iTTg2LDE1LjA0NzJsLTc4LjgzMzMzLDcwLjk1MjhoMjEuNXY2NC41aDQzdi00M2gyOC42NjY2N3Y0M2g0M3YtNjQuNWgyMS41eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+'
            />
            <span>Address:</span> {data.city} ,{data.state} - {data.zip}
          </h2>
          <h2>
            <img
              alt='svgImg'
              src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzgwODA4MCI+PHBhdGggZD0iTTY0LjUsMjEuNXY3LjE2NjY3aC0zNS44MzMzM2MtNy45MTkxNywwIC0xNC4zMzMzMyw2LjQxNDE3IC0xNC4zMzMzMywxNC4zMzMzM3Y0M2MwLDcuOTA0ODMgNi40Mjg1LDE0LjMzMzMzIDE0LjMzMzMzLDE0LjMzMzMzaDExNC42NjY2N2M3LjkwNDgzLDAgMTQuMzMzMzMsLTYuNDI4NSAxNC4zMzMzMywtMTQuMzMzMzN2LTQzYzAsLTcuOTE5MTcgLTYuNDE0MTcsLTE0LjMzMzMzIC0xNC4zMzMzMywtMTQuMzMzMzNoLTM1LjgzMzMzdi03LjE2NjY3ek04Niw3MS42NjY2N2MzLjk1NiwwIDcuMTY2NjcsMy4yMTA2NyA3LjE2NjY3LDcuMTY2NjdjMCwzLjk1NiAtMy4yMTA2Nyw3LjE2NjY3IC03LjE2NjY3LDcuMTY2NjdjLTMuOTU2LDAgLTcuMTY2NjcsLTMuMjEwNjcgLTcuMTY2NjcsLTcuMTY2NjdjMCwtMy45NTYgMy4yMTA2NywtNy4xNjY2NyA3LjE2NjY3LC03LjE2NjY3ek0xNC4zMzMzMywxMTAuNjc3NDF2MTguMzIyNTljMCw3LjkxOTE3IDYuNDE0MTcsMTQuMzMzMzMgMTQuMzMzMzMsMTQuMzMzMzNoMTE0LjY2NjY3YzcuOTE5MTcsMCAxNC4zMzMzMywtNi40MTQxNyAxNC4zMzMzMywtMTQuMzMzMzN2LTE4LjMyMjU5Yy00LjIzNTUsMi40NjUzMyAtOS4wODczMywzLjk4OTI2IC0xNC4zMzMzMywzLjk4OTI2aC0xMTQuNjY2NjdjLTUuMjQ2LDAgLTEwLjA5NzgzLC0xLjUyMzkzIC0xNC4zMzMzMywtMy45ODkyNnoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=='
            />
            <span> Company :</span> {data.company_name}
          </h2>
          <h2>
            <img
              alt='svgImg'
              src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzgwODA4MCI+PHBhdGggZD0iTTM1LjgzMzMzLDIxLjVjLTcuODMzNjIsMCAtMTQuMzMzMzMsNi40OTk3MiAtMTQuMzMzMzMsMTQuMzMzMzN2MTAwLjMzMzMzYzAsNy44MzM2MiA2LjQ5OTcyLDE0LjMzMzMzIDE0LjMzMzMzLDE0LjMzMzMzaDEwMC4zMzMzM2M3LjgzMzYyLDAgMTQuMzMzMzMsLTYuNDk5NzIgMTQuMzMzMzMsLTE0LjMzMzMzdi01MC4xNjY2N2gtMTQuMzMzMzN2NTAuMTY2NjdoLTEwMC4zMzMzM3YtMTAwLjMzMzMzaDUwLjE2NjY3di0xNC4zMzMzM3pNMTAwLjMzMzMzLDIxLjV2MTQuMzMzMzNoMjUuNjk5MjJsLTY2LjU5OTYxLDY2LjU5OTYxbDEwLjEzNDExLDEwLjEzNDExbDY2LjU5OTYxLC02Ni41OTk2MXYyNS42OTkyMmgxNC4zMzMzM3YtNTAuMTY2Njd6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4='
            />
            <span>Website:</span> <a href={data.web}>{data.web}</a>
          </h2>
        </div>
      )}
    </div>
  );
};

export default User;
