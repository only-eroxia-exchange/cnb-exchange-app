import styled from 'styled-components'

/* <-- shell.tsx start --> */
export const View = styled.div`
  padding: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 910px;
  margin-left: auto;
  margin-right: auto;

  & form {
    display: flex;
    flex-direction: column;
    width: 350px;
    margin-top: 15px;
  }
`
/* <-- shell.tsx end --> */

/* <-- converter.tsx start --> */
export const Title = styled.div`
  font-size: 25px;
  font-weight: 500;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 10px;

  input {
    border-top-left-radius: 4px 4px;
    border-bottom-left-radius: 4px 4px;
    font-size: 16px;
    height: 42px;
    width: 140px;
    border: 1px solid #e7e5e4;
    border-right: 0;
    outline: none;
    padding: 0 10px;
  }

  select {
    border-top-right-radius: 8px 8px;
    border-bottom-right-radius: 8px 8px;
    font-size: 16px;
    height: 42px;
    width: 100%;
    border: 1px solid #e7e5e4;
    border-left: 0;
    outline: none;
    padding: 0 5px;
  }
`
/* <-- converter.tsx end --> */

/* <-- list-rates.tsx start --> */
export const Rates = styled.div`
  width: 100%;
  margin-top: 10px;
  border-radius: 4px;
  padding: 35px;
  border: 1px solid #e7e5e4;
`

export const List = styled.div`
  width: 100%;
  border-radius: 4px;
  margin-top: 15px;
  border: 1px solid #e7e5e4;

  div:last-child {
    border-bottom: 0;
  }
`

export const ListItem = styled.div`
  padding: 19px 0;
  border-bottom: 1px solid #e7e5e4;
  display: flex;
  justify-content: space-between;

  div:first-child {
    font-size: 18px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: flex-end;
  }

  div {
    padding: 0 12px;
    color: rgba(0, 0, 0, 0.6);
  }
`

export const Amount = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  font-weight: 400;
  margin-left: 3px;
`

export const RateItem = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  font-weight: 600;
`

export const Powered = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  color: #6e6f71;
  margin-top: 1em;

  img {
    margin-left: 2px;
  }
`

export const PoweredBy = styled.span`
  position: relative;
  top: 2px;
`
/* <-- list-rates.tsx end --> */
