import 'reflect-metadata'
import express from "express"
import path from "path"
import { createServer } from "http"
import { Server } from 'socket.io'
import mongoose, { ConnectOptions } from 'mongoose'

const app = express()

const server = createServer(app)

mongoose.connect('mongodb://localhost/rocketsocket', {
    useNewUrlParser: true,
    useUnifiedTopology: true
} as ConnectOptions)

const io = new Server(server)

app.use(express.static(path.join(__dirname, '..', 'public')))

io.on("connection", (socket) => {})

app.get("/", (req, res) => {
    return res.json({
        message: "Hello, world!"
    })
})

export { server, io }