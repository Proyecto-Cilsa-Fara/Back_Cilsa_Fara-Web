import express from "express";
// import authMiddleware from "../middlewares/auth.middleware.js"
import UserController  from "../controllers/user.controller.js"

const router = express.Router();

/**
 * @swagger
 * /api/users/register:
 *  post:
 *    summary: Crea un usuario
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *              type: object
 *              properties:
 *                  name: 
 *                      type: string
 *                      description: El nombre de usuario
 *                      example: juan
 *                  email: 
 *                      type: string
 *                      description: El email de usuario
 *                      example: juan@mail.com
 *                  password: 
 *                      type: string
 *                      description: El password de usuario
 *                      example: abcdef
 *                  profilePicture:
 *                      type: string
 *                      description: La ruta de la imagen
 *                      example: uploads/default-user.jpg
 *    responses:
 *      201:
 *        description: El usuario fue creado con exito
 *        content:          
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties: 
 *                          user:
 *                              type: object
 *                              properties:
 *                                  id: 
 *                                      type: string
 *                                      description: El id del usuario
 *                                      example: abc123
 *                                  name: 
 *                                      type: string
 *                                      description: El nombre de usuario
 *                                      example: juan
 *                                  email: 
 *                                      type: string
 *                                      description: El email de usuario
 *                                      example: juan@mail.com
 *                                  profilePicture:
 *                                      type: string
 *                                      description: La ruta de la imagen
 *                                      example: uploads/default-user.jpg
 *                          error: 
 *                              type: boolean
 *                              description: true si error al borrar sino false
 *                              example: false
 *                          message:
 *                              type: string
 *                              description: resultado de la solicitud
 *                              example: usuario agregado
 *      400:
 *        description: Error de solicitud
 *                      
*/

router.post("/api/users/register", UserController.create)

/**
 * @swagger
 * /api/users:
 *  get:
 *    summary: Obtiene todos los usuarios de la base de datos
 *    tags: [Users]
 *    responses:
 *      200:
 *        description: Solicitud exitosa
 *        content:          
 *          application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  data:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                             id: 
 *                                 type: string
 *                                 description: El id del usuario
 *                                 example: abc123
 *                             name: 
 *                                 type: string
 *                                 description: El nombre de usuario
 *                                 example: juan
 *                             email: 
 *                                 type: string
 *                                 description: El email de usuario
 *                                 example: juan@mail.com
 *                             profilePicture:
 *                                 type: string
 *                                 description: La ruta de la imagen
 *                                 example: uploads/default-user.jpg
 *      500:
 *        description: Error del servidor
 *                      
*/

router.get("/api/users",  UserController.getAll)


/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *    summary: Actualiza el usuario a partir de su id
 *    tags: [Users]
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id del usuario a actualizar
 *         schema:
 *           type: string
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *              type: object
 *              properties:
 *                  name: 
 *                      type: string
 *                      description: El nombre de usuario
 *                      example: juan
 *                  email: 
 *                      type: string
 *                      description: El email de usuario
 *                      example: juan@mail.com
 *                  password: 
 *                      type: string
 *                      description: El password de usuario
 *                      example: abcdef
 *                  profilePicture:
 *                      type: string
 *                      description: La ruta de la imagen
 *                      example: uploads/default-user.jpg
 *    responses:
 *        200:
 *            description: El usuario fue actualizado correctamente
 *            content:          
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          user:
 *                              type: object
 *                              properties:
 *                                  id: 
 *                                      type: string
 *                                      description: El id del usuario
 *                                      example: abc123
 *                                  name: 
 *                                      type: string
 *                                      description: El nombre de usuario
 *                                      example: juan
 *                                  email: 
 *                                      type: string
 *                                      description: El email de usuario
 *                                      example: juan@mail.com
 *                                  profilePicture:
 *                                      type: string
 *                                      description: La ruta de la imagen
 *                                      example: uploads/default-user.jpg
 *                          error: 
 *                              type: boolean
 *                              description: true si error al borrar sino false
 *                              example: false
 *                          message:
 *                              type: string
 *                              description: resultado de la solicitud
 *                              example: usuario eliminado
 *
 * 
 *        404:
 *            description: El usuario no fue encontrado
 *        500:
 *            description: Algun error ocurrio en el servidor
 *                       
*/

router.put("/api/users/:id",  UserController.update)

/**
 * @swagger
 * /api/users/{id}:
 *  delete:
 *      summary: Elimina al usuario a partir de su id
 *      tags: [Users]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: El id del usuario
 *      responses:
 *          200:
 *              description: El usuario fue eliminado                          
 *              content:          
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error: 
 *                                  type: boolean
 *                                  description: true si error al borrar sino false
 *                                  example: false
 *                              message:
 *                                  type: string
 *                                  description: resultado de la solicitud
 *                                  example: usuario eliminado
 *          404:
 *              description: El usuario no fue encontrado
 * 
 */

router.delete("/api/users/:id", UserController.delete)

export default router;
