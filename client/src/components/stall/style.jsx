import styled from 'styled-components';

const mainColor = '#08bb7a';

export const Container = styled.div`
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(12, 16, 31, 0.4);
  padding: 50px;
  max-width: 100%;
  width: 1000px;

  @media screen and (max-width: 768px) {
    width: 300px;
    padding: 20px;
    margin-bottom: 10rem;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  padding: 10px;
  width: 100%;

  th {
    background: #c1c1c1;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 15px;
    text-align: left;
  }

  td ul {
    list-style: none;
    display: flex;
  }

  td ul li:first-child {
    padding-right: 15px;
  }

  .edit {
    background-color: ${mainColor};
    border: 0;
    border-radius: 2px;
    color: #f4f4f4;
    cursor: pointer;
    font-size: 16px;
    padding: 5px 10px;
  }

  img {
    width: 40px;
    height: 40px;
  }

  @media screen and (max-width: 768px) {
    border: 0;

    th:nth-of-type(8),
    td:nth-of-type(8) {
      display: none;
    }

    td:last-child {
      text-align: center;
    }

    tbody tr.priority-200 td:first-of-type {
      border-left: none;
    }

    thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    tr {
      border-bottom: 3px solid #ddd;
      display: block;
      margin-bottom: 0.625em;
    }

    td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 1rem;
      text-align: right;

      &:last-child {
        border-bottom: 0;
      }

      &::before {
        content: attr(data-label);
        float: left;
        font-weight: bold;
        text-transform: uppercase;
      }
    }
  }
`;

export const Card = styled.div`
  background-color: #fff;
  border: 3px solid #dce7ff;
  border-radius: 3px;
  width: 700px;
  margin-top: 3rem;
  padding: 20px;
  line-height: 2;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    width: auto;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
