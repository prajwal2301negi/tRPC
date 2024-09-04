import { publicProcedure, router } from './trpc';
// Like -> const app = express()
import {z} from 'zod';
import {createHTTPServer} from '@trpc/server/adapters/standalone';
// nextAdapter -> import {createHTTPServer} from '@trpc/server/adapters/next';
// expressAdapter -> import {createHTTPServer} from '@trpc/server/adapters/express';

const todoInputType = z.object({
    title: z.string(),
    description: z.string(),
    done: z.boolean().optional(),
})

// Equivalent of http in trpc
const appRouter = router({
    // defining first procedure -> createTodo:

    // createTodo: publicProcedure
    //     .input(todoInputType)
    //     .mutation(async (opts)=>{
    //         const title = opts.input.title
    //         const description = opts.input.description;
    //         // DB Stuff here...
    //         return {
    //             id: "1" 
    //         }
    //     }),

    // getTodo: publicProcedure
    //      .query(async (opts) =>{
    //     // db
    //        return [{
    //             id: "1",
    //         // description: "abcd"
    //         }]
    // })    

    signUp: publicProcedure
    .input(z.object({
        email:z.string(),
        password:z.string()
    }))
    .mutation(async (opts) => {
        const username = opts.ctx.username;

        let email = opts.input.email
        let password = opts.input.password

        // Validations & DB stuff , Context and Middleware

        let token = "123123";
        return{
            token
        }
    }),
    createTodo: publicProcedure
        .input(z.object({
            title: z.string(),
        }))
        .mutation(async (opts) => {
            
            console.log(opts.ctx.username)
            return {
                id: "1"
            }
        })    

});

// const server = createHTTPServer({
//     router: appRouter,
// });

const server = createHTTPServer({
    router: appRouter,
    createContext(opts){
        let authHeader = opts.req.headers["authorization"];
        // jwt.verify()
        return {
            username: "123"
        }
    }
});


server.listen(3000);

export type AppRouter = typeof appRouter;