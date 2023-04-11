import React, { useRef, useState } from 'react'
import style from './Second.module.css'

function Second () {
  let [firstname, setFirstName] = useState('')
  let [lastname, setLastName] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [arr, setArr] = useState(
    JSON.parse(localStorage.getItem('userData')) || []
  )
  let [refer, setRefer] = useState('')

  const firstRef = useRef('')

  function handleDelete (firstName) {
    setArr(arr.filter(ele => ele.firstName != firstName))
  }
  function handleSubmit (event) {
    event.preventDefault()
    let newData = [
      ...arr,
      {
        firstName: firstname,
        lastName: lastname,
        Email: email,
        Password: password
      }
    ]
    setArr(newData)
    localStorage.setItem('userData', JSON.stringify(newData))
    setRefer(firstname)
  }
  return (
    <div>
      <section className={style.mainDiv}>
        <div className={style.firstSection}>
          <div className={style.firstHalf}>
            <div className={style.form}>
              <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input
                  type='text'
                  value={firstname}
                  onChange={e => setFirstName(e.target.value)}
                />
                <label>Last Name</label>
                <input
                  type='text'
                  value={lastname}
                  onChange={e => setLastName(e.target.value)}
                />
                <label>Email</label>
                <input
                  type='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                  type='password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <br />
                <button className={style.btnn}>Register</button>
              </form>
            </div>
          </div>
          <div className={style.secondHalf}>
            <table className={style.table}>
              <thead>
                <tr>
                  <th className={style.th}>First Name</th>
                  <th className={style.th}>Last Name</th>
                  <th className={style.th}>Email</th>
                  <th className={style.th}>Password</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={style.td}>{firstname}</td>
                  <td className={style.td}>{lastname}</td>
                  <td className={style.td}>{email}</td>
                  <td className={style.td}>{password}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='secondSection'>
          <table className='table'>
            <thead>
              <tr>
                <th className={style.th}>srno</th>
                <th className={style.th}>First Name</th>
                <th className={style.th}>Last Name</th>
                <th className={style.th}>Email</th>
                <th className={style.th}>Delete</th>
                <th className={style.th}>Update</th>
              </tr>
            </thead>
            <tbody>
              {arr.map((users, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td className={style.td}>{index + 1}</td>
                      <td className={style.td}>{users.firstName}</td>
                      <td className={style.td}>{users.lastName}</td>
                      <td className={style.td}>{users.Email}</td>

                      <td className={style.td}>
                        <button
                          className={style.delete}
                          onClick={() => handleDelete(users.firstName)}
                        >
                          delete
                        </button>{' '}
                      </td>
                      <td className={style.td}>
                        <button
                          className={style.edit}
                          onClick={() => handleDelete(index)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  </>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default Second
