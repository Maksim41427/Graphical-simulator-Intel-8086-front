// import * as yup from "yup";
// import Input from "components/ui/Input";
// import Modal from "components/ui/Modal";
// import { AuthService } from "services/auth.service";
// import * as yup from "yup";
// import Input from "components/ui/Input";
// import Modal from "components/ui/Modal";
// import { AuthService } from "services/auth.service";
import type { FC } from "react";
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import { login } from "store/user/userSlice";
// import { setTokenToLocalStorage } from "helpers/localstorage.helper";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { TfiClose } from "react-icons/tfi";
// import { toast } from "react-hot-toast";
// import { useAppDispatch } from "store/hooks/hooks";
// import { useAuth } from "hooks/useAuth";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useLoginMutation } from "api/auth.api";

// type Form = {
//   email: string;
//   password: string;
// };

const Login: FC = () => {
  //   const schema = yup.object({
  //     email: yup
  //       .string()
  //       .required("Поле «Почта» обязательна")
  //       .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Почта не валидна"),
  //     password: yup.string().required("Поле «Пароль» обязательна"),
  //   });

  //   const {
  //     register,
  //     reset,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm({
  //     resolver: yupResolver(schema),
  //     mode: "onChange",
  //   });

  //   const navigate = useNavigate();
  //   const dispatch = useAppDispatch();

  //   const [doLogin, error] = useLoginMutation();

  //   const onSubmit: SubmitHandler<Form> = async (data) => {
  //     const { email, password } = data;

  //     // const response = await AuthService.login({ email, password });

  //     const loginData = {
  //       email: email,
  //       password: password,
  //     };

  //     const response = await doLogin(loginData);

  //     console.log("login response");
  //     console.log(response);

  //     if (response?.data) {
  //       // setTokenToLocalStorage("token", response.token);

  //       dispatch(login(response?.data));

  //       toast.success("Вы авторизированы");
  //       navigate("/");
  //     }
  //     // try {
  //     // } catch (error) {}

  //     if (error?.isError) {
  //       console.log("login error");
  //       console.log(error);
  //     }

  //     reset();
  //   };


  // return (
  //   <>
  //     {!isAuth ? (
  //       <Modal>
  //         <header className="flex justify-between items-center">
  //           <h3>Добро пожаловать</h3>
  //           <button onClick={() => navigate(-1)}>
  //             <TfiClose />
  //           </button>
  //         </header>
  //         <form
  //           className="flex flex-col gap-10"
  //           onSubmit={handleSubmit(onSubmit)}
  //         >
  //           <Input
  //             id="email"
  //             type="email"
  //             placeholder="Почта"
  //             register={{ ...register("email") }}
  //             errorMessage={errors.email?.message}
  //           />
  //           <Input
  //             id="password"
  //             type="password"
  //             placeholder="Пароль"
  //             register={{ ...register("password") }}
  //             errorMessage={errors.password?.message}
  //           />
  //           <div className="flex flex-col gap-[30px] items-center ">
  //             <input type="submit" value="Войти" className="btnGradient" />
  //             <p className="text-center">
  //               У вас нет аккаунта ?{" "}
  //               <Link to="/register" className="text-blue">
  //                 Зарегистрируйтесь
  //               </Link>
  //             </p>
  //           </div>
  //         </form>
  //       </Modal>
  //     ) : (
  //       <Navigate to="/profile" replace={true} />
  //     )}
  //   </>
  // );

  {/* <div data-layer="Group 1" className="Group1" style={{width: 868, height: 584, position: 'relative'}}>
    <div data-svg-wrapper data-layer="Rectangle 2" className="Rectangle2" style={{left: 0, top: 0, position: 'absolute'}}>
      <svg width="868" height="584" viewBox="0 0 868 584" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M867 1V583H1V1H867Z" fill="#D9D9D9" stroke="#24E916" stroke-width="2"/>
      </svg>
    </div>
    <div data-layer="Вход" style={{width: 116, height: 58, left: 376, top: 44, position: 'absolute', color: 'black', fontSize: 48, fontFamily: 'Inter', wordWrap: 'break-word'}}>Вход</div>
    <div data-layer="Логин" style={{width: 108, height: 44, left: 182, top: 150, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inter', wordWrap: 'break-word'}}>Логин</div>
    <div data-layer="Пароль" style={{width: 132, height: 44, left: 182, top: 282, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inter', wordWrap: 'break-word'}}>Пароль</div>
    <div data-layer="Rectangle 3" className="Rectangle3" style={{width: 504, height: 52, left: 182, top: 194, position: 'absolute', background: 'white'}} />
    <div data-layer="Rectangle 4" className="Rectangle4" style={{width: 504, height: 52, left: 182, top: 326, position: 'absolute', background: 'white'}} />
    <div data-layer="Rectangle 5" className="Rectangle5" style={{width: 504, height: 52, left: 182, top: 416, position: 'absolute', background: '#47FD40', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '1px #10720D solid'}} />
    <div data-layer="Rectangle 6" className="Rectangle6" style={{width: 504, height: 52, left: 182, top: 492, position: 'absolute', background: '#47FD40', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '1px #10720D solid'}} />
    <div data-layer="Зарегистрироваться" style={{width: 370, height: 44, left: 248, top: 416, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inter', wordWrap: 'break-word'}}>Зарегистрироваться</div>
    <div data-layer="Войти" style={{width: 106, height: 44, left: 380, top: 492, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inter', wordWrap: 'break-word'}}>Войти</div>
  </div> */}

  //  const isAuth = useAuth();

  return (
    <div id="login" style={{position:'relative'}}>
        <svg width="868" height="584" viewBox="0 0 868 584" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M867 1V583H1V1H867Z" fill="#D9D9D9" stroke="#24E916" stroke-width="2"/>
        </svg>
        <div style={{width: 116, height: 58, left: 376, top: 44, position: 'absolute', color: 'black', fontSize: 48, fontFamily: 'Inter'}}>Вход</div>
        <div style={{width: 108, height: 44, left: 182, top: 150, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inter'}}>Логин</div>
        <div style={{width: 132, height: 44, left: 182, top: 282, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inter'}}>Пароль</div>
        <input type="text" className="Логин" placeholder="Введите логин" style={{width: 504, height: 52, left: 182, top: 194, position: 'absolute'}} />
        <input type="password" className="Пароль" placeholder="Введите пароль" style={{width: 504, height: 52, left: 182, top: 326, position: 'absolute'}} />
        <button type="submit" className="Зарегистрироваться" style={{width: 504, height: 52, left: 182, top: 416, position: 'absolute', background: '#47FD40', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '1px #10720D solid'}}>Зарегистрироваться</button>
        <button type="submit" className="Войти" style={{width: 504, height: 52, left: 182, top: 492, position: 'absolute', background: '#47FD40', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '1px #10720D solid'}}>Войти</button>
    </div>
  );
};

export default Login;
