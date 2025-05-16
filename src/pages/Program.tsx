// import * as yup from "yup";
// import Input from "components/ui/Input";
// import Modal from "components/ui/Modal";
// import TextArea from "components/ui/TextArea";
import { createRef, type FC } from "react";// import { ChangeEvent, FC, useRef, useState } from "react";
// import { RiImageEditFill } from "react-icons/ri";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { TfiClose } from "react-icons/tfi";
// import {
//   useAddProjectImageMutation,
//   useCreateProjectMutation,
// } from "api/project.api";
// import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
// import { useNavigate } from "react-router";
// import { useUpdateRoleMutation } from "api/api";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { openCreate } from "store/ui/ui.slice";
import { Table } from "react-bootstrap";

// type Form = {
//   imageProject: any;
//   title: string;
//   client: string;
//   description: string;
// };

// const CreateProject: FC = () => {
//   //Валидация
//   const schema = yup.object({
//     title: yup.string().required("Поле «Название» обязательно"),
//     client: yup.string().required("Поле «Клиент» обязательно"),
//     description: yup.string().required("Поле «Описание» обязательно"),
//     imageProject: yup.object(),
//   });
//   //React-hook-form
//   const {
//     register,
//     reset,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

//   const user = useAppSelector((state) => state.user.user);

//   //const navigate = useNavigate();

//   // Через новый АПИ
//   const [createProject] = useCreateProjectMutation();
//   const [updateRole] = useUpdateRoleMutation();
//   const [addProjectImage] = useAddProjectImageMutation();

//   // --- ДЛЯ КАРТИНКИ ---
//   //Сюда вставляется фото
//   const [selectImage, setSelectImage] = useState<File | undefined>();

//   const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     setSelectImage(file);
//   };

//   const dispatch = useAppDispatch();
//   // --- ДЛЯ КАРТИНКИ ---
//   const onSubmit: SubmitHandler<Form> = async (data) => {
//     const { title, client, description } = data;

//     const postData = {
//       title: title,
//       client: client,
//       description: description,
//       userId: user?.id,
//     };
//     dispatch(openCreate(false));
//     return createProject(postData)
//       .then((response) => {
//         const projectId = response?.data?.id;
//         const formData = new FormData();

//         if (selectImage) {
//           formData.append("file", selectImage);
//         }

//         const addProjectImageData = {
//           projectId: projectId,
//           data: formData,
//         };

//         // ВЫДАЧА РОЛИ АДМИНА (временно)
//         // const rolePatch = {
//         //   id: user?.id,
//         //   patch: { role: "admin" },
//         // };
//         // updateRole(rolePatch);
//         addProjectImage(addProjectImageData);
//       })
//       .then(() => navigate("/profile"))
//       .then(() => reset());
//   };

//   //Реф на кнопку загрузки проекта
//   const refIconProject = useRef<HTMLInputElement | null>(null);
//   //Функция клика по другому компоненту рефа
//   const handleIconProject = () => refIconProject?.current?.click();

//   return (
//     <Modal text="Создать проект">
//       <header className="flex justify-between items-center">
//         <h3>Создать проект</h3>
//         <button onClick={() => dispatch(openCreate(false))}>
//           <TfiClose />
//         </button>
//       </header>
//       <form
//         className="flex flex-col gap-[50px]"
//         onSubmit={handleSubmit(onSubmit)}
//         // fetcher={async (action) => {
//         //   const response = await fetch(action);
//         //   console.log("response:");
//         //   console.log(response);
//         // }}
//       >
//         <div className="flex flex-col gap-2">
//           <p className="text-gray">Иконка проекта: </p>
//           <span
//             className="flex items-center gap-3 text-xl cursor-pointer"
//             onClick={(): void => handleIconProject()}
//           >
//             <RiImageEditFill />
//             {selectImage ? (
//               <div className="flex flex-col gap-2">
//                 <span className="text-green-500">Фото загружено</span>
//                 <span className="text-sm text-gray">{selectImage.name}</span>
//               </div>
//             ) : (
//               <span>Загрузить фото</span>
//             )}
//           </span>
//           <input
//             {...register("imageProject")}
//             type="file"
//             className="hidden"
//             onChange={handleImage}
//             ref={refIconProject}
//           />
//         </div>
//         <Input
//           id="title"
//           placeholder="Название"
//           type="text"
//           register={{ ...register("title") }}
//           errorMessage={errors.title?.message}
//         />
//         <Input
//           id="client"
//           placeholder="Клиент"
//           type="text"
//           register={{ ...register("client") }}
//           errorMessage={errors.client?.message}
//         />
//         <TextArea
//           id="description"
//           placeholder="Описание"
//           register={{ ...register("description") }}
//           errorMessage={errors.description?.message}
//         />
//         <div className="flex gap-5 justify-center xl:gap-[33px] xl:justify-end">
//           {/* <Button text="Назад" style="hidden xl:btn" action="/" /> */}
//           <button type="submit" className="btnGradient">
//             Создать
//           </button>
//         </div>
//       </form>
//     </Modal>
//   );
// };

const Program: FC = () => {

  
  // console.log(Data);
  // Data.style = "border: 2px black solid";
  // if (Data) {console.log(Data?.id)}

  const config = {    
    duration: 11000/2, // время анимации в миллисекундах
    easing: "ease-in-out", // поведение анимации(замедление в начале и в конце)
    iterations: 1,
  };

  const frames1 = [{ //2
      marginTop: "217px", //left: 173, top: 481-243 454
      marginLeft: "157px",
      background: "#15ff43",      
      offset: 0    
  },{      
      marginTop: "217px",
      marginLeft: "100px",//93 120
      background: "#15ff43",
      offset: 0.5    
  },{      
      marginTop: "115px",
      marginLeft: "100px",
      background: "#15ff43",   
      offset: 1    
  }];

  const frames2 = [{ //5
      marginTop: "267px", //left: 173, top: 481-243 454
      marginLeft: "157px",
      background: "#15ff43",      
      offset: 0    
  },{      
      marginTop: "267px",
      marginLeft: "100px",
      background: "#15ff43",
      offset: 0.2    
  },{      
      marginTop: "397px",
      marginLeft: "100px",
      background: "#15ff43",   
      offset: 0.4    
  },{      
      marginTop: "397px",
      marginLeft: "420px",
      background: "#15ff43",    
      offset: 0.6    
  },{      
      marginTop: "360px",
      marginLeft: "420px",
      background: "#15ff43",   
      offset: 0.8    
  },{      
      marginTop: "360px",
      marginLeft: "473px",
      background: "#15ff43",   
      offset: 1    
  }];

  const frames3 = [{ //7
      marginTop: "267px", //left: 173, top: 481-243 454
      marginLeft: "157px",
      background: "#15ff43",      
      offset: 0    
  },{      
      marginTop: "267px",
      marginLeft: "100px",//93 120
      background: "#15ff43",
      offset: 0.14    
  },{      
      marginTop: "397px",
      marginLeft: "100px",
      background: "#15ff43",   
      offset: 0.28    
  },{      
      marginTop: "397px",
      marginLeft: "420px",
      background: "#15ff43",    
      offset: 0.42    
  },{      
      marginTop: "258px",
      marginLeft: "420px",
      background: "#15ff43",   
      offset: 0.56    
  },{      
      marginTop: "258px",
      marginLeft: "703px",
      background: "#15ff43",   
      offset: 0.7    
  },{      
      marginTop: "322px",
      marginLeft: "703px",
      background: "#15ff43",   
      offset: 0.84    
  },{      
      marginTop: "322px",
      marginLeft: "1030px",
      background: "#15ff43",   
      offset: 1    
  }];

  const frames4 = [{ //5
      marginTop: "267px", //left: 173, top: 481-243 454
      marginLeft: "157px",
      background: "#15ff43",      
      offset: 0    
  },{      
      marginTop: "397px",
      marginLeft: "420px",
      background: "#15ff43",
      offset: 0.2    
  },{      
      marginTop: "397px",
      marginLeft: "420px",
      background: "#15ff43",   
      offset: 0.4    
  },{      
      marginTop: "397px",
      marginLeft: "420px",
      background: "#15ff43",    
      offset: 0.6    
  },{      
      marginTop: "360px",
      marginLeft: "420px",
      background: "#15ff43",   
      offset: 0.8    
  },{      
      marginTop: "360px",
      marginLeft: "473px",
      background: "#15ff43",   
      offset: 1    
  }];
  

  const onSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const Data = document.getElementById("Data");
    const animetion = Data?.animate(frames3, config);
    console.log(Data);
    console.log(animetion);
    
    animetion?.play();

  };

  

  const rows = [
    { address: "000001", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000003", mark: "Alice", command: "MOV", arg1:"C", arg2:"D" },
    { address: "000002", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000004", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000005", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000006", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000007", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000008", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000009", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000010", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000011", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000012", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000013", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000014", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000015", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000016", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000017", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000018", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000019", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000020", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000021", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000022", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000023", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000024", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000025", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000026", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000027", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000028", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000029", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000030", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000031", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000032", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000033", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000034", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000035", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000036", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000037", mark: "John", command: "MOV", arg1:"A", arg2:"B" },
    { address: "000038", mark: "John", command: "MOV", arg1:"A", arg2:"B" }
  ]
  
  // const onSubmit = (e: SubmitEvent) => {
  //   e.preventDefault();
  //   e.stopPropagation();

  //   // Be aware, that input.current will be set after the JSX has been transformed,
  //   // so TypeScript can't know if it's non-null at this point.
  //   // But as long as this function is not called before the return statement, input.current will not be null here.
  //   if (input.current?.value) {
  //     console.log(input.current.value);
  //     input.current.value = "";
  //   }
  // };
  return (
    <div id="Desktop5" style={{ left: 0, top: 0, position: 'absolute', background: 'white', overflow: 'hidden', zIndex: 0}}>

      <div id="Data" style={{zIndex: 5, width: 15, height: 15, right: 0, top: 0}}/>

      <form id="NOT" onSubmit={onSubmit} style={{ left: 100, top: 500, position: 'absolute'}}><button id="NOT">Send</button></form>
      <img data-layer="image 1" className="Image1" style={{width: 40, height: 40, left: 20, top: 20, position: 'absolute'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAStSURBVHgB7Zzbb9tUHMe/tnOxkzSXlhS6SxmFtQU6jT4MFUZfQDB4m4BHXvgLAKH1ASR4hXUS+wuQgL2CeOOFB6QhIfHQFYRWOg2YEK1ou9wT52qbY0MlSNwuyc8JTfL7RJGrHDvu+eT463OOEwMMwzCji9T8wuqlTyx4iCVZKMNAVi6jIhniLxP9RBFV1Cw/YqYqlr6fA5J88Y0PX7slSZIn9fS57lRRoIVVsfS19SaGYaBcKjvLZspoYE/R0ZBMhEIaAn4F/aRSbUCvVFFDCZNmeB6W78oHb3/6nihaF0+yRFdDoUgIc2fnMBYbQzsUcgVs/rDpLJvJyVVH3sz0ccw8dBxqMIB+Uq3VcPvXLfz2+zbySg1azXdBUSzto0sfr7y1+voNcRCSJB7YAqPxKGLjMbSDOBycbdwoSw1oqopHZk5ganLCWbefWJbwI1Jj924GlUoNkWjEX8wXn27I/neurlx7983L2AQBGT3GzjxVDTgtr9/ybOx9amoQgYCCmlHH0nNPYWp6SlMk6ZW6ZX55deWzOSG563+svZA7YhimiWLRPXPHE9FDtx2LRUQ8zaNeqyO9k55vwLyyunLtfVEkDufOM3EgBRaLOm78dAvZQqml7OKF5Xtun5iIY+HcAjbWNrCztfMiJLPrTOz5IdwLDMNErlBEOpNrebZLYiKBM0+esTPRJ5TtZ+IsOmQgBXqF3cugZuJIC7TZz8REMgFZkvczcREugww3Rl6gzX4mJo8lRbcHdiZeFpm4aI+j7rUtC/yHbjORBf6LbjKRBTbRaSayQBc6yUQWeADtZiILPAQnE59dwtTJB0QmQmSi9UXzOgM5lFMUGbFoRAxcez85MRYfw8yjDyOXyUMv6o81lw+kwEg4hMXH51wnE3pB0JnNCUAXj2YGuAWGcRTwJANlUSHlgKl6WTxqYupIL1f+ntzsM/Y+y9WqeIrZ6KAKr/GkBaqairC4DJDeTbdI0iwFJb2MX+5sOZObIdX7ShyG/cHdvvMHKuUaZqdPwWs8EegP+PHg6VPIZQvIpbL/KUuYmrispDvXJP7cS/WkFRxGtS4uJ5UqmIjHcfb0HLzGswwcnxzH4tITuLl+E9m9DOr1htMaVdECk2YIWVSh66IyegX9RA0GMXPiJM7NL2DqviS8xjOBsiw7w5/zz5/HKMEdaSIskAgLJMICibBAIiyQCAskwgKJdNyRTuezGGbGo/GO1u9Y4Dc/fo9h5uVnXuhofW6BRLoaCx9LTuDVl5adL0wOA9tilujzr65jezeFTuGTCBEWSIQFEmGBRFggERZIhAUS8fzC+vUdHGmW74eneC4wPJDfdegez6s7296vw4YGzwVGRqwF8kmECAskwgKJsEAi3A8kwv1AItwPJML9QCJ8EiHCAomwQCIskAj3A4lwP5AI9wOJcD+QCJ9EiLBAIiyQCAskwgKJuJ4zDdNAKV868IaJdaOB3XQO1v9wQ8VecDeVc+pkk8/kW8qL+aLjxA1XgXpBx8b6hvttPcVLGfGGX3+3hoDS3xvK9op6w3DqZLP27VpLuX1vBtuJG+4tUGyQz+ZdN8Ak0BA7tD+1YSSTyoBhGIZpj78At8+2fQVlPYwAAAAASUVORK5CYII=" />
      <img data-layer="image 2" className="Image2" style={{width: 40, height: 40, left: 70, top: 20, position: 'absolute'}} src="data:image/png;base64,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" />
      <img data-layer="image 3" className="Image3" style={{width: 40, height: 40, left: 120, top: 20, position: 'absolute'}} src="data:image/png;base64,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"/>


      <div className="Heder RAM"  style={{width: 494, height: 46, right: 0, top: 1, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 28, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', background: '#D9D9D9', border: '5px #EDEDED solid'}}>RAM</div>
      <div className="Bodi RAM" style={{width: 500, height: 689, right: 0, top: 54, position: 'absolute', overflowY: "auto", border: '2px black solid'}}>
        <Table >
          <thead style={{ position: "sticky", top: "0", background: '#D9D9D9' }}>
            <tr>
              <th>Адрес</th>
              <th>Метка</th>
              <th>Команда</th>
              <th>Arg 1</th>
              <th>Arg 2</th>
            </tr>
          </thead>
          
          <tbody style={{ background: "white" }}>
            {rows.map((row) => (
              <tr key={row.address} style={{border: '2px black solid'}}>
                <td style={{border: '2px black solid'}}>{row.address}</td>
                <td><input type="text" style={{width: 218, textAlign: 'right', border: '2px black solid'}} defaultValue ={row.mark}/></td>
                <select id="command" defaultValue ={row.command}>
                  <option disabled selected>----</option>
                  <option value="MOV">MOVT</option>
                </select>
                <td><input type="text" style={{width: 50, textAlign: 'center', border: '2px black solid'}} defaultValue ={row.arg1}/></td>
                <td><input type="text" style={{width: 50, textAlign: 'center', border: '2px black solid'}} defaultValue ={row.arg2}/></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>


      <div className="H" style={{width: 72, height: 26, left: 473, top: 280, position: 'absolute', textAlign: 'center', justifyContent: 'flex-end', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>H</div>
      <div className="L" style={{width: 72, height: 26, left: 545, top: 280, position: 'absolute', textAlign: 'center', justifyContent: 'flex-end', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>L</div>
      <div className="Ax" style={{width: 72, height: 26, left: 610, top: 306, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Ax</div>
      <div className="Bx" style={{width: 72, height: 26, left: 610, top: 332, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Bx</div>
      <div className="Cx" style={{width: 72, height: 26, left: 610, top: 358, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Cx</div>
      <div className="Dx" style={{width: 72, height: 26, left: 610, top: 384, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Dx</div>
      <div className="Si" style={{width: 72, height: 26, left: 610, top: 410, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Si</div>
      <div className="Di" style={{width: 72, height: 26, left: 610, top: 436, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Di</div>
      <div className="BP" style={{width: 72, height: 26, left: 610, top: 462, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>BP</div>
      <div className="SP" style={{width: 72, height: 26, left: 610, top: 488, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>SP</div>
      <div className="IP" style={{width: 72, height: 26, left: 610, top: 514, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>IP</div>
      <div className="REGt" style={{width: 72, height: 52, left: 509, top: 550, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 28, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>REG</div>
      <div className="REGf" style={{width: 144, height: 234, left: 473, top: 306, position: 'absolute'}}>
        <input type="text" placeholder="AH" id ="AH" style={{width: 72, height: 26, left: 0, top: 0, position: 'absolute', textAlign: 'center', background: 'white', border: '2px black solid'}} />
        <input type="text" placeholder="AL" id ="AL" style={{width: 72, height: 26, left: 72, top: 0, position: 'absolute', textAlign: 'center', background: 'white', border: '2px black solid'}} />
        <input type="text" placeholder="BH" id ="BH" style={{width: 72, height: 26, left: 0, top: 26, position: 'absolute', textAlign: 'center', background: 'white', border: '2px black solid'}} />
        <input type="text" placeholder="BL" id ="BL" style={{width: 72, height: 26, left: 72, top: 26, position: 'absolute', textAlign: 'center', background: 'white', border: '2px black solid'}} />
        <input type="text" placeholder="CH" id ="CH" style={{width: 72, height: 26, left: 0, top: 52, position: 'absolute', textAlign: 'center', background: 'white', border: '2px black solid'}} />
        <input type="text" placeholder="CL" id ="CL" style={{width: 72, height: 26, left: 72, top: 52, position: 'absolute', textAlign: 'center', background: 'white', border: '2px black solid'}} />
        <input type="text" placeholder="DH" id ="DH" style={{width: 72, height: 26, left: 0, top: 78, position: 'absolute', textAlign: 'center', background: 'white', border: '2px black solid'}} />
        <input type="text" placeholder="DL" id ="DL" style={{width: 72, height: 26, left: 72, top: 78, position: 'absolute', textAlign: 'center', background: 'white', border: '2px black solid'}} />
        <input type="text" placeholder="Si" id ="Si" style={{width: 144, height: 26, left: 0, top: 104, position: 'absolute', textAlign: 'center', background: 'white', border: '2px black solid'}} />
        <input type="text" placeholder="Di" id ="Di" style={{width: 144, height: 26, left: 0, top: 130, position: 'absolute', textAlign: 'center', background: 'white', border: '2px black solid'}} />
        <input type="text" placeholder="BP" id ="BP" style={{width: 144, height: 26, left: 0, top: 156, position: 'absolute', textAlign: 'center', background: 'white', border: '2px black solid'}} />
        <input type="text" placeholder="SP" id ="SP" style={{width: 144, height: 26, left: 0, top: 182, position: 'absolute', textAlign: 'center', background: 'white', border: '2px black solid'}} />
        <input type="text" placeholder="IP" id ="IP" style={{width: 144, height: 26, left: 0, top: 208, position: 'absolute', textAlign: 'center', background: 'white', border: '2px black solid'}} />
      </div>


      <div className ="SM" style={{width: 72, height: 52, left: 783, top: 129, position: 'absolute', textAlign: 'center', justifyContent: 'flex-end', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 28, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>SM</div>
      <input type="text" placeholder="SM" id ="SM" readOnly style={{width: 72, height: 104, left: 783, top: 179, position: 'absolute', textAlign: 'center', background: 'white', border: '2px black solid'}} />
      

      <div className="РФt" style={{width: 72, height: 29, left: 10, top: 115, position: 'absolute', justifyContent: 'flex-end', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 28, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>РФ</div>
      <div className="o" style={{width: 26, height: 26, left: 72, top: 80, position: 'absolute', textAlign: 'center', justifyContent: 'flex-end', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>o</div>
      <div className="s" style={{width: 26, height: 26, left: 102, top: 80, position: 'absolute', textAlign: 'center', justifyContent: 'flex-end', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>s</div>
      <div className="z" style={{width: 26, height: 26, left: 132, top: 80, position: 'absolute', textAlign: 'center', justifyContent: 'flex-end', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>z</div>
      <div className="c" style={{width: 26, height: 26, left: 162, top: 80, position: 'absolute', textAlign: 'center', justifyContent: 'flex-end', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>c</div>
      <div className="РФf" style={{width: 104, height: 26, left: 68, top: 111, position: 'absolute'}}>
        <input type="text" placeholder="o" id ="o" style={{width: 26, height: 26, left: 0, top: 0, position: 'absolute', textAlign: 'center', background: 'white', border: '2px black solid'}}/>
        <input type="text" placeholder="s" id ="s" style={{width: 26, height: 26,left: 30, top: 0, position: 'absolute', textAlign: 'center', background: 'white', border: '2px black solid'}}/>
        <input type="text" placeholder="z" id ="z" style={{width: 26, height: 26, left: 60, top: 0, position: 'absolute', textAlign: 'center', background: 'white', border: '2px black solid'}}/>
        <input type="text" placeholder="c" id ="c" style={{width: 26, height: 26,left: 90, top: 0, position: 'absolute', textAlign: 'center', background: 'white', border: '2px black solid'}}/>
      </div>


      <div className="АЛУ" style={{ zIndex: 1, width: 72, height: 52, left: 172, top: 330, position: 'absolute', textAlign: 'center', justifyContent: 'flex-end', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 28, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>АЛУ</div>
      <div data-svg-wrapper data-layer="Rectangle 27" className="Rectangle27" style={{ zIndex: 1, left: 172, top: 160, position: 'absolute'}}>
        <input placeholder="АЛУ" id="АЛУ" readOnly style={{zIndex: 1, width: 60, height: 26, left: 5, top: 77, position: 'absolute', textAlign: 'center', border: '0px white solid'}}/>
        <svg width="72" height="182" viewBox="0 0 72 182" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M71 180.48L1 150.325V29.9326L71 1.48633V180.48Z" fill="white" stroke="black" stroke-width="2"/>
        </svg>
      </div>

      <div data-layer="5" style={{width: 72, height: 52, left: 201, top: 445, position: 'absolute', textAlign: 'right', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 28, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>RK</div>
      <input type="text" placeholder="RK" id ="RK" readOnly style={{width: 125, height: 52, left: 273, top: 445, position: 'absolute', textAlign: 'center', background: 'white', border: '2px black solid'}} />
      

      <div className="SREGtp" style={{width: 26, height: 104, left: 567, top: 75, position: 'absolute'}}>
        <div className="SS" style={{width: 26, height: 26, left: 0, top: 0, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>SS</div>
        <div className="DS" style={{width: 26, height: 26, left: 0, top: 26, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>DS</div>
        <div className="CS" style={{width: 26, height: 26, left: 0, top: 52, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>CS</div>
        <div className="ES" style={{width: 26, height: 26, left: 0, top: 78, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>ES</div>
      </div>
      <div className="SREGt" style={{width: 80, height: 52, left: 480, top: 20, position: 'absolute', textAlign: 'center', justifyContent: 'flex-end', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 28, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>SREG</div>
      <div className="SREG" style={{width: 72, height: 104, left: 480, top: 75, position: 'absolute'}}>
        <input type="text" placeholder="SS" id ="SS" style={{width: 72, height: 26, left: 0, top: 0, position: 'absolute', textAlign: 'center', background: 'white', border: '2px black solid'}} />
        <input type="text" placeholder="DS" id ="DS" style={{width: 72, height: 26, left: 0, top: 26, position: 'absolute', textAlign: 'center', background: 'white', border: '2px black solid'}} />
        <input type="text" placeholder="CS" id ="CS" style={{width: 72, height: 26, left: 0, top: 52, position: 'absolute', textAlign: 'center', background: 'white', border: '2px black solid'}} />
        <input type="text" placeholder="ES" id ="ES" style={{width: 72, height: 26, left: 0, top: 78, position: 'absolute', textAlign: 'center', background: 'white', border: '2px black solid'}} />
      </div>
      




      {/* от АЛУ к РФ pattern="#[0-9A-F]{6}"*/}
      <div data-layer="Line 1" className="Line1" style={{width: 79, height: 0, left: 173, top: 481-243, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 2" className="Line2" style={{width: 339-243, height: 0, left: 93, top: 481-243, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 3" className="Line3" style={{width: 52, height: 0, left: 173, top: 454-243, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 4" className="Line4" style={{width: 312-243, height: 0, left: 120, top: 454-243, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 40" className="Line40" style={{width: 14.87, height: 0, left: 93, top: 148, position: 'absolute', transform: 'rotate(-20deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 41" className="Line41" style={{width: 14.87, height: 0, left: 120, top: 148, position: 'absolute', transform: 'rotate(-160deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>


      {/* от АЛУ к RK */}
      <div data-layer="Line 5" className="Line5" style={{width: 78, height: 0, left: 172, top: 598-337, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 6" className="Line6" style={{width: 157, height: 0, left: 93, top: 598-337, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 16" className="Line16" style={{width: 230, height: 0, left: 93, top: 755-337, position: 'absolute', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 7" className="Line7" style={{width: 52, height: 0, left: 172, top: 625-337, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 8" className="Line8" style={{width: 103, height: 0, left: 120, top: 625-337, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 15" className="Line15" style={{width: 294, height: 0, left: 120, top: 728-337, position: 'absolute', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 23" className="Line23" style={{width: 26, height: 0, left: 323, top: 781-337, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 24" className="Line24" style={{width: 26, height: 0, left: 350, top: 781-337, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 36" className="Line36" style={{width: 14.87, height: 0, left: 323, top: 776-337, position: 'absolute', transform: 'rotate(20deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 37" className="Line37" style={{width: 14.87, height: 0, left: 350, top: 776-337, position: 'absolute', transform: 'rotate(160deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 38" className="Line38" style={{width: 14.87, height: 0, left: 323, top: 770-337, position: 'absolute', transform: 'rotate(-20deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 39" className="Line39" style={{width: 14.87, height: 0, left: 350, top: 770-337, position: 'absolute', transform: 'rotate(-160deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>



      {/* от RK к REG и АЛУ */}
      <div data-layer="Line 30" className="Line30" style={{width: 91, height: 0, left: 414, top: 728-337, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 28" className="Line28" style={{width: 170, height: 0, left: 244, top: 638-337, position: 'absolute', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 27" className="Line27" style={{width: 170, height: 0, left: 244, top: 611-337, position: 'absolute', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>      
      <div data-layer="Line 29" className="Line29" style={{width: 52, height: 0, left: 414, top: 611-337, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 26" className="Line26" style={{width: 170, height: 0, left: 244, top: 559-337, position: 'absolute', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 25" className="Line25" style={{width: 170, height: 0, left: 244, top: 532-337, position: 'absolute', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>      
      <div data-layer="Line 46" className="Line46" style={{width: 14.87, height: 0, left: 249, top: 611-337, position: 'absolute', transform: 'rotate(110deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 47" className="Line47" style={{width: 14.87, height: 0, left: 249, top: 638-337, position: 'absolute', transform: 'rotate(-110deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 48" className="Line48" style={{width: 14.87, height: 0, left: 249, top: 532-337, position: 'absolute', transform: 'rotate(110deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 49" className="Line49" style={{width: 14.87, height: 0, left: 249, top: 559-337, position: 'absolute', transform: 'rotate(-110deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 31" className="Line31" style={{width: 90, height: 0, left: 350, top: 755-337, position: 'absolute', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>      
      <div data-layer="Line 34" className="Line34" style={{width: 35, height: 0, left: 440, top: 754-337, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 22" className="Line22" style={{width: 33, height: 0, left: 440, top: 624-243, position: 'absolute', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 21" className="Line21" style={{width: 33, height: 0, left: 440, top: 597-243, position: 'absolute', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 42" className="Line42" style={{width: 14.87, height: 0, left: 468, top: 596-242, position: 'absolute', transform: 'rotate(70deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 43" className="Line43" style={{width: 14.87, height: 0, left: 468, top: 624-243, position: 'absolute', transform: 'rotate(-70deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 44" className="Line44" style={{width: 14.87, height: 0, left: 462, top: 596-242, position: 'absolute', transform: 'rotate(110deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 45" className="Line45" style={{width: 14.87, height: 0, left: 462, top: 624-243, position: 'absolute', transform: 'rotate(-110deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>



      {/* от REG к SREG */}
      <div data-layer="Line 9" className="Line9" style={{width: 74, height: 0, left: 440, top: 280, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 65" className="Line65" style={{width: 124, height: 0, left: 440, top: 128, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 14" className="Line14" style={{width: 40, height: 0, left: 440, top: 128, position: 'absolute', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 10" className="Line10" style={{width: 93, height: 0, left: 414, top: 102, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 13" className="Line13" style={{width: 66, height: 0, left: 414, top: 102, position: 'absolute', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 58" className="Line58" style={{width: 14.97, height: 0, left: 474, top: 102, position: 'absolute', transform: 'rotate(69deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 59" className="Line59" style={{width: 14.97, height: 0, left: 474, top: 128, position: 'absolute', transform: 'rotate(-69deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 60" className="Line60" style={{width: 14.97, height: 0, left: 465.29, top: 102, position: 'absolute', transform: 'rotate(111deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 61" className="Line61" style={{width: 14.97, height: 0, left: 465.29, top: 128, position: 'absolute', transform: 'rotate(-111deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      
      
      
      {/* от SM к Ram */}
      <div data-layer="Line 32" className="Line32" style={{width: 162, height: 0, left: 862, top: 252, position: 'absolute', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 33" className="Line33" style={{width: 162, height: 0, left: 862, top: 279, position: 'absolute', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 52" className="Line52" style={{width: 14.87, height: 0, left: 1019, top: 252, position: 'absolute', transform: 'rotate(70deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 53" className="Line53" style={{width: 14.87, height: 0, left: 1019, top: 279, position: 'absolute', transform: 'rotate(-70deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>      


      {/* к SM */}
      <div data-layer="Line 54" className="Line54" style={{width: 247, height: 0, left: 536, top: 198, position: 'absolute', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 55" className="Line55" style={{width: 274, height: 0, left: 509, top: 225, position: 'absolute', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 62" className="Line62" style={{width: 40, height: 0, left: 509, top: 225, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 63" className="Line63" style={{width: 13, height: 0, left: 536, top: 198, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 56" className="Line56" style={{width: 14.97, height: 0, left: 777.71, top: 198, position: 'absolute', transform: 'rotate(69deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 57" className="Line57" style={{width: 14.97, height: 0, left: 777.71, top: 225, position: 'absolute', transform: 'rotate(-69deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>


      {/* к SM и Ram */}
      <div data-layer="Line 11" className="Line11" style={{width: 343, height: 0, left: 440, top: 252, position: 'absolute', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 12" className="Line12" style={{width: 257, height: 0, left: 440, top: 279, position: 'absolute', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 20" className="Line20" style={{width: 59, height: 0, left: 724, top: 279, position: 'absolute', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>      
      <div data-layer="Line 19" className="Line19" style={{width: 63, height: 0, left: 697, top: 279, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 64" className="Line64" style={{width: 36, height: 0, left: 724, top: 279, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 17" className="Line17" style={{width: 300, height: 0, left: 724, top: 316, position: 'absolute', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 18" className="Line18" style={{width: 328, height: 0, left: 697, top: 342, position: 'absolute', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 56" className="Line56" style={{width: 14.97, height: 0, left: 777.71, top: 252, position: 'absolute', transform: 'rotate(69deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 57" className="Line57" style={{width: 14.97, height: 0, left: 777.71, top: 279, position: 'absolute', transform: 'rotate(-69deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 50" className="Line50" style={{width: 14.87, height: 0, left: 1019, top: 316, position: 'absolute', transform: 'rotate(70deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>
      <div data-layer="Line 51" className="Line51" style={{width: 14.87, height: 0, left: 1019, top: 342, position: 'absolute', transform: 'rotate(-70deg)', transformOrigin: 'top left', outline: '1px black solid', outlineOffset: '-0.50px'}}></div>


    </div>
  );
};

export default Program;
