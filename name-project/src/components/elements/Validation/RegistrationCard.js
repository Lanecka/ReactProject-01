import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import './styleValid.css';

// const USERS = 'users'

function Registration() {

  const [isReg, setIsReg] = useState();
  // const [usersArr, setUsersArr] = useState(JSON.parse(localStorage.getItem(USERS)) || []);

  const redirect = useNavigate();

  // localStorage.setItem(USERS, JSON.stringify(usersArr));

  const chooseValid = () => {
    setIsReg(!isReg)
  }

  const {
    register,
    formState: {
      errors, isValid
    },
    handleSubmit,
    reset
  } = useForm({
    mode: "onBlur"
  }) 

  // const ls = (user) => {
  //   setUsersArr([...usersArr, { ...user }]) 
  // }

  // const onSubmit = (user) => {
  //   ls(user)
  //   reset()
  // }


  // Первичный вариант, запоминает одного пользователя
  const USERS = 'users'
  let usersArr = []

  const onSubmit = (user) => {
    usersArr.push(user);
    localStorage.setItem(USERS, JSON.stringify(usersArr))
    let usersArrqwe = localStorage.getItem(USERS)
    usersArr = JSON.parse(usersArrqwe)
    redirect('/entry')
    reset()
  }


  return (
    <form className="formValid" onSubmit={handleSubmit(onSubmit)}>
      <Link to='/entry' className="formValid__switch">
        <button onClick={chooseValid} className="formValid__switch-button">
          Авторизоваться
        </button>
      </Link>
      <h2 className="formValid__title">РЕГИСТРАЦИЯ</h2>
      <input
        {...register('login', {
          required: "Поле не должно быть пустым",
          minLength: {
            value: 4,
            message: "Логин должен содержать не менее 4-х символов",
          }
        })}
        className="formValid__input"
      />
      <div className="formValid__error">
        {errors?.login && <p>{errors?.login?.message || "Error"}</p>}
      </div>
      <input
        {...register('password', {
          required: "Поле не должно быть пустым",
          minLength: {
            value: 4,
            message: "Пароль должен содержать не менее 4-х символов"
          }
        })}
        className="formValid__input"
      />
      <div className="formValid__error">
        {errors?.password && <p>{errors?.password?.message || "Error"}</p>}
      </div>
      <div className="formValid__checkbox">
        <input
          className="highload-checkbox"
          type="checkbox"
          id="checkbox"
          name="checkbox"
          value="agree"
        />
        <label htmlFor="checkbox">Я согласен получать обновления на почту</label>
      </div>
      <div className="formValid__buttons"></div>
      <div to='/entry' className="formValid__buttons">
        <button
          onClick={handleSubmit}
          type="submit"
          disabled={!isValid}
          className="formValid__buttons-click"
        >Зарегистрироваться</button>
      </div>
    </form>
  )
}

export default Registration;