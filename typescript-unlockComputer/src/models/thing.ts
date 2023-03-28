import Thing from "../types/thing"
import connection from "../../db-config"
import { OkPacket, RowDataPacket } from "mysql"
export const createThing = (name: string, callback: Function) => {
    const queryString = 'INSERT INTO thing (name) VALUES (?)'
    connection.query(queryString, [name], (error, result) =>{
        if (error){
            callback(error)
        }
        const {insertId} = <OkPacket>result
        callback (null, insertId)
    } );
    
    

}