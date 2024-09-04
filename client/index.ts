import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from '../server';


const trpc = createTRPCProxyClient<AppRouter>({
    links:[
        httpBatchLink({
            url: 'http://localhost:3000',
            async headers(){
                return {
                    Authorization: "Bearer 123"
                    // Authorization: "Bearer" + localStorage.getItem("token")
                }
            }
        }),
    ],
});

// async function main() {
//     let response  = await trpc.createTodo.mutate({
//         title: "Go to GYM",
//         description: "Go to GYM and do some exercise",
//     })
//     console.log(response)
// }


// async function main() {
//     let response  = await trpc.signUp.mutate({
//         email:"prajwalneginsut26@gmail.com",
//         password:"123123",
//     })
//     console.log(response)
//     // const token = response.token
// }


async function main() {
    let response  = await trpc.createTodo.mutate({
        title:"prajwalneginsut26@gmail.com",
    })
    console.log(response)
    // const token = response.token
}

main()


