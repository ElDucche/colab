import Layout from "../../src/components/layout"
import { prisma } from "../../lib/prisma"
import Link from "next/link"
import { useRouter } from "next/router"
import clsx from "clsx"
import { copyFileSync } from "fs"
// import TodoMenu from "../../src/components/todoMenu"

const newTodo = ({todos}: any) => {

    const router = useRouter()
    const formSubmit = (event: any) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const entries = Object.fromEntries(formData.entries())

        // @ts-ignore
        entries["isCompleted"] = entries["isCompleted"] === "on" ? true : false;

        fetch(`/api/todo/new`, {
            method: 'POST',
            body: JSON.stringify(entries)
        })
        .then((res) => res.json())
        .then((res) => {
            router.reload();
            router.push(`/todo/${res.todo.id}`);
            console.log(res)
        })
    }
    return (
        <div className="min-h-screen">
            <Layout>
            <div className='flex gap-4'>
                <div className="">
                    <ul className="menu bg-base-100 shadow-xl w-40 md:w-56 h-screen">
                        {
                            todos.map((todo: any, i: number) => 
                                (
                                    <li key={i} className={clsx({
                                        ['disabled']: todo.isCompleted,
                                    }, 'hover-bordered')}><Link href={`/todo/${todo.id}`}> {todo.title} </Link></li>
                                )
                            )
                        }
                        <li><Link className="btn btn-primary" href={'/todo/new'}>Add a To do</Link></li>
                    </ul>
                </div>
                <div className=" grid grid-rows-2 place-content-center w-full">
                    <div className=" mt-8 md:w-96 w-56 bg-base-100 shadow-md md:h-56 h-72 flex flex-col justify-around items-center rounded-xl gap-2">
                        <h1 className="text-2xl font-semibold capitalize underline text-center">New To Do</h1>
                        <form action="" className="text-center flex flex-col items-center gap-4" onSubmit={formSubmit}>
                            <input type="text" name="title" defaultValue={'New TO DO'} className="input w-full max-w-xs text-center" />
                                <label className="cursor-pointer label w-44">
                                    <span className="label-text mr-4">Is Done ?</span> 
                                    <input type="checkbox" name="isCompleted" className="toggle toggle-primary" defaultChecked={false}/>
                                </label>
                            <button className="btn btn-primary w-44" type="submit">Add</button>
                        </form>
                    </div>
                </div>
            </div>
            </Layout>
        </div>
    )
    
}

export default newTodo;

export async function getStaticProps ({params}: any) {
    const todos = await prisma?.todo.findMany()

    return {
        props : {
            todos,
        }
    }
}