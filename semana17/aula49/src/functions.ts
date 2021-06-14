import  {  Request, Response } from "express"
import connection from './connection'

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
       const users = await selectAllUsers()
 
       if (!users.length) {
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
 
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }
 

 export async function selectAllUsers(): Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)
    return result[0]
 }
 

 export async function selectFilteredUsers(req: Request, res: Response): Promise<any> { //1.a
    const queryFilter = req.query.queryFilter
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       WHERE name LIKE "%${queryFilter}%"
       ;
    `)
 
    return result[0]
 } 
 
 
 export async function orderUsersByQueries(req: Request, res: Response): Promise<any> { //2
    const type = req.query.type || "ASC"
    const orderBy = req.query.orderBy || "email"
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       ORDER BY ${orderBy} ${type}
    `)
    return result[0]
 }


 export async function selectFiveUsersPerPage(req: Request, res: Response): Promise<any> { //3
    const page = Number(req.query.page) || 1
    const type = req.query.type || "ASC"
    const orderBy = req.query.orderBy || "email"
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
        ORDER BY ${orderBy} ${type}
       LIMIT 5
       OFFSET ${5 * (page - 1)};
    
    `)
 
    return result[0]
 }
 
 
 export async function filterUsersForAll(req: Request, res: Response): Promise<any> {  // 4
    const page = Number(req.query.page)// || 1
    const type = req.query.type || "ASC"
    const orderBy = req.query.orderBy || "name"
    const name = req.query.name
    let result
    if (!page && !type && !name) {
       result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
        ORDER BY name ASC
       LIMIT 5
       OFFSET 0;
    
    `)
    } else if (!name) {
       result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       ORDER BY ${orderBy} ${type}
       LIMIT 5
       OFFSET ${5 * (page - 1)}
       ;
    `)
    } else if (!orderBy && page) {
       result = await connection.raw(
          `
          SELECT id, name, email, type
          FROM aula48_exercicio
          ORDER BY name DESC
          LIMIT 5
          OFFSET ${5 * (page - 1)}
          ;
       `
       )
    } else if (!page) {
       result = await connection.raw(
          `
          SELECT id, name, email, type
          FROM aula48_exercicio
          ORDER BY ${orderBy} ${type}
          LIMIT 5
          OFFSET 0
          ;
       `
       )
    } else {
       result = await connection.raw(`
       SELECT *
       FROM aula48_exercicio
        ORDER BY ${orderBy} ${type}
       LIMIT 5
       OFFSET ${5 * (page - 1)};
    
    `)
    }
    return result[0]
 }
 
 
 export async function selectUsersByType(req: Request, res: Response): Promise<any> { //1.b
    const type = req.params.type
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       WHERE type = '${type}'
       ;
    `)
 
    return result[0]
 }