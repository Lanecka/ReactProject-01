import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import './styleValid.css';

function Entry() {
  const [isEntry, setIsEntry] = useState();
  const redirect = useNavigate();

  const chooseValid = () => {
    setIsEntry(!isEntry)
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

  let b = JSON.parse(localStorage.getItem('users'))

  const onSubmit = (data) => {
    b.forEach(element => {
      if (data.login === element.login && data.password === element.password) {
        redirect('/')
      } else {
        alert('Логин или пароль неверный!')
      }
    });
    reset();
  }

  return (
    <form className="formValid" onSubmit={handleSubmit(onSubmit)}>
      <Link to='/registration' className="formValid__switch">
        <button onClick={chooseValid} className="formValid__switch-button">
          Зарегистрироваться
        </button>
      </Link>
      <h2 className="formValid__title">ВОЙТИ</h2>
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
      <div className="formValid__buttons">
        <button
          onClick={handleSubmit}
          type="submit"
          disabled={!isValid}
          className="formValid__buttons-click"
        >
          Войти
        </button>
      </div>
    </form>
  )
}

export default Entry;