
import { useEffect, useState } from "react";
import prisma from "../../lib/prisma"

// export const TodoMenu = () => {
//     const [todos, setTodos]: any[] = useState([]);

//     useEffect(() => {
//         async () => {
//         await prisma.todo.findMany()
//         .then(res => setTodos(res))
//     }}, []) 
//   return (
//     <div className="">
//         <ul className="menu bg-base-100 w-40 md:w-56 border-r border-b border-base-content">
//             {
//                 todos.map((todo: any) => 
//                     (
//                         <li key={todo.id}><a href={`/todo/${todo.id}`}> {todo.title} </a></li>
//                     )
//                 )
//             }
//             <li><a>Item</a></li>
//         </ul>
//     </div>
//   )
// }